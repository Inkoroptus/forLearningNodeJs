let phrases;
exports.connect = function() {
    phrases = require('./ru');
};

exports.getPhrase = function(name) {
    if (!phrases[name]) {
        throw new Error("File: " + name + " does not exist");
    }
    return phrases[name];
}