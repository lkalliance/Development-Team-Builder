const fs = require('fs');
const create = require('./lib/prompts');
const build = require('./lib/buildCode');

init();

function init() {
    // This function starts the whole process

    console.clear();
    console.log(`\x1b[33;1mWelcome!\x1b[0m\n`);
    console.log(`\x1b[33mIt's time to build out your team. First, let's start with a \x1b[33;1mmanager\x1b[33m:\n`);

    // the first step: create the manager, starting with an empty roster
    create.manager([]);
}

// listen for the emitted "all done" event, and build the page
create.finished.on('Done with prompts', (arg) => {
    fs.writeFile('./dist/index.html', build.start(arg.roster), err => {
        if(err) console.error(err);
    })
}) 