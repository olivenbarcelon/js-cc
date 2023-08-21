const sum = require('./index');

describe('Index', function () {
    it('It should add 1 + 2', function () {
        expect(sum(1, 2)).toBe(3);
    });
});
