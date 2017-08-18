'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CalendarSchema = new Schema({
    title: {
        type: String,
        Required: 'enter title of calendar'
    },
    description: {
        type: String,
        Required: 'enter description of calendar'
    },
    date: {
        type: String,
    },
    link: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Calendar', CalendarSchema);