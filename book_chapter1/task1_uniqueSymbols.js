function uniqueWithoutDataStructures(str) {
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  }
  
  function uniqueUsingDictionary(str) {
    const dict = {};
    for (const ch of str) {
      if (dict[ch]) {
        return false;
      }
      dict[ch] = true;
    }
    return true;
  }
  
function isUniqueSymbols(str) {
  // Use dictionary method for UI
  return uniqueUsingDictionary(str) ? "Symbols are unique" : "Symbols are not unique";
}

window.isUniqueSymbols = isUniqueSymbols;