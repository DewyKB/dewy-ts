import { NextResponse } from 'next/server'
import { Dewy } from 'dewy-ts';

export const runtime = 'edge'

const dewy = new Dewy({
    BASE: process.env.DEWY_ENDPOINT
})

export async function POST(req: Request) {
  const formData = await req.formData();
  const url = formData.get('url') as string;

  const result = await dewy.kb.addDocument({
    collection: process.env.DEWY_COLLECTION ?? "main",
    url,
  });

  return NextResponse.json({document_id: result.id})
}
