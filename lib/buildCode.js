// Beginning and ending code for the HTML page
const codeStart = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"><link rel="stylesheet" href="./assets/css/styles.css"><title>Sample</title></head><body><header><h1><span class="fw-lighter fs-3">{</span>My Team<span class="fw-lighter fs-3">}</span></h1></header><section id="team-layout container"><div class="row">`

const codeEnd = `</div></section><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script></body></html>`

// Object to enable code to have just one dynamic card renderer
const translator = {
    "Manager": { abbrev: "MGR", extra: "officeNumber", style: "phone", label: "phone number: " },
    "Engineer": { abbrev: "ENG", extra: "gitHub", style: "code", label: "GitHub profile: "},
    "Intern": { abbrev: "INT", extra: "school", style: "school", label: "school: " }
}


function build(roster) {
    // This function coordinates the building of the cards
    // Paramter "roster" is the roster of all employees

    // Determine if there are any engineers and/or interns
    const columns = [false, false];
    for (employee of roster) {
        if (employee.getRole() == "Engineer") columns[0] = true;
        if (employee.getRole() == "Intern") columns[1] = true;
    }
    // Based on how many columns, prepare for the correct classes
    const cols = ( columns[0] && columns[1] ) ? 4 : ( columns[0] || columns[1] ) ? 6 : 12;

    // Code to open each column, if necessary
    let codeCards = {
        "Manager": `<div id="manager" class="col col-12 col-sm-${cols}">`,
        "Engineer": ( columns[0] ) ? `<div id="engineers" class="col col-11 col-sm-${cols}">` : ``,
        "Intern": ( columns[1] ) ? `<div id="interns" class="col col-10 col-sm-${cols}">` : ``
    }

    // Iterate over the roster, create a card for each
    for(employee of roster) {
        const role = employee.getRole();
        codeCards[role] += buildCard(employee);
    }

    // Close up the columns
    codeCards["Manager"] += `</div>`;
    codeCards["Engineer"] += (columns[0]) ? `</div>` : ``;
    codeCards["Intern"] += (columns[1]) ? `</div>` : ``;

    // Assemble and return the complete code
    let code = ``;
    code += codeStart;
    code += codeCards["Manager"];
    code += codeCards["Engineer"];
    code += codeCards["Intern"];
    code += codeEnd;

    return code;
}

function buildCard(employee) {
    // This function builds a card for a given employee
    // Parameter "employee" is the employee object

    const role = employee.getRole();
    // if the employee is an engineer, prep the github link
    const extraLink = ( role == "Engineer" ) ? [`<a href="https://www.github.com/${employee.gitHub}" target="_blank">`, `</a>`] : [``,``];

    const card = `<div class="card"><div class="card-body"><h5 class="card-title">${employee.name}<span class="icon">${translator[role].abbrev}</span></h5></div><ul class="list-group list-group-flush"><li class="list-group-item id"><span class="label">id: </span>${employee.id}</li><li class="list-group-item mail"><span class="label">email: </span><a href="mailto:${employee.email}">${employee.email}</a></li><li class="list-group-item ${translator[role].style}"><span class="label">${translator[role].label}</span>${extraLink[0]}${employee[translator[role].extra]}${extraLink[1]}</li></ul></div>`;

    return card;
}

module.exports = {
    start: build,
    card: buildCard
}