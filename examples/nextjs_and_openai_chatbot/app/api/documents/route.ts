import { NextResponse } from 'next/server'
import { Dewy } from 'dewy_ts';

export const runtime = 'edge'

const dewy = new Dewy({
    BASE: process.env.DEWY_ENDPOINT
})

export async function POST(req: Request) {
  const formData = await req.formData();
  const url = formData.get('url');

  const result = await dewy.default.addDocument({
    collection_id: process.env.DEWY_COLLECTION_ID,
    url,
  });

  return NextResponse.json({document_id: result.id})
}