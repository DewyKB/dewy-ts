class Collection {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    async retrieve(opts: RetrieveOptions) {}
    async load(id: string, file: File, opts: LoadOptions) {}
    async update(id: string, file: File, opts: UpdateOptions) {}
    async delete(id: string) {}
}

interface RetrieveOptions {
      query: string, 
      where: any
      limit: number,
      order: string,
}

interface LoadOptions {
    await?: string,
    metadata?: any,
}

interface UpdateOptions {
    await?: string,
    metadata?: any,
}