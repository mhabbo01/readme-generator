// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide your project title. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your application. (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please provide install instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide details on the use of the application. (Required)',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please provide details on the use!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please provide license information. (Required)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'ISC'],
        default: 0,
        validate: licInput => {
            if (licInput) {
                return true;
            } else {
                console.log('Please provide a license!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide any contributors to your project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test information for your application.'
    },
    {
        type: 'input',
        name: 'screenShot',
        message: 'Please provide the relative path for your screenshot. (Recommended)',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your email address for others to reach out with any questions about your application. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username. (Required)',
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Username!');
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('README created!')
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(answers => generateMarkdown(answers))
    .then(generateReadMe => writeToFile('README.md', generateReadMe))
    .catch(err => {
        console.log(err);
    });
    
