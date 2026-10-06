function invertCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];

        if (letter >= "a" && letter <= "z") {
            letter = String.fromCharCode(letter.charCodeAt(0) - 32);
        }
        else if (letter >= "A" && letter <= "Z") {
            letter = String.fromCharCode(letter.charCodeAt(0) + 32);
        }

        result += letter;
    }

    return result;
}

console.log(invertCase("xanDER"));