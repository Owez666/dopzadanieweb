// test-pow.js
const { pow } = require('./pow.js');

console.log('Тестирование pow(x, n):\n');

// Правильные тесты
const tests = [
  [2, 3, 8],
  [5, 2, 25],
  [3, 1, 3],
  [10, 4, 10000],
  [1, 100, 1],
  [7, 3, 343],
  [0, 5, 0],
  [-2, 3, -8],
  [-3, 2, 9]
];

tests.forEach(([x, n, expected], i) => {
  try {
    const result = pow(x, n);
    console.log(`${i + 1}. pow(${x}, ${n}) = ${result} ${result === expected ? '✓' : '✗'}`);
  } catch (e) {
    console.log(`${i + 1}. pow(${x}, ${n}) - Ошибка: ${e.message}`);
  }
});

console.log('\nТестирование ошибок:');

// Неправильные тесты
const errorTests = [
  [2, 0],
  [5, -3],
  [3, 2.5],
  [4, '2'],
  [1, null],
  [2, -1]
];

errorTests.forEach(([x, n], i) => {
  try {
    const result = pow(x, n);
    console.log(`${i + 1}. pow(${x}, ${n}) = ${result} ✗ (должна быть ошибка)`);
  } catch (e) {
    console.log(`${i + 1}. pow(${x}, ${n}) - ✓ Правильная ошибка: ${e.message}`);
  }
});
