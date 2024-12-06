const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGrade() {
    rl.question("Enter student marks (0-100): ", function(marks) {
        marks = parseFloat(marks);  // Convert input to a number

        // Validate input
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
            rl.close();
            return;
        }

        // Determine grade based on marks
        let grade;
        if (marks > 79) {
            grade = "A";
        } else if (marks >= 60) {
            grade = "B";
        } else if (marks >= 50) {
            grade = "C";
        } else if (marks >= 40) {
            grade = "D";
        } else {
            grade = "E";
        }

        // Output grade
        console.log("The grade for marks " + marks + " is: " + grade);

        rl.close(); // Close the readline interface after processing the input
    });
}

getGrade();
