const fs = require('fs');

function countStudents(path) {
  let file;
  try {
    file = fs.readFileSync(`${path}`, { encoding: 'utf8' });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const line = file.split('\n');
  let students = line.filter((item) => item);
  const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
  students = students.slice(1);
  const dict = {};
  students.forEach((val) => {
    const rec = val.split(',');
    const key = rec[3];
    if (!(key in dict)) {
      dict[key] = [];
    }
    dict[key].push(`${rec[0]}`);
  });
  for (const t in dict) {
    if (t) {
      console.log(`Number of students in ${t}: ${dict[t].length}. List: ${dict[t].join(', ')}`);
    }
  }
}
module.exports = countStudents;
