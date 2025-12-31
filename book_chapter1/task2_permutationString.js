
  function checkIfPermutations(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const letters = new Array(128).fill(0);

    for (let i = 0; i < str1.length; i++) {
        letters[str1.charCodeAt(i)]++;
    }

    for (let i = 0; i < str2.length; i++) {
        letters[str2.charCodeAt(i)]--;
        if (letters[str2.charCodeAt(i)] < 0) {
            return false;
        }
    }

    return true;
  }
  
function isPermutationString(str1, str2) {
  return checkIfPermutations(str1, str2) ? "Strings are permutations" : "Strings are not permutations";
}

window.isPermutationString = isPermutationString;