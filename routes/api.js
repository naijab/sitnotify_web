var express = require('express');
var router = express.Router();
var newsList = require('../controllers/newsController');

router.route('/news')
  .get(newsList.list_all_news)
  .post(newsList.create_a_news);

router.route('/news/:newsId')
  .get(newsList.read_a_news)
  .put(newsList.update_a_news)
  .delete(newsList.delete_a_news);

module.exports = router;