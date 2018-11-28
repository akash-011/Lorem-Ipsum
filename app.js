
const http = require('http');
const renderer  = require('./renderer')
const loremGenerator = require('./lorem')

http.createServer( function (req, res) {
    res.writeHead(200, {"Content-Type" : "text/html" });
    let output = []
    if (req.method === "POST") {
      let values = {};
      req.on("data", function(data){
        data = data.toString();
        data = data.split('&');
        for (let i = 0; i < data.length; i++ ){
          let _data = data[i].split("=");
          
          values[_data[0]] = _data[1];
        }
        let selector = values.select
        let number = values.number;
        output = loremGenerator[selector](number);
        renderer.view("index", {} , res)
        renderer.view("lorem", output, res)
        res.end()
      })
    } else {
      renderer.view("index", [], res)
      res.end()
    }
}).listen(3000);
console.log('Server Running on Port 3000');
