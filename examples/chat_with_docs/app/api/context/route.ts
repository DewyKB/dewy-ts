import { NextResponse } from "next/server";
import { Dewy } from 'dewy_ts';
import moment from 'moment';

const kb = new Dewy()

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Get the last message
    const lastMessage = messages[messages.length - 1]

    // Query related information from the knowledge base
    const context = await kb.chunks.retrieve(
      {query: lastMessage.content, n: 10},
      // query: lastMessage.content, 
      // where: {owner: user_id, $created_at: {$gt: moment().subtract(1, 'days')}},
      // limit: 10,
      // order: 'cohere',
    );

    return NextResponse.json({ context })
  } catch (e) {
    console.log(e)
    return NextResponse.error()
  }
}
