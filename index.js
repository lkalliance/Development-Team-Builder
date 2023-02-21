const fs = require('fs');
const create = require('./lib/prompts');
const build = require('./lib/buildCode');

init();

function init() {
    // This function starts the whole process

    console.log(`Welcome!\n`);
    console.log(`It's time to build out your team. First, let's start with a manager:\n`);

    // the first step: create the manager, starting with an empty roster
    create.manager([]);
}

// listen for the emitted "all done" event, and build the page
create.finished.on('Done with prompts', (arg) => {
    fs.writeFile('./dist/index.html', build.start(arg.roster), err => {
        if(err) console.error(err);
    })
}) 