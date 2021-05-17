

-- Join two tables on ID, filter out the aggregate score over 100 
-- Return ID and name
SELECT a.roll_number, a.name FROM student_information AS a
    INNER JOIN examination_marks AS b
    ON (a.roll_number = b.roll_number)
GROUP BY a.roll_number
HAVING sum(b.subject_one + b.subject_two + b.subject_three) < 100

-- Join two tables on ID, concat country code from table A and phone num from table B
SELECT a.customer_id, a.name, CONCAT("+", b.country_code, a.phone_number) FROM customers AS a
    INNER JOIN country_codes AS b
    ON a.country = b.country 
