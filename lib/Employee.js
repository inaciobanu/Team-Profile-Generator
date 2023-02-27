class Employee {

    name;
    id;
    email;

    constructor(name, id, email) { // or whatever parameters are required
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;
