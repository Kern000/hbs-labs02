'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {

  return db.createTable("products", {
    "id":{
      "type":"int",
      "primaryKey":true,
      "autoIncrement": true,
      "unsigned": true        //positive numbers only
    },
    "name": {
      "type": "string",
      "length": 255,
      "notNull": true
    },
    "cost": "int"
    
  })
}
// when ever you want to run use exports.up
// want create Table products (id INT UNSIGN PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, cost INT)
// first argument - name of table
// second arugument - object, the keys are name of the columns
// values are definitnion of the column

exports.down = function(db) {
  return db.dropTable("products")
};
// undo by using exports.down

exports._meta = {
  "version": 1
};
