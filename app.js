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


function Key(toWhat, alsoOpens) {
  this.toWhat = toWhat;
  this.alsoOpens = alsoOpens;
}

var carKey = new Key('car', 'garage');
var houseKey = new Key('house', 'garage');
var gardenKey = new Key('house', 'turns off alarm system');

function Cake(frosting, fruit, color, flavor) {
  this.frosting = frosting;
  this.fruit = fruit;
  this.color = color;
  this.flavor = flavor;
}

var peachCake = new Cake('lemon', true, 'peach', 'peach');
var kirschCake = new Cake('chocolate', true, 'brown', 'cherries and chocolate');
var fruitCake = new Cake('none', true, 'multicolored', 'fruits/nuts');

function Pony(fast, cute, hungry) {
  this.fast = fast;
  this.cute = cute;
  this.hungry = hungry;
}

var lulubelle = new Pony(true, true, true);
var buttercup = new Pony(false, false, true);
var cocolala = new Pony(false, true, true);

function Salad(type, dressing, cost, nuts) {
  this.type = type;
  this.dressing = dressing;
  this.cost = cost;
  this.nuts = nuts;
}

var cobb = new Salad('Bob\'s famous cobb salad', 'ranch', 9.95, false);
var threeBean = new Salad('Three Bean Salad', 'none', 2.99, false);
var walnut = new Salad('Walnut Chicken salad', 'creamy balsamic', 14.32, true);

Salad.prototype.eat = console.log('You ate a salad!');
