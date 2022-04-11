module.exports.getFiles = async () => {
  return {
    files: ["file-1.txt", "file-2.txt"],
  };
};

const details = {
  0: "file-1.txt details has been showed!",
  1: "file-2.txt details has been showed!",
};

module.exports.getFileContents = async (idx) => {
  return details[idx];
};
