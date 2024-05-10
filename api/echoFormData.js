const { text } = require("micro");
const querystring = require("querystring");

const allowedOrigins = ["http://localhost:5500", "http://localhost:5501", "http://127.0.0.1:5500", "http://127.0.0.1:5501"];

module.exports = async (req, res) => {
  const formData = await text(req);
  const data = querystring.parse(formData);
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.end(JSON.stringify(data));
};
