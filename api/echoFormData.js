const { text } = require('micro');
const querystring = require('querystring');
const xss = require('xss');

module.exports = async (req, res) => {
  const formData = await text(req);
  const data = querystring.parse(formData);
  for (let key in data) {
    data[key] = xss(data[key]);
  }
  res.end(JSON.stringify(data));
};
