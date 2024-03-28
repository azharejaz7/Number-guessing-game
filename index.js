#! /usr/bin/env node
import inquirer from "inquirer";
// random Number Generator
let randomNumber = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber);
console.log("Wellcome to Number Guessing Game");
let SelectedNumber = await inquirer.prompt([{ message: "Please guess a number between 1 to 6 :", type: "number", name: "chooseNumber" }]);
//Condition Checking
if (randomNumber == SelectedNumber.chooseNumber) {
    console.log("Congratulations! You Have Guessed  Correct Number..");
}
else {
    console.log("Sorry! You Have Guessed  InCorrect Number..");
}
