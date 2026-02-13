/**
 * Функция возвращает x в степени n (x^n)
 * @param {number} x - основание степени
 * @param {number} n - показатель степени (натуральное число)
 * @returns {number} - результат возведения в степень
 * @throws {Error} - если n не натуральное число
 */
function pow(x, n) {
  // Проверка на натуральность n
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
    throw new Error('Показатель степени n должен быть натуральным числом');
  }

  // 0 в любой степени (кроме 0) = 0
  if (x === 0) {
    return 0;
  }

  // Любое число в степени 1 равно самому себе
  if (n === 1) {
    return x;
  }

  let result = x;

  // Умножаем x на себя n-1 раз
  for (let i = 1; i < n; i += 1) {
    result *= x;
  }

  return result;
}

// Экспорт функции для Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { pow };
}