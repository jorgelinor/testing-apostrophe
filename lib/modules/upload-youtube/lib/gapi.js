const Youtube = require("youtube-api")
, readJson = require("r-json")
, Logger = require("bug-killer")
, opn = require("opn")

exports.init = function(options){
	let oauth = Youtube.authenticate({
	    type: "oauth"
	  , client_id: options.web.client_id
	  , client_secret: options.web.client_secret
	  , redirect_url: options.web.redirect_uris[0]
	});

	let url = oauth.generateAuthUrl({
	  access_type: 'offline',
	  scope: 'https://www.googleapis.com/auth/youtube.upload'
	});

	exports.url = url;
	exports.oauth = oauth;
	exports.CREDENTIALS = options;	
}

