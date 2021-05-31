// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const path = require(`path`);
const generateMarkdown = require(`./utils/generateMarkdown`)


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is the project description?"
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the project installation instructions?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the project usage information?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "What are the project contribution guidelines?"
    },
    {
        type: "input",
        name: "Tests",
        message: "What are the project test instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does the project require?",
        choices: ["MIT","BSD3","APACHE 2.0","NONE"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,fileName),data)
 }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then(data => {
        console.log(data)
        writeToFile("README.md",generateMarkdown(data))
    })
}

// Function call to initialize app
init();
