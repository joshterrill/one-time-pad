# one-time-pad

a simple one-time pad cipher written in nodejs

### Rules for this library

* The key and message must only contain alphabetical letters.
* All spaces in message and key will be removed when generating an encrypted message.
* Punctuation and numbers will not be encrypted (in the future it will)

### Usage

```javascript
const pad = require("one-time-pad");
const secretKey = "ZXYSMMVBSTTVJ";
const encryptedMessage = pad.encrypt("SECRET MESSAGE", secretKey);
console.log(encryptedMessage); // RBAJQFHFKLTBN

const decryptedMessage = pad.decrypt("RBAJQFHFKLTBN", secretKey);
console.log(decryptedMessage); // SECRETMESSAGE
```

### License

MIT