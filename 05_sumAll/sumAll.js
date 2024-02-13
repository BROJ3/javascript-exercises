const sumAll = function () {

    if (arguments[0] > arguments[1]) {
        //switch them
        //put first argument in temporary variable
        let temp = arguments[0];
        arguments[0] = arguments [1];
        arguments[1] = temp;
    } 

    stepsToGo = arguments[1] - arguments[0] + 1
    stepCounter = 0

    console.log("Steps to go: ", stepsToGo)

    for (let i = 1; i < stepsToGo + 1; ++i) {
        console.log(i)
        stepCounter += i

    }
    console.log("stepcounter sayssss: ")
    return stepCounter
};

// Do not edit below this line
module.exports = sumAll;
