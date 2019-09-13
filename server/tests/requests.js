const http = require("http");

class Request {
  get(url) {
    return new Promise(resolve => {
      http.get({ path: url }, res => {
        let data;
        res.on("data", _data => (data += _data));
        res.on("end", () => resolve(data));
      });
    });
  }
}

const request = new Request();

module.exports = request;
