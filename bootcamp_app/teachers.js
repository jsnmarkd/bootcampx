const { Pool } = require("pg");

const pool = new Pool({
  user: "jdivinagracia",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const cohortName = process.argv[2];
const values = [`${cohortName}`];

pool
  .query(
    `
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id =student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY teachers.name;
`
  , values)
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(`${user.cohort}: ${user.teacher}`);
    });
  })
  .catch((err) => console.error("query error", err.stack));
