const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const render = require("./src/page-template")
const inquirer = require("inquirer");
const fs = require("fs")


const teamMembers = {
    manager: null,
    engineers: [],
    interns: [],
}; 

const idArray = [];

function createManager() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "Manager name",
        validate: (a) =>
        {
        if (a !== '') {
            return true
        }
        return "Your name, please?";
        }
    },
    {
        type: 'input',
        name: 'managerID',
        message: "Manager ID",
        validate: (a) => 
        {
        const pass = a.match(/^[1-9]\d*$/)
        if (pass) {
            return true
        }
        return "Positive numbers only please"
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Manager Email",
        validate: (a) => 
        {
        const pass = a.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        if (pass) {
            return true
        }
        return "Positive numbers only please"
        }
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: "Manager Office Number",
        validate: (a) => 
        {
        const pass = a.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)
        if (pass) {
            return true
        }
        return "Not a valid phone number"
        }
    },
 
    ]).then((a) => {
        const manager = new Manager(
            a.managerName,
            a.managerID,
            a.managerEmail,
            a.managerNumber
        )
        teamMembers.manager = manager
        idArray.push(a.managerID)
        buildTeam();
    })
};


function buildTeam() {
    fs.writeFile("./dist/yourteam.html", render(teamMembers), (err) => {
        if (err) {
            console.log(err);

        }
    })
}

buildTeam();