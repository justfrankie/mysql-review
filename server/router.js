const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/restaurants')
  .get(controllers.getAll)
  .post(controllers.post);

  router
  .route('/restaurants/:id')
  .get(controllers.getOne)
  .put(controllers.update)
  .delete(controllers.delete)

module.exports = router;