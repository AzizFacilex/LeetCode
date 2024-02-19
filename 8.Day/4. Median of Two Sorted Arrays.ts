function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let merged = nums1.concat(nums2).sort((a,b)=> a-b)
    if (merged.length%2===0)
        return (merged[merged.length/2-1]+merged[merged.length/2])/2
    else
        return merged[Math.floor(merged.length/2)]
};