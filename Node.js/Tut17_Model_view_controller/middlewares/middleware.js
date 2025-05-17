const fs = require("fs");

function writeLogs(fileName) {
  return (req, res, next) => {
    const date = new Date();
    const logString = `Timestamp: ${Date.now()}: Date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} IP Adress:  ${req.ip} Method: ${req.method} Path: ${req.path}\n`;
    fs.appendFile(fileName, logString, (err) => {
      if (err) {
        console.error(err);
      }
    });
    next();
  };
}

module.exports = writeLogs;