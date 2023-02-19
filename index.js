const create = require('./lib/prompts');
const build = require('./lib/buildCode');

init();

function init() {
    // Welcome the user
    // call to ask for managerd
    // initiate directory array

    console.log(`Welcome!\n`);
    console.log(`\nIt's time to build out your team. First, let's start with a manager.\n\n`)
    create.manager([]);
}

create.finished.on('Done with prompts', (arg) => {
    console.log(arg);
}) 