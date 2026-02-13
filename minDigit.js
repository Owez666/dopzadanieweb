/**
 * Функция возвращает наименьшую цифру целого неотрицательного числа x
 * @param {number} x - целое неотрицательное число
 * @returns {number} - наименьшая цифра числа x
 * @throws {Error} - если x не является целым неотрицательным числом
 */
function minDigit(x) {
  // Проверка входных данных
  if (typeof x !== 'number' || !Number.isInteger(x)) {
    throw new Error('Аргумент должен быть целым числом');
  }

  if (x < 0) {
    throw new Error('Число должно быть неотрицательным');
  }

  // Если число однозначное, возвращаем его
  if (x < 10) {
    return x;
  }

  let min = 9; // Начальное значение минимальной цифры
  let num = x;

  // Перебираем все цифры числа
  while (num > 0) {
    const digit = num % 10; // Получаем последнюю цифру
    if (digit < min) {
      min = digit;
    }
    num = Math.floor(num / 10); // Убираем последнюю цифру
  }

  return min;
}

// Экспорт функции для использования в модульной системе
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { minDigit };
}