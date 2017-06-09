//Practicing constructors!//
'use strict';

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

var kia = new Car('Kia Sorrento', 2001, 30000);
var dodge = new Car('Dodge Challenger', 2015, 10000);

Car.prototype.goFast = true;

function Pet(type, age, name) {
  this.type = type;
  this.age = age;
  this.name = name;
}

var kitten = new Pet('Cat', 0.5, 'Toby');
var parrot = new Pet('Parrot', 25, 'Jolly Roger');
var lab = new Pet('Labrador Retriever', 8, 'Decker');
var turtle = new Pet('Freshwater Turtle', 2, 'Mr Tibbles');

function Store(salesToday, salesYesterday, mostPopularItem) {
  this.salesToday = salesToday;
  this.salesYesterday = salesYesterday;
  this.mostPopularItem = mostPopularItem;
}

var sears = new Store(200.96, 1400.45, 'lawnmowers');
var target = new Store(19678.01, 12345.87, 'goldfish crackers'); 
