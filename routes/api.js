var express = require('express');
var router = express.Router();
var newsList = require('../controllers/newsController');
var calendarList = require('../controllers/calendarController');
var serviceList = require('../controllers/serviceController');

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

router.route('/service')
  .get(serviceList.list_all_service)
  .post(serviceList.create_a_service);

router.route('/service/:serviceId')
  .get(serviceList.read_a_service)
  .put(serviceList.update_a_service)
  .delete(serviceList.delete_a_service);

module.exports = router;