function getAllSubstrings(str) {
    const substrings = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }

    return substrings;
}

// Example usage
const input = "123";
const result = getAllSubstrings(input);
console.log(result);