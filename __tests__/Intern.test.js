const intern = require("../lib/Intern");

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
