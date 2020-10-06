const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    var wordCount = 0;
    var word =[[]];
    var wordLength = 0;
    var result = [];
    var amount = 0;
    for (var i = 1; i < expr.length; i+= 2){
        if ( wordCount < 9) {
            switch (String(expr[i-1]+expr[i])) {
                case '00':
                    break;
                case '10':
                    word[amount][wordLength]='.';
                    wordLength++;
                    break;
                case '11':
                    word[amount][wordLength]='-';
                    wordLength++;
                    break;
                case '**':
                    word[amount][wordLength]='**';
                    wordLength++;
                    break;
            
                default:
                    word[amount][wordLength]='**';
                    wordLength++;
                    break;
            }
            wordCount+= 2;
        } else {
            wordLength = 0;
            wordCount = 0;
        //    if (amount === 5) return word[5];
            if (word[amount].join('') === '**********') result[amount] = ' ';
            else  result[amount] = MORSE_TABLE[word[amount].join('')];
            amount++;
            word[amount] = [];

            switch (String(expr[i-1]+expr[i])) {
                case '00':
                    break;
                case '10':
                    word[amount][wordLength]='.';
                    wordLength++;
                    break;
                case '11':
                    word[amount][wordLength]='-';
                    wordLength++;
                    break;
                case '**':
                    word[amount][wordLength]='**';
                    wordLength++;
                    break;
                
                default:
                    word[amount][wordLength]='**';
                    wordLength++;
                    break;
            }
            wordCount+= 2;
        }

    }
    result[amount] = MORSE_TABLE[word[amount].join('')];
    return result.join('');
}

module.exports = {    
    decode
}