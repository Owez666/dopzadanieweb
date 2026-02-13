// test.js
const { getSortedArray } = require('./getSotredArray.js');

const array = [
  { name: 'Макар', age: 20 },
  { name: 'Роберт', age: 32 },
  { name: 'Екатерина', age: 50 },
  { name: 'Оксана', age: 24 },
  { name: 'Святослав', age: 43 }
];

console.log('По age:');
console.log(getSortedArray(array, 'age'));

console.log('\nПо name:');
console.log(getSortedArray(array, 'name'));