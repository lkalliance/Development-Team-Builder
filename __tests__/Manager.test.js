const manager = require("../lib/Manager");

describe('Validation', () => {
    it('Should throw an error if not provided with a name', () => {
        const cb = () => new Manager("",1,"j","425-555-1212");
        const err = new Error("At least one non-space character is required");

        expect(cb).toThrowError.err;
    });
    it('Should throw an error if not provided with an ID', () => {
        const cb = () => new manager("j","","d","425-555-1212");
        const err = new Error("At least one non-space character is required");

        expect(cb).toThrowError.err;
    });
    it('Should throw an error if not provided with a valid email', () => {
        const cb = () => new manager("j",1,"","425-555-1212");
        const err = new Error("Please enter a valid email address");

        expect(cb).toThrowError.err;
    });
    it('Should throw an error if not provided with a valid phone number pattern', () => {
        const cb = () => new manager("j",1,"","(415) 555-262");
        const err = new Error("Please enter a ten-digit phone number");

        expect(cb).toThrowError.err;
    });
    it('Should correctly store all values if valid', () => {
        const mgr = new manager("j",1,"someone@yahoo.com","425-555-1212");

        expect(mgr.name).toBe("j");
        expect(mgr.id).toBe(1);
        expect(mgr.email).toBe("someone@yahoo.com");
        expect(mgr.officeNumber).toBe("425-555-1212");
    });
});

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
