'use strict';

module.exports = function (app) {

    var newsList = require('../controllers/newsController');

    app.route('/news')
        .get(newsList.list_all_news)
        .post(newsList.create_a_news);

    app.route('/news/:newsId')
        .get(newsList.read_a_news)
        .put(newsList.update_a_news)
        .delete(newsList.delete_a_news);
};