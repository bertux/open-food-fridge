const sdk = require('api')('@fevertokens/v1.0#f9zr10lbzdqpsl');

sdk.auth('CjP3~5WE-qq~6HZwriDfY_FD7KZMsYtB');
sdk.listProjects()
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));