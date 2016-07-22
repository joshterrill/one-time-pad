# one-time-pad

a simple one-time pad cipher written in nodejs

#### usage

```
var pad = require("one-time-pad");
var encryptedMessage = pad.encrypt("SECRET MESSAGE", "ZXYSMMVBSTTVJ");
console.log(encryptedMessage); // RBAJQFHFKLTBN

var decryptedMessage = pad.decrypt("RBAJQFHFKLTBN", "ZXYSMMVBSTTVJ");
console.log(decryptedMessage); // SECRETMESSAGE
```