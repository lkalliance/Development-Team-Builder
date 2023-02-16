const engineer = require("../lib/Engineer");

describe('Get name', () => {
    it('Instance name should be returned', () => {
        expect(new engineer('Jane Doe', 2, 'jane@yahoo.com', 'janed').getName()).toBe('Jane Doe');
    });
});

describe('Get id', () => {
    it('Instance id should be returned', () => {
        expect(new engineer('Jane Doe', 2, 'jane@yahoo.com', 'janed').getID()).toBe(2);
    });
});

describe('Get email', () => {
    it('Instance email should be returned', () => {
        expect(new engineer('Jane Doe', 2, 'jane@yahoo.com', 'janed').getEmail()).toBe('jane@yahoo.com');
    });
});

describe('Get role', () => {
    it('Instance role should be "Engineer"', () => {
        expect(new engineer('Jane Doe', 2, 'jane@yahoo.com', 'janed').getRole()).toBe('Engineer');
    })
});

describe('Get GitHub', () => {
    it('Instance gitHub ID should be returned', () => {
        expect(new engineer('Jane Doe', 2, 'jane@yahoo.com', 'janed').getGitHub()).toBe('janed');
    })
});
