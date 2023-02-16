const manager = require("../lib/Manager");

describe('Get name', () => {
    it('Instance name should be returned', () => {
        expect(new manager('Jean Doe', 5, 'jean@yahoo.com').getName()).toBe('Jean Doe');
    });
});

describe('Get id', () => {
    it('Instance id should be returned', () => {
        expect(new manager('Jean Doe', 5, 'jean@yahoo.com').getID()).toBe(5);
    });
});

describe('Get email', () => {
    it('Instance email should be returned', () => {
        expect(new manager('Jean Doe', 5, 'jean@yahoo.com').getEmail()).toBe('jean@yahoo.com');
    });
});

describe('Get role', () => {
    it('Instance role should be "Manager"', () => {
        expect(new manager('Jean Doe', 5, 'jean@yahoo.com').getRole()).toBe('Manager');
    })
});
