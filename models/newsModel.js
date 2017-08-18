'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
    title: {
        type: String,
        Required: 'enter title of news'
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        Required: 'enter description of news'
    },
    category: {
        type: String,
        Required: 'enter category of news'
    },
    level: {
        type: String,
        Required: 'enter level of news'
    },
    program: {
        type: String,
        Required: 'enter program of news'
    },
    link: {
        type: String,
    },
    attached_file: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    is_important: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('News', NewsSchema, 'SitNotify');