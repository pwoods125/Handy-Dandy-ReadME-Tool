// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectTitle',
      }
    ,  {
        type: 'input',
        message: 'Can you give a brief decription of your project?',
        name: 'projectDescription',
      }
    , {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'projectInstallation',
      }
    ,{
        type: 'input',
        message: 'What is the usage information?',
        name: 'projectUsage',
      }
    ,{
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'projectContributions',
      }
    ,
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'projectTest',
      }
    ,
    {
        type: 'list',
        message: 'What licences do you require?',
        name: 'projectLicences',
        choices: ['Apache 2.0 License', 'ISC License', 'The MIT License', 'No License']
      }
    ,{
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUsername',
      }
    ,{
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data);
       writeToFile('./output/readme.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
