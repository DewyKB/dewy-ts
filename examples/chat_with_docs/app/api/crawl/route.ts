import { NextResponse } from 'next/server';
import { KnowledgeBase } from '@/utils/KnowledgeBase';

const kb = new KnowledgeBase(process.env.KB_API_KEY);

export const runtime = 'edge'

export async function POST(req: Request) {
  const { url, options } = await req.json()
  const collection = "default_collection";
  const id = url;
  const user_id = "default_user_id";

  try {
    await kb.collection(collection).loadURL( 
        id,                               // An identifier for the document
        url,                              // The URL to load
        { 
            await: 'stored',              // Wait for the document to be stored (but not necessarily indexed)
            metadata: {user_id: user_id}  // Assign some metadata for use with queries
        } 
    )
    return NextResponse.json({ success: true })

  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed crawling" })
  }
}