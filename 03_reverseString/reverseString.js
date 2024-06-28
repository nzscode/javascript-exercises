const reverseString = function(string) {
    let reversedString = ""
    for (let i = string.length-1; i >= 0; i--) {
        let stringAlphabet = string[i];
        reversedString += stringAlphabet;       
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
