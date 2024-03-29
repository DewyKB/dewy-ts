import { NextResponse } from "next/server";
import { Dewy } from 'dewy-ts';
import moment from 'moment';

const dewy = new Dewy()

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Get the last message
    const lastMessage = messages[messages.length - 1]

    // Query related information from the knowledge base
    const context = await dewy.kb.retrieveChunks({
      collection: "main",
      query: lastMessage.content, 
      n: 2
    });

    return NextResponse.json({ context })
  } catch (e) {
    console.log(e)
    return NextResponse.error()
  }
}
