const create = require('./lib/prompts.js');

init();

function init() {
    // Welcome the user
    // call to ask for managerd
    // initiate directory array

    console.log(`Welcome!\n`);
    create.manager([]);
}