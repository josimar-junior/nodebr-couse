const { readFile, writeFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {

    constructor() {
        this.FILE_NAME = 'heros.json';
    }

    async getFile() {
        const file = await readFileAsync(this.FILE_NAME, 'utf8');
        return JSON.parse(file.toString());
    }

    async write(data) {
        await writeFileAsync(this.FILE_NAME, JSON.stringify(data));
        return true;
    }

    async save(hero) {
        const data = await this.getFile();
        const id = hero.id <= 2 ? hero.id : Date.now();
        const heroWithId = {
            id,
            ...hero
        }
        const finalData = [
            ...data,
            heroWithId
        ]

        return await this.write(finalData);
    }

    async list(id) {
        const data = await this.getFile();
        const filteredData = data.filter(item => id ? item.id === id : true);
        return filteredData;
    }
}

module.exports = new Database();