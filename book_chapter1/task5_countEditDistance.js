function countEditDistance(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let edits = 0;
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] !== str2[j]) {
      edits++;
      if (edits > 1) {
        return false;
      }
      if (str1.length > str2.length) {
        i++; // Deletion in str1
      } else if (str1.length < str2.length) {
        j++; // Insertion in str1
      } else {
        i++; // Replacement in both
        j++;
      }
    } else {
      i++;
      j++;
    }
  }

  return true;
}

window.countEditDistance = countEditDistance;

function task5() {
  const str1 = document.getElementById("inputString1").value;
  const str2 = document.getElementById("inputString2").value;
  let result = "";

  if (oneEditDIstanceChecker(str1, str2)) {
    result += "Strings are one edit distance apart\n";
  } else {
    result += "Strings are not one edit distance apart\n";
  }

  document.getElementById("output").textContent = result;
}