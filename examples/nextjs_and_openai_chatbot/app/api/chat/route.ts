import { OpenAIStream, StreamingTextResponse } from 'ai';

import { generate } from "./utils";

export async function POST(req: Request) {
    const json = await req.json()
    const { messages } = json

    const response = await generate(messages);

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    
    // Respond with the stream
    return new StreamingTextResponse(stream);
}