import { NextResponse } from 'next/server';
import { Dewy } from 'dewy-ts';

export const runtime = 'edge'

// Create a Dewy client
const kb = new Dewy()

export async function POST(req: Request) {
  const { url } = await req.json()

  try {
    await kb.default.addDocument({collection_id: 1, url}) // Main collection

    return NextResponse.json({ success: true })

  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed crawling" })
  }
}