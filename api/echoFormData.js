const { text } = require("micro");
const querystring = require("querystring");

module.exports = async (req, res) => {
  const formData = await text(req);
  const data = querystring.parse(formData);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.end(JSON.stringify(data));
};
