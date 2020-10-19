const { send } = require('../../send');

/**
 * Ejecuta el deploy del proyecto indicado
 *
 * @param {string} command
 */
const deploy = async (project) => {
  const response = await send(project);

  return {
    success: true,
    message: response.data,
  };
};

module.exports = { deploy };
