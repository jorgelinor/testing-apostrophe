const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      SALT = 10;

const userSchema = new mongoose.Schema({
    name: {type: String, default: ''},
    last_name: {type: String, default: ''},
    birth_place: {type: String, default: ''},
    birth_date: {type: Date, required: true},
    name_of_mother: {type: String, default: ''},
    name_of_father: {type: String, default: ''},
    social_networks: {type: Array, lowercase: true, default: []},
    favorite_color: {type: String, default: ''},
    hobbies: {type: Array, lowercase: true, default: []},
    grade: {type: String, default: ''},
    birth_document: {data: Buffer, contentType: String, default: ''},
    personal_photo: {data: Buffer, contentType: String, default: ''},
    stage: {type: String, default: '', lowercase: true},
    cycle: {type: Number, default: 1},
    best_friends: {type: Array, default: []},
    favorite_music_genres: {type: Array, lowercase: true, default: []},

    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},
    email: {type: String, required: true, lowercase: true}
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();

    bcrypt.genSalt(SALT, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = (candidatePassword, cb) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('Teenager', userSchema);

module.exports = User;