const fs = require('fs').promises;

const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

const main = async () => {
  try {
    const writePromises = strings.map((str, idx) => fs.writeFile(`./ex5files/${fileNames[idx]}`, str));

    await Promise.all(writePromises);
  
    const readPromises = fileNames.map((fileName) => fs.readFile(`./ex5files/${fileName}`, 'utf8'));

    const allStrings = await Promise.all(readPromises);

    fs.writeFile('./ex5files/fileAll.txt', allStrings.join(' '));
  } catch (err) {
    console.log(err);
  }
};

main();