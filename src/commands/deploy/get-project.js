const projects = require('../../../projects.json');

const getProject = (projectName, stage) => {
  const project = projects.find(
    (p) => p.name === projectName && p.stage === stage,
  );

  if (typeof project === 'undefined') {
    throw new ErrorProject(
      `El proyecto: ${projectName}:${stage} no esta configurado.`,
    );
  }

  return project;
};

class ErrorProject extends Error {
  isErrorProject = true;
}

module.exports = { getProject, ErrorProject };
