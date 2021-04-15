// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is your project's title?",
    },
    {
      type: 'input',
      name: 'description',
      message: "What is the description of your project?", 
    },
    {
      type: 'input',
      message: "What are the installation instructions?",
      name: "installation",
    },
    {
      type: 'input',
      message: "What are the usage instructions?",
      name: 'usage',
    },
    {
      type: 'list',
      message: "What license do wou want to include in your README?",
      name: "license",
      choices: ['MIT', 'BSD', 'GPL']
    },
    {
      type: 'input',
      message: "Who are the contributing authors?",
      name: "authors",
    },
    {
      type: 'input',
      message: "What are the test instructions?",
      name: "tests",
    },
    {
      type: 'input',
      message: "What is your GitHub username?",
      name: 'username'
    },
    {
      type: 'input',
      message: "What is your email address?",
      name: "email"
    }
  ])
  .then((data) => {
    title = data.title;
    const fileName = `${title.toLowerCase().split(' ').join('')}.md`;
    const markDownPageContent = generateReadMe(data);

    fs.writeFile(fileName, markDownPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
  });


const generateReadMe = (data) => {
  const {title, description, installation, usage, license, authors, tests, username, email } = data;
  return `
  # ${title}

  ## Description
  ${description}

   ## Installation
   ${installation}

   ## Usage
   ${usage}

   ## License
   ${license}

   ## Contributing Authors
   ${authors}

   ## Testing
   ${tests}

   ## GitHub
   ${username}

   ## Email
   ${email}
  `
} 



// TODO: Create a function to initialize app
function init() {
    return 'npm start';
}



// Function call to initialize app
init();
