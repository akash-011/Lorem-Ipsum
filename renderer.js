const fs = require('fs');

function mergeValues(values, content) {
    content = content.replace('{{ data }}', values )
    return content;
}
function view (templateName, values, res) {
 let fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"})
 fileContents = mergeValues(values, fileContents);
  res.write(fileContents);
 }

module.exports.view = view;
