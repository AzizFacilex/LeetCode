function lengthOfLongestSubstring(s: string): number {
    // declare HashMap to store sliding window counts
    const map = new Map<string, number>();
    // declare left pointer
    let left = 0;
    // declare count variable
    let count = 0;
    // declare max variable
    let max = 0;
    // iterate over string with right pointer
    for(let right = 0; right < s.length; right++) {
        // count each character on each iteration into HashMap
        map.set(s[right], map.has(s[right]) ? map.get(s[right]) + 1 : 1)
        // get value of current character
        let val = map.get(s[right])
        // increment counter
        count++;
        // if character is not unique:
        while(val > 1) {
            // decrement counter
            count--;
            // decrement leftmost character value from wndow
            map.set(s[left], map.get(s[left]) - 1)
            // get val of right pointer to check if all character in hashmap are unique
            val = map.get(s[right])
            // increment left pointer
            left++;
        }
        // check for max value
        max = Math.max(count, max)
    }
    // return max value
    return max
};

lengthOfLongestSubstring("abcabcbb")