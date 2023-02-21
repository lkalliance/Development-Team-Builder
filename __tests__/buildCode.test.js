const { card } = require('../lib/buildCode');
const manager = require('../lib/Manager.js');
const engineer = require('../lib/Engineer.js');
const intern = require('../lib/Intern.js');

describe('Card building', () => {
    it('Manager should correctly have a name, ID and email', () => {
        expect(card(new manager("l", 22, "m", "1234567")).arguments[0].phone).toBe("1234567");
    });

})