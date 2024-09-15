var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '.'),{
repo: 'https://github.com/kant003/p.git'}, function(err) {
console.log(err);
console.log("Se ha subido a gh-pages correctamente");
});