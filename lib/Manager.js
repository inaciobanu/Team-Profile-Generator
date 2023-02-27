const Employee = require('./Employee');

class Manager extends Employee {

    officeNumber;

    constructor(name, id, email, officeNumber) { // or whatever parameters are required
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;