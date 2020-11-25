SELECT SUM(duration.assignments) FROM students 
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
JOIN assignments ON assignments.id = assignment_submissions.assignment_id 
WHERE name = 'Ibrahim Schimmel';