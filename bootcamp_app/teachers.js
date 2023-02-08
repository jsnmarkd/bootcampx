const { Pool } = require("pg");

const pool = new Pool({
  user: "jdivinagracia",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const [cohort] = process.argv.slice(2);

pool
  .query(
    `
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id =student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = '${cohort || 'JUL02'}'
ORDER BY teachers.name;
`
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(`${user.cohort}: ${user.teacher}`);
    });
  })
  .catch((err) => console.error("query error", err.stack));