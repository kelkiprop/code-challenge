const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkSpeed() {
    rl.question("Enter the speed of the car: ", function(speed) {
        speed = parseInt(speed); // Convert input to an integer

        // Validate input
        if (isNaN(speed) || speed < 0) {
            console.log("Invalid input. Please enter a positive number.");
            rl.close();
            return;
        }

        // Check speed and calculate demerit points
        if (speed < 70) {
            console.log("Ok");
        } else {
            let demeritPoints = Math.floor((speed - 70) / 5);
            if (demeritPoints > 12) {
                console.log("License suspended");
            } else {
                console.log("Points: " + demeritPoints);
            }
        }

        rl.close(); // Close the readline interface after processing the input
    });
}

checkSpeed();