create table houses (
id serial primary key,
name varchar(30),
address varchar(100),
city varchar(100),
state varchar(2),
zip integer
)

insert into houses (name, address, city, state, zip)
values('Duplex', '555 Apple Way', 'Provo', 'UT', 87654), 
('Fourplex', '7654 Tree Road', 'Provo', 'UT', 87383),
('Rambler', '848 Fir Lane', 'North Pole', 'AK', 43234), 
('Ranch', '876 Blossom Way', 'Spanish Fork', 'UT',87635)

alter table houses
add column img text,
add column mortage decimal,
add column rent decimal