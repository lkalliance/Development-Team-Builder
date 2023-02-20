const codeStart = `<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">\n\t\t<link rel="stylesheet" href="./assets/css/styles.css">\n\t\t<title>Sample</title>\n\t</head>\n\t<body>\n\t\t<header>\n\t\t\t<h1>\n\t\t\t\t<span class="fw-lighter fs-3">{</span>\n\t\t\t\tMy Team\n\t\t\t\t<span class="fw-lighter fs-3">}</span>\n\t\t\t</h1>\n\t\t</header>\n\t\t<section id="team-layout container">\n\t\t\t<div class="row">`

const codeEnd = `\n\t\t\t</div>\n\t\t</section>\n\t\t<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>\n\t</body>\n</html>`

const translator = {
    "Manager": { abbrev: "MGR", extra: "phone", style: "phone" },
    "Engineer": { abbrev: "ENG", extra: "gitHub", style: "code" },
    "Intern": { abbrev: "INT", extra: "school", style: "school" }
}



function build(roster) {
    const columns = [false, false];

    for (employee of roster) {
        if (employee.getRole() == "Engineer") columns[0] = true;
        if (employee.getRole() == "Intern") columns[1] = true;
    }

    const cols = ( columns[0] && columns[1] ) ? 4 : ( columns[0] || columns[1] ) ? 6 : 12;

    let codeCards = {
        "Manager": `\n\t\t\t\t<div id="manager" class="col col-12 col-sm-${cols}">`,
        "Engineer": ( columns[0] ) ? `\n\t\t\t\t<div id="engineers" class="col col-11 col-sm-${cols}">` : ``,
        "Intern": ( columns[1] ) ? `\n\t\t\t\t<div id="interns" class="col col-10 col-sm-${cols}">` : ``
    }

    for(employee of roster) {
        const role = employee.getRole();
        codeCards[role] += buildCard(employee);
    }

    codeCards["Manager"] += `\n\t\t\t\t</div>`;
    codeCards["Engineer"] += (columns[0]) ? `\n\t\t\t\t</div>` : ``;
    codeCards["Intern"] += (columns[1]) ? `\n\t\t\t\t</div>` : ``;

    let code = ``;
    code += codeStart;
    code += codeCards["Manager"];
    code += codeCards["Engineer"];
    code += codeCards["Intern"];
    code += codeEnd;

    return code;
}

function buildCard(employee) {
    const role = employee.getRole();

    const card = `\n\t\t\t\t\t<div class="card">\n\t\t\t\t\t\t<div class="card-body">\n\t\t\t\t\t\t\t<h5 class="card-title">\n\t\t\t\t\t\t\t\t${employee.name}\n\t\t\t\t\t\t\t\t<span class="icon">${translator[role].abbrev}</span>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class="list-group list-group-flush">\n\t\t\t\t\t\t\t<li class="list-group-item id">\n\t\t\t\t\t\t\t\t${employee.id}\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="list-group-item mail">\n\t\t\t\t\t\t\t\t${employee.email}\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="list-group-item ${translator[role].style}">\n\t\t\t\t\t\t\t\t${employee[translator[role].extra]}\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>`;

    return card;
}

module.exports = {
    start: build
}