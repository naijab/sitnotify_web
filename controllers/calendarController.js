'use strict';

var mongoose = require('mongoose'),
    config = require('../config.js'),
    Calendar = mongoose.model('Calendar');

exports.list_all_calendar = function (req, res, next) {
    if (req.query.key === config.secretKey) {
        Calendar.find().sort({"_id": -1}).exec(function (err, calendar) {
            if (err)
                res.send(err);
            res.json(calendar);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.create_a_calendar = function (req, res) {
    if (req.query.key === config.secretKey) {
        var new_calendar = new Calendar(req.body);
        new_calendar.save(function (err, calendar) {
            if (err)
                res.send(err);
            res.json(calendar);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.read_a_calendar = function (req, res) {
    if (req.query.key === config.secretKey) {
        Calendar.findById(req.params.calendarId, function (err, calendar) {
            if (err)
                res.send(err);
            res.json(calendar);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.update_a_calendar = function (req, res) {
    if (req.query.key === config.secretKey) {
        Calendar.findOneAndUpdate({
            _id: req.params.calendarId
        }, req.body, {
            new: true
        }, function (err, calendar) {
            if (err)
                res.send(err);
            res.json(calendar);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.delete_a_calendar = function (req, res) {
    if (req.query.key === config.secretKey) {
        Calendar.remove({
            _id: req.params.calendarId
        }, function (err, calendar) {
            if (err)
                res.send(err);
            res.json({
                message: 'Calendar successfully deleted'
            });
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};