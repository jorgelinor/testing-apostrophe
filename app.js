var path = require('path');

var raddConfig = {
  'apostrophe-db': {
    uri: "mongodb://raddy:password69@ds249249.mlab.com:49249/apostrophe-sandbox"
  },
  'apostrophe-attachments': {
    uploadfs: {
      backend: 's3',
      secret: 'CQet6rgjxxlJJorVKWD2G980yqD/owdiKASo3JPC',
      key: 'AKIAJK5BVMEGU4XPJ6YA',
      bucket: 'raddelyn-bucket'
    }
  }
}

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

    'apostrophe-db': raddConfig["apostrophe-db"],
    'apostrophe-attachments': raddConfig["apostrophe-attachments"],
     'apostrophe-video-widgets': {},
     'apostrophe-module': {},
     'local-video-widgets': {},
     'apostrophe-pages': {
       deleteFromTrash: true
     }
  }
});