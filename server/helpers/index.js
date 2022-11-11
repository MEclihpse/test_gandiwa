const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = `gandiwa`

const hashPass = (pass) => bcrypt.hashSync(pass, 10);
const comPass =  (pass, hash) => bcrypt.compareSync(pass, hash);
const signToken = (payload) => jwt.sign(payload, secretKey);
const verifToken = (token) => jwt.verify(token, secretKey)

module.exports = {
    hashPass, comPass, signToken, verifToken
}