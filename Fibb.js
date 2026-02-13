'use strict';

function fibb(n) {
    if (!Number.isInteger(n) || n < 0 || n > 1000) {
        throw new Error('Invalid input: n must be integer between 0 and 1000');
    }

    if (n === 0) return 0n;
    if (n === 1) return 1n;

    let prev = 0n;
    let current = 1n;

    for (let i = 2; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }

    return current;
}

module.exports = { fibb };