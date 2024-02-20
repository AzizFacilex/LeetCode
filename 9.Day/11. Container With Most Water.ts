function maxArea(height: number[]): number {
    if(!height.length) return 0;
    let result:number=0
    let i:number=0
    let j:number=height.length-1
    while(i<j) {
        let total = Math.min(height[i],height[j])*(j-i);
        if(total>result) result = total;
        if(height[i]<=height[j]) i++;
        else j--;
    }
    return result
};
