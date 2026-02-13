const { pluralizeRecords } = require('./pluralizeRecords.js');

// Тестовые случаи
const testCases = [
  { n: 0, expected: 'записей' },
  { n: 1, expected: 'В результате выполнения запроса была найдено 1 запись' },
  { n: 2, expected: 'В результате выполнения запроса было найдено 2 записи' },
  { n: 5, expected: 'В результате выполнения запроса было найдено 5 записей' },
  { n: 11, expected: 'В результате выполнения запроса было найдено 11 записей' },
  { n: 21, expected: 'В результате выполнения запроса было найдено 21 запись' },
  { n: 22, expected: 'В результате выполнения запроса было найдено 22 записи' },
  { n: 25, expected: 'В результате выполнения запроса было найдено 25 записей' },
  { n: 101, expected: 'В результате выполнения запроса было найдено 101 запись' },
  { n: 102, expected: 'В результате выполнения запроса было найдено 102 записи' },
  { n: 105, expected: 'В результате выполнения запроса было найдено 105 записей' }
];

console.log('Тестирование функции pluralizeRecords:\n');

testCases.forEach(testCase => {
  const result = pluralizeRecords(testCase.n);
  console.log(`pluralizeRecords(${testCase.n})`);
  console.log(`Результат: "${result}"`);
  console.log(`Ожидалось: "${testCase.expected}"`);
  console.log(`Статус: ${result.includes(testCase.expected) ? '✓ PASS' : '✗ FAIL'}\n`);
});