const bookshelf = require('./knex.js');

const Mower = bookshelf.model('Mower', {
  tableName: 'mower',
  hasTimestamps: ['created_at', 'updated_at'],
  requireFetch: false,

  users() {
    return this.belongsToMany('User');
  },
  locations() {
    return this.hasMany('MowerLocation');
  },
}, {
  findOne (data, withRelated) {
    if (Array.isArray(data)) {
      const query = new Mower();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.fetch({ withRelated })
        .then(el => el?.toJSON());
    }
    return Mower.where(data)
      .fetch({ withRelated })
      .then(el => el?.toJSON());
  },

  find (data, withRelated) {
    if (Array.isArray(data)) {
      const query = new Mower();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.fetchAll({ withRelated })
        .then(el => el?.toJSON());
    }
    return Mower.where(data)
      .fetchAll({ withRelated })
      .then(el => el?.toJSON());
  },

  create (data, trx = null) {
    return new Mower().save(data, { transacting: trx })
      .then(el => el?.toJSON());
  },

  update (where, data, trx = null) {
    if (Array.isArray(where)) {
      const query = new Mower();
      where.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.save(data, { patch: true, transacting: trx })
        .then(el => el?.toJSON());
    }
    return Mower.where(where)
      .save(data, { patch: true, transacting: trx })
      .then(el => el?.toJSON());
  },

  remove (data) {
    if (Array.isArray(data)) {
      const query = new Mower();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.destroy()
        .then(el => el?.toJSON());
    }
    return Mower.where(data)
      .destroy()
      .then(el => el?.toJSON());
  }
})

module.exports = Mower;