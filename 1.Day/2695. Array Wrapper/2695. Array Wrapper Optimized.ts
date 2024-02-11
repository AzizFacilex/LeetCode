class ArrayWrapper {
    
    private Nums: number[]
    constructor(nums: number[]) {
        this.Nums = nums
    }
    
    valueOf(): number {
        return this.Nums.reduce((acc,curr)=> acc + curr, 0)
    }
    
    toString(): string {
        if(this.Nums.length === 0) {
            return "[]";
        }

        return `[${this.Nums.join(',')}]`
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */