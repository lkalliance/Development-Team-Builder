const create = require('./lib/prompts.js');
console.log(create)
init();

function init() {
    // Welcome the user
    // call to ask for managerd
    // initiate directory array

    console.log(`Welcome!\n`);
    create.manager([]);
}

create.finished.on('Done with prompts', (arg) => {
    console.log(arg);
}) 