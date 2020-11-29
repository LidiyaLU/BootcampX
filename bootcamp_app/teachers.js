const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


const cohortName = process.argv[2];

const text = 'SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort FROM teachers JOIN assistance_requests ON teacher_id = teachers.id JOIN students ON student_id = students.id JOIN cohorts ON cohort_id = cohorts.id WHERE cohorts.name LIKE $1 ORDER BY teachers.name';

const values = [`%${cohortName}%`];


pool.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    //console.log(res.rows[0]);

    res.rows.forEach(teach => {
           console.log(`${teach.teacher} : ${teach.cohort}`);
         })
  }
})
// .then(res => { 
//   res.rows.forEach(teach => {
//     console.log(`${teach.teacher} : ${teach.cohort}`);
//   })
//   //console.log(res);
// });