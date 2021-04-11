// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


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

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1]
    },
    {
      type: 'list',
      message: questions[2],
      name: 'TOC',
      choices: ['yes', 'no'],
    },
    {
      type: 'list',
      message: questions[4],
      name: "instructions",
      choices: ['yes', 'no']
    },
    {
      type: 'list',
      message: questions[5],
      name: "license",
      choices: ['MIT', 'BSD', 'GPL']
    }
  ])
  .then((data) => {
    const filename = `${data.title.toLowerCase().split(' ').join('')}.json`;
    writeToFile(filename, data) 
  });






// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log('SUCCESS!'));
}


function init() {
    return 'npm start';
}

// Function call to initialize app
init();