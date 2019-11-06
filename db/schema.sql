drop database if exists burgerDB;

create database burgerDB;
use burgerDB;

create table burgers (
id int not null auto_increment,
burger varchar(40) not null,
devoured boolean not null,
primary key (id)
);