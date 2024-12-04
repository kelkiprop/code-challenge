function toCalculateNetpay() {
    let grossPay = prompt("enter taxpayer gross pay:", "0");
    let paye;
    let nhifContribution;
    let nssfContribution;
    let netPay;

    const relief = 2400;
    if (grossPay >0 && grossPay <= 24000) {
        paye = (grossPay * 10) / 100;
        nhifContribution = (grossPay * 2.75) / 100;
        nssfContribution = (grossPay * 6) / 100;
        netPay = grossPay - (paye + nhifContribution + nssfContribution) + relief;
        console.log("your netpayment is " + netPay);
    }
    else if (grossPay > 24000 && grossPay <= 32333) {
        paye = (grossPay * 25) / 100;
        nhifContribution = (grossPay * 2.75) / 100;
        nssfContribution = (grossPay * 6) / 100;
        netPay = grossPay - (paye + nhifContribution + nssfContribution)+ relief;
        console.log("your netpayment is " + netPay);
    }
    else if (grossPay > 32333 && grossPay <= 500000) {
        paye = (grossPay * 30) / 100;
        nhifContribution = (grossPay * 2.75) / 100;
        nssfContribution = (grossPay * 6) / 100;
        netPay = grossPay - (paye + nhifContribution + nssfContribution)+ relief;
        console.log("your netpayment is " + netPay);
    }
    else if (grossPay > 500000 && grossPay <= 800000) {
        paye = (grossPay * 32.5) / 100;
        nhifContribution = (grossPay * 2.75) / 100;
        nssfContribution = (grossPay * 6) / 100;
        netPay = grossPay - (paye + nhifContribution + nssfContribution)+ relief;
        console.log("your netpayment is " + netPay);
    }
    else if (grossPay > 800000) {
        paye = (grossPay * 35) / 100;
        nhifContribution = (grossPay * 2.75) / 100;
        nssfContribution = (grossPay * 6) / 100;
        netPay = grossPay - (paye + nhifContribution + nssfContribution)+ relief;
        console.log("your netpayment is " + netPay);
    }
    else {
        console.log("invalid entry");
    }
    return netPay
}
toCalculateNetpay()