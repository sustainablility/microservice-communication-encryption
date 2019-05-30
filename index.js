let crypto = require('crypto');
let config = require('../../config');

/**
 * Encrypt data
 * @param data
 * @returns encrypted data.
 * return null means error.
 */
function encrypt(data){
    try {
        let cipher = crypto.createCipheriv('aes-128-cbc', config.encryption.key, config.encryption.iv);
        let crypted = cipher.update(data, 'utf8', 'binary');
        crypted += cipher.final('binary');
        crypted = new Buffer(crypted, 'binary').toString('base64');
        return crypted;
    }catch (e){
        return null;
    }
}

/**
 * Decrypt data
 * @param crypted data
 * @returns decrypted data
 * return null means error
 */
function decrypt(crypted){
    try {
        crypted = new Buffer(crypted, 'base64').toString('binary');
        let decipher = crypto.createDecipheriv('aes-128-cbc', config.encryption.key, config.encryption.iv);
        let decoded = decipher.update(crypted, 'binary', 'utf8');
        decoded += decipher.final('utf8');
        return decoded;
    }catch (e){
        return null;
    }
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;