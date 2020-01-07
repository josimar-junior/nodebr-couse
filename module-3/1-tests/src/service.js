const { get } = require('axios');

const BASE_URL = 'https://swapi.co/api/people';

async function getPeople(name) {
    const url = `${BASE_URL}/?search=${name}&format=json`;
    const result = await get(url);
    return result.data.results.map(mapPeople);
}

function mapPeople(item) {
    return {
        name: item.name,
        height: item.height
    }
}

module.exports = {
    getPeople
}