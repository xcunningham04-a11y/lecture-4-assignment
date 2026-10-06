const prompt = require(`prompt-sync`)();

function myMax(...numbers) {
    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}


console.log(myMax(5, 10, 3, 20, 7));
