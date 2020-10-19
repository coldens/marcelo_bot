const commands = {
  '!deploy': require('./deploy').deploy,
  '!project': require('./project').project,
};

const commandExists = (command) => {
  return commands.hasOwnProperty(command);
};

const isValidCommand = (parts) => {
  return parts.length >= 2 && commandExists(parts[0]);
};

const execute = (command, arguments, handler) => {
  return commands[command](arguments, handler);
};

module.exports = { isValidCommand, execute, commands, commandExists };
