-- HckRnk certs Qs : good practice for pair programming thing
-- I'm googling a lot, not ideal, but learning bits and pieces 

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


-- Find the skus/ products that are in left table but not in the right table 
SELECT a.sku, a.product_name FROM product AS a
    WHERE NOT EXISTS (
        SELECT a.id
        FROM invoice_item AS b
        WHERE a.id = b.product_id
    );
    

-- Need to study multiple table joins, like 4 tables getting info from 

/*
SQL intermediate question #2 
-- YA IDK, but I need to know this

Product sales per city 

Supposed to get total $$$ spent on product in each city 
or something like that. But multiple tables/ joins needed
*/


SELECT * FROM city as a
    INNER JOIN FROM customer as b
    ON a.id = b.city_id
    
SELECT * FROM customer as c
    INNER JOIN from invoice as d 
    ON c.id = d.customer_id 

SELECT * FROM invoice as e 
    INNER JOIN from invoice_item as f 
    ON e.id = f.invoice_id
    
SELECT * FROM invoice_item as g 
    INNER JOIN from product as h
    ON g.product_id = h.id 
    
    