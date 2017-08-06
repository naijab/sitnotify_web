'use strict';

module.exports = function (app) {

    var newsList = require('../controllers/NewsController');

    app.route('/news')
        .get(newsList.list_all_newss)
        .post(newsList.create_a_news);


    app.route('/news/:newsId')
        .get(newsList.read_a_news)
        .put(newsList.update_a_news)
        .delete(newsList.delete_a_news);
};