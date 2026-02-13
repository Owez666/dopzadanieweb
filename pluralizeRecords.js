/**
 * Функция для определения правильной формы слова "запись" в зависимости от числа
 * @param {number} n - количество записей
 * @returns {string} - строка с правильной формой слова
 */
function getRecordForm(n) {
  // Проверяем последние две цифры
  const lastTwoDigits = n % 100;
  const lastDigit = n % 10;

  // Правила для русского языка:
  // one: 1, 21, 31, ... (но не 11, 111, и т.д.)
  // few: 2-4, 22-24, 32-34, ... (но не 12-14, 112-114, и т.д.)
  // many: 0, 5-20, 25-30, 35-40, ...

  // Исключения для чисел 11-14
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'записей';
  }

  // Для чисел, оканчивающихся на 1 (кроме 11)
  if (lastDigit === 1) {
    return 'запись';
  }

  // Для чисел, оканчивающихся на 2-4 (кроме 12-14)
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'записи';
  }

  // Все остальные случаи
  return 'записей';
}

/**
 * Функция для определения правильной формы глагола "быть" в зависимости от числа
 * @param {number} n - количество записей
 * @returns {string} - правильная форма глагола
 */
function getVerbForm(n) {
  const lastDigit = n % 10;
  const lastTwoDigits = n % 100;

  // Для 1, но не для 11
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return 'была';
  }

  return 'было';
}

/**
 * Функция для формирования строки с правильным pluralization
 * @param {number} n - количество найденных записей
 * @returns {string} - отформатированная строка с результатом
 */
function pluralizeRecords(n) {
  // Проверка на отрицательное число
  if (n < 0) {
    throw new Error('Количество записей не может быть отрицательным');
  }

  // Проверка на нечисловое значение
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new Error('Параметр должен быть целым числом');
  }

  const recordForm = getRecordForm(n);
  const verbForm = getVerbForm(n);

  return `В результате выполнения запроса ${verbForm} найдено ${n} ${recordForm}`;
}

// Экспорт функции для использования в модульной системе
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { pluralizeRecords };
}