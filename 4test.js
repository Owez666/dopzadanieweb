// test-gcd.js
const { gcd } = require('./gcd.js');

/**
 * Тестирование функции gcd (наибольший общий делитель)
 */
function testGCD() {
  console.log('=== Тестирование функции gcd ===\n');

  const testCases = [
    // Основные тесты
    { a: 48, b: 18, expected: 6, description: '48 и 18' },
    { a: 100, b: 75, expected: 25, description: '100 и 75' },
    { a: 81, b: 27, expected: 27, description: '81 и 27' },
    { a: 17, b: 13, expected: 1, description: 'Взаимно простые числа' },
    { a: 7, b: 7, expected: 7, description: 'Одинаковые числа' },
    
    // Граничные случаи с нулем
    { a: 0, b: 5, expected: 5, description: 'a = 0, b = 5' },
    { a: 5, b: 0, expected: 5, description: 'a = 5, b = 0' },
    { a: 0, b: 0, expected: 0, description: 'Оба числа равны 0' },
    
    // Большие числа
    { a: 123456789, b: 987654321, expected: 9, description: 'Большие числа' },
    { a: 1024, b: 768, expected: 256, description: '1024 и 768' },
    
    // Специальные случаи
    { a: 1, b: 100, expected: 1, description: '1 и 100' },
    { a: 100, b: 1, expected: 1, description: '100 и 1' },
    { a: 25, b: 35, expected: 5, description: '25 и 35' },
    { a: 36, b: 48, expected: 12, description: '36 и 48' },
    { a: 72, b: 120, expected: 24, description: '72 и 120' },
    
    // Числа Фибоначчи
    { a: 13, b: 21, expected: 1, description: 'Числа Фибоначчи (13 и 21)' },
    { a: 34, b: 55, expected: 1, description: 'Числа Фибоначчи (34 и 55)' },
  ];

  let passed = 0;
  let failed = 0;

  testCases.forEach((testCase, index) => {
    try {
      const result = gcd(testCase.a, testCase.b);
      const isPassed = result === testCase.expected;
      
      console.log(`Тест ${index + 1}: ${testCase.description}`);
      console.log(`  Вход: gcd(${testCase.a}, ${testCase.b})`);
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
      console.log(`  Вход: gcd(${testCase.a}, ${testCase.b})`);
      console.log(`  Ошибка: ${error.message}`);
      console.log(`  Результат: ✗ FAIL\n`);
      failed++;
    }
  });

  // Тестирование исключительных ситуаций
  console.log('=== Тестирование исключительных ситуаций ===\n');
  
  const errorCases = [
    { a: -1, b: 5, description: 'Отрицательное a' },
    { a: 5, b: -1, description: 'Отрицательное b' },
    { a: -10, b: -5, description: 'Оба отрицательные' },
    { a: 3.14, b: 5, description: 'Дробное a' },
    { a: 5, b: 2.71, description: 'Дробное b' },
    { a: '10', b: 5, description: 'Строка вместо a' },
    { a: 10, b: '5', description: 'Строка вместо b' },
    { a: null, b: 5, description: 'null вместо a' },
    { a: 5, b: undefined, description: 'undefined вместо b' },
    { a: [], b: 5, description: 'Массив вместо a' },
    { a: 5, b: {}, description: 'Объект вместо b' },
  ];

  errorCases.forEach((errorCase, index) => {
    try {
      const result = gcd(errorCase.a, errorCase.b);
      console.log(`Тест ошибок ${index + 1}: ${errorCase.description}`);
      console.log(`  Вход: gcd(${errorCase.a}, ${errorCase.b})`);
      console.log(`  Ожидалось: исключение`);
      console.log(`  Получено: ${result}`);
      console.log(`  Результат: ✗ FAIL (должно было быть исключение)\n`);
      failed++;
    } catch (error) {
      console.log(`Тест ошибок ${index + 1}: ${errorCase.description}`);
      console.log(`  Вход: gcd(${errorCase.a}, ${errorCase.b})`);
      console.log(`  Исключение: ${error.message}`);
      console.log(`  Результат: ✓ PASS\n`);
      passed++;
    }
  });

  // Дополнительные тесты на коммутативность
  console.log('=== Тестирование коммутативности ===\n');
  
  const commutativeTests = [
    [48, 18],
    [100, 75],
    [17, 13],
    [0, 5],
    [123456789, 987654321]
  ];

  commutativeTests.forEach(([a, b], index) => {
    try {
      const result1 = gcd(a, b);
      const result2 = gcd(b, a);
      const isPassed = result1 === result2;
      
      console.log(`Тест коммутативности ${index + 1}:`);
      console.log(`  gcd(${a}, ${b}) = ${result1}`);
      console.log(`  gcd(${b}, ${a}) = ${result2}`);
      console.log(`  Результат: ${isPassed ? '✓ PASS (коммутативность соблюдается)' : '✗ FAIL'}\n`);
      
      if (isPassed) {
        passed++;
      } else {
        failed++;
      }
    } catch (error) {
      console.log(`Тест коммутативности ${index + 1}:`);
      console.log(`  Ошибка: ${error.message}`);
      console.log(`  Результат: ✗ FAIL\n`);
      failed++;
    }
  });

  // Итоги
  console.log('=== Итоги тестирования ===');
  console.log(`Всего тестов: ${passed + failed}`);
  console.log(`Пройдено: ${passed}`);
  console.log(`Не пройдено: ${failed}`);
  console.log(`Успешность: ${Math.round((passed / (passed + failed)) * 100)}%`);
  
  return { passed, failed, total: passed + failed };
}

// Запуск тестов
if (require.main === module) {
  testGCD();
}

// Экспорт для использования в других тестах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testGCD };
}