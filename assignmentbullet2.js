
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(input) {
    let sign = "";

    if (input[0] === "-") {
        sign = "-";
        input = input.slice(1);
    }

    let reversed = input.split("").reverse().join("");

    console.log("Reversed:", sign + reversed);

    rl.close();
});