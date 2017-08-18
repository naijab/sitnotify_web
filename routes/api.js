var express = require('express');
var router = express.Router();
var newsList = require('../controllers/newsController');
var calendarList = require('../controllers/calendarController');

router.route('/news')
  .get(newsList.list_all_news)
  .post(newsList.create_a_news);

router.route('/news/:newsId')
  .get(newsList.read_a_news)
  .put(newsList.update_a_news)
  .delete(newsList.delete_a_news);

router.route('/calendar')
  .get(calendarList.list_all_calendar)
  .post(calendarList.create_a_calendar);

router.route('/calendar/:calendarId')
  .get(calendarList.read_a_calendar)
  .put(calendarList.update_a_calendar)
  .delete(calendarList.delete_a_calendar);

module.exports = router;