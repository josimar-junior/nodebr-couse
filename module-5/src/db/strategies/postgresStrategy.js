const IDb = require('./base/interfaceDB');

class PostgresStrategy extends IDb {
    constructor() {
        super();
    }

    create(item) {
        return 'Postgres';
    }
}

module.exports = PostgresStrategy;