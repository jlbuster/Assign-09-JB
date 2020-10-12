// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Engineer extends Employee {

    constructor(name, id, email, github) {

        super(name, id, email)
        this.github = github

    }
    //defining function that returns role
    getRole() {
        return 'Engineer'
    }
    //defining function that returns github
    getGithub() {
        return this.github
    }

}
//exports the engineer class
module.exports = Engineer