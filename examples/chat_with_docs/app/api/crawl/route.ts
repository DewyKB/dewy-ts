import { NextResponse } from 'next/server';
import { Dewy } from 'dewy_ts';

const kb = new Dewy()

export const runtime = 'edge'
const delay = ms => new Promise(res => setTimeout(res, ms));

export async function POST(req: Request) {
  const { url, options } = await req.json()
  const collection = "default_collection";
  const id = url;
  const user_id = "default_user_id";

  try {
    // await kb.documents.add( 
    //     // id,                               // An identifier for the document
    //     url,                              // The URL to load
    //     // { 
    //     //     await: 'stored',              // Wait for the document to be stored (but not necessarily indexed)
    //     //     metadata: {user_id: user_id}  // Assign some metadata for use with queries
    //     // } 
    // )
    await delay(5000);

    return NextResponse.json({ success: true })

  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed crawling" })
  }
}