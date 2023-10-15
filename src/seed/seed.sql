INSERT INTO city (name, country) VALUES 
('Los Angeles', 'USA'),
('Toronto', 'Canada'),
('Tokyo', 'Japan'),
('Berlin', 'Germany'),
('Sydney', 'Australia');

INSERT INTO address (address, address2, postal_code, phone, city_id, last_update) VALUES 
('123 Main St', 'Apt 4B', '12345', '555-1234', 1, now()),
('456 Oak Rd', NULL, '67890', '555-5678', 2, now()),
('789 Pine Ave', 'Suite 1', '11223', '555-9123', 3, now()),
('101 Maple St', NULL, '23456', '555-2345', 4, now()),
('202 Elm St', 'Unit 2A', '34567', '555-3456', 5, now()),
('303 Birch St', 'Apt 303', '45678', '555-4567', 1, now()),
('404 Pine St', NULL, '56789', '555-5678', 2, now()),
('505 Cedar St', 'Apt 5B', '67890', '555-6789', 3, now()),
('606 Redwood St', NULL, '78901', '555-7890', 4, now()),
('707 Spruce St', 'Suite 707', '89012', '555-8901', 5, now()),
('808 Fir St', NULL, '90123', '555-9012', 1, now()),
('909 Oak St', 'Apt 909', '01234', '555-0123', 2, now());

INSERT INTO actor (first_name, last_name, address_id, last_update) VALUES 
('Emma', 'Watson', 1, now()),
('Chris', 'Evans', 2, now()),
('Scarlett', 'Johansson', 3, now()),
('Robert', 'Downey Jr', 1, now()),
('Jennifer', 'Lawrence', 2, now()),
('Leonardo', 'DiCaprio', 3, now()),
('Angelina', 'Jolie', 1, now()),
('Tom', 'Hanks', 2, now()),
('Dwayne', 'Johnson', 3, now()),
('Natalie', 'Portman', 1, now()),
('Hugh', 'Jackman', 2, now()),
('Cate', 'Blanchett', 3, now()),
('Johnny', 'Depp', 1, now()),
('Julia', 'Roberts', 2, now()),
('Morgan', 'Freeman', 3, now()),
('Charlize', 'Theron', 1, now()),
('Brad', 'Pitt', 2, now()),
('Meryl', 'Streep', 3, now()),
('Will', 'Smith', 1, now()),
('Sandra', 'Bullock', 2, now()),
('Ryan', 'Reynolds', 3, now()),
('Nicole', 'Kidman', 1, now()),
('Christian', 'Bale', 2, now());

