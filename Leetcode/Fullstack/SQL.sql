
-- DB is a library of content. Tables are books. Indexes are the dewey 
-- decimal system. 

-- Major SQL commands:
- SELECT 
- FROM 
- INNER JOIN / LEFT JOIN / RIGHT JOIN / FULL JOIN 
    table2 ON table1.id = table2.id  
- Conditional filters:
    - WHERE 
    - OR / AND 
    - GROUP BY : Groups rows that have the same vals into summary rows 
    - ORDER BY something ASC / DESC : Sorts rows by a col asc/ desc

-- Subqueries: Nested Query. Links data. Can subquery a couple times 
-- Very similar to a join
Ex: 
SELECT id, name, price FROM table1 
    WHERE price > 
    (SELECT AVG(price) FROM table1)


-- Select data from multiple tables:
SELECT * FROM table1, table2, table3


-- Ranking data in DESC or ASC order 
RANK() OVER (ORDER BY table.column DESC)


-- Select which products in a table match two specific col' vals
SELECT product_id FROM products
    WHERE low_fats = 'Y'
    AND recyclable = 'Y'


-- Count the uniq number of times something appears in the 
-- table 
SELECT date_id, make_name,
    COUNT(DISTINCT lead_id) AS unique_leads,
FROM DailySales 
GROUP BY 1, 2 -- We're combining rows, so we need this 


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


-- To find length of a char column 
SELECT tweet_id FROM tweets 
    WHERE CHAR_LENGTH(content) > 15
-- LENGTH() returns the length of the string measured in bytes.
-- CHAR_LENGTH() returns the length of the string measured in characters.
-- LENGTH("%") > 1 basically so CHAR_LENGTH if there's non-letter chars


-- Consolidating columns into a new column
SELECT event_day AS day, 
    emp_id,
    SUM(out_time - in_time) AS total_time 
FROM EMPLOYEES
GROUP BY 1, 2 -- This part lets us combine rows that match ID


-- Selecting the largest item
SELECT MAX(whatever) FROM Table 
-- Pick the 2nd largest item 
SELECT MAX(salary) FROM Employee 
    WHERE salary < ( SELECT MAX(salary) FROM Employee)
-- Finding the Nth largest from table 
SELECT * FROM 
    (SELECT id, col_nameToBeRanked, dense_rank()
    OVER (order by col_nameToBeRanked desc)r from 
    table_name)
where r = &n


-- Writing a function that takes in a parameter
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT 
BEGIN
    RETURN (
    
    );
END 


-- We want cols from both tables
-- We want info on rows in table1, even if null in table2 SO left join
SELECT Person.FirstName, Person.LastName, Address.City, Address.State FROM Person 
    LEFT JOIN Address
    ON Person.personID = Address.personID 


-- We want to return where manager makes less than employee
-- +----+-------+--------+-----------+
-- | Id | Name  | Salary | ManagerId |
-- +----+-------+--------+-----------+
-- | 1  | Joe   | 70000  | 3         |
-- | 3  | Sam   | 60000  | NULL      |
-- +----+-------+--------+-----------+
SELECT e1.name AS Employee FROM Employee e1, Employee e2
    WHERE e1.ManagerId = e2.ID 
    AND e1.salary > e2.salary; 
    

-- Find the highest salary within each category 
-- ID the cols I want and rename them 
SELECT Department.Name AS Department, Employee.Name AS Employee, Employee.Salary
    -- Pick the 2 tables
    FROM Employee 
    INNER JOIN Department 
    ON Employee.DepartmentId = Department.Id
    -- Limit based on 1 row
    WHERE Employee.salary = (
        -- Where we pick the max salary from table1
        SELECT MAX(Salary) FROM Employee
        -- That matches the cols name
        WHERE Employee.DepartmentID = 
            Department.id
    )


-- Delete duplicates 
DELETE a FROM Person a, person b
    WHERE a.email = b.email 
    AND a.id > b.id 


-- Three table join
SELECT 
    table1.name, table2.name, table3.day 
    FROM table1 
    JOIN table2 
        ON table1.id = table2.id 
    JOIN table3
        ON table3.id = table2.id 

-- IF statement / Update element 
UPDATE Salary 
SET 
    sex = CASE sex
    WHEN "m" THEN "f"
    ELSE "m"
END; 

