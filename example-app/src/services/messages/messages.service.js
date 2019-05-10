// Initializes the `messages` service on path `/messages`
const createService = require('./messages.class.js');
const hooks = require('./messages.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/messages', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('messages');

  service.hooks(hooks);
};
