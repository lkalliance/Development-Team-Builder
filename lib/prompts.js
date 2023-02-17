const inquirer=require('inquirer');
const validator=require('email-validator');
const manager = require('./Manager.js');
const engineer = require('./Engineer.js');
const intern = require('./Intern.js');

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
        message: "Enter the employee's ID",
        validate: function(input) {
            if( input.trim().length > 0 ) return true;
            else return "At least one non-space character is required";
        }
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

const mgrExtra = {
    type: 'input',
    name: 'phone',
    message: "Enter the employee's phone number\n",
    validate: function(input) {
        if( input.trim().replace("/\D/g", "").length > 7 ) return true;
        else return "At least seven digits are expected";
    }
}

const engExtra = {
    type: 'input',
    name: 'gitHub',
    message: "Enter the employee's gitHub id",
}

const intExtra = {
    type: 'input',
    name: 'school',
    message: "Enter the employee's school",
}

function createManager(roster) {
    inquirer.prompt(
        [...promptArr, mgrExtra]
    )
    .then( (response, err) => {
        if(err) console.log(err);
        else {
            roster.push(new manager(response.name, response.id, response.email, response.phone));
            another(roster);
        };
    })
}

function createEngineer(roster) {
    inquirer.prompt(
        [...promptArr, engExtra]
    )
    .then( (response, err) => {
        if(err) console.log(err);
        else {
            roster.push(new engineer(response.name, response.id, response.email, response.gitHub));
            another(roster);
        };
    })
}

function createIntern(roster) {
    inquirer.prompt(
        [...promptArr, intExtra]
    )
    .then( (response, err) => {
        if(err) console.log(err);
        else {
            roster.push(new intern(response.name, response.id, response.email, response.school));
            another(roster);
        };
    })
}

function another(roster) {
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
        else if (response.continue == "Engineer") createEngineer(roster);
        else if (response.continue == "Intern") createIntern(roster);
        else {
            console.log(`You have finished with ${roster.length} employees entered.`);
        };
    })
}

module.exports = { 
    manager: createManager, 
    engineer: createEngineer,
    intern: createIntern
};