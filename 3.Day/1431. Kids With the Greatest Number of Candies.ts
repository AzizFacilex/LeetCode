function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandies = Math.max(...candies)
    var result : boolean[] = []
    candies.forEach(candie => {
        if (candie + extraCandies >= maxCandies)
            result.push(true)
        else
            result.push(false)
    })
    return result
};