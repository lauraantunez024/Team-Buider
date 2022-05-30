const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const inquirer = require("inquirer");
const fs = require("fs")



function render() {
    return "testing 1 2"
}

function buildTeam() {
    fs.writeFile("/dist/yourteam.html", render(teamMembers), (err) => {
        if (err) {
            console.log(err);

        }
    })
}