function longestSubstring(s) {
    let maxLength = 0;
    const charIndex = new Array(128).fill(-1);
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        if (charIndex[s.charCodeAt(right)] >= left) {
            left = charIndex[s.charCodeAt(right)] + 1;
        }
        charIndex[s.charCodeAt(right)] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

module.exports = { longestSubstring };
