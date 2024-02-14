import { Dewy } from 'dewy-ts'; 

import { success, error } from '../utils/colors';

export async function load(url: string, options: { collection: string, dewy_endpoint: string }): Promise<void> {
  console.log(success(`Loading ${url} into collection: ${options.collection}`));

  try {
    const dewy = new Dewy({
        BASE: options.dewy_endpoint
    })

    // TODO: Resolve collection
    const collection_id = 1;

    const result = await dewy.default.addDocument({ collection_id, url });

    console.log(success(`File loaded successfully`));
    console.log(JSON.stringify(result, null, 2));

  } catch (err: any) {
    console.error(error(`Failed to load file: ${err.message}`));
  }
}
