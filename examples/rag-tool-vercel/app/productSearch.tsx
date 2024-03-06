import { z } from "zod";
import { Dewy } from 'dewy-ts';
import { OpenAIStream } from 'ai'
import { Tokens } from 'ai/react';

import AssistantMessage from "./AssistantMessage";
import ResultCard from "./ResultCard";
import SearchCard from './SearchCard';

// Create a Dewy client.
const dewy = new Dewy({
    BASE: process.env.DEWY_ENDPOINT
})

// Implement the tool's logic.
// In this case, we search for the given query
// and return the `count` most similar chunks in the KB.
// The returned chunks are used in the `render` method below.
async function searchProducts(query: string, count: number) {
    const context = await dewy.kb.retrieveChunks({
        collection: "product_info",
        query: query,
        n: count,
    })
    return context.text_results.map(c => c.text)
}

// Define the behavior of the product search tool.
export default function productSearch(aiState, openai) {
    return {
        // A description of the tool.
        // This used by the LLM to decide when to use the tool
        description: 'Get information about products',

        // Parameters control how the tool behaves.
        // These values will be picked by the LLM,
        // so be sure to clearly explain what they're
        // used for.
        parameters: z.object({
            query: z.string().describe(`
                A description of a product 
                or what the product can be used for.
            `),
            count: z.number().describe(`
                The number of products to return.
            `),
        }).required(),

        // Configure the tool's behavior.
        // This function will be called after the LLM has
        // chosen to use the tool and generated values for
        // the parameters we configured above.
        render: async function* ({ query, count }) {
            // Let the user know we're looking for 
            // products related to their message
            yield <SearchCard query={query} count={count} />

            // Search for products related to the user's question
            const products = await searchProducts(query, count)

            // Update the message history 
            // with the results we found
            aiState.update([
                ...aiState.get(),
                {
                    role: "function",
                    name: "product_search",
                    content: JSON.stringify(products),
                }
            ]);

            // Now reply to the user.
            // The products we retrieved are part of the state 
            // provided as the messages parameter
            const resp = await openai.chat.completions.create({
                model: 'gpt-4-0125-preview',
                messages: aiState.get(),
                stream: true,
            })

            // Stream the results back as they're generated
            const stream = OpenAIStream(resp, {
                onFinal: (completion) => {
                    // Update the conversation history 
                    // once the full response is received
                    aiState.done([
                        ...aiState.get(),
                        {
                            role: "assistant",
                            content: completion,
                        }
                    ])
                }
            });

            // Display the response alongside 
            // the products provided to the model.
            return <div className="flex flex-col gap-2">
                <ResultCard query={query} results={context} />
                <AssistantMessage>
                    <Tokens stream={stream} />
                </AssistantMessage>
            </div>
        }
    }
}