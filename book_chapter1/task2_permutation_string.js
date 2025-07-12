
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
  
  function task2() {
    const str1 = document.getElementById("inputString1").value;
    const str2 = document.getElementById("inputString2").value;
    let result = "";
  
    if (checkIfPermutations(str1, str2)) {
      result += "Strings are permutations\n";
    } else {
      result += "Strings are not permutations\n";
    }
  
    document.getElementById("output").textContent = result;
  }