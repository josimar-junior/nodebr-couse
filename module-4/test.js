const { deepEqual, ok } = require('assert');

const database = require('./database');

const DEFAULT_HERO = {
    id: 1,
    name: "Flass",
    power: "Speed"
}

describe('Hero manipulations', () => {
    it('must search a hero using files', async () => {
        const expected = DEFAULT_HERO;
        const [result] = await database.list(expected.id);
        deepEqual(result, expected);
    });
});