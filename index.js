'use strict';

var legend = require("./helpers").legend;
var search = require("./helpers").search;
var reverse = require("./helpers").reverse;

exports.encrypt = function(message, key) {
  // start empty string to add message to
  var encryptedMessage = "";
  // convert message to uppercase and strip out spaces
  message = message.replace(/\s/g, "").toUpperCase();
  // start looping through the letters in the message
  for (var i = 0; i < message.length; i++) {
    // numeric value for message letters
    var valueString = search(message[i], legend);
    // numeric value for key letters
    var valueKey = search(key[i], legend);
    // if the key isn't long enough, append the letter in the same
    // position as the message to the string
    if (typeof valueKey === "undefined") {
      encryptedMessage += message[i]
    } else {
      // add value of message to value of key minus 1
      var reverseValue = valueString + valueKey - 1;
      if (reverseValue > 26) {
        // start back over to A if it gets past Z
        reverseValue = reverseValue - 26;
      }
      // convert new numeric values back to letters
      var reverseLookup = reverse(reverseValue, legend);
      // append them to the output
      encryptedMessage += reverseLookup;
    }
  }
  return encryptedMessage;
}

exports.decrypt = function(message, key) {
  var encryptedMessage = "";
  message = message.replace(/\s/g, "").toUpperCase();
  //console.log(message);
  for (var i = 0; i < message.length; i++) {
    var valueString = search(message[i], legend);
    var valueKey = search(key[i], legend);
    if (typeof valueKey === "undefined") {
      encryptedMessage += message[i]
    } else {
      var reverseValue = valueString - valueKey + 1;
      //console.log(reverseValue)
      if (reverseValue < 0) {
        reverseValue = reverseValue + 26;
      }
      var reverseLookup = reverse(reverseValue, legend);
      encryptedMessage += reverseLookup;
    }
  }
  return encryptedMessage;
}