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
    prompt: "What is the name of your project?"
},
{
    type: "input",
    name: "description",
    prompt: "Please type a brief description of your project"
},
{
    type: "input",
    name: "installation",
    prompt: "Please give a description on how to install your project"
},
{
    type: "input",
    name: "usage",
    prompt: "How will your project be used?"
},
{
    type: "input",
    name: "license",
    prompt: "What license do you wish to use?"
},
{
    type: "input",
    name: "github",
    prompt: "What is your github username?"
},
{
    type: "input",
    name: "email",
    prompt: "What is your email?"
},
{
    type: "input",
    name: "",
    prompt: ""
},
{
    type: "input",
    name: "",
    prompt: ""
},
{
    type: "input",
    name: "",
    prompt: ""
}
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName , generateMarkdown(data), error => {
        if (error) throw error;
        else console.log("Success!");
    })
}

// function to initialize program
function init() {
    writeToFile('README.md' , questions);
}

// function call to initialize program
init();
