const { deepEqual, ok } = require('assert');

const database = require('./database');

const DEFAULT_HERO = {
    id: 1,
    name: "Flass",
    power: "Speed"
}

describe('Hero manipulations', () => {

    before(async () => {
        await database.save(DEFAULT_HERO);
    });

    it('must search a hero using files', async () => {
        const expected = DEFAULT_HERO;
        const [result] = await database.list(expected.id);
        deepEqual(result, expected);
    });

    it('must save a hero', async () => {
        const expected = DEFAULT_HERO;
        await database.save(DEFAULT_HERO);
        const [current] = await database.list(DEFAULT_HERO.id);
        deepEqual(current, expected);
    });
});