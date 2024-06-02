// JavaScript source code
console.log('Hello World');

//1) Variable -> to store and use temoprarly
//Naming rule 
// -> Cannot be resered Keyword
// -> Should be meaningful
// -> Cannot start with a number (Ex:- 1name)
// -> Cannot contain a space or hypen (-)
// -> Are Case-Sensitive

// let fName = 'Akash';		//fName -> firstName(Camel Notation)
// let lName = 'Malik';
// console.log(fName + ' '+ lName);
//==============================================================
//2) Constant
// let interestRate = 0.3;
// interestRate =1;
// console.log(interestRate);

// const interestRate_1 = 0.3;
// console.log(interestRate_1);
// interestRate_1 = 1;				// Uncomment tthis and next line while reading Constant
// console.log(interestRate_1);		//Error
//==============================================================
//3) Primitive Types :- Types(Primitive/value Types and Referrence Types)
// Primitive Type:- String, Number, boolean, undefined, null //Symbol
// let name = 'akash';			//String literal
// let num = 24;				//Number literal
// let isApproved = true;		//Boolean literal
// let firstName; 					//undefined , let fName = undefined;
// let lName = null;			//null
//==============================================================
//4) Dynamic Typing:- (Language :- Dynamic, Static)
// In console 
// -> typeof name
// -> type of num
// -> typeof firstName
// -> typeof selectedcolor
//==============================================================
//5) Object:-
let Person = {
	name: 'akash',
	rollno: 24
}
console.log(Person);
// DOt and Bracket Notation
Person.name = 'AMAN';		//Dot Notation
console.log(Person.name);
Person['name'] = 'Mary';	//Bracket Notation
console.log(Person.name);
let select = 'name';
Person[select] = 'Mary';
//==============================================================
//5) Array:-
let scolor = ['red','blue'];
console.log(scolor);
console.log(scolor[0]);
scolor[2] = 'green';
console.log(scolor);
console.log(typeof(scolor));
scolor[2] = 1;
console.log(scolor);
console.log(typeof(scolor));
console.log(scolor.length);
//==============================================================
//5) Function:-
//1
function greet() {
	console.log('Hello World');
}
greet();
//2
function greet(name){
	console.log('Hello '+ name);
}
greet('Akki');
greet('Marry');
//3
function greet(name, lname){
	console.log('Hello'+name+' '+lname);
}
greet('Akki','malik');
greet('Mary');

//Calculating a value Function
function square(number) {
	number*number;
}
square(4);
//OR
let n = square(5);
console.log(n);
//OR
console.log(square(2));
