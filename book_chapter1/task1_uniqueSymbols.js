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
  
  function task1() {
    const str = document.getElementById("inputString1").value;
    let result = "";
  
    if (uniqueWithoutDataStructures(str)) {
      result += "Symbols unique by first check\n";
    } else {
      result += "Symbols not unique by first check\n";
    }
  
    if (uniqueUsingDictionary(str)) {
      result += "Symbols unique by second check\n";
    } else {
      result += "Symbols not unique by second check\n";
    }
  
    document.getElementById("output").textContent = result;
  }