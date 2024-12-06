# Grade Calculation Function

**Function:** `getGrade()`

**Purpose:**
- Prompts the user to enter a student's marks.
- Validates the input to ensure it's a number between 0 and 100.
- Determines the corresponding grade based on the marks.
- Displays the calculated grade to the user.

**Code Implementation:**

```javascript
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

# JavaScript Function: `checkSpeed()`

This JavaScript function prompts the user to input the speed of a car, validates the input, and calculates demerit points based on the speed. If the driver accumulates too many demerit points, their license is suspended.

## Code

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

# Salary Calculator

This Node.js script calculates the net salary of an employee by considering the basic salary, benefits, tax deductions, and other statutory contributions such as PAYE (Pay As You Earn), NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund).

The user inputs the basic salary and benefits, and the script computes the net salary by following the country's progressive tax bands and required deductions.

## Features

- **Basic Salary & Benefits**: Allows the user to input the basic salary and benefits.
- **PAYE Calculation**: Computes the tax based on progressive tax bands.
- **NHIF Contribution**: Calculates the NHIF deduction (2.75% of gross salary).
- **NSSF Contribution**: Calculates the NSSF deduction (6% of gross salary).
- **Net Salary**: Computes and displays the net salary after all deductions.

## Code

const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculateNetSalary() {
    rl.question("Enter basic salary: ", function(basicSalary) {
        rl.question("Enter benefits: ", function(benefits) {
            basicSalary = parseFloat(basicSalary);
            benefits = parseFloat(benefits);

            // Validate input
            if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
                console.log("Invalid input. Please enter positive numbers.");
                rl.close();
                return;
            }

            // Calculate gross salary
            const grossSalary = basicSalary + benefits;

            // Calculate PAYE (progressive tax bands)
            let paye = 0;
            if (grossSalary <= 24000) {
                paye = (grossSalary * 10) / 100;
            } else if (grossSalary <= 32333) {
                paye = (grossSalary * 25) / 100;
            } else if (grossSalary <= 500000) {
                paye = (grossSalary * 30) / 100;
            } else {
                paye = (grossSalary * 35) / 100;
            }

            // Calculate NHIF contribution (2.75% of gross salary)
            const nhifContribution = (grossSalary * 2.75) / 100;

            // Calculate NSSF contribution (6% of gross salary)
            const nssfContribution = (grossSalary * 6) / 100;

            // Calculate net salary
            const netSalary = grossSalary - (paye + nhifContribution + nssfContribution);

            // Output results
            console.log("\nSalary Breakdown:");
            console.log("Basic Salary: " + basicSalary);
            console.log("Benefits: " + benefits);
            console.log("Gross Salary: " + grossSalary);
            console.log("PAYE (Tax): " + paye);
            console.log("NHIF Deduction: " + nhifContribution);
            console.log("NSSF Deduction: " + nssfContribution);
            console.log("Net Salary: " + netSalary.toFixed(2));

            rl.close(); // Close the readline interface after processing the input
        });
    });
}

calculateNetSalary();