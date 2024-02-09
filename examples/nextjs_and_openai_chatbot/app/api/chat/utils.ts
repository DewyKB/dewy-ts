import OpenAI from 'openai';
import { Message } from 'ai'
import { Dewy } from 'dewy_ts'; 

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})
const dewy = new Dewy({
    endpoint: process.env.DEWY_ENDPOINT
})

export async function generate(messages: Message[]) {
    const lastMessage = messages[messages.length - 1]
    const query = lastMessage.content

    const context = await dewy.default.retrieveChunks({
        collection_id: process.env.DEWY_COLLECTION_ID,
        query: query, 
        n: 10,
    });

    const prompt = [{
        role: 'system',
        content: `You are a helpful assistant.
            You will take into account any CONTEXT BLOCK 
            that is provided in a conversation.
            START CONTEXT BLOCK
            ${context.text_results.map((c: any) => c.text).join("\n")}
            END OF CONTEXT BLOCK`,
    }];

    const res = await openai.chat.completions.create({
        messages: [...prompt, ...messages.filter((message: Message) => message.role === 'user')],
        model: 'gpt-3.5-turbo',
        stream: true,
    })

    return res
}
