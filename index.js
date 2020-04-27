var search = require("./helpers").search;
var reverse = require("./helpers").reverse;
var mod = require("./helpers").mod;

function encrypt(message, key) {
    var encryptedMessage = "";
    message = message.replace(/\s/g, "").toUpperCase();
    key = key.replace(/\s/g, "").toUpperCase();
    for (var i = 0; i < message.length; i++) {
        var valueString = search(message[i]);
        var valueKey = search(key[i]);
        var intString = typeof valueString === 'undefined' ? parseInt(message[i]) : valueString
        var intKey = typeof valueKey === 'undefined' ? parseInt(key[i]) : valueKey
        if(isNaN(intString) || isNaN(intKey)){
        encryptedMessage += message[i]
        } else {
        var reverseValue = mod(intString + intKey);
        var reverseLookup = reverse(reverseValue);
        encryptedMessage += reverseLookup;
        }
    }
    return encryptedMessage;
}

function decrypt(message, key) {
    var encryptedMessage = "";
    message = message.replace(/\s/g, "").toUpperCase();
    key = key.replace(/\s/g, "").toUpperCase();
    for (var i = 0; i < message.length; i++) {
        var valueString = search(message[i]);
        var valueKey = search(key[i]);
        var intString = typeof valueString === 'undefined' ? parseInt(message[i])  : valueString
        var intKey = typeof valueKey === 'undefined' ? parseInt(key[i]) : valueKey
        if(isNaN(intString) || isNaN(intKey)){
        encryptedMessage += message[i]
        } else {
        var reverseValue = mod(intString - intKey);
        var reverseLookup = reverse(reverseValue);
        encryptedMessage += reverseLookup;
        }
    }
    return encryptedMessage;
}

module.exports = {
    encrypt,
    decrypt,
}