const employee = require("../lib/Employee");

describe('Get name', () => {
    it('Instance name should be returned', () => {
        expect(new employee('John Doe', 1, 'john@yahoo.com').getName()).toBe('John Doe');
    });
});

describe('Get id', () => {
    it('Instance id should be returned', () => {
        expect(new employee('John Doe', 1, 'john@yahoo.com').getID()).toBe(1);
    });
});

describe('Get email', () => {
    it('Instance email should be returned', () => {
        expect(new employee('John Doe', 1, 'john@yahoo.com').getEmail()).toBe('john@yahoo.com');
    });
});

describe('Get role', () => {
    it('Instance role should be "Employee"', () => {
        expect(new employee('John Doe', 1, 'john@yahoo.com').getRole()).toBe('Employee');
    });
});
