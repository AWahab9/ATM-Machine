#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 5476;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
// 12345 === 5476 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "Fast Cash", "check balance"],
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            console.log("please take your cash");
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("insufficient Balance");
        }
    }
    if (operationAns.operation === "Fast Cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "please select your amount:",
                type: "list",
                choices: ["500", "1000", "3000", "5000"],
            }
        ]);
        if (amountAns.fastcash <= myBalance) {
            console.log("please take your cash");
            myBalance -= amountAns.fastcash;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("insufficient Balance");
        }
    }
    if (operationAns.operation === "check balance") {
        console.log("your balance is " + myBalance);
    }
    ;
}
else {
    console.log("Incorrect pin number");
}
