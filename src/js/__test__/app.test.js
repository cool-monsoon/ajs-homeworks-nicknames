import Validator from '../app';

test('testing correct username', () => {
  const result = new Validator().validateUsername('netoLO-54_gy');
  expect(result).toBe(true);
});

test('testing incorrect username with cyrillic and specific symbols', () => {
  expect(() => {
    const result = new Validator();
    return result.validateUsername('ёnetoLO-!54_gy');
  }).toThrow(new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)'));
});

test('testing incorrect amount of numbers in username', () => {
  expect(() => {
    const result = new Validator();
    return result.validateUsername('neto-5454_logy');
  }).toThrow(new Error('Имя не должно содержать подряд более трёх цифр'));
});

test('testing incorrect username beginning', () => {
  expect(() => {
    const result = new Validator();
    return result.validateUsername('_neto-54logy');
  }).toThrow(new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире'));
});

test('testing incorrect username end', () => {
  expect(() => {
    const result = new Validator();
    return result.validateUsername('netology-15');
  }).toThrow(new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире'));
});
