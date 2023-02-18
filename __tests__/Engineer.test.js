const engineer = require("../lib/Engineer");

describe('Validation', () => {
    it('Should throw an error if not provided with a name', () => {
        const cb = () => new engineer("",1,"j","doe");
        const err = new Error("At least one non-space character is required");

        expect(cb).toThrowError.err;
    });
    it('Should throw an error if not provided with an ID', () => {
        const cb = () => new engineer("j","","d","doe");
        const err = new Error("At least one non-space character is required");

        expect(cb).toThrowError.err;
    });
    it('Should throw an error if ID not unique', () => {
        const cb = () => new engineer("j",1,"d","someone");
        const cb2 = () => new engineer("j",1,"d","someone");
        const err = new Error("This ID is already assigned to a different employee");

        expect(cb2).toThrowError.err;
    });
    it('Should throw an error if not provided with a valid email', () => {
        const cb = () => new engineer("j",1,"","doe");
        const err = new Error("Please enter a valid email address");

        expect(cb).toThrowError.err;
    });
    it('Should correctly store all values if valid', () => {
        const eng = new engineer("j",1,"someone@yahoo.com","doe");

        expect(eng.name).toBe("j");
        expect(eng.id).toBe(1);
        expect(eng.email).toBe("someone@yahoo.com");
        expect(eng.gitHub).toBe("doe");
    });
});

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
