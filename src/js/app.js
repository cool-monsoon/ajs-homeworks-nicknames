export default class Validator {
  validateUsername(userName) {
    this.userName = userName;
    const latinLettersNubersDashUnderscoreAccepted = /[^\w\d-_]/;
    const threeNumbersInRow = /\d{4}/;
    const beginWithLetter = /^[\d-_]/;
    const endWithLetter = /[\d-_]$/;
    if (latinLettersNubersDashUnderscoreAccepted.test(userName) === true) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (threeNumbersInRow.test(userName) === true) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    }
    if (beginWithLetter.test(userName) === true) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    }
    if (endWithLetter.test(userName) === true) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
    }
    return true;
  }
}
