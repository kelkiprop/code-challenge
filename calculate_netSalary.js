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
