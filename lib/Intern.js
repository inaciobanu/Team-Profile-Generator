const Employee = require('./Employee');

class Intern extends Employee {

    school;

    constructor(name, id, email, school) { // and whatever else is necessary
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;