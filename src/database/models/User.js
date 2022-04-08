const bookshelf = require('./knex.js');

const { Model } = bookshelf;

class User extends Model {
  get tableName() {
    return 'user';
  }
  get hasTimestamps() {
    return ['created_at', 'updated_at'];
  }
  get requireFetch() {
    return false;
  }

  static findOne (data, withRelated) {
    if (Array.isArray(data)) {
      const query = new User();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.fetch({ withRelated })
        .then(el => el?.toJSON());
    }
    return User.where(data)
      .fetch({ withRelated })
      .then(el => el?.toJSON());
  }

  static find (data, withRelated) {
    if (Array.isArray(data)) {
      const query = new User();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.fetchAll({ withRelated })
        .then(el => el?.toJSON());
    }
    return User.where(data)
      .fetchAll({ withRelated })
      .then(el => el?.toJSON());
  }

  static create (data, trx = null) {
    return new User().save(data, { transacting: trx })
      .then(el => el?.toJSON());
  }

  static update (where, data, trx = null) {
    if (Array.isArray(where)) {
      const query = new User();
      where.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.save(data, { patch: true, transacting: trx })
        .then(el => el?.toJSON());
    }
    return User.where(where)
      .save(data, { patch: true, transacting: trx })
      .then(el => el?.toJSON());
  }

  static remove (data) {
    if (Array.isArray(data)) {
      const query = new User();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.destroy()
        .then(el => el?.toJSON());
    }
    return User.where(data)
      .destroy()
      .then(el => el?.toJSON());
  }
}

module.exports = User;