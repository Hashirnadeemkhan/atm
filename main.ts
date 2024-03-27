#! /usr/bin/env node
import inquirer from "inquirer";

let myCurrbalance = 10000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin number",
  type: "number",
});

if (pinAnswer.pin === myPin) {
  console.log("correct pin code!");
  console.log("Your current balance is", myCurrbalance);

  let answerOperation = await inquirer.prompt({
    name: "operation",
    message: "What do you want to do ?",
    type: "list",
    choices: ["with draw", "check balance", "Fast cash"],
  });
  if (answerOperation.operation === "with draw") {
    let amountAns = await inquirer.prompt({
      name: "amount",
      message: "Enter amount",
      type: "number",
    });
    if (amountAns.amount > myCurrbalance) {
      console.log("you have not enough credit!");
    } else {
      myCurrbalance -= amountAns.amount;
      console.log(`Your remaining balance is ${myCurrbalance}`);
    }
  } else if (answerOperation.operation === "check balance") {
    console.log("your balance is", myCurrbalance);
  }
  if (answerOperation.operation === "Fast cash") {
    let optionsAns = await inquirer.prompt([
      {
        name: "option",
        message: "Please select the withdrawal amount",
        type: "list",
        choices: [2000, 5000, 8000, 10000, 20000],
      },
    ]);
    if (optionsAns.option > myCurrbalance) {
      console.log("you have not enough credit!");
    }
    else {
      myCurrbalance -= optionsAns.option;
      console.log(`Your remaining balance is ${myCurrbalance}`);
    }
  
  } else {
    console.log("wrong pin,try again!");
  }
}
