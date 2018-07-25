'use strict';

var legend = require("./helpers").legend;
var search = require("./helpers").search;
var reverse = require("./helpers").reverse;
var len = legend.length-1;

function mod(n, p) 
{
    return n - p * Math.floor( n / p );
}

exports.encrypt = function(message, key) {
  // start empty string to add message to
  var encryptedMessage = "";
  // convert message and key to uppercase and strip out spaces
  message = message.replace(/\s/g, "").toUpperCase();
  key = key.replace(/\s/g, "").toUpperCase();
  // start looping through the letters in the message
  for (var i = 0; i < message.length; i++) {
    // numeric value for message letters
    var valueString = search(message[i], legend);
    // numeric value for key letters
    var valueKey = search(key[i], legend);
    var intString = typeof valueString === 'undefined' ? parseInt(message[i]) : valueString
    var intKey = typeof valueKey === 'undefined' ? parseInt(key[i]) : valueKey
    // if the key isn't long enough, append the letter in the same
    // position as the message to the string
    if(isNaN(intString) || isNaN(intKey)){
      encryptedMessage += message[i]
    } else {
      // add value of message to value of key minus 1
      var reverseValue = mod(intString + intKey, len);
      // convert new numeric values back to letters
      var reverseLookup = reverse(reverseValue, legend);
      // append them to the output
      encryptedMessage += reverseLookup;
    }
  }
  return encryptedMessage;
};

exports.decrypt = function(message, key) {
  var encryptedMessage = "";
  message = message.replace(/\s/g, "").toUpperCase();
  key = key.replace(/\s/g, "").toUpperCase();
  for (var i = 0; i < message.length; i++) {
    var valueString = search(message[i], legend);
    var valueKey = search(key[i], legend);
    var intString = typeof valueString === 'undefined' ? parseInt(message[i])  : valueString
    var intKey = typeof valueKey === 'undefined' ? parseInt(key[i]) : valueKey
    if(isNaN(intString) || isNaN(intKey)){
      encryptedMessage += message[i]
    } else {
      var reverseValue = mod(intString - intKey, len);
      var reverseLookup = reverse(reverseValue, legend);
      encryptedMessage += reverseLookup;
    }
  }
  return encryptedMessage;
};