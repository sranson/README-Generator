// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { NOTIMP } = require('dns');
const { start } = require('repl');

// TODO: Create an array of questions for user input
const questions = [
    "What is your project's title?", 
    "What is the description of your project?", 
    "Do you want to add a Table of Contents?",
    "Do you want to add installation instructions?",
    "Do you want to add usage instructions?",
    "What license do wou want to include in your README?",
    "Do you want to add contributing authors?",
    "Do you want to include tests?",
    "What is your GitHub username?",
    "What is your email address?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', questions, (err) => {
        err ? console.log(err) : console.log('SUCCESS!');
    })
    // writeToFile(questions);
}



// TODO: Create a function to initialize app
function init() {
    return 'npm start';
}

// Function call to initialize app
init();

