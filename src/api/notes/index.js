const routes = require('./routes');
const NoteHandler = require('./handler');

module.exports = {
  name: 'notes',
  version: '1.0.9',
  register: async (server, { service, validator }) => {
    const notesHandler = new NoteHandler(service, validator);
    server.route(routes(notesHandler));
  },
};
