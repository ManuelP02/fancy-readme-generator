// Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'Provide your GitHub username',
  },

  {
    type: 'input',
    name: 'email',
    message: 'Provide your email address',
  },

  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions for your project',

  },

  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information for your project',
  },

  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines for your project',
  },

  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions for your project',
  },

  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },

];


// Generate the README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) =>
err ? console.error(err) : console.log('README file generated succesfully!')
);
}

// Initialization of app

function init(){
  inquirer.prompt(questions).then((answers)=>{
    const markdown = generateMarkdown(answers);
    writeToFile('GeneratedREADME.md', markdown);
  });
}


// Function call to initialize app
init();
