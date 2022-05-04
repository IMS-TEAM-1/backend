const bookshelf = require('./knex.js');

const MowerLocationImage = bookshelf.model('MowerLocationImage', {
  tableName: 'mower_location_image',
  requireFetch: false,

  mowerLocation() {
    return this.belongsTo('MowerLocation');
  }
}, {
  findOne (data, withRelated) {
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
  },

  find (data, withRelated) {
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
  },

  create (data, trx = null) {
    return new MowerLocationImage().save(data, { transacting: trx })
      .then(el => el?.toJSON());
  },

  update (where, data, trx = null) {
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
  },

  remove (data) {
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
});

module.exports = MowerLocationImage;