// aplicacion
const { deploy } = require('./deploy');
const { getProject } = require('./get-project');

/**
 * Ejecutar deploy
 *
 * @param {string} text
 * @param {any} handler
 */
module.exports.deploy = async (arguments, handler) => {
  const projectName = arguments[0];
  const stage = arguments[1] || 'prod';
  const response = (message) => handler(`${projectName}: ${message}`);

  try {
    await response(
      `Iniciando proceso de deploy, mantente atento! esto puede tardar unos minutos!`,
    );

    const result = await deploy(getProject(projectName, stage));

    if (Array.isArray(result.message)) {
      for (const key in result.message) {
        await response(result.message[key]);
      }
      return;
    }

    return await response(result.message);
  } catch (err) {
    if (err.isErrorProject) {
      return await response(
        `El proyecto ${projectName}:${stage} no se encuentra registrado.`,
      );
    }

    return await response(`Oh no! obtuve el siguiente error: ${err.message}`);
  }
};
