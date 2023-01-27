# Team-Profile-Generator

## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML | [https://developer.mozilla.org/en-US/docs/Learn/html](https://developer.mozilla.org/en-US/docs/Learn/html)     |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |   
| JavaScript   | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)      |
| Bootstrap   | [https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css)   |
| Node.js  | [https://nodejs.org/docs/latest-v16.x/api/synopsis.html](https://nodejs.org/docs/latest-v16.x/api/synopsis.html)


## Description

A command-line application that dynamically generates a webpage that displays your team's basic info. This allows you to have quick access to their emails and GitHub profiles.

[Link to the Team Profile Generator App](https://drive.google.com/file/d/1lsCrEwE7SYQR6PpXNSh355obdPWVTw_O/view)


## Table of Contents

- [Code Example](#code-example)
- [Installation](#installation)
- [Usage](#usage)
- [Learning Points](#learning-points)
- [Author Info](#author-info)
- [Credits](#credits)
- [License](#license)


## Code Example

These lines of code demonstarte how you can create a class Object, construct it with attributes, set test error message to be thrown in case they are not valid and define their method.
```js
class Employee {
  constructor(name, id, email) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    if (typeof id !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }

    if (typeof email !== "string" || !email.trim().length) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
```

## Installation

- Visit the Node.js website to download and install Node.js to your computer
- Clone the repository to your local directory
- Create a .gitignore file that includes "node_modules/"  and  " .DS_Store/" before installing any npm dependencies.
- Run `npm init` to include a `package.json` to your repo with required dependencies.
- Run `npm i inquirer@8.2.4` to install inquirer module
- Run `npm i jest` to install Jest

## Usage

- Navigate to the root directory of your project in the command-line
- Run the command `node index.js` to start the application.
- Follow the prompts to input information about your project.
- An html file will be generated in the dist/ directory of your project.

## Learning Points

- Create new objects using constructor functions.
- Add methods to objects using prototypical inheritance.
- Explain the benefits of test-driven development (TDD).
- Define code requirements for code that hasn't been written yet by using unit tests.
- Structure test code using the Arrange, Act, Assert pattern.

## Author Info 

```md
### Gladys Ange Isingizwe 


* [Email](gladyisingizwe@gmail.com)
* [LindeIn](www.linkedin.com/in/gladys-isingizwe)
* [Github]()https://github.com/Isglad
```

## Credits

Collabortors on this project are instructional staff, TAs and winter cohort 2022 of the University of Calfornia Berkeley Coding Bootcamp.

## License

Please refer to the LICENSE in the repo.