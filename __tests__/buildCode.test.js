const { card } = require('../lib/buildCode');
const manager = require('../lib/Manager.js');
const engineer = require('../lib/Engineer.js');
const intern = require('../lib/Intern.js');

describe('Card building', () => {
    it('Manager card should match the given output', () => {
        const manCard = card(new manager("name", "idNum", "mail@gmail.com", "1234567"));

        expect(manCard).toBe('<div class="card"><div class="card-body"><h5 class="card-title">name<span class="icon">MGR</span></h5></div><ul class="list-group list-group-flush"><li class="list-group-item id">idNum</li><li class="list-group-item mail"><a href="mailto:mail@gmail.com">mail@gmail.com</a></li><li class="list-group-item phone">1234567</li></ul></div>');
    });

    it('Engineer card should match the given output', () => {
        const engCard = card(new engineer("name", "idNum", "mail@gmail.com", "githubuser"));

        expect(engCard).toBe('<div class="card"><div class="card-body"><h5 class="card-title">name<span class="icon">ENG</span></h5></div><ul class="list-group list-group-flush"><li class="list-group-item id">idNum</li><li class="list-group-item mail"><a href="mailto:mail@gmail.com">mail@gmail.com</a></li><li class="list-group-item code"><a href="https://www.github.com/githubuser" target="_blank">githubuser</a></li></ul></div>');
    });

    it('Intern card should match the given output', () => {
        const intCard = card(new intern("name", "idNum", "mail@gmail.com", "University of Minnesota"));

        expect(intCard).toBe('<div class="card"><div class="card-body"><h5 class="card-title">name<span class="icon">INT</span></h5></div><ul class="list-group list-group-flush"><li class="list-group-item id">idNum</li><li class="list-group-item mail"><a href="mailto:mail@gmail.com">mail@gmail.com</a></li><li class="list-group-item school">University of Minnesota</li></ul></div>');
    });

})