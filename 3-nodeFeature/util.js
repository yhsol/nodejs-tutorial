const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "don't use me!");
dontUseMe(1, 2);

const randomBytestPromise = util.promisify(crypto.randomBytes);
randomBytestPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((error) => {
    console.error(error);
  });
