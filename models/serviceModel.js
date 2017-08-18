'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
    title: {
        type: String,
        Required: 'enter title of service'
    },
    description: {
        type: String,
        Required: 'enter description of service'
    },
    link: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Service', ServiceSchema, 'ServiceSITNotify');