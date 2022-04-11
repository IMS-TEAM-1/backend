const bookshelf = require('./knex.js');
const Mower = require('./Mower');
const MowerLocationImage = require('./MowerLocationImage');

const { Model } = bookshelf;

class MowerLocation extends Model {
  get tableName() {
    return 'mower_location';
  }
  get hasTimestamps() {
    return ['created_at'];
  }
  get requireFetch() {
    return false;
  }

  mower() {
    return this.belongsTo(Mower);
  }

  images() {
    return this.hasMany(MowerLocationImage);
  }

  static findOne (data, withRelated) {
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
  }

  static find (data, withRelated) {
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
  }

  static create (data, trx = null) {
    return new MowerLocation().save(data, { transacting: trx })
      .then(el => el?.toJSON());
  }

  static update (where, data, trx = null) {
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
  }

  static remove (data) {
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
}

module.exports = MowerLocation;