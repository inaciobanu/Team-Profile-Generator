const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const promptForManager = () => {
// Manager Questions
inquirer.prompt([
    {
        type: 'input',
        message: 'Manager name: ',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Manager ID: ',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Manager email: ',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Manager office no.: ',
        name: 'officeNumber'
    }
]).then(response => {
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    myArrayOfTeamMembers.push(manager);
    promptForNextEmployee();
})
}

const promptForNextEmployee = () => {
    inquirer.prompt([{
        type: 'input',
        message: 'Choose employee type (enginner, intern or finish): ',
        name: 'employee'
    }]).then(response => {
        if (response.employee === 'engineer') {
            //    promptForEngineer
            promptForEngineer();
        }
        else if (response.employee === 'intern') {
            promptForIntern();
        }
        else {
            console.log(myArrayOfTeamMembers);
            let output = render(myArrayOfTeamMembers);
            writeToFile(outputPath, output);
        }
    })
}
// Questions for Engineer
const promptForEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Engineer name: ',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Engineer ID: ',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Engineer email: ',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Engineer Github: ',
            name: 'github'
        }
    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        myArrayOfTeamMembers.push(engineer);
        promptForNextEmployee();
    })
}

//Questions for intern
const promptForIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Intern name: ',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Intern ID: ',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Intern email: ',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Intern school: ',
            name: 'school'
        }
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        myArrayOfTeamMembers.push(intern);
        //console.log(myArrayOfTeamMembers);
        promptForNextEmployee();
    })
}

const buildPage = () => {
    promptForManager();
    //Question for whoever reads this: WHY IS THE ARRAY EMPTy HERE? it was not empty in the other fucntions...

}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}
let myArrayOfTeamMembers = [];
function init() {
    buildPage();
}
init();