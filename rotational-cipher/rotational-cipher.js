const alphabet = "abcdefghijklmnopqrstuvwxyz";
const fullAlphabet = alphabet.repeat(3);

var RotationalCipher = function () {};

RotationalCipher.prototype.rotate = function(str, offset) {
    if(typeof str !== 'string' || isNaN(offset)) throw Error('invalid input!');
    let newOffset = (offset % alphabet.length), finalStr = '';

    for(var i=0; i < str.length; i++){
       let currentChar = str[i];
       let isUpperCase = (currentChar === currentChar.toUpperCase());
       currentChar = currentChar.toLowerCase();
       let index = alphabet.indexOf(currentChar);
       if(index !== -1){
            index = index + newOffset + alphabet.length;
            let nextLetter = fullAlphabet[index];
            if(isUpperCase) nextLetter = nextLetter.toUpperCase();
            finalStr += nextLetter;
    }
       else {
            finalStr += currentChar;
       }
    }  

    return finalStr;
};

module.exports = RotationalCipher;
