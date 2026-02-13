/**
 * Функция производит шифрование и дешифровку строки с использованием шифра Цезаря
 * @param {string} str - строка для шифрования/дешифрования
 * @param {number} shift - величина сдвига
 * @param {string} action - 'encode' для шифрования, 'decode' для дешифрования
 * @returns {string} - результат шифрования/дешифрования
 */
function cesar(str, shift, action) {
  const alphabet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя';
  const upperAlphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  const actualShift = action === 'decode' ? -shift : shift;
  
  let result = '';
  
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    let newChar = char;
    
    const lowerIndex = alphabet.indexOf(char);
    if (lowerIndex !== -1) {
      let newIndex = (lowerIndex + actualShift) % 33;
      if (newIndex < 0) newIndex += 33;
      newChar = alphabet[newIndex];
    }
    
    const upperIndex = upperAlphabet.indexOf(char);
    if (upperIndex !== -1) {
      let newIndex = (upperIndex + actualShift) % 33;
      if (newIndex < 0) newIndex += 33;
      newChar = upperAlphabet[newIndex];
    }
    
    result += newChar;
  }
  
  return result;
}

// Расшифровка сообщения
const encodedMessage = 'эзтыхз фзъзъз';
const decodedMessage = cesar(encodedMessage, 8, 'decode');

console.log('Расшифрованное сообщение:', decodedMessage);



// Экспорт функции
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { cesar };
}