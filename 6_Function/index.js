// JavaScript source code
//Functions
//========================================
//1) Function Declarations vs Expressions
//Function Declarations
function walk(){
	console.log('walk');
}	// or };

//Function Expressions
// let run = function() {};
// Anonymous Function Expression
let run = function() {
	console.log('run');
};
run();
let move = run;
move();

//==========================================
//2) Hosting 
walk1();
function walk1(){
	console.log('walk');
}	// or };

//  Function call and then declared 
// same thing cannot do with function expression we get the error.

//==========================================
//3) arguments 

 function sum (a,b){
	return a+b;
 }
console.log(sum(1,2));
console.log(sum(1));
//1 + Undefined = NaN
console.log(sum(1,2,3,4,5));

 function sum1 (a,b){
	 console.log(arguments);
	return a+b;
 }
console.log(sum1(1,2,3,4,5));
//------------------------
function sum2 (){
	 let total = 0;
	 for (let value of arguments)
		 total += value;
	 console.log(arguments);
	return total;
}
console.log(sum2(1,2,3,4,5));
//==========================================
//4) The Rest Operator
// Rest parameter must be at the last in the Function
function sum3 (...args){
	 let total = 0;
	 for (let value of arguments)
		 total += value;
	 console.log(arguments);
	return total;
}
console.log(sum3(1,2,3,4,5));
//-------------------- modified
function sum4 (...args){
	 return args.reduce((a,b) => a+b);
}
console.log(sum4(1,2,3,4,5));
function sum5 (discount, ...prices){
	 let total = prices.reduce((a,b) => a+b);
	 return total *(1- discount);
}
console.log(sum5(0.1,20,30));
//*******************

//==========================================
//5) Default parameters

function interest (principal, rate, years){
	return principal*rate/100*years; 
}
console.log(interest(1000,3.5,5));

//deafualt idea
// function interest (principal, rate, years){
	// rate = rate ||3.5;
	// years = years ||5;
	// return principal*rate/100*years; 
// }
function interest2 (principal, rate=3.5, years=5){
	 return principal*rate/100*years; 
 }
console.log(interest2(1000));

function interest3 (principal, rate=3.5, years){
	 return principal*rate/100*years; 
 }
console.log(interest3(1000,undefined,5));

//==========================================
//6) Getters and setters

const person ={
	fName: 'Akash',
	LName: 'Malik',
	fullName() {
		return `${person.fName} ${person.LName}`;
	}
};
person.fullName = 'shubham survase';
console.log(person);

//gettters => access properties
// setters => change (mutate) them

const person1 ={
	fName: 'Akash',
	LName: 'Malik',
	get fullName() {
		return `${person1.fName} ${person1.LName}`;
	},
	set fullName(value) {
		const parts = value.split(' ');
		this.fName = parts[0];
		this.LName = parts[1];
	}
};
person.fullName = 'mohan pandey';
console.log(person);

//==========================================
//7) Try and Catches -- Error Handling

// const person2 ={
	// fName: 'Akash',
	// LName: 'Malik',
	// get fullName() {
		// return `${person2.fName} ${person2.LName}`;
	// },
	// set fullName(value) {
		// if (typeof value!== 'string')
			// throw new Error('value is not a string.');
		// const parts = value.split(' ');
		// if(parts.length!==2)
			// throw new Error('Enter first and last name');
		// this.fName = parts[0];
		// this.LName = parts[1];
	// }
// };
// try{
	// person2.fullName = null;
// }
// catch (e){
	// //alert(e);
	// throw e;
// }
// console.log(person2);

//==========================================
// 8) Local vs global Scope
// {
	// const msg  = 'hi'
// }
// console.log(msg);	//error
const color = 'red';	//global
function start () {
	const msg = 'hi';
	const color = 'blue';		//Local
	console.log(color);
}
start();

//==========================================
// 9) Let Vs Var
// varible scope out the fucntion may exist and can create issue

function start1() {
	for (var  i=0;i<5;i++)
		console.log(i);
	console.log(i);
}
start1();
//var -> It is generally function scope not block scope work in functions not in block
//Before Es6 version

var color = 'red';
var age = 30;

//==========================================
// 10) The 'this' keyword

//method -> Object
//function -> global(window,global)

const video = {
	title: 'a',
	play() {
		console.log(this);
	}
};
video.stop = function() {
	console.log(this);
};

video.play();
video.stop();

function Video(title) {
	this.title = title;
	console.log(this);
}
const v = new Video('b'); //{}
//-------------------------------
const video1 = {
	title: 'a',
	tags: ['a','b','c'],
	showTags() {
		this.tags.forEach(function(tag) {
			console.log(this.title, tag);
		}, this);
	}
};

video.showTags();

//==========================================
// 11) Changing the value of 'this' 

const video2 = {
	title: 'a',
	tags: ['a','b','c'],
	showTags() {
		const self = this;
		this.tags.forEach(function(tag) {
			console.log(this.title, tag);
		}, this);
	}
};

video2.showTags();
//-----------------------------------
function playVideo() {
	console.log(this);
}
//call, apply method
playVideo.call({name: 'raina'});
playVideo.apply({name: 'akash'});

playVideo();

function playVideo2(a,b) {
	console.log(this);
}

playVideo2.call({name: 'raina'},1,2);
playVideo2.apply({name: 'akash'},[1,2]);
playVideo2.bind({name: 'satendar'})();

playVideo2();
//---------------------------------------
const video3 = {
	title: 'a',
	tags: ['a','b','c'],
	showTags() {
		this.tags.forEach(function(tag) {
			console.log(this.title, tag);
		}.bind(this));
	}
};
video3.showTags();
//modified
const video4 = {
	title: 'a',
	tags: ['a','b','c'],
	showTags() {
		this.tags.forEach(function(tag => {
			console.log(this.title, tag);
		});
	}
};
video4.showTags();

//##############################################################################
//##############################################################################
//##############################################################################