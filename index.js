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
      choices: ['MIT', 'Apache 2.0', 'BSD', 'GNU']
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
    const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
    const markDownPageContent = generateReadMe(data);

    fs.writeFile(fileName, markDownPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created Readme file!')
  );
  });



const generateReadMe = (data) => {
  const {title, description, installation, usage, license, authors, tests, username, email } = data;
    if (license === 'MIT') {
      newLicense = `[MIT](https://choosealicense.com/licenses/mit/)`
    } else if (license === 'BSD') {
       newLicense = `[BSD](https://opensource.org/licenses/BSD-1-Clause)`;
    } else if (license === 'Apache 2.0') {
      newLicense = `[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)`;
    }

  const profileLink = `[GitHub](https://github.com/${username})\n`;
  const githubLink = `https://github.com/${username}`;
  const tobTitleName = `${data.title}`
  const tobTitleName_arr = tobTitleName.split(' ');
  const newTitleName = tobTitleName_arr.join('-');
  

  const TOB = `
  [Installation](${githubLink}/${newTitleName}#Installation)\n
  [Usage](${githubLink}/${newTitleName}#Usage)\n
  [Tests](${githubLink}/${newTitleName}#Testing)\n
  [Questions](${githubLink}/${newTitleName}#Questions)\n
  [Contributing](${githubLink}/${newTitleName}#Contributing)\n
  [License](${githubLink}/${newTitleName}#License)
  `

  return `
   # ${title}

   ## Description
   ${description}

  ${TOB}

   ## Table of Contents

   ## Installation
   ${installation}

   ## Usage
   ${usage}

   ## Tests
   ${tests}

   ## Questions
   ${profileLink}
   ${email}
   

   ## Contributing
   ${authors}

   ## License
   ${newLicense}
  `
} 




// TODO: Create a function to initialize app
function init() {
    return 'npm start';
}



// Function call to initialize app
init();
