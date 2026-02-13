/**
 * Функция сортирует массив объектов по указанному ключу
 * @param {Array} array - массив объектов для сортировки
 * @param {string} key - ключ, по значению которого производится сортировка
 * @returns {Array} - отсортированный массив
 */
function getSortedArray(array, key) {
  // Создаем копию массива
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    result[i] = array[i];
  }

  // Сортировка пузырьком
  for (let i = 0; i < result.length - 1; i += 1) {
    for (let j = 0; j < result.length - 1 - i; j += 1) {
      // Сравниваем значения по ключу
      if (result[j][key] > result[j + 1][key]) {
        // Обмен значениями
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

// Экспорт для Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getSortedArray };
}