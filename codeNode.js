//!the fs.writeFile() method replaces the specified file and content:
var fs = require("fs");
fs.writeFile("index.js", "hello content", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File written successfully!");
  }
});
//?The fs.appendFile() method appends the specified content at the end of the specified file:
fs.appendFile("index.js", "I am good ", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File written successfully!");
  }
});
//?delete file
/*fs.unlink("index.js", (err) => {
  if (err) {
    console.error("Error deleting to file:", err);
  } else {
    console.log("File deleted successfully!");
  }
});*/

//?rename file using nodejs
fs.rename("node.js", "nodeTest.js", (err) => {
  if (err) {
    console.error("Error renaming to file:", err);
  } else {
    console.log("File renamed successfully!");
  }
});

//opern file
//?The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
fs.open("index.js", "w", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File written successfully!");
  }
});

//The fs.readFile() method is used to read files on your computer.
fs.readFile("callstack.js", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File written successfully!");
  }
});
