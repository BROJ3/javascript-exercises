const removeFromArray = function(array) {
    //we have an array and a value to remove, not a index

    //loop through array
    for (let i=0; i<array.length;i++) {

        //loop through argumenst
        for (let j=0; j<arguments.length;j++) {
            // if for each element in array, one of the aguments that 
            if (array[i]===arguments[j]) {
                array.splice(i,1)
            }
            // isnt arg[0] aligns, remove it
        }





        
    }
    return array
    //if something indexed matches valueToRemove, remove it
 
    

    

    

};

// Do not edit below this line
module.exports = removeFromArray;
