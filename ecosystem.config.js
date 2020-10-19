module.exports = {
  apps: [{
    name: 'marcelo-bot',
    exec_mode: "fork",
    script: "npm",
    args: "run start",
    autorestart: true
  }],
};
