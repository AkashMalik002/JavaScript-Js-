// JavaScript source code
//Objects
const circle = {
	radius:1,
	location: {
		x:1,
		y:1
	},
	isVisble:true,
	draw: function() {
		console.log('draw');
	}
};
circle.draw();
//1) Factory functions
//...Continued
//Produce Objects
// function createCircle(){
	// return {					// return in place of circle 
		// radius:1,
		// location: {
			// x:1,
			// y:1
		// }
		// isVisble:true,
		// draw: function() {
			// console.log('draw');
		// }
	// };
// }	
// Modification ----------------------
function createCircle(radius){	// In Function Naming Factory Camel Case naming is used
	 return {					// return in place of circle 
		 radius,
		 draw() {
			 console.log('draw');
		 }
	 };
 }

const circle1 = createCircle(1);		// return new object
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);
//==========================================
//2) Constructor functions
// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour
function Circle(radius){			// In Constructor Function naming we use Pascal Notation
	this.radius = radius;
	this.draw = function(){
		console.log('draw');
	}
}								//return this
const circle3 = new Circle(1);		//use a new operator and used this keyword
//==============================================================================
//3) Dynamic nature of objects
const circle_1 = {
	radius:1
};
circle_1.color = 'yellow';
circle_1.draw = function() {}
console.log(circle_1);
delete circle_1.color;
delete circle_1.draw;
console.log(circle_1);
//==============================================================================
//4) Constructure Proerties
// In console
// another.constructor		// Function
// circle.constructor		// Object

//let x = new Object();
let x = {};

new String();	//'',"",``
new Boolean();	//true, false
new Number();	//1,2,3......
//==============================================================================
//5) Functions are Objects

function Circle(radius){			
	this.radius = radius;
	this.draw = function(){
		console.log('draw');
}								//return this
const another = new Circle(1);
// IN console
// Circle.name				//"Circle"
// Circle.length			//1
// Circle.constructor		//Function

const circle_2 = new Function('radius',`
this.radius = radius;
this.draw = function(){
	console.log('draw');
}
`);
const Tcircle = new circle_2(1);
// In console -> circle = {radius:1, draw:f()}
//---------------------------
// Line 82
Circle.call({},1);
Circle.apply({},[1, 2, 3]);
//==============================================================================
//6) Value vs Reference Types
// Primitive or Value Types -> Number, String, Boolean, Symbol, undefined, null
// Reference -> Objects, Function, Array

let x =10;
let y=x;
x=20;
console.log(x,' ',y);		// x & y inependent of each other. Value type

let a = {value:10};
let b= a;
x.value = 20;
console.log(x,' ',y);		// x store address of value and value store 10, like a pointer. -> Reference type
//-------------------------------------
let number =10;
function increase(number) {
	number++;
}
increase(number);
console.log(number);		// Value type or Primitive

let obj = { value:10};
function increase(obj) {
	obj++;
}
increase(obj);
console.log(obj);			// Reference type or Object.

//==============================================================================
//7) Enumerating Properties of an Object.

const circle_3 = {
	radius:1,
	draw() {
		console.log(key, circle_3[key]);
	}
};

for (let key in circle_3)			// Better approach
	console.log(key,circle_3[key]);

// for (let key of circle_3)		//Error:- circle_3 is not iterabe
	// console.log(key)

for(let key of Object.keys(circle_3))	// function Object() {}
	console.log(key);

for(let entry of Object.enteries(circle_3))	
	console.log(entry);

if ('radius' in circle) console.log('yes');
if ('color' in circle) console.log('yes');
//==============================================================================
//8) Cloning an Object.

const circle_4 = {
	radius:1,
	draw() {
		console.log(key, circle_3[key]);
	}
};

const another_1 = {};						// quite old approach
for (let key in circle_4)				// quite old approach
	another_1[key] = circle_4[key];

//another['radius'] = circle_4['radius'];
console.log(another_1);
//-------------------------

const another1 = Object.assign({}, circle_4);	//current approach.
console.log(another);
const another2 = Object.assign({				// adding a property
	color:'yellow'
}, circle);
console.log(another2);
//-------------------------
const another3 = {...circle };				// Simplest way to clone an object
console.log(another3);
//==============================================================================
//9) Garbage collection -> Javascript Engine

// let circle = {};
// console.log(circle);
//==============================================================================
//10) Math 		// Online docs recommended
// Some Few Build In objects in JavaScript
// like Math.PI(x), Math.abs(x), Math.floor(x), etc...
// In console window
// Math.random()
// Math.round(1.9)
// Math.max(1,2,3,4,5)
// Math.min(1,2,3,4,5)
//==============================================================================
//11) String 		//online docs
 
 //string Primitive
 const message = 'This is y first message';
 
 //string object
 const another4 = new String('hi');
 // Inconsole
// message.length				//24
// message[0]					//"T"
// message[1]					//"h"
// message.includes('my')		//true
// message.includes('not')		//true
// message.startsWith('This')	//true
// message.startsWith('this')	//false
// message.endsWith('e')			//true
// message.indexOf('my')			//8
// message.replace('first','second')	// changebut not in main message
// message					
// message.toUpperCase()		// all to upper case
// message.trim()				// remove space before and after message
// message.trimLeft()

//-----Escape Notation
const msg = 'This is my \'first message';
const msg1 = 'This is my\n first message';
// In console
message.split(' ')

//==============================================================================
//12) Template Literals

//Object -> {}
//Boolean -> true, false
//string -> '',"
// Template -> `` 
const ant = 
`This is my
first message`;
console.log(ant);

const name = 'John';
const message1 = 'Hi' + name + ',\n';
const another5 = 
`Hi ${name},

Thank you for joining my mailing list.

Best Regards,
AKASH`;
console.log(another5);
//==============================================================================
//13) Dates		//online docs

const now = new Date();		//different versions
const date1 = new Date('May 11 2018 09:00');
// const date2 new Date(2018,4,11,9,0);			//0-Jan, 04-May
// const date new Date(2018,4,11,9);			

now.setFullYear(2017);
// In console
// now.toDateString()
// now.toTimeString()
// now.toISOString()
console.log(date1);
//--------------------------------------------------------------------
