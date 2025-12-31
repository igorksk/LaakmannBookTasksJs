function replaceSpaces(str) {
    // Convert string to array for in-place edit
    const strArray = str.split('');
    const trueLength = strArray.length;
    let spaceCount = 0;
    for (let i = 0; i < trueLength; i++) {
        if (strArray[i] === ' ') spaceCount++;
    }
    let newIndex = trueLength + spaceCount * 2;
    const resultArray = new Array(newIndex);
    for (let i = trueLength - 1; i >= 0; i--) {
        if (strArray[i] === ' ') {
            resultArray[--newIndex] = '0';
            resultArray[--newIndex] = '2';
            resultArray[--newIndex] = '%';
        } else {
            resultArray[--newIndex] = strArray[i];
        }
    }
    return resultArray.join('');
}

window.replaceSpaces = replaceSpaces;
    let spaceCount = 0;

    // Count spaces in the "true" portion of the string
    for (let i = 0; i < trueLength; i++) {
        if (strArray[i] === ' ') {
            spaceCount++;
        }
    }

    let newIndex = trueLength + spaceCount * 2;

    // If the array is larger than the new index, optionally add null terminator
    if (newIndex < strArray.length) {
        strArray[newIndex] = '\0'; // Optional in JS
    }

    // Fill the array backwards
    for (let i = trueLength - 1; i >= 0; i--) {
        if (strArray[i] === ' ') {
            strArray[newIndex - 1] = '0';
            strArray[newIndex - 2] = '2';
            strArray[newIndex - 3] = '%';
            newIndex -= 3;
        } else {
            strArray[newIndex - 1] = strArray[i];
            newIndex--;
        }
    }

    return strArray;
}

function task3() {
    let input = ['M', 'r', ' ', 'J', 'o', 'h', 'n', ' ', 'S', 'm', 'i', 't', 'h', '', '', '', '', '', '', ''];
    let trueLength = 13;
    
    result = replaceSpaces(input, trueLength); 

    document.getElementById("output").textContent = result.join(''); // "Mr%20John%20Smith"
  }