import { expect, test } from 'vitest'
import getNoteFromKey from '../utils.js';

test('la tecla a se corresponde con el sonido C4', () => {
  expect(getNoteFromKey('a')).toBe('C4');
})

test('debe devolver undefined si la tecla no está en keyMap', () => {
  expect(getNoteFromKey('z')).toBeUndefined();
})

test('debe devolver la nota correcta para teclas mayúsculas', () => {
    expect(getNoteFromKey('A')).toBe('C4');
});