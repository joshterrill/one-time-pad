const { search, reverse, mod } = require("./helpers");

function encrypt(message, key) {
    let encryptedMessage = "";
    message = message.replace(/\s/g, "").toUpperCase();
    key = key.replace(/\s/g, "").toUpperCase();
    for (let i = 0; i < message.length; i++) {
        const valueString = search(message[i]);
        const valueKey = search(key[i]);
        const intString = typeof valueString === "undefined" ? parseInt(message[i]) : valueString
        const intKey = typeof valueKey === "undefined" ? parseInt(key[i]) : valueKey
        if (isNaN(intString) || isNaN(intKey)) {
            encryptedMessage += message[i];
        } else {
            const reverseValue = mod(intString + intKey);
            const reverseLookup = reverse(reverseValue);
            if (reverseLookup == 0) {
                reverseLookup = "";
            }
            encryptedMessage += reverseLookup;
        }
    }
    return encryptedMessage;
}

function decrypt(message, key) {
    let encryptedMessage = "";
    message = message.replace(/\s/g, "").toUpperCase();
    key = key.replace(/\s/g, "").toUpperCase();
    for (let i = 0; i < message.length; i++) {
        const valueString = search(message[i]);
        const valueKey = search(key[i]);
        const intString = typeof valueString === "undefined" ? parseInt(message[i]) : valueString
        const intKey = typeof valueKey === "undefined" ? parseInt(key[i]) : valueKey
        if (isNaN(intString) || isNaN(intKey)) {
            encryptedMessage += message[i]
        } else {
            const reverseValue = mod(intString - intKey);
            let reverseLookup = reverse(reverseValue);
            if (reverseLookup == 0) {
                reverseLookup = "";
            }
            encryptedMessage += reverseLookup;
        }
    }
    return encryptedMessage;
}

module.exports = {
    encrypt,
    decrypt,
}