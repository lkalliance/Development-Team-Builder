const fs = require('fs');
const create = require('./lib/prompts');
const build = require('./lib/buildCode');

init();

function init() {
    // Welcome the user
    // call to ask for manager
    // initiate directory array

    console.log(`Welcome!\n`);
    console.log(`It's time to build out your team. First, let's start with a manager:\n`)
    create.manager([]);
}

create.finished.on('Done with prompts', (arg) => {
    fs.writeFile('./dist/index.html', build.start(arg.roster), err => {
        if(err) console.error(err);
    })
}) 