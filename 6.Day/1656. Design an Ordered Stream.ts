class OrderedStream {
    private store: string[];

    constructor(n: number) {
        this.store = new Array(n).fill('');
    }

    insert(id: number, value: string): string[] {
        const idx = id - 1;
        this.store[idx] = value;
        
        for (let i = 0; i < idx; i++) {
            if (!this.store[i]) {
                return [];
            }
        }
        
        const endIndex = this.store.indexOf('', idx + 1);
        return this.store.slice(idx, 0 < endIndex ? endIndex : this.store.length);
    }
}