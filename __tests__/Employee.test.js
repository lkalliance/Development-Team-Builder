const employee = require('../lib/Employee');

describe('Validation', () => {
    it('Should throw an error if not provided with a name', () => {
        const cb = () => new employee("",1,"someone@yahoo.com");
        const err = new Error("At least one non-space character is required");

        expect(cb).toThrowError.err;
    });
    it('Should throw an error if not provided with an ID', () => {
        const cb = () => new employee("j","","someone@yahoo.com");
        const err = new Error("At least one non-space character is required");

        expect(cb).toThrowError.err;
    });
    it('Should throw an error if ID not unique', () => {
        const cb = () => new employee("j",1,"someone");
        const cb2 = () => new employee("j",1,"someone");
        const err = new Error("This ID is already assigned to a different employee");

        expect(cb2).toThrowError.err;
    });
    it('Should throw an error if not provided with a valid email', () => {
        const cb = () => new employee("j",1,"someone");
        const err = new Error("Please enter a valid email address");

        expect(cb).toThrowError.err;
    });
    it('Should correctly store all values if valid', () => {
        const emp = new employee("j",1,"someone@yahoo.com");

        expect(emp.name).toBe("j");
        expect(emp.id).toBe(1);
        expect(emp.email).toBe("someone@yahoo.com");
    });
})

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
