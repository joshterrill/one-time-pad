var pad = require("./index.js");

var encryptedMessage = pad.encrypt("This is a secret message: hello, world!", "MUOZDMKRMIMDFRDEUDQDDJIKBMVIKDVXWDFUBTGV");
console.log(encryptedMessage);

var decryptedMessage = pad.decrypt("TZLSAVATECRETMESSAGE:HELLO,WORLD!", "MUOZDMKRMIMDFRDEUDQDDJIKBMVIKDVXWDFUBTGV");
console.log(decryptedMessage);