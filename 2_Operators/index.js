// JavaScript source code
//Operators
//1) Arithmetic  Operators
// let x=10;
// let y=4;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);	//Power(x,y)
// //Increment
// console.log(++x);
// console.log(x++);
// //Decrement
// console.log(--y);
// console.log(y--);
//=======================================
//2) Assignment Operators
let x =10;
x++; 	//or x=x+1
x +=5;	//or x = x+5;
x *=3;	//or x = x*3;
//=======================================
//3)Comparision Operators
let y=1;
//Relational Operators
console.log(y>0);		//True
console.log(y>=1);		//True
console.log(y<=1);		//True
console.log(y>1);		//False
//=======================================
//3)Equality Operators
//Strict Equality (Type + Value) 
console.log(y===1);		//True
console.log(y!==1);		//False
console.log(1===1);		//True
//Loose Equality
console.log(1==1);		//True

console.log('1'===1);	//False
console.log('1'==1);		//True
console.log(true==1);	//True
//========================================
//4) Ternary Operators
let point = 110;
let type = point>100?'gold':'silver';
console.log(type);
//========================================
//5) Logical Operators with Non- Booleans
//Logical AND (&&)
console.log(true && true);
console.log(true && false);
//Logical OR(||)
console.log(true || true);
console.log(true || false);
let a = true;
let b = false;
let c = a&&b;
console.log(c);
//NOT(!)
let d = !c;		// opposite of c
// Non booleans  -> Falsy(false)
console.log(false || true);
console.log(false || 'Akki');
console.log(false || 1);
console.log(false || 1 || 2);

let ucolor = 'orange';
let defaulcolor = 'blue';
let ccolor = ucolor || defaulcolor;
console.log(ccolor);
//========================================
//5) BitWise Operators
//1 = 00000001
//2 = 00000010
//3 = 00000100
console.log(1|2);	//3 BitWise OR
console.log(1&2);	//0 BitWise AND

//Sceanrio:- Read, Write, Execute	LET 4=> Read, 2=> Write AND 1=> Execute
//00000100	-> 4, Read
//00000110	-> 6, Read &Write
//00000111	-> 7, Read, Write and Execute
const p=4;
const q=2;
const r=1;
let myPermission = 0;
myPermission = p|q|r;
console.log(myPermission);
let message = (myPermission && p)?'YES':'NO';
console.log(message);
//========================================
//6 Operator Precedence
let m = 2+3*4;
console.log(m);
let n = (2+3)*4;
console.log(n);
//TASK:- SWAP 2 Variable
// let a = 'ram';
// let b = 'shyam';
// let c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);
