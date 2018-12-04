'use strict';

const fs = require('fs');
const path = require('path');

const walkDirSync = (d) => fs.statSync(d).isDirectory() ? fs.readdirSync(d).map(f => walkDirSync(path.join(d, f))) : {name: d, data: fs.readFileSync(d, 'utf8')};

exports.preview = function(req, res) {
  console.log('Preview');
  
  var files = walkDirSync(global.dataFolder);
  console.log(files);
  
  res.send('Preview');
};