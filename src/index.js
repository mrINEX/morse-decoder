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
        
        function fooo(array) {
          let word ='';
          let regex = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g;
          let r = /^0+/g;
            array = array.match(regex);
            for(j = 0; j < array.length; j++)
            {
              array[j] = array[j].replace(r,'');
              array[j] = array[j].replace(/11/g, '-');
              array[j] = array[j].replace(/10/g,'.');
              word += MORSE_TABLE[array[j]];
            }
            return word+' ';
        }
    //function ----------------------------------------------
        mainwords = expr.match(/[0-9]+/g);
        let answer = '';
        for(i = 0; i < mainwords.length; i++)
        {
            answer += fooo(mainwords[i]);
        }
        answer = answer.replace(/ $/, '');
        return answer;
    
    /*
    function fooo(array) {
        let word ='';
      let regex = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g;
      let r = /^0+/g;
      for(i = 0;i < array.length; i++)
      {
        array[i] = array[i].match(regex);
        alert('i='+array[i]);
        for(j = 0; j < array[i].length; j++)
        {
          alert('ij='+array[i][j]);
          array[i][j] = array[i][j].replace(r,'');
            array[i][j] = array[i][j].replace(/11/g, '-');
          array[i][j] = array[i][j].replace(/10/g,'.');
          word += MORSE_TABLE[array[i][j]];
        }
        alert('str='+word)
        return word;
      }
  }
 

    let word = [];
    let array = [];
    array = expr.replace('**********', ' ');
    array = array.split(' ');
    for(i = 0; i < array.length; i++)
    {
    	word[i] = (array[i].length)/10;
    }

    let regex = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g;
	let r = /^0+/g;	
	let code = expr.match(regex);
	let arr ='';
	let nospace ='';

	for(i = 0;i < code.length; i++)
    {
    	arr = code[i].replace(r,'');
      	arr = arr.replace(/11/g, '-');
        arr = arr.replace(/10/g,'.');
        nospace += MORSE_TABLE[arr];
    }
    return nospace; 

// new version -------------------------------------------------------
    
    let array = [];
	array = expr.replace('**********', ' ');
	array = array.split(' ');
	let regex = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g;
	let r = /^0+/g;
	for(i = 0;i < array.length; i++)
    {
      array[i] = array[i].match(regex);
      for(j = 0; j < array[i].length; j++)
      {
    	array[i][j] = array[i][j].replace(r,'');
      	array[i][j] = array[i][j].replace(/11/g, '-');
        array[i][j] = array[i][j].replace(/10/g,'.');
        array[i][j] += MORSE_TABLE[array[i][j]];
      }
    }
    return array;
    */
}

module.exports = {
    decode
}