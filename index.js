// dependencies
const inq = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// array of questions for user
//title, description, installation, usage, license, contributing, tests, questions 
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project name: "
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project: " 
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter project usage instructions: "
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contribution information: "
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter testing information: "
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    },
    {
        type: "list",
        name: "license",
        message: "Please pick a license for your project: ",
        choices: ["MIT", ""]
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), error => {
        if (error) throw error;
        else console.log("Success!");
    })
}

// function to initialize program
function init() {
    inq.prompt(questions)
        .then(response => writeToFile('README.md', response))
        .catch(error => { throw error });
}

// function call to initialize program
init();
