const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/Manager");
const fs = require('fs');

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

function generateData(teamArr) {
  var pageStart = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>TEAM PROFILE</title>
    </head>
    <body>
        <div class="container">
            <div class="card text-bg-primary text-center mb-3 mt-7" id="header"><h1>My Team</h1></div>
            <div class="d-flex flex-wrap justify-content-between">
            `;

  var card = "";

  var pageEnd = ` </div>
    </div>
    </body>
    </html>
    `;
  teamArr.forEach((member) => {
    if (member.officeNumber) {
      var office = member.officeNumber;
      var role = "Manager";
      card += `<div class="card" style="width: 18rem;">
                        <div class="card text-bg-info mb-3">
                            <h1 id="name">${member.name}</h1>
                            <h3 id="role">${role}</h3>
                        </div>
                    
                        <div class="card-body">
                            <div class="card">
                                <p id="id">ID:${member.id} </p>
                                <p id="email">Email:<a href = "mailto: ${member.email}">${member.email}</a> </p>
                                <p id="detail">Ofiice number:${office} </p>
                            </div>
                        </div>
                    </div>
                    `;
    }
    if (member.github) {
      var username = member.github;
      var role = "Engineer";
      var githublink = `https://github.com/${username}`
      card += `<div class="card" style="width: 18rem;">
                        <div class="card text-bg-info mb-3">
                            <h1 id="name">${member.name}</h1>
                            <h3 id="role">${role}</h3>
                        </div>
                    
                        <div class="card-body">
                            <div class="card">
                                <p id="id">ID:${member.id} </p>
                                <p id="email">Email:<a href = "mailto: ${member.email}">${member.email}</a> </p>
                                <p id="detail">GitHub Username: <a href = ${githublink}">${username}</a></p>
                            </div>
                        </div>
                    </div>
                    `;
    }
    if (member.school) {
      var school = member.school;
      var role = "Intern";
      card += `<div class="card" style="width: 18rem;">
                        <div class="card text-bg-info mb-3">
                            <h1 id="name">${member.name}</h1>
                            <h3 id="role">${role}</h3>
                        </div>
                    
                        <div class="card-body">
                            <div class="card">
                                <p id="id">ID:${member.id} </p>
                                <p id="email">Email:<a href = "mailto: ${member.email}">${member.email}</a> </p>
                                <p id="detail">School: ${school}</p>
                            </div>
                        </div>
                    </div>
                    `;
    }

  });
  return `${pageStart}\n ${card}\n ${pageEnd}`
}

function init() {
  console.log("Welcome to the team generator App!");

  console.log("========================");
  managerInfo();
}

init();
