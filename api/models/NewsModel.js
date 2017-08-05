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
        type: [{
            type: String,
            enum: ['Bachelor Degrees', 'Master Degrees', 'Doctor Degrees']
        }],
        default: ['Bachelor']
    },
    program: {
        type: [{
            type: String,
            enum: ['IT', 'CS', 'BIS', 'SE', 'Bio', 'IT (Weekend)', 'IT (Night)']
        }],
        default: ['IT']
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
    edited_date: {
        type: Date,
        default: Date.now
    },
    is_important: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('News', NewsSchema);