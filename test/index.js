const pad = require("../index.js");
const { expect } = require("chai");

const key = "MUOZDMKRMIMDFRDEUDQDDJIKBMVIKDVXWDFUBTGV";
const keyWithNumbers = "MUOZDM12345DFRDEUDQDDJIKB98632XWDFUBTGV";

describe("OneTimePad", () => {
    it("Should encrypt a message with regular key", () => {
        const message = "This is a secret message: hello, world!";
        const encryptedMessage = pad.encrypt(message, key);
        expect(encryptedMessage).to.eq("GC7SVFUK1UER9ER7NN7RD1W6WBVF95HBW");
    });

    it("Should encrypt a message with a key containing numbers", () => {
        const message = "This is a secret message: hello, world!";
        const encryptedMessage = pad.encrypt(message, keyWithNumbers);
        expect(encryptedMessage).to.eq("GC7SVFBUHGWR9ER7NN7RD1W6WX83RTJAD");
    });

    it("Should decrypt a message with regular key", () => {
        const message = "GC7SVFUK1UER9ER7NN7RD1W6WBVF95HBW";
        const decryptedMessage = pad.decrypt(message, key);
        expect(decryptedMessage).to.eq("THISISASECRETMESSAGEHELLOWORLD");
    });

    it("Should decrypt a message with a key containing numbers", () => {
        const message = "GC7SVFBUHGWR9ER7NN7RD1W6WX83RTJAD";
        const decryptedMessage = pad.decrypt(message, keyWithNumbers);
        expect(decryptedMessage).to.eq("THISISASECRETMESSAGEHELLOWORLD");
    });
});
