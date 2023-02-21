const EventEmitter = require('events');
const inquirer=require('inquirer');
const validator=require('email-validator');
const manager = require('./Manager.js');
const engineer = require('./Engineer.js');
const intern = require('./Intern.js');
const build = require('./buildCode.js');

// This event emitter signals when the page is ready to build
class LastPrompt extends EventEmitter {
    promptsDone(roster) {
        this.emit("Done with prompts", { roster: roster })
    } 
}

const allDone = new LastPrompt();

// This array is the basic starting point for all employee prompts
const promptArr = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the employee's name",
        validate: function(input) {
            if( input.trim().length > 0 ) return true;
            else return "At least one non-space character is required";
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the employee's ID"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the employee's email address",
        validate: function(input) {
            if ( validator.validate(input) ) return true
            else return "Please enter a valid email address";
        }
    }
];

// This is the extra, unique prompt for managers
const mgrExtra = {
    type: 'input',
    name: 'phone',
    message: "Enter the employee's phone number\n",
    validate: function(input) {
        if( input.trim().replace("/\D/g", "").length > 7 ) return true;
        else return "At least seven digits are expected";
    }
}

// This is the extra, unique prompt for engineers
const engExtra = {
    type: 'input',
    name: 'gitHub',
    message: "Enter the employee's GitHub id"
}

// This is the extra, unique prompt for interns
const intExtra = {
    type: 'input',
    name: 'school',
    message: "Enter the employee's school"
}

function createManager(roster) {
    // This function creates a manager employee
    // parameter "roster" is the CURRENT employee roster

    // first add a validation for unique ID, using current roster
    const idVal = new Promise( (resolve, reject) => {
        addIdValidation(roster);
        resolve(true);
    })
    .then( (response, err) => {
        if(err) console.log(err);
        else {
            // prompt for information on manager
            inquirer.prompt(
                [...promptArr, mgrExtra]
            )
            .then( (response, err) => {
                if(err) console.log(err);
                else {
                    // add to the roster, prompt for another employee
                    roster.push(new manager(response.name, response.id, response.email, response.phone));
                    another(roster);
                };
            })
        }
    })
}

function createEngineer(roster) {
    // This function creates an engineer employee
    // parameter "roster" is the CURRENT employee roster

    console.log(`\nAdd an engineer to your team:\n`);
    // first add a validation for unique ID, using current roster
    const idVal = new Promise( (resolve, reject) => {
        addIdValidation(roster);
        resolve(true);
    })
    .then( (response,err) => {
        if(err) console.log(err);
        else {
            // prompt for the information on engineer
            inquirer.prompt(
                [...promptArr, engExtra]
            )
            .then( (response, err) => {
                if(err) console.log(err);
                else {
                    // add to the roster, prompt for another employee
                    roster.push(new engineer(response.name, response.id, response.email, response.gitHub));
                    another(roster);
                };
            })
        }
    })
}

function createIntern(roster) {
    // This function creates an intern employee
    // parameter "roster" is the CURRENT employee roster

    console.log(`\nAdd an intern to your team:\n`)
    // first add a validation for unique ID, using current roster
    const idVal = new Promise( (resolve, reject) => {
        addIdValidation(roster);
        resolve(true);
    })
    .then( (response,err) => {
        if(err) console.log(err);
        else {
            // prompt for the information on intern
            inquirer.prompt(
                [...promptArr, intExtra]
            )
            .then( (response, err) => {
                if(err) console.log(err);
                else {
                    // add to the roster, prompt for another employee
                    roster.push(new intern(response.name, response.id, response.email, response.school));
                    another(roster);
                };
            })
        }
    })
}

function another(roster) {
    // This function asks the user if they want to add another
    // parameter "roster" is the CURRENT employee roster

    console.log("\n");
    inquirer.prompt(
        {
            name: "continue",
            message: "Add another employee, or indicate you're done",
            type: "rawlist",
            choices: ["Engineer", "Intern", "I'm done"]
        }
    ).then( (response, err) => {
        if(err) console.log(err);
        // if yes, send to the appropriate constructor
        else if (response.continue == "Engineer") createEngineer(roster);
        else if (response.continue == "Intern") createIntern(roster);
        else {
            // if no, emit the event to signal for page build
            console.log(`You have finished with ${roster.length} employees entered.`);
            allDone.promptsDone(roster);
        };
    })
}

function addIdValidation(roster) {
    // This function adds a "validate" field to the main prompts
    // parameter "roster" is the CURRENT employee roster

    promptArr[1].validate = (input) => {
        let unique = true;
        for(employee of roster) {
            if (input == employee.id) return `This id is already assigned to a different employee`;
        }
        if( input.trim().length > 0 && unique ) return true;
        else return "The id must have at least one non-space character";
    }
}

module.exports = { 
    manager: createManager, 
    engineer: createEngineer,
    intern: createIntern,
    finished: allDone
};