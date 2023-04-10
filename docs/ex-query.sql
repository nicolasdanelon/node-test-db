-- Query to bring all the data
select * from people;

-- query to add a person
insert into people (name, age)
VALUES ("Jesús", 25);

-- Query to bring id and name from people
select id, name
from people;

-- get only grater than 2
select id, name
from people
where id > 2;

-- update an entry or a row
update people
set    name = "Jerry"
where  id = 4;

-- delete a record
delete from people
where id = 3;

-- create table
create table products (
  name  TEXT,
  price integer,
  id    integer autoincrement primary key
);
