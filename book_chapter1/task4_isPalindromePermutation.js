function isPalindromePermutation(str) {
    const dictionary = {};

    for (let i = 0; i < str.length; i++) {
        const symbol = str[i];
        if (symbol === ' ') {
            continue; // Ignore spaces
        }

        const lowerSymbol = symbol.toLowerCase();

        if (dictionary.hasOwnProperty(lowerSymbol)) {
            dictionary[lowerSymbol]++;
        } else {
            dictionary[lowerSymbol] = 1;
        }
    }

    let oddCount = 0;

    for (const key in dictionary) {
        if (dictionary[key] % 2 === 1) {
            oddCount++;
        }
    }

    // Can be only 0 or 1 odd chars count
    return oddCount < 2;
}
  
  function task4() {
    const str = document.getElementById("inputString1").value;
    let result = isPalindromePermutation(str) ;
  
    document.getElementById("output").textContent = result;
  }