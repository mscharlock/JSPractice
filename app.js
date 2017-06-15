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


function Dress(buttons, color, skirtType) {
  this.buttons = buttons; 
  this.color = color; 
  this.skirtType = skirtType;
}; 

var eveningGown = new Dress(2, 'blue', 'fitted'); 
var sunDress = new Dress(0, 'red polka dots', 'A-line'); 
var businessSuit = new Dress(5, 'tweed', 'pencil skirt'); 

function Bird(from, color, age, name) {
  this.from = from; 
  this.color = color; 
  this.age = age; 
  this.name = name; 
}

var parrokeet = new Bird('the pet store', 'green', 0.5, 'Mr. Feathers'); 
var blueBird = new Bird('outdoors', 'blue', 3, 'none'); 
var ostrich = newBird('Australia', 'brown', 2, 'Fluffy'); 
var moa = newBird('a mysterious island', 'white', 'old', 'Indiana'); 

function Fish(hasfins, likesBloodworms, type) {
  this.hasfins = hasfins; 
  this.likeBloodworms = likesBloodworms; 
  this.type = type; 
}  

var angelfish = new Fish(true, true, 'Calico Angelfish');
var goldfish = new Fish(true, false, 'Googly-Eyed Goldfish'); 
var discus = new Fish(true, false, 'Blue Discus'); 
var zebra = new Fish(true, true, 'Zebrafish'); 
var goby = new Fish(true, false, 'Bluebacked goby'); 

function Wedding(venue, expensive, chickenOrFish, centerpieces, colorScheme, numberOfBridesmaids) {
  this.venue = venue; 
  this.expensive = expensive; 
  this.chickenOrFish = chickenOrFish; 
  this.centerpieces = centerpieces; 
  this.colorScheme = colorScheme; 
  this.numberOfBridesmaids = numberOfBridesmaids; 
} 

var beach = new Wedding('beach', false, 'chicken', 25, 'yellow and blue', 4); 
var katysWedding = new Wedding('barn, but a classy one', false, 'fish', 20, 'brown and gold', 9);
var castleWedding = new Wedding('castle', true, 'chicken and fish', 54, 'silver and pink', 15); 
var eloping = new Wedding('Venice', true, 'neither', 0, 'none', 0); 
                               
//Practicing Obj Literals//
var shirt = {
  sleeves: 2, 
  buttons: 0, 
  hasStripes: false, 
  goodForClubbing: false, 
  matchesPants: false
}

var calendar = {
  days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 
  months: ['January', 'February', 'March', 'April'], 
  newMoons: 1, 
  eclipses: false 
}

var chicken = {
  fried: true, 
  baked: false, 
  tasty: true, 
  tasteslike: 'chicken'
}
