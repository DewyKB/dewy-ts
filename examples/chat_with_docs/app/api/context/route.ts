import { NextResponse } from "next/server";
import { KnowledgeBase } from '@/utils/KnowledgeBase';
import moment from 'moment';

const kb = new KnowledgeBase(process.env.KB_API_KEY)

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages.length > 1 ? messages[messages.length - 1] : messages[0]
    const context = await kb.collection("docs").retrieve({
        query: lastMessage.content, 
        // where: {owner: user_id, $created_at: {$gt: moment().subtract(1, 'days')}},
        limit: 10,
        order: 'cohere',
      })
    return NextResponse.json({ context })
  } catch (e) {
    console.log(e)
    return NextResponse.error()
  }
}