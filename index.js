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
    formatData(data)
  });

// This function decontructs the data object into individual variables
  function formatData(data) {
    console.log(data);
    const {title, description, instalInstrucs: installation, usageInstrucs: usage, license, authors, testInstrucs: instructions, gitHubUsername: username, email} = data;
    createDoc(title)
  }


  function createDoc (title) {
    const filename = `${title.toLowerCase().split(' ').join('')}.md`;
    createFile(filename, `# ${title}`);      
  }


  function createFile(fileName, title) {
    fs.appendFile(fileName, title, (err) => err ? console.error(err) : console.log('Commit logged!'))
  }



// TODO: Create a function to initialize app
function init() {
    return 'npm start';
}



// Function call to initialize app
init();
