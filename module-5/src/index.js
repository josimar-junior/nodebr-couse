const MongoDBStrategy = require('./db/strategies/mongoDBStrategy');
const PostgresStrategy = require('./db/strategies/postgresStrategy');
const ContextStrategy = require('./db/strategies/base/contextStrategy');

const contextMongo = new ContextStrategy(new MongoDBStrategy());
console.log(contextMongo.create());

const contextPostgres = new ContextStrategy(new PostgresStrategy());
console.log(contextPostgres.create());