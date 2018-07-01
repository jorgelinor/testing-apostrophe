const express = require('express')
      User = require('./lib/UserModel'),
      db = require('./lib/db');

module.exports = {
    afterConstruct: function(self) {
        self.apos.app.post('/crear-cuenta', self.handleSignup);
    },
    construct: function(self, options) {
        db.connect(options.mongoURI);

        self.handleSignup = function(req, res) {
            const test = new User({
                username: 'test',
                password: 'test',
                birth_date: Date.now(),
                email: 'test@test.com'
            });
            test.save();
            return res.status(200).json({status: 200, data: test});
        }
    }
}