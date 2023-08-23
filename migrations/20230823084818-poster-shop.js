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
  return 
    db.createTable("posters",
    {
    "Title":      {
                    "type": "string",
                    "length": 255,
                    "notNull": true
                  },
    "cost":       {
                    "type": "int",
                    "unsigned": true,
                    "notNull": true
                  },
    "description":{
                    "type": "string",
                    "length": 255
                  },
    "date":       {
                    "type": Date.now()
                  },
    "stock":      {
                    "type": "int",
                    "unsigned": true,
                    "notNull": true
                  },
    "height":     {
                    "type": "int"
                  },
    "width":      {
                    "type": "int"
                  }
    }
  )
};

exports.down = function(db) {
  return db.dropTable(postershop);
};

exports._meta = {
  "version": 1
};
