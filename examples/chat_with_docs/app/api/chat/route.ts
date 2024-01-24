import OpenAI from 'openai';
import { Message, OpenAIStream, StreamingTextResponse } from 'ai'
import { Dewy } from 'dewy_ts';
import moment from 'moment';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export const runtime = 'edge'

// Create a Dewy client
const kb = new Dewy()

export async function POST(req: Request) {
  try {

    const { messages } = await req.json()

    // Get the last message
    const lastMessage = messages[messages.length - 1]

    // Query related information from the knowledge base
    const context = await kb.default.retrieveChunks({
      query: lastMessage.content, 
      n: 10
    });

    // Augment the LLM prompt with the retrieved information
    const prompt = [
      {
        role: 'system',
        content: `AI assistant is a brand new, powerful, human-like artificial intelligence.
      The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
      AI is a well-behaved and well-mannered individual.
      AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
      AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation.
      START CONTEXT BLOCK
      ${context.results.map((c: any) => c.chunk.text).join("\n")}
      END OF CONTEXT BLOCK
      AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
      If the context does not provide the answer to question, the AI assistant will say, "I'm sorry, but I don't know the answer to that question".
      AI assistant will not apologize for previous responses, but instead will indicated new information was gained.
      AI assistant will not invent anything that is not drawn directly from the context.
      `,
      },
    ]

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [...prompt, ...messages.filter((message: Message) => message.role === 'user')]
    })

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response)

    // Respond with the stream
    return new StreamingTextResponse(stream)

  } catch (e) {
    throw (e)
  }
}
