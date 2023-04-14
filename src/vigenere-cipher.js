const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    const keyLength = key.length;
    let keyIndex = 0;
    let result = '';

    for (let i = 0; i < message.length; i++) {
      const char = message.charAt(i);

      if (/[A-Z]/.test(char)) {
        const keyChar = key.charAt(keyIndex % keyLength);
        const shift = keyChar.charCodeAt(0) - 65;
        const charCode = ((char.charCodeAt(0) - 65 + shift) % 26) + 65;
        result += String.fromCharCode(charCode);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    const keyLength = key.length;
    let keyIndex = 0;
    let result = '';

    for (let i = 0; i < message.length; i++) {
      const char = message.charAt(i);

      if (/[A-Z]/.test(char)) {
        const keyChar = key.charAt(keyIndex % keyLength);
        const shift = keyChar.charCodeAt(0) - 65;
        const charCode = ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65;
        result += String.fromCharCode(charCode);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
