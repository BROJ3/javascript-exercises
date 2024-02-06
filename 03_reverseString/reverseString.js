const reverseString = function(string) {

    let characterList = ''

    for (let i=string.length ;i>0; i--) {
        characterList += string[i-1]
    }
    return characterList

};

// Do not edit below this line
module.exports = reverseString;
