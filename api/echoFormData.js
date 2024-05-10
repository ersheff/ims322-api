const { text } = require("micro");
const querystring = require("querystring");
const escapeHtml = require("escape-html");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const formData = await text(req);
  const data = querystring.parse(formData);

  for (let key in data) {
    data[key] = escapeHtml(data[key]);
  }
  res.end(JSON.stringify(data));
};
