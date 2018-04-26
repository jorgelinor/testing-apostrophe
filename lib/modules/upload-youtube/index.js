const express = require('express')
, app = express()
, server = require('http').createServer(app)
, Youtube = require("youtube-api")
, gapi = require('./lib/gapi')
, Logger = require("bug-killer")
, opn = require('opn')
, fs = require('fs')
, Spinner = require('cli-spinner').Spinner
, spinner = new Spinner('uploading.. %s')
  spinner.setSpinnerString('|/-\\');


module.exports = {

  alias: 'uploadYT',

  afterConstruct: function(self) {
    self.apos.app.get('/oauth2callback', self.startUpload);
  },

  construct: function(self, options) {

    self.currentVideo = {
      privacyStatus: 'private'
    },

    self.setAuth = function() {
      gapi.init(options);
      opn(gapi.oauth.generateAuthUrl({
          access_type: "offline"
        , scope: ["https://www.googleapis.com/auth/youtube.upload"]
      }));
    }

    self.startUpload = function(req, res) {

      var currentVideo = self.currentVideo;

      let code = req.query.code;

      Logger.log("Trying to get the token using the following code: " + code);
      
      gapi.oauth.getToken(code, (err, tokens) => {

        if (err) {
            console.error(err)
            res.status(500).send(err)
            return Logger.log(err);
        }

        Logger.log("Got the tokens.");

        gapi.oauth.setCredentials(tokens);

        res.send("The video is being uploaded. Check out the logs in the terminal.");

        let req = Youtube.videos.insert({
            resource: {
                // Video title and description
                snippet: {
                    title: currentVideo.title
                  , description: currentVideo.description
                }
               
              , status: {
                    privacyStatus: currentVideo.privacyStatus
                }
            }
            // This is for the callback function
          , part: "snippet,status"

          , media: {
                body: fs.createReadStream(currentVideo.video)
            }
        }, (err, data) => {
            if (data) {
              spinner.stop(true)
              Logger.log('Done!')
            }
            if (err) { 
              console.error(err)
            }
        });
        spinner.start();
      });
    }
  }
}
