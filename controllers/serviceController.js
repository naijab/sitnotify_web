'use strict';

var mongoose = require('mongoose'),
    config = require('../config.js'),
    Service = mongoose.model('Service');

exports.list_all_service = function (req, res, next) {
    if (req.query.key === config.secretKey) {
        Service.find().sort({"_id": -1}).exec(function (err, service) {
            if (err)
                res.send(err);
            res.json(service);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.create_a_service = function (req, res) {
    if (req.query.key === config.secretKey) {
        var new_service = new Service(req.body);
        new_service.save(function (err, service) {
            if (err)
                res.send(err);
            res.json(service);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.read_a_service = function (req, res) {
    if (req.query.key === config.secretKey) {
        Service.findById(req.params.serviceId, function (err, service) {
            if (err)
                res.send(err);
            res.json(service);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.update_a_service = function (req, res) {
    if (req.query.key === config.secretKey) {
        Service.findOneAndUpdate({
            _id: req.params.serviceId
        }, req.body, {
            new: true
        }, function (err, service) {
            if (err)
                res.send(err);
            res.json(service);
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};

exports.delete_a_service = function (req, res) {
    if (req.query.key === config.secretKey) {
        Service.remove({
            _id: req.params.serviceId
        }, function (err, service) {
            if (err)
                res.send(err);
            res.json({
                message: 'Service successfully deleted'
            });
        });
    } else {
        res.json({
            message: '403 Forbidden'
        });
    }
};