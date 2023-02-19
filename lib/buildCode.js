const codeStart = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/styles.css">
    <title>Sample</title>
</head>
<body>
    <header>
        <h1>
            <span class="fw-lighter fs-3">{</span>
            My Team
            <span class="fw-lighter fs-3">}</span>
        </h1>
    </header>
    <section id="team-layout container">
        <div class="row">`

const codeEnd = `</div>
</section>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>`





function build(roster) {
    let codeMgr = `<div id="manager" class="col col-12 col-sm-4">`;
    let codeEng = `<div id="engineers" class="col col-12 col-sm-4">`;
    let codeInt = `<div id="interns" class="col col-12 col-sm-4">`;

    for(employee of roster) {
        const role = employee.getRole();
        if (role == "Manager") codeMgr += mgrCard(employee);
        else if (role == "Engineer") codeEng += engCard(employee);
        else if (role == "Intern") codeInt += intCard(employee);
    }

    codeMgr += `</div>`;
    codeEng += `</div>`;
    codeInt += `</div>`;

    let code = ``;
    code += codeStart;
    code += codeMgr;
    code += codeEng;
    code += codeInt;
    code += codeEnd;

    return code;
}

function mgrCard(employee) {
    const card = `<div class="card">
    <div class="card-body">
        <h5 class="card-title">
            ${employee.name}
            <span class="icon">MGR</span>
        </h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item id">
            ${employee.id}
        </li>
        <li class="list-group-item mail">
            <a href="mailto:${employee.email}">${employee.email}</a>
        </li>
        <li class="list-group-item phone">
            ${employee.phone}
        </li>
    </ul>
</div>`

    return card;
}

function engCard(employee) {
    const card = `<div class="card">
    <div class="card-body">
        <h5 class="card-title">
            ${employee.name}
            <span class="icon">ENG</span>
        </h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item id">
            ${employee.id}
        </li>
        <li class="list-group-item mail">
            <a href="mailto:${employee.email}">${employee.email}</a>
        </li>
        <li class="list-group-item code">
            ${employee.gitHub}
        </li>
    </ul>
</div>`

    return card;
}

function intCard(employee) {
    const card = `<div class="card">
    <div class="card-body">
        <h5 class="card-title">
            ${employee.name}
            <span class="icon">INT</span>
        </h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item id">
            ${employee.id}
        </li>
        <li class="list-group-item mail">
            <a href="mailto:${employee.email}">${employee.email}</a>
        </li>
        <li class="list-group-item school">
            ${employee.school}
        </li>
    </ul>
</div>`

    return card;
}


module.exports = {
    start: build
}