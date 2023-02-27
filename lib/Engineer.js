const Employee = require('./Employee');

class Engineer extends Employee {

    github;

    constructor(name, id, email, github) { // and whatever else is necessary
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;