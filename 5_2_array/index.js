// JavaScript source code
//Arrays:-

//1) Adding Element:-
const numbers = [3,4];
//End	-> add Element in the end
numbers.push(5,6);
console.log(numbers);
//Begging -> add element at the begging
numbers.unshift(1,2);
console.log(numbers);
//Middle -> add element at the middle(position,no of element to delete, values)
numbers.splice(2,0,'a','b');
console.log(numbers);

//===========================================================
//2) Finding elements(Primitive)
const num = [1,2,3,1,2,4];
//indexOf find element in array
console.log(num.indexOf('a'));		//-1
console.log(num.indexOf(2));		//1 returnig position of the value
console.log(num.indexOf('2'));		//-1  bc, here it is a string

//lastIndexOf -> last location/index of the element in the array
console.log(num.indexOf(1));		// 3

// console.log(num.indexOf(1) !== -1);	// true
console.log(num.includes(1));		//true

console.log(num.indexOf(1,2));		//3 //(1,2)-> (element, location where starts finding)

//===========================================================
//3) Finding elements(Reference Types) or Object 

const courses = [
{ id:1, name:'a'},
{ id:2, name:'b'},
];

const c1 = courses.find(function(course){
	return courses.name === 'a';		//courses.name === 'a';
});
console.log(c1);
const c2 = courses.find(function(course){
	return courses.name === 'xyz';
});
console.log(c2);		//undefined
//index
const c3 = courses.findIndex(function(course){
	return courses.name === 'xyz';
});
console.log(c3);		//-1 bc's it doesn't exist in array
const c4 = courses.findIndex(function(course){
	return courses.name === 'a';
});
console.log(c4);		//0

//===========================================================
//4) Arrow Functions

//shorter method
const c5 = courses.find(course => courses.name ==='a');

console.log(c5);

//===========================================================
//5) Removing elements

const n1 = [1,2,3,4];
//End -> Push() to add, Pop() to delete
// n1.push()
const last = n1.pop();
console.log(n1);
console.log(last);
//Begging -> unshift() to add, unshift() to delete
const first = n1.shift();
console.log(first);
//Middle -> splice() to add, remove
n1.splice(2,1);		//delete 1 element starting from position 2
console.log(n1);

//===========================================================
//6) Emptying an Array
// Best Approach either Solution 1 or Solution 2
let n2 = [1,2,3,4];
//Solution 1
n2 = [];
console.log(n2);
//
let n3 = [1,2,3,4];
let another = n3;
n3 = [];
console.log(n3);
console.log(another);

//Solution 2
n2.length = 0;		// comment n2 = [];
console.log(n2);

//Solution 3
let n4 = [1,2,3,4];
n4.splice(0,n4.length);
console.log(n4);

//Solution 4
let n5 = [1,2,3,4];
while (n5.length>0)
	n5.pop();
console.log(n5);

//===========================================================
//7) Combining ad slicing arrays

const f1 = [1,2,3];
const f2 = [4,5,6];

const combined = f1.concat(f2);
console.log(combined);
const slice = combined.slice(2,4);	// element b/w index 2 and 4
console.log(slice);
const slice1 = combined.slice(2);	// element start with index 2
console.log(slice1);
const slice2 = combined.slice();	// All elements
console.log(slice2);

const f3 = [{id: 1}];
const combined1 = f3.concat(f2);
f3[0].id = 10;
const slice4 = combined1.slice();	// All elements
console.log(combined1);
console.log(slice4);

//===========================================================
//8) The Spread Operator

const f11 = [1,2,3];
const f22 = [4,5,6];
//const combined = f1.concat(f2);
const combined2 = [...f11,...f22];	//[1,2,3,4,5,6]
const combined3 = [...f11,'a',...f22,'b'];
console.log(combined3);
const copy = [...combined];	

//===========================================================
//9) Iteration an Arrays	//display

const num1 = [1,2,3];

for (let number of num1)
	console.log(number);

num1.forEach(function(number) {
	console.log(number);
});
// Modification
num1.forEach(number => console.log(number));
num1.forEach((number, index) => console.log(index, number));


//===========================================================
//10) Joining Array

const num2 = [1,2,3];
const joined = num2.join(',');
console.log(joined);

const message ="This is my first message";
const parts = message.split(' ');
console.log(parts);

const joined2 = parts.join('-');
console.log(joined2);

//===========================================================
//11) Sorting Array

const n6 = [2,4,3,1];
n6.sort();		//ascending
console.log(n6);
n6.reverse();	//reverse - descending
console.log(n6);

//With objects
const course1 = [
	{ id:1, name: 'Node.js'},
	{ id:2, name: 'JavaScript'},
];
course1.sort(function(a,b){
	const namea = a.name.toLowerCase();
	const nameb = b.name.toLowerCase();
	if(namea < nameb) return -1;
	if(namea > nameb) return 1;
	return 0;
});
console.log(course1);

//===========================================================
//12) Testing the element of an Array

const n7 = [1,2,3];
const n8 = [1,-1,2,3];

//check numbers are positive or negaative
const allpostive = n7.every(function(value) {
	return value>=0;
});
const allpostive1 = n8.every(function(value) {
	return value>=0;
});
console.log(allpostive);		//True
console.log(allpostive1);		//false //-1 value
//every()
//some()

//===========================================================
//13) Filtering an Array
const n9 = [1,-1,2,3,4];

const filtered = n9.filter(function (value) {
	return value>=0;
});
console.log(filtered);
//moddifed the above method
const filtered1 = n9.filter(n => n>=0);
console.log(filtered1);

//===========================================================
//14) Mapping an Array
const n10 = [1,-1,2,3,4];
const fit1 = n9.filter(n => n>=0);
const items = fit1.map(n => '<li>' + n + '<li>');
const html = '<ul>' + items.join(' ') +'<ul>';
console.log(html);

//display as an object

// const items1 = fit1.map(n => {
	// const obj = { value: n};
	// return obj;
// });
const items1 = fit1.map(n => ({ value :n}) );

console.log(items);

const n11 = [1,-1,2,3,4];

const items2 = n11
	.filter( n =>  n >= 0)
	.map(n => ({value : n}))
	.filter(obj => obj.value>1)
	.map(obj => obj.value);

console.log(items2);

//===========================================================
//15) Reducing an Array

const n12 = [1,-1,2,3];

// let sum = 0;
// for (let n in n12)
	// sum += n;

// console.log(sum);

//a=0, c=1 => a=1
//a=1, c=-1 => a=0
//a=0, c=2 => a=2
//a=2, c=3 => a=5 
const sum = n12.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
},0);
console.log(sum);
//reducing
const sum2 = n12.reduce(
	(accumulator, currentValue) => accumulator + currentValue
);
console.log(sum2);