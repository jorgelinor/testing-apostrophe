var path = require('path');

var apos = require('apostrophe')({
  shortName: 'test-project',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    'apostrophe-db': {
      uri: "mongodb://um7uixx9wsr1zql:pGXgGdhaDc7iWkkjv9nE@bieojfedueylq7c-mongodb.services.clever-cloud.com:27017/bieojfedueylq7c"
    },
    'apostrophe-attachments': {
      uploadfs: {
        backend: 's3',
        secret: 'F3Hd9ETk5MEHzryhtbFBbzroIczJJMFjEhEDCK9M',
        key: 'AKIAJX5733B6BK7QGCAQ',
        bucket: 'pastoral-salesianos'
      }
    },
     'apostrophe-video-widgets': {},
     'apostrophe-module': {},
     'local-video-widgets': {},
     'apostrophe-pages': {
       deleteFromTrash: true
     },
     'apostrophe-express': {
      host: '0.0.0.0',
      port: '2000'
     }
  }
});