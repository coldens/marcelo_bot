const axios = require('axios');

module.exports.send = async ({ url, token }) => {
  return await axios.post(url, { token });
};
