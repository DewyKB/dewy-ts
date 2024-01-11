import { KnowledgeBase } from '@/app/utils/KnowledgeBase';
import { NextRequest, NextResponse } from 'next/server';


const kb = new KnowledgeBase(process.env.KB_API_KEY)

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
    const formData = await req.formData();
    const files = formData.getAll('files') as File[];
    const fileToLoad = files[0];
  
    // Load a new file into the knowledge base
    await kb.collection("docs").load( 
        fileToLoad.name,                // An identifier for the document
        fileToLoad,                     // The file to load
        { 
            await: 'stored',            // Wait for the document to be stored (but not necessarily indexed)
            metadata: {user_id: "test"} // Assign some metadata for use with queries
        } 
    );
}

export async function PUT(req: Request) {
    const { document_id } = await req.json()

    const formData = await req.formData();
    const files = formData.getAll('files') as File[];
    const fileToLoad = files[0];
  
    // Update the contents of a file in the knowledge base
    await kb.collection("docs").update( 
        document_id,                    // The document to update
        fileToLoad,                     // The new file to use with this ID
        { await: 'indexed' }            // Wait for the new file to be stored and indexed
    );
}

export async function DELETE(req: Request) {
    const { document_id } = await req.json()

    // Remove the document from the KB
    await kb.collection("docs").delete(document_id);       
}
