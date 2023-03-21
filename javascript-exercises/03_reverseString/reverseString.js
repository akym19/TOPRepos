const reverseString = function(text) {
    let chars = text.split('');
    let charsrev = chars.reverse();
    const revText = charsrev.join('');
    return revText;

};

// Do not edit below this line
module.exports = reverseString;
