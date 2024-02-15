import { NextResponse } from 'next/server';
import { Dewy } from 'dewy-ts';

export const runtime = 'edge'

// Create a Dewy client
const dewy = new Dewy()

export async function POST(req: Request) {
  const { url } = await req.json()

  try {
    await dewy.kb.addDocument({collection: "main", url}) // Main collection

    return NextResponse.json({ success: true })

  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed crawling" })
  }
}