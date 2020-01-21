const Commander = require('commander');
const Database = require('./database');

const Hero = require('./hero');

async function main() {

    Commander
        .version('v1')

        .option('-n, --name [value]', "Hero's name")
        .option('-p --power [value]', "Hero's power")
        .option('-s --save', 'Save')

        .parse(process.argv);

    const hero = new Hero(Commander);

    try {
        if(Commander.save) {
            const result = Database.save(hero);
            if(!result) {
                console.log('Error saving hero');
                return;
            }
            console.log('Hero saved successfully');
        }
    } catch(e) {
        console.error('Error -> ', e);
    }
}

main();