const palindromes = function (text) {
    let chars = text.split('');
    let original = []
    for (let i = 0; i < chars.length; i++){
        if (chars[i].toLowerCase() != chars[i].toUpperCase()){
            original.push(chars[i].toLowerCase());
        }
    }
    let textOG = original.join('');
    let reversed = original.reverse();
    let rev = reversed.join('');

    if (textOG == rev){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
