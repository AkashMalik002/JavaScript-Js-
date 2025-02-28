// JavaScript source code
//Control Flow:-
//1) If...else
let hours = 10;
if(hours>=6 && hours<12){
	console.log('Good Morning');
}
else if(hours>=12 && hours<18){
	console.log('Good Afternoon');
}
else
	console.log('Good evening');
//===================================
//2) Switch...case
let role;
role = 'guest';
switch(role){
	case 'guest':
		console.log('Guest User');
		break;
	case 'moderator':
		console.log('Moderator User');
		break;
	default:
		console.log('Unkown User');
}
//===================================
//3) For (Loops:- For, While, Do..while, For..In, For..of)
for(let i=0; i<5; i++){
	console.log(i);
}
for(let i=5; i>=1; i--){
	if(i%2===0)
		console.log(i);
}
//===================================
//4) While
let i =0;
while(i<=5){
	if(i%2===0)
		console.log(i);
}
//===================================
//5) Do while
let j=0;
do {
	if (i%2 !==0) console.log(i);
	i++;
}while(i<=5);
//===================================
//6) Inifinite Loops
// let k=0;
// while(i<5){
	// console.log(i);
// }
// while(true){	
// }
//===================================
//7) For..In
const person = {
	name: 'akash',
	age:'25'
}
for (let key in person)
	console.log(key person[key]);

const colors = ['red','blue','green'];
for (let in colors)
	console.log(index);
//===================================
//7) For..of
 for(let color of colors)
	 console.log(color);
//===================================
//7) Break & continue
let i=0;
while(i<=10){
	if(i===5) break;
	
	console.log(i);
	i++;
}

while(i<=10){
	if(i%2===0){
		i++;
		continue;
	}
	console.log(i);
	i++;
}
//=======================================
//=======================================
