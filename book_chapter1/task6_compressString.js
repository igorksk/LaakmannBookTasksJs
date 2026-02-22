/*
Task 6: Compress a string by replacing consecutive repeated characters
with the character followed by the count (e.g., aabcc -> a2b1c2).
Returns the original string if compression doesn't make it shorter.
*/

function compressString(str) {
    if (str.length === 0) return "";

    let compressed = "";
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            compressed += str[i - 1] + count;
            count = 1;
        }
    }

    // Add the last character and its count
    compressed += str[str.length - 1] + count;

    return compressed.length < str.length ? compressed : str;
}

window.compressString = compressString;