var fs = require('fs'),
    rework = require('rework'),
    bind = require('../');


var css = fs.readFileSync('test.css', 'utf-8');

css = rework(css).use(bind).toString();

fs.writeFileSync('out.css', css);