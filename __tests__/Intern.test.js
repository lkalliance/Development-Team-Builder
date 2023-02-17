const intern = require("../lib/Intern");

describe('Validation', () => {
    it('Should throw an error if not provided with a name', () => {
        const cb = () => new intern("",1,"j","doe");
        const err = new Error("At least one non-space character is required");

        expect(cb).toThrowError.err;
    });
    it('Should throw an error if not provided with an ID', () => {
        const cb = () => new intern("j","","d","doe");
        const err = new Error("At least one non-space character is required");

        expect(cb).toThrowError.err;
    });
    it('Should throw an error if not provided with a valid email', () => {
        const cb = () => new intern("j",1,"","doe");
        const err = new Error("Please enter a valid email address");

        expect(cb).toThrowError.err;
    });
    it('Should correctly store all values if valid', () => {
        const int = new intern("j",1,"someone@yahoo.com","doe");

        expect(int.name).toBe("j");
        expect(int.id).toBe(1);
        expect(int.email).toBe("someone@yahoo.com");
        expect(int.school).toBe("doe");
    });
});

describe('Get name', () => {
    it('Instance name should be returned', () => {
        expect(new intern('Jim Doe', 3, 'jim@yahoo.com', 'Mankato State').getName()).toBe('Jim Doe');
    });
});

describe('Get id', () => {
    it('Instance id should be returned', () => {
        expect(new intern('Jim Doe', 3, 'jim@yahoo.com', 'Mankato State').getID()).toBe(3);
    });
});

describe('Get email', () => {
    it('Instance email should be returned', () => {
        expect(new intern('Jim Doe', 3, 'jim@yahoo.com', 'Mankato State').getEmail()).toBe('jim@yahoo.com');
    });
});

describe('Get role', () => {
    it('Instance role should be "Intern"', () => {
        expect(new intern('Jim Doe', 3, 'jim@yahoo.com', 'Mankato State').getRole()).toBe('Intern');
    })
});

describe('Get School', () => {
    it('Instance school should be returned', () => {
        expect(new intern('Jim Doe', 3, 'jim@yahoo.com', 'Mankato State').getSchool()).toBe('Mankato State');
    })
});
