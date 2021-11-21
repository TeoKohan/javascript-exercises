const palindromes = function (s) {
    s = s.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
    let reverse = '';
    for (let i = s.length - 1; i >= 0; --i)
        reverse += s[i];

    console.log(s, "-", reverse);
    return s === reverse;
    
};

// Do not edit below this line
module.exports = palindromes;
