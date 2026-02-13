// test-minDigit.js
const { minDigit } = require('./minDigit.js');

/**
 * Тестирование функции minDigit
 */
function testMinDigit() {
  console.log('=== Тестирование функции minDigit ===\n');

  const testCases = [
    { input: 0, expected: 0, description: 'Нуль' },
    { input: 5, expected: 5, description: 'Однозначное число' },
    { input: 9, expected: 9, description: 'Максимальная однозначная цифра' },
    { input: 123, expected: 1, description: 'Число с разными цифрами' },
    { input: 321, expected: 1, description: 'Число в обратном порядке' },
    { input: 987654321, expected: 1, description: 'Большое число' },
    { input: 555, expected: 5, description: 'Все цифры одинаковые' },
    { input: 1000, expected: 0, description: 'Число с нулями' },
    { input: 909, expected: 0, description: 'Число с нулем внутри' },
    { input: 42, expected: 2, description: 'Двузначное число' },
    { input: 777777, expected: 7, description: 'Повторяющаяся цифра' },
    { input: 13579, expected: 1, description: 'Нечетные цифры' },
    { input: 24680, expected: 0, description: 'Четные цифры с нулем' },
    { input: 10, expected: 0, description: 'Число 10' },
    { input: 101, expected: 0, description: 'Число 101' },
    { input: 999, expected: 9, description: 'Только девятки' }
  ];

  let passed = 0;
  let failed = 0;

  testCases.forEach((testCase, index) => {
    try {
      const result = minDigit(testCase.input);
      const isPassed = result === testCase.expected;
      
      console.log(`Тест ${index + 1}: ${testCase.description}`);
      console.log(`  Вход: ${testCase.input}`);
      console.log(`  Ожидалось: ${testCase.expected}`);
      console.log(`  Получено: ${result}`);
      console.log(`  Результат: ${isPassed ? '✓ PASS' : '✗ FAIL'}\n`);
      
      if (isPassed) {
        passed++;
      } else {
        failed++;
      }
    } catch (error) {
      console.log(`Тест ${index + 1}: ${testCase.description}`);
      console.log(`  Вход: ${testCase.input}`);
      console.log(`  Ошибка: ${error.message}`);
      console.log(`  Результат: ✗ FAIL\n`);
      failed++;
    }
  });

  // Тестирование исключительных ситуаций
  console.log('=== Тестирование исключительных ситуаций ===\n');
  
  const errorCases = [
    { input: -1, description: 'Отрицательное число' },
    { input: -123, description: 'Отрицательное большое число' },
    { input: 3.14, description: 'Дробное число' },
    { input: '123', description: 'Строка вместо числа' },
    { input: null, description: 'null' },
    { input: undefined, description: 'undefined' },
    { input: [], description: 'Массив' },
    { input: {}, description: 'Объект' }
  ];

  errorCases.forEach((errorCase, index) => {
    try {
      const result = minDigit(errorCase.input);
      console.log(`Тест ошибок ${index + 1}: ${errorCase.description}`);
      console.log(`  Вход: ${errorCase.input}`);
      console.log(`  Ожидалось: исключение`);
      console.log(`  Получено: ${result}`);
      console.log(`  Результат: ✗ FAIL (должно было быть исключение)\n`);
      failed++;
    } catch (error) {
      console.log(`Тест ошибок ${index + 1}: ${errorCase.description}`);
      console.log(`  Вход: ${errorCase.input}`);
      console.log(`  Исключение: ${error.message}`);
      console.log(`  Результат: ✓ PASS\n`);
      passed++;
    }
  });

  // Итоги
  console.log('=== Итоги тестирования ===');
  console.log(`Всего тестов: ${passed + failed}`);
  console.log(`Пройдено: ${passed}`);
  console.log(`Не пройдено: ${failed}`);
  console.log(`Успешность: ${Math.round((passed / (passed + failed)) * 100)}%`);
}

// Запуск тестов
testMinDigit();