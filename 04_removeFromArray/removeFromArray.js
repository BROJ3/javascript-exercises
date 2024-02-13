const removeFromArray = function(array) {

    //for each index of list check each argument
    for (let i=0; i<array.length;i++) {

        //loop through arguments for each array piece
        for (let j=0; j<arguments.length;j++) {

            // check if that argument is in the array 
            if (array[i]===arguments[j]) {

                //remove argument matches with indexed number
                array.splice(i,1)
            }
        }
    }
    return array

};


// Do not edit below this line
module.exports = removeFromArray;


