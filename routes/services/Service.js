class Service {
  constructor(model) {
    this.model = model;
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
    this.updateOne = this.updateOne.bind(this);
    this.insertMany = this.insertMany.bind(this);
  }

  insert(data) {
    return new Promise((resolve, reject) => {
      this.model
        .create(data)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  get(query) {
    return new Promise((resolve, reject) => {
      this.model
        .findOne(query)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getAll(query) {
    return new Promise((resolve, reject) => {
      this.model
        .find(query)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  updateOne(filterQuery, updateQuery) {
    return new Promise((resolve, reject) => {
      this.model
        .updateOne(filterQuery, updateQuery)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  insertMany(data) {
    return new Promise((resolve, reject) => {
      this.model
        .insertMany(data)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  //   delete(data) {
  //       return new Promise((resolve, reject) => {
  //           this.model.delete()
  //       })
  //   }
}

module.exports = Service;
