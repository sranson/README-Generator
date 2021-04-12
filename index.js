// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    "What is your project's title?", 
    "What is the description of your project?", 
    "What are the installation instructions?",
    "What are the usage instructions?",
    "What license do wou want to include in your README?",
    "Who are the contributing authors?",
    "What are the test instructions?",
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
      message: questions[1], 
    },
    {
      type: 'input',
      message: questions[2],
      name: "instalInstrucs",
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usageInstrucs',
    },
    {
      type: 'list',
      message: questions[4],
      name: "license",
      choices: ['MIT', 'BSD', 'GPL']
    },
    {
      type: 'input',
      message: questions[5],
      name: "authors",
    },
    {
      type: 'input',
      message: questions[6],
      name: "testInstrucs",
    },
    {
      type: 'input',
      message: questions[7],
      name: 'gitHubUsername'
    },
    {
      type: 'input',
      message: questions[8],
      name: "email"
    }
  ])
  .then((data) => {
    console.log(data);
    writeToFile(data) 
  });





// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log('SUCCESS!'));
}

function init() {
    return 'npm start';
}

// Function call to initialize app
init();