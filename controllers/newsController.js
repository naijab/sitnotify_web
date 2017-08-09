'use strict';

var mongoose = require('mongoose'),
    config = require('../config.js'),
    News = mongoose.model('News');

exports.list_all_news = function (req, res, next) {
    if (req.query.key === config.secretKey) {
        News.find({}, function (err, news) {
            if (err)
                res.send(err);
            res.json(news);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.create_a_news = function (req, res) {
    if (req.query.key === config.secretKey) {
        var new_news = new News(req.body);
        new_news.save(function (err, news) {
            if (err)
                res.send(err);
            res.json(news);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.read_a_news = function (req, res) {
    if (req.query.key === config.secretKey) {
        News.findById(req.params.newsId, function (err, news) {
            if (err)
                res.send(err);
            res.json(news);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.update_a_news = function (req, res) {
    if (req.query.key === config.secretKey) {
        News.findOneAndUpdate({
            _id: req.params.newsId
        }, req.body, {
            new: true
        }, function (err, news) {
            if (err)
                res.send(err);
            res.json(news);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.delete_a_news = function (req, res) {
    if (req.query.key === config.secretKey) {
        News.remove({
            _id: req.params.newsId
        }, function (err, news) {
            if (err)
                res.send(err);
            res.json({
                message: 'News successfully deleted'
            });
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};