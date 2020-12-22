const odd = "is odd";
const even = "is even";

// module.exports = {
//   odd,
//   even,
// };

exports.odd = "홀수입니다";
exports.even = "짝수입니다";
console.log(module.exports === exports);
