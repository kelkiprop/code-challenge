# `toInputUserMarks` Function

## Description

The `toInputUserMarks` function prompts the user to input marks and returns the corresponding grade based on a predefined grading scale. The function checks if the input falls within certain ranges and assigns the appropriate grade (A, B, C, D, E), or returns `"Invalid"` for invalid inputs.

## Grading Scale

- **A**: Marks between **80 and 100**.
- **B**: Marks between **60 and 79**.
- **C**: Marks between **50 and 59**.
- **D**: Marks between **40 and 49**.
- **E**: Marks below **40**.
- **Invalid**: For non-numeric inputs or marks out of range.

## Function Definition

```javascript
function toInputUserMarks() {
    let marks = prompt("Enter marks: ");
    let grade = "";

    if (marks > 79 && marks <= 100) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 49 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks < 49) {
        grade = "D";
    } else if (marks < 40) {
        grade = "E";
    } else {
        grade = "Invalid";
    }

    return grade;
}

# Description
# Speed Test Function

This project defines a function `ToTestSpeed()` that takes a speed input from the user, checks if it exceeds the maximum allowed speed, and calculates the number of demerit points. If the speed exceeds the limit, the function will provide feedback on whether the driver's license should be suspended or the number of demerit points accumulated.

## Functionality

The function performs the following steps:

1. Prompts the user to enter their speed.
2. Checks if the speed is within the maximum allowed speed (set at 70).
3. If the speed exceeds the maximum, calculates the number of demerit points based on the excess speed.
4. If the demerit points exceed 12, the license is suspended.
5. If the points are within the allowed limit, the demerit points are displayed.

## Code

```javascript
function ToTestSpeed() {
    let speed = prompt("Enter speed", "0");
    const MaximumSpeed = 70;
    const speedPerPoint = 5;
    let message = "";
    let DemeritPoint = 0;

    if (speed <= MaximumSpeed) {
        console.log("ok");
    } else {
        DemeritPoint = Math.floor((speed - MaximumSpeed) / speedPerPoint);
        if (DemeritPoint > 12) {
            console.log("License suspended");
        } else {
            console.log("Points: " + DemeritPoint);
        }
    }

    return message;
}

ToTestSpeed();  // Call the function and print the result

# Net Pay Calculator

This project defines a function `toCalculateNetpay()` that calculates the net pay of an employee based on their gross pay, tax rates, and various contributions, including PAYE, NHIF, NSSF, and a tax relief of KSh 2400.

The function works for different salary ranges and applies the appropriate tax rate and deductions to determine the employee’s final take-home pay.

## Functionality

The `toCalculateNetpay()` function takes the gross pay as input, calculates the deductions (PAYE, NHIF, and NSSF), and adds the tax relief. It then returns and logs the net pay.

### Tax Ranges:
- **Gross pay ≤ 24,000**: PAYE at 10%, NHIF at 2.5%, NSSF at 6%.
- **Gross pay between 24,001 and 32,333**: PAYE at 25%, NHIF at 2.5%, NSSF at 6%.
- **Gross pay between 32,334 and 500,000**: PAYE at 30%, NHIF at 2.5%, NSSF at 6%.
- **Gross pay between 500,001 and 800,000**: PAYE at 32.5%, NHIF at 2.5%, NSSF at 6%.
- **Gross pay > 800,000**: PAYE at 35%, NHIF at 2.5%, NSSF at 6%.

## Code

```javascript
function toCalculateNetpay() {
    let grossPay = prompt("Enter taxpayer gross pay:", "0");
    let paye;
    let nhifContribution;
    let nssfContribution;
    let netPay;
    const relief = 2400;

    if (grossPay >= 0 && grossPay <= 24000) {
        paye = (grossPay * 10) / 100;
        nhifContribution = (grossPay * 2.5) / 100;
        nssfContribution = (grossPay * 6) / 100;
        netPay = grossPay - (paye + nhifContribution + nssfContribution) + relief;
        console.log("Your net payment is " + netPay);
    }
    else if (grossPay > 24000 && grossPay <= 32333) {
        paye = (grossPay * 25) / 100;
        nhifContribution = (grossPay * 2.5) / 100;
        nssfContribution = (grossPay * 6) / 100;
        netPay = grossPay - (paye + nhifContribution + nssfContribution) + relief;
        console.log("Your net payment is " + netPay);
    }
    else if (grossPay > 32333 && grossPay <= 500000) {
        paye = (grossPay * 30) / 100;
        nhifContribution = (grossPay * 2.5) / 100;
        nssfContribution = (grossPay * 6) / 100;
        netPay = grossPay - (paye + nhifContribution + nssfContribution) + relief;
        console.log("Your net payment is " + netPay);
    }
    else if (grossPay > 500000 && grossPay <= 800000) {
        paye = (grossPay * 32.5) / 100;
        nhifContribution = (grossPay * 2.5) / 100;
        nssfContribution = (grossPay * 6) / 100;
        netPay = grossPay - (paye + nhifContribution + nssfContribution) + relief;
        console.log("Your net payment is " + netPay);
    }
    else if (grossPay > 800000) {
        paye = (grossPay * 35) / 100;
        nhifContribution = (grossPay * 2.5) / 100;
        nssfContribution = (grossPay * 6) / 100;
        netPay = grossPay - (paye + nhifContribution + nssfContribution) + relief;
        console.log("Your net payment is " + netPay);
    }
    else {
        console.log("Invalid entry");
    }

    return netPay;
}

toCalculateNetpay();

