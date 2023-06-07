create database restaran;

use restaran;
create table region (
    id int primary key,
    name varchar(50)
);

create table menyular(
    id int primary key auto_increment,
    restaran_id bigint,
    ovqat_id bigint,
    price bigint
);

create table buyurtmalar(
    id int primary key auto_increment,
    menyu_id bigint,
    mijozlar_id bigint,
    yetkazuvchilar_id bigint,
    quantity varchar(50)
);

create table restarans(
    id int primary key auto_increment,
    name varchar(50),
    location varchar(50),
    phone bigint
);

create table mijozlar(
    id int primary key auto_increment,
    name varchar(50),
    phone varchar(50),
    location varchar(50)
 
);

create table yetkazuvchilar(
    id int primary key auto_increment,
    name varchar(50),
    phone int
);


show tables;