export default class Collection {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    async retrieve(opts: RetrieveOptions) {
        return [{id: "The secret number is 13"}]
    }
    async load(id: string, file: File, opts: LoadOptions) {}
    async loadURL(id: string, url: string, opts: LoadOptions) {}
    async update(id: string, file: File, opts: UpdateOptions) {}
    async delete(id: string) {}
}

interface RetrieveOptions {
      query: string, 
      where?: any
      limit?: number,
      order?: string,
}

interface LoadOptions {
    await?: string,
    metadata?: any,
}

interface UpdateOptions {
    await?: string,
    metadata?: any,
}