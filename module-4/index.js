const Commander = require('commander');
const Database = require('./database');

const Hero = require('./hero');

async function main() {

    Commander
        .version('v1')

        .option('-n, --name [value]', "Hero's name")
        .option('-p --power [value]', "Hero's power")
        .option('-i --id [value]', "Hero's id")
        .option('-s --save', 'Save')
        .option('-l --list', 'List')
        .option('-r --remove', 'Remove hero by id')
        .option('-u --update [value]', 'Update')

        .parse(process.argv);

    const hero = new Hero(Commander);

    try {
        if (Commander.save) {
            delete hero.id;
            const result = Database.save(hero);
            if (!result) {
                console.log('Error saving hero');
                return;
            }
            console.log('Hero successfully saved');
        }

        if (Commander.list) {
            const result = await Database.list();
            console.log(result);
            return;
        }

        if (Commander.remove) {
            await Database.remove(hero.id);
            console.log('Hero successfully removed');
        }

        if (Commander.update) {
            const idToUpdate = parseInt(Commander.update);
            const data = JSON.stringify(hero);
            const heroUpdate = JSON.parse(data);
            await Database.update(idToUpdate, heroUpdate);
            console.log('Hero successfully updated');
        }
    } catch (e) {
        console.error('Error -> ', e);
    }
}

main();