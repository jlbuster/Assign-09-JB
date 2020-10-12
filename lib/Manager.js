// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        super(name, id, email)
        this.officeNumber = officeNumber

    }
    //defining function that returns role
    getRole() {
        return 'Manager'
    }
    //defining function that returns office number
    getOfficeNumber() {
        return this.officeNumber
    }

}
//exports the class manager
module.exports = Manager