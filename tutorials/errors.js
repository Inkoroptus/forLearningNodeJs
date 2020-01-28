var util = require('util');
var phrases = { "Hello": "Привет", "World": "Мир" };

//all default erros contains name of error

function PhraseError(message) {
    this.message = message;
    //collect stack of this code part; 
    //second argument - ignore this function
    Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}

util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";

function getPhrases(name) {
    if (!phrases[name]) {
        throw new PhraseError("Phrase: " + name + " - does not exist");
    }
    return phrases[name];
}

function makePage(url) {
    if (url != 'index.html') {
        throw new HttpError(404, "Page: " + url + " - does not found");
    }
    return util.format("%s, %s!", getPhrases("**"), getPhrases("5984"));
}

try {
    var page = makePage('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error("Error: %s\n message: %s\n stack: %s", e.name, e.message, e.stack);
    }
}