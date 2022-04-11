const bookshelf = require('./knex.js');
const MowerLocation = require('./MowerLocation');

const { Model } = bookshelf;

class MowerLocationImage extends Model {
  get tableName() {
    return 'mower_location_image';
  }
  get requireFetch() {
    return false;
  }

  mower() {
    return this.belongsTo(MowerLocation);
  }

  static findOne (data, withRelated) {
    if (Array.isArray(data)) {
      const query = new MowerLocationImage();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.fetch({ withRelated })
        .then(el => el?.toJSON());
    }
    return MowerLocationImage.where(data)
      .fetch({ withRelated })
      .then(el => el?.toJSON());
  }

  static find (data, withRelated) {
    if (Array.isArray(data)) {
      const query = new MowerLocationImage();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.fetchAll({ withRelated })
        .then(el => el?.toJSON());
    }
    return MowerLocationImage.where(data)
      .fetchAll({ withRelated })
      .then(el => el?.toJSON());
  }

  static create (data, trx = null) {
    return new MowerLocationImage().save(data, { transacting: trx })
      .then(el => el?.toJSON());
  }

  static update (where, data, trx = null) {
    if (Array.isArray(where)) {
      const query = new MowerLocationImage();
      where.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.save(data, { patch: true, transacting: trx })
        .then(el => el?.toJSON());
    }
    return MowerLocationImage.where(where)
      .save(data, { patch: true, transacting: trx })
      .then(el => el?.toJSON());
  }

  static remove (data) {
    if (Array.isArray(data)) {
      const query = new MowerLocationImage();
      data.forEach(row => {
        query.where(row[0], row[1], row[2]);
      });
      return query.destroy()
        .then(el => el?.toJSON());
    }
    return MowerLocationImage.where(data)
      .destroy()
      .then(el => el?.toJSON());
  }
}

module.exports = MowerLocationImage;