const IDb = require('./interfaceDB');

class ContextStrategy extends IDb {

    constructor(database) {
        super();
        this._database = database;
    }

    create(item) {
        return this._database.create(item);
    }

    read(item) {
        return this._database.read(item);
    }

    update(id, item) {
        return this._database.update(id, item);
    }

    delete(id) {
        return this._database.delete(item);
    }

    isConnected(id) {
        return this._database.isConnected();
    }
}

module.exports = ContextStrategy;