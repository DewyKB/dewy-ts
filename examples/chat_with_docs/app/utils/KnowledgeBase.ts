import './Collection';

export class KnowledgeBase {
    apiKey?: string;

    constructor(apiKey: string | undefined) {
        this.apiKey = apiKey
    }

    collection(name: string) {
        return new Collection(name)
    }
}