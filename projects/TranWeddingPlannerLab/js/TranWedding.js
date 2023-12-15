function distributeGuests(guests, tables) {
    // Calculate how many guests will be seated at each table
    let guestsPerTable = Math.floor(guests / tables);
    // Calculate the remaining guests that need seats
    let remainingGuests = guests % tables;

    return {
        guests: guests,
        tables: tables,
        guestsPerTable: guestsPerTable,
        remainingGuests: remainingGuests
    };
}

// Get user input for the number of guests and tables
let guestsInput = prompt("How many guests do you have?");
let tablesInput = prompt("How many tables do you want?");

// Convert input to numeric data types
let numberOfGuests = parseInt(guestsInput);
let numberOfTables = parseInt(tablesInput);

// Input validation
if (isNaN(numberOfGuests) || isNaN(numberOfTables) || numberOfGuests < 1 || numberOfTables < 1) {
    alert("Invalid input. Please enter valid positive integers.");
} else {
    let result = distributeGuests(numberOfGuests, numberOfTables);
    // Calculate the number of tables of 4 and the remaining table
    let tablesOfFour = Math.floor(result.guests / 4);
    let remainingTableGuests = result.guests % 4;

    // Construct a detailed response
    let response = `Your ${result.guests} guests will be seated as follows: `;
    if (tablesOfFour > 0) {
        response += `${tablesOfFour} table${tablesOfFour > 1 ? 's' : ''} of 4, `;
    }
    if (remainingTableGuests > 0) {
        response += `1 table of ${remainingTableGuests}, `;
    }
    // Remove the trailing comma and space
    response = response.slice(0, -2);
    alert(response);
}
