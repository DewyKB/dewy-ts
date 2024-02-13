import {
    BaseRetriever,
    type BaseRetrieverInput,
  } from "@langchain/core/retrievers";
  import type { CallbackManagerForRetrieverRun } from "@langchain/core/callbacks/manager";
  import { Document } from "@langchain/core/documents";
  import { Dewy, TextResult } from 'dewy_ts'; 
  
  export interface DewyRetrieverInput extends BaseRetrieverInput {
    dewy: Dewy;
    collection_id: number;
    n?: number;
  }
  
  export default class DewyRetriever extends BaseRetriever {
    lc_namespace: string[] = [];
    dewy: Dewy;
    collection_id: number;
    n: number;
  
    constructor(fields: DewyRetrieverInput) {
      super(fields);
      const { dewy, collection_id, n, ...rest } = fields;

      this.dewy = dewy;
      this.collection_id = collection_id;
      this.n = n ?? 10;
    }
  
    async _getRelevantDocuments(
      query: string,
      runManager?: CallbackManagerForRetrieverRun
    ): Promise<Document[]> {
        const context = await this.dewy.default.retrieveChunks({
            collection_id: this.collection_id,
            query: query, 
            n: this.n,
        });

        const documents = context.text_results.map((chunk: TextResult) => {
            const { text, ...rest } = chunk;

            return new Document({
                pageContent: text, 
                metadata: rest,
            })
        });

        return documents
    }
  }