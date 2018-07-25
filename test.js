var pad = require("./index.js");



var encryptDecrypt = function(phrase, key){
    var encrypted = pad.encrypt(phrase, key)
    var decrypted = pad.decrypt(encrypted, key)
    console.log({ phrase, key, encrypted, decrypted})
}

var key = "MUOZDMKRMIMDFRDEUDQDDJIKBMVIKDVXWDFUBTGV";
var keyWithNumbers = "MUOZDM12345DFRDEUDQDDJIKB98632XWDFUBTGV"
var phrase = "This is a secret message: hello, world!"
var phraseWithNumbers = "Our job is to get from 40% bad to 0% bad in 29 months"
var phraseAlphanum = "a782ghuy984bn12f87665czasfg220f129dhkh"
encryptDecrypt(phrase, key)
encryptDecrypt(phrase, keyWithNumbers)
encryptDecrypt(phraseWithNumbers, key)
encryptDecrypt(phraseWithNumbers, keyWithNumbers)
encryptDecrypt(phraseAlphanum, key)
encryptDecrypt(phraseAlphanum, keyWithNumbers)
var decryptedMessage = pad.decrypt("TZLSAVATECRETMESSAGE:HELLO,WORLD!", key);
console.log(decryptedMessage);




