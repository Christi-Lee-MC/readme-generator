// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const path = require(`path`);
const generateMarkdown = require(`./utils/generateMarkdown`)


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license do you require?",
        choices: ["MIT","BSD3","APACHE 2.0","NONE"]
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
