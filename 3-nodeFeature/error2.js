const fs = require("fs");

setInterval(() => {
  fs.unlink("./abcdefg.js", (error) => {
    if (error) {
      console.error(error);
    }
  });
}, 1000);
