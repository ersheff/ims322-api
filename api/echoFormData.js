const { text } = require("micro");
const querystring = require("querystring");
const escapeHtml = require("escape-html");

module.exports = async (req, res) => {
  const formData = await text(req);
  const data = querystring.parse(formData);
  for (let key in data) {
    data[key] = escapeHtml(data[key]);
  }
  res.end(JSON.stringify(data));
};
