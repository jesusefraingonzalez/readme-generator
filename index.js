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
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please type a brief description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please give a description on how to install your project"
    },
    {
        type: "input",
        name: "usage",
        message: "How will your project be used?"
    },
    {
        type: "input",
        name: "license",
        message: "What license do you wish to use?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
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
        .then(response => writeToFile('README.md', response));
}

// function call to initialize program
init();
