// // var name = "john";
// // console.log(name)

// // var lastName = 'smith';
// b  // console.log(lastName)

// var age = 26;
// console.log(age)

// // var fullAge = true;
// // console.log(fullAge)

// Lecture: variables 2


// var name = 'john ';
// var age = 26;
// // console.log(name + age)
// // console.log(age + age)

// var job, isMarried;


// job = 'teacher';
// isMarried = false

// console.log(name + 'is ' + age + " years old " + job + ', Is he married? ' + ' ' + isMarried + ".")

// age = 'thirty six';
// job = 'driver';

// console.log(name + 'is ' + age + " years old " + job + ', Is he married? ' + ' ' + isMarried + ".")

// //var lastName = prompt('what is the last name?')

// //console.log(lastName);

// alert(name + 'is ' + age + " years old " + job + ', Is he married? ' + ' ' + isMarried + ".")

// Lecture  : operators======================================


// var now = 2016
// var birthYear = now - 26;

// birthYear = now - 26 * 2;
// //2016 -52
// //1964 

// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;

// ageJohn = ageMark = (3 + 5) * 4 - 6;
// //ageJohn = ageMark = 26
// //ageJohn = 26

// ageJohn++;
// ageMark *= 2;
// ageMark = ageMark * 2;

// console.log(ageJohn);
// console.log(ageMark)

// Lecture: if/else statments===============================

// var name = 'john';
// var age = 26;
// var isMarried = 'yes';

// if (isMarried === 'yes') {
// 	//if (false)
// 	console.log(name + ' is married!');

// }else{
// 	console.log(name + ' will hopefully marry soon');
// }

// isMarried = false;

// if (isMarried) {
// 	console.log('YES');
// } else{
// 	console.log('no')
// }

// if (23 === '23') {
// 	console.log('something to print')
// }else{
// 	console.log('nothing')
// }

////////Lecture: boolean logic and switch============

// var age = 20

// if (age < 20) {
// 	console.log('john is a teenager')

// } else if(age >= 20 && age < 30) {
//    console.log('john is a young man')
// }
// else{
// 	console.log('john is a man')
// }

// var job = prompt('what does john do?')
// 	switch(job){
// 		case 'teacher':
// 			console.log('John teaches kids.');
// 			break
// 		case 'driver':
// 			console.log('john drives a cab in lisbon');
// 			break
// 		case 'cop':
// 			console.log('John helps fight crime');
// 			break
// 		default:
// 		console.log('john does something else')
// }

//coding challenge 1=========================

// var johnHeight = 150
// var johnAge = 25
// var markHeight = 229
// var markAge = 20

// johnTotal = johnHeight + (johnAge * 5)
// markTotal = markHeight + (markAge * 5)

// if (markTotal > johnTotal) {
// 	console.log('mark wins! ' + markTotal + ' points!')
// }
// else if(johnTotal < markTotal){
// 	console.log('john wins! ' + johnTotal + ' points!')
// } else{
// 	console.log('it/s a draw')

// }

////////////////functions////////////////
//its like a container of code you would like to keep using over and over again
// function calculateAge(yearOfBirth){
// 	var age = 2016 - yearOfBirth;
// 	return age;
// }

// var ageJohn  = calculateAge(1990);
// var ageMark = calculateAge(1969);
// var ageMary = calculateAge(1948);
// //console.log(ageMary);

// function yearsUntilRetirement(name, year){
// 	var age = calculateAge(year);
// 	var retirement = 65 - age;
// 	if (retirement >= 0) {
// 			console.log(name + 'retires in ' + retirement + ' years.');
// 	}else{
// 		console.log(name + ' is already retired')
// 	}
// }

// yearsUntilRetirement('john', 1990);
// yearsUntilRetirement('mike', 1969);
// yearsUntilRetirement('mary', 1948);
/////////////////function expressions/statments

// function someFun(par){
// 	//code
// }

// var someFun = function(par){
// 	//code
// }
// //Expressions
// 3 + 4;
// var x = 3;

// //statements
// if (x===5) {
// 	//do something
// }

//////////////////////////////arrays

// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// names[1] = 'ben';
// console.log(names);

// var john = ['john', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.');
// john.pop();
// john.shift();
// console.log(john)
// //shows number in the order of the array
// alert(john.indexOf('Smith'));

// if(john.indexOf('teacher') === -1 ){
// 	console.log('john is not a teacher.')

// }

/////////lecture: Objects

// var john = {
// 	name: 'John',
// 	lastName: 'Smith',
// 	yearOfBirth: '1990',
// 	job: 'teacher',
// 	isMarried: false
// };

// console.log(john.lastName);

// var xyz = 'job';
// console.log(john[xyz]);

// john.lastName = 'miller';
// john['job'] = 'programmer';
// console.log(john)

// var jane = new Object();
// jane.name = 'jane';
// jane.lastName = 'Smith';
// jane.yearOfBirth = 1969;
// jane.job = 'retired';
// jane.isMarried = true

// console.log(jane)
//////////////Objects and object methods//////////////
//v1.0
/*
 var john = {
 	name: 'John',
 	lastName: 'Smith',
 	yearOfBirth: '1990',
 	job: 'teacher',
 	isMarried: false,
 	family:['Jane', 'Mark', 'Bob'],
 	calculateAge: function(){
 		return 2016 - this.yearOfBirth;

 	}
};
*/
//console.log(john.calculateAge(1970));
// console.log(john.calculateAge())

// var age = john.calculateAge();
// john.age = age;
// console.log(john)

// //v2.0
// var john = {
// 	//properties
//  	name: 'John',
//  	lastName: 'Smith',
//  	yearOfBirth: '1990',
//  	job: 'teacher',
//  	isMarried: false,
//  	family:['Jane', 'Mark', 'Bob'],
//  	//method
//  	calculateAge: function(){
//  		this.age = 2016 - this.yearOfBirth;
//  	}
// };

// john.calculateAge();
// console.log(john)

////////////lecture: loops

// for (var i = 0; i < 5; i++) {
// 	console.log(i)
// }

//var names = ['john', 'jane', 'mary', 'mark', 'bob'];
//for loops

// for (var i = 0; i < names.length; i++) {
// 	console.log(names[i]);
// }
// for (var i = names.length - 1 ;i >= 0; i--) {
// 	console.log(names[i]);
// }

//while loops
// var i = 0;
// while(i < names.length){
// 	console.log(names[i]);
// 	i++;
// }

// for (var i = 1; i <= 5; i++) {
// 	console.log(i);
// 	if (i === 3) {
// 		continue;
// 	}
// 	console.log(i)
// }

////////coding challenge 2//////////////

///had some trouble writing it out, for the most part i understand it. writing out the syntax is pretty tough

	

function printFullAge(years){
	var ages = []	
	var fullAges = [];

for (var i = 0; i < years.length; i++) {
	ages[i] = 2016 - years[i];


}
for (var i = 0; i < ages.length; i++) {
	if(ages[i] >= 18) {
		console.log('Person ' + (i + 1) + ' is ' + ages[i] +  ' years old, and is of full age')
		fullAges.push(true)
	}else{
		console.log('Person '+ (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age')
		fullAges.push(false)
		}

	}

	return fullAges;

}
var years = [1982 , 1978, 1989, 1992, 1923]

var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1987, 1932])












			