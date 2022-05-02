const bookshelf = require('./knex.js');

const MowerLocation = bookshelf.model('MowerLocation', {
  tableName: 'mower_location',
  hasTimestamps: ['created_at'],
  requireFetch: false,

  mower() {
    return this.belongsTo('Mower');
  },
  images() {
    return this.hasMany('MowerLocationImage');
  }
}, {
  findOne (data, withRelated) {
    if (Array.isArray(data)) {
      const query = new MowerLocation();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.fetch({ withRelated })
        .then(el => el?.toJSON());
    }
    return MowerLocation.where(data)
      .fetch({ withRelated })
      .then(el => el?.toJSON());
  },

  find (data, withRelated) {
    if (Array.isArray(data)) {
      const query = new MowerLocation();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.fetchAll({ withRelated })
        .then(el => el?.toJSON());
    }
    return MowerLocation.where(data)
      .fetchAll({ withRelated })
      .then(el => el?.toJSON());
  },

  create (data, trx = null) {
    return new MowerLocation().save(data, { transacting: trx })
      .then(el => el?.toJSON());
  },

  update (where, data, trx = null) {
    if (Array.isArray(where)) {
      const query = new MowerLocation();
      where.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.save(data, { patch: true, transacting: trx })
        .then(el => el?.toJSON());
    }
    return MowerLocation.where(where)
      .save(data, { patch: true, transacting: trx })
      .then(el => el?.toJSON());
  },

  remove (data) {
    if (Array.isArray(data)) {
      const query = new MowerLocation();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.destroy()
        .then(el => el?.toJSON());
    }
    return MowerLocation.where(data)
      .destroy()
      .then(el => el?.toJSON());
  }
});

module.exports = MowerLocation;