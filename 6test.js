// test.js
const { cesar } = require('./cesar.js');

// Тест шифрования
console.log('Тест шифрования (сдвиг 3):');
const original = 'привет мир';
const encoded = cesar(original, 3, 'encode');
console.log(`Оригинал: "${original}"`);
console.log(`Зашифровано: "${encoded}"`);
console.log(`Расшифровано: "${cesar(encoded, 3, 'decode')}"\n`);

// Тест с прописными буквами
console.log('Тест с прописными буквами:');
const upper = 'ПРИВЕТ МИР';
const upperEncoded = cesar(upper, 3, 'encode');
console.log(`Оригинал: "${upper}"`);
console.log(`Зашифровано: "${upperEncoded}"\n`);

// Тест с символами не из алфавита
console.log('Тест с символами не из алфавита:');
const mixed = 'привет, мир! 123';
const mixedEncoded = cesar(mixed, 5, 'encode');
console.log(`Оригинал: "${mixed}"`);
console.log(`Зашифровано: "${mixedEncoded}"\n`);

// Дешифровка заданного сообщения
console.log('Дешифровка задания:');
const taskMessage = 'эзтыхз фзъзъз';
console.log(`Зашифровано: "${taskMessage}"`);
console.log(`Расшифровано: "${cesar(taskMessage, 8, 'decode')}"`);