const Engineer = require("./lib/Engineer")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const render = require("./src.page-template")
const inquirer = require("inquirer");
const fs = require("fs")


const teamMembers = {
    manager: null,
    engineers: [],
    interns: [],
};


function buildTeam() {
    fs.writeFile("/dist/yourteam.html", render(teamMembers), (err) => {
        if (err) {
            console.log(err);

        }
    })
}

buildTeam();