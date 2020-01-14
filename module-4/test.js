const { deepEqual, ok } = require('assert');

const database = require('./database');

const DEFAULT_HERO = {
    id: 1,
    name: "Flash",
    power: "Speed"
}

const DEFAULT_HERO_UPDATE = {
    id: 2,
    name: "Superman",
    power: "Force"
}

describe('Hero manipulations', () => {

    before(async () => {
        await database.save(DEFAULT_HERO);
        await database.save(DEFAULT_HERO_UPDATE);
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

    it('must remove a hero by id', async () => {
        const expected = true;
        const result = await database.remove(DEFAULT_HERO.id);
        deepEqual(result, expected);
    });

    it.only('must update hero by id', async () => {
        const expected = {
            ...DEFAULT_HERO_UPDATE,
            name: 'Batman',
            power: 'Money'
        }

        const newData = {
            name: 'Batman',
            power: 'Money'
        }

        await database.update(DEFAULT_HERO_UPDATE.id, newData);
        const [result] = await database.list(DEFAULT_HERO_UPDATE.id);
        deepEqual(result, expected);
    });
});