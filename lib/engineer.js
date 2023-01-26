const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    if (typeof id !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }

    if (typeof email !== "string" || !email.trim().length) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    super(name, id, email);

    if (typeof github !== "string" || !github.trim().length) {
      throw new Error("Expected parameter 'github' to be a non-empty string");
    }
    this.github = github; // GitHub username
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;