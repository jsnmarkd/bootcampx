-- how to get the total submissions for currently enrolled students,
-- Let's only return currently enrolled students who's total submissions are less than 100 

SELECT students.name as student, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING count(assignment_submissions.*) < 100;