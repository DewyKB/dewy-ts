import { OpenAI } from "openai";
import { createAI, createStreamableUI, getMutableAIState, render } from "ai/rsc";

import productSearch from './productSearch';
import AssistantMessage from "./AssistantMessage";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
async function submitUserMessage(userInput: string) {
  'use server';
 
  const aiState = getMutableAIState<typeof AI>();
 
  aiState.update([
    ...aiState.get(),
    {
      role: 'user',
      content: userInput,
    },
  ]);
 
  const ui = render({
    model: 'gpt-4-0125-preview',
    provider: openai,
    messages: [
      { role: 'system', content: `
        You are a product recommendation engine. 
        Respond only with information about products retrieved using the "product_search" function role.
        `},
      { role: 'user', content: userInput }
    ],
    text: ({ content, done }) => {
      if (done) {
        aiState.done([
          ...aiState.get(),
          {
            role: "assistant",
            content
          }
        ]);
      }
 
      return <AssistantMessage>{content}</AssistantMessage>
    },
    functions: {
      product_search: productSearch(aiState, openai),
    }
  })
 
  return {
    id: Date.now(),
    display: ui
  };
}
 
// Define the initial state of the AI. It can be any JSON object.
const initialAIState: {
  role: 'user' | 'assistant' | 'system' | 'function';
  content: string;
  id?: string;
  name?: string;
}[] = [];
 
// The initial UI state that the client will keep track of, which contains the message IDs and their UI nodes.
const initialUIState: {
  id: number;
  display: React.ReactNode;
}[] = [{id: 0, display: <AssistantMessage>Hi! How can I help you today?</AssistantMessage>}];
 
// AI is a provider you wrap your application with so you can access AI and UI state in your components.
export const AI = createAI({
  actions: {
    submitUserMessage
  },
  // Each state can be any shape of object, but for chat applications
  // it makes sense to have an array of messages. Or you may prefer something like { id: number, messages: Message[] }
  initialUIState,
  initialAIState
});