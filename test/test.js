let encryption = require('../index');
let assert = require('chai').assert;
let sampleText = "asdfghjkl";

describe("Encryption test",function () {
    let temp;
    it('Encryption test', function () {
        temp = encryption.encrypt(sampleText);
        assert.notStrictEqual(temp,null,"Encryption error");
    });
    it('Decryption test', function () {
        let decrypted = encryption.decrypt(temp);
        assert.strictEqual(decrypted,sampleText,"Decrypted text does not match the original text");
    });
});