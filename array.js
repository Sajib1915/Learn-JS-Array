//(array.js)
// const num1 = 12; 
// const num2 = 22; 
// const num3 = 442; 
// const num4 = 442; 

// const numbers = 1222442412412;
// (), {}, []
const numbers1 = [12, 22, 54, 65];
const friends = ['Abul', 'babul', 'cabul', 'dabul', 'bulbul'];
const passed = [true, false, true, false];
const mixedArray = [12, 'Alahbad', true, 45.566];

//-------(length.js)----
const numbers2 = [1, 5, 66, 11, 45, 65, 65, 88, 11, 45, 65, 65, 88, 15];
console.log(numbers2.length);

//(index.js)
const numbers3 = [88, 77, 99, 421, 54, 63];

console.log(numbers3);

// get element value by index
console.log(numbers3[3])

const fourth = numbers3[3];
console.log(fourth);

// set or update element value by index
let abc = 45;
abc = 99;
numbers3[1] = 999;
console.log(numbers3); 

//(push-pop.js)
const ages = [];
const numbers4 = [12, 87, 98, 45];

console.log(numbers4);
numbers4.push(44);
numbers4.push(65);
numbers4.push(98, 11, 9);
console.log(numbers4);
//(pop.js)
const friends2 = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
// friends2.push('khailam');
console.log(friends2)

const out1 = friends2.pop();
console.log(friends2);
const out2 = friends2.pop();
console.log(friends2);
console.log(out1, out2);
//(shift-unshift.js)
const friends3 = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
console.log(friends3);
friends3.shift();
console.log(friends3);

friends3.unshift('ghumailam');
console.log(friends3);

//(includes.js)
const friends4 = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

console.log(friends4.includes('gelam'))
console.log(friends4.includes('khailam'))

if(friends4.includes('salam')){
    console.log('party')
}
else {
    console.log('no food. we are fasting')
}
//(indexOf.js)
const friends5 = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

console.log(friends5.indexOf('gelam'));

console.log(friends5.indexOf('tomato'))

//(isArray.js)
const friends6 = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

const nums = [];

const food = 'ros o gol l a';

const age = 15;

console.log(Array.isArray(friends6))
console.log(Array.isArray(nums))
console.log(Array.isArray(food))
console.log(Array.isArray(age))

// more array: join(),concat(),slice(),splice(),