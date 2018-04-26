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

var generalConfig = {
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

    'apostrophe-db': generalConfig["apostrophe-db"],
    'apostrophe-attachments': generalConfig["apostrophe-attachments"],
     'apostrophe-video-widgets': {},
     'apostrophe-module': {},
     'local-video-widgets': {},
     'apostrophe-pages': {
       deleteFromTrash: true
     },
    'upload-youtube': {
      "web":{
        "client_id":"319062300395-4ivpluvpcntgm5mh4soh5pgoo4p84btu.apps.googleusercontent.com",
        "project_id":"nice-catbird-202020",
        "auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
        "client_secret":"DU-cqzSnupXr9YuBW2wBghNl",
        "redirect_uris":["http://localhost:3000/oauth2callback"],
        "javascript_origins":["http://localhost:5000","http://localhost:3000"]
      }
    }
  }
});