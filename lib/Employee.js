// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    //defining function to return employee's name
    getName() {
        return this.name
    }
    //defining function to return employee's id
    getId() {
        return this.id
    }
    //defining function to return employee's email
    getEmail() {
        return this.email
    }
    //defining function to return employee's role
    getRole() {
        return 'Employee'
    }
}

//exporting employee class
module.exports = Employee