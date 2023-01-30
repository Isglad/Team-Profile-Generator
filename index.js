const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/Manager");
const fs = require('fs');
const generateData = require("./src/generateTeam")

var teamArr = [];

function writeToFile(fileName, data){
    fs.writeFile(fileName, `${data}`, (err) => {
        err ? console.error(err) : console.log("team.html has been successfully generated!")
    })
}

function managerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager name?",
      },
      { type: "number", name: "id", message: "What is the team manager id?" },
      {
        type: "input",
        name: "email",
        message: "What is the team manager email?",
      },
      {
        type: "number",
        name: "office",
        message: "What is the team manager office number?",
      },
      {
        type: "list",
        name: "addMember",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I do not want to add any more team members",
        ],
      },
    ])
    .then((answers) => {
      var manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      teamArr.push(manager);
      if (answers.addMember === "Engineer") {
        engineerInfo();
      } else if (answers.addMember === "Intern") {
        internInfo();
      } else {
        generateData(teamArr);
        writeToFile("./dist/team.html", generateData(teamArr));
        return;
      }
    });
}

function engineerInfo() {
  inquirer
    .prompt([
      { type: "input", name: "name", message: "What is your engineer name?" },
      { type: "number", name: "id", message: "What is your engineer id?" },
      { type: "input", name: "email", message: "What is your engineer email?" },
      {
        type: "input",
        name: "github",
        message: "What is your engineer github username?",
      },
      {
        type: "list",
        name: "addMember",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I do not want to add any more team members",
        ],
      },
    ])
    .then((answers) => {
      var engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamArr.push(engineer);
      if (answers.addMember === "Engineer") {
        engineerInfo();
      } else if (answers.addMember === "Intern") {
        internInfo();
      } else {
        generateData(teamArr);
        writeToFile("./dist/team.html", generateData(teamArr));
        return;
      }
    });
}

function internInfo() {
  inquirer
    .prompt([
      { type: "input", name: "name", message: "What is your intern name?" },
      { type: "number", name: "id", message: "What is your intern id?" },
      { type: "input", name: "email", message: "What is your intern email?" },
      { type: "input", name: "school", message: "What is your intern school?" },
      {
        type: "list",
        name: "addMember",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I do not want to add any more team members",
        ],
      },
    ])
    .then((answers) => {
      var intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamArr.push(intern);
      if (answers.addMember === "Engineer") {
        engineerInfo();
      } else if (answers.addMember === "Intern") {
        internInfo();
      } else {
        generateData(teamArr);
        writeToFile("./dist/team.html", generateData(teamArr));
        return;
      }
    });
}

function init() {
  console.log("Welcome to the team generator App!");

  console.log("========================");
  managerInfo();
}

init();
