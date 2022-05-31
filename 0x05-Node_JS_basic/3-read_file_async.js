const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) reject(Error('Cannot load the database'));
      if (data) {
        const res = [];
        const file = data.toString();
        const lines = file.split('\n');
        let students = lines.filter((item) => item);
        const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
        const message = `Number of students: ${NUMBER_OF_STUDENTS}`;
        console.log(message);
        res.push(message);
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
            const message1 = `Number of students in ${t}: ${dict[t].length}. List: ${dict[t].join(', ')}`;
            console.log(message1);
            res.push(message1);
          }
        }
        resolve(res);
      }
    });
  });
}
module.exports = countStudents;
