const prompt = require(`prompt-sync`)();

// Grocery List Manager

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let groceryList = [];


// Display the menu
function showMenu() {
    console.log("\n===== Grocery List Manager =====");
    console.log("1. Add grocery item");
    console.log("2. Search grocery item");
    console.log("3. Remove grocery item");
    console.log("4. Print grocery list");
    console.log("5. Exit");
    console.log("===============================");
    
    rl.question("Enter your choice: ", handleChoice);
}


// Add an item
function addItem() {
    rl.question("Enter grocery item to add: ", function(item) {
        item = item.trim();

        if (item === "") {
            console.log("Please enter an item.");
            showMenu();
            return;
        }

        // Case-insensitive check
        let exists = groceryList.some(
            grocery => grocery.toLowerCase() === item.toLowerCase()
        );

        if (exists) {
            console.log("Item is already present.");
        } else {
            groceryList.push(item);
            console.log(item + " added to the list.");
        }

        showMenu();
    });
}


// Search for an item
function searchItem() {
    rl.question("Enter grocery item to search: ", function(item) {
        item = item.trim();

        let found = groceryList.some(
            grocery => grocery.toLowerCase() === item.toLowerCase()
        );

        if (found) {
            console.log("found");
        } else {
            console.log("not found");
        }

        showMenu();
    });
}


// Remove an item
function removeItem() {
    rl.question("Enter grocery item to remove: ", function(item) {
        item = item.trim();

        // Case-insensitive search
        let index = groceryList.findIndex(
            grocery => grocery.toLowerCase() === item.toLowerCase()
        );

        if (index !== -1) {
            groceryList.splice(index, 1);
            console.log(item + " removed from the list.");
        } else {
            console.log("Item does not exist.");
        }

        showMenu();
    });
}


// Print the entire list
function printList() {
    console.log("\nGrocery List:");

    if (groceryList.length === 0) {
        console.log("The list is empty.");
    } else {
        groceryList.forEach((item, index) => {
            console.log((index + 1) + ". " + item);
        });
    }

    showMenu();
}


// Handle the user's menu choice
function handleChoice(choice) {
    switch (choice.trim()) {
        case "1":
            addItem();
            break;

        case "2":
            searchItem();
            break;

        case "3":
            removeItem();
            break;

        case "4":
            printList();
            break;

        case "5":
            console.log("Exiting program...");
            rl.close();
            break;

        default:
            console.log("Invalid choice. Please select 1-5.");
            showMenu();
            break;
    }
}


// Start the program
console.log("Welcome to the Grocery List Manager!");
showMenu();

  
    
