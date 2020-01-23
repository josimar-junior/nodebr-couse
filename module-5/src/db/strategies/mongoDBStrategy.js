const IDb = require('./base/interfaceDB');

class MongoDBStrategy extends IDb {
    constructor() {
        super();
    }

    create(item) {
        return 'MongoDB';
    }
}

module.exports = MongoDBStrategy;