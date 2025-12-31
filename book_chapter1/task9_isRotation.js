window.isRotation = isRotation;
    if (str1.length !== str2.length) {
        return false;
    }

    const concatenated = str1 + str1;
    return concatenated.includes(str2);
}

function task9() {
    const str1 = document.getElementById("inputString1").value;
    const str2 = document.getElementById("inputString2").value;
    let result = "";

    if (isRotation(str1, str2)) {
        result += "Strings are rotations of each other\n";
    } else {
        result += "Strings are not rotations of each other\n";
    }

    document.getElementById("output").textContent = result;
}