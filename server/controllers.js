let db = require('../database/index.js')


module.exports = {
  getAll: (req, res) => {
    db.getAll()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  },
  post: (req, res) => {
    let {name, rating, img, location, type} = req.body
      db.createOne(name, img, rating, location, type)
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  },
  getOne: (req, res) => {
    let id = req.params.id
    db.getOne(id)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  },
  update: (req, res) => {
    let id = req.params.id
    let {name, img, rating, location, type} = req.body
    db.update(id, name, img, rating, location, type)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  },
  delete: (req, res) => {
    let id = req.params.id
    db.delete(id)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  }
}