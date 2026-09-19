"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;
const node_util_1 = require("node:util");
const node_crypto_1 = require("node:crypto");
const scrypt = (0, node_util_1.promisify)(node_crypto_1.scrypt);
async function hashPassword(password) {
    const salt = (0, node_crypto_1.randomBytes)(16).toString('hex');
    const key = (await scrypt(password, salt, 64));
    return `scrypt$16384$8$1$${salt}$${key.toString('hex')}`;
}
async function verifyPassword(password, hash) {
    if (typeof hash !== 'string') {
        return false;
    }
    const match = hash.match(/^scrypt\$16384\$8\$1\$([a-f0-9]{32})\$([a-f0-9]{128})$/);
    if (!match) {
        return false;
    }
    const salt = match[1];
    const storedKey = Buffer.from(match[2], 'hex');
    try {
        const derivedKey = (await scrypt(password, salt, 64));
        return (0, node_crypto_1.timingSafeEqual)(derivedKey, storedKey);
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=password.js.map