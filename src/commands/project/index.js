const projects = require('../../../projects.json');

const list = async (response) => {
  await response('tengo los siguientes proyectos asignados:');

  for (const key in projects) {
    await response(
      `nombre: ${projects[key]['name']}, ambiente: ${projects[key]['stage']}`,
    );
  }
};

const project = async (arguments, response) => {
  const name = arguments[0];

  switch (name) {
    case 'list':
      return await list(response);
  }
};

module.exports = { project, list };
