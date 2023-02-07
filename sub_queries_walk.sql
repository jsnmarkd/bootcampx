-- Get the total number of assignments

SELECT count(*)
FROM assignments;
-- result: 424

-- Get the total number of in complete assignment submissions for a student

SELECT (
  SELECT count(assignments)
  FROM assignments
)-count(assignment_submissions) as total_incomplete
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
-- 303

SELECT (
  SELECT count(*)
  FROM table_name
) as total, other_column
FROM other_table_name
ORDER BY total;

SELECT * FROM (
  SELECT something_id
  FROM someTable
  WHERE something
) as sub_table;

--

SELECT count(students)
FROM students
JOIN cohorts on cohorts.id = cohort_id
GROUP BY cohorts;

SELECT avg(total_students) as average_students
FROM (
  SELECT count(students) as total_students, cohorts.name as cohort_name
  FROM students
  JOIN cohorts on cohorts.id = cohort_id
  GROUP BY cohorts.name
) as totals_table;

SELECT * FROM table
WHERE id IN (
  SELECT something_id
  FROM someTable
  WHERE something
);