var myApp = (function () {
    "use strict";
    return {
        printStatus: _ => false,
        iterateOne: (pArray) => {
            for (let el of pArray) {
                console.log('iterateOne: ' + el);
            }
        },
        iterateTwo: (pArray) => {
            pArray.forEach((el) => console.log('iterateTwo: ' + el));
        },
        iterateThree: (pArray) => {
            let maxOfArray = Math.max.apply(Math, pArray);
            console.log("maxOfArray: ", maxOfArray)

            return pArray.some((el) => el === maxOfArray)
        },
        iterateFour: (pArray) => {
            let KPI = 3;

            function isBelowKPI(aValue) {
                (aValue < KPI) ? true : false
            };
            console.log('iterateFour: ' + pArray.every(isBelowKPI));
        },
        iterateFive: (pArray) => {
            pArray.map((el) => console.log('iterateFive: ', el))
        },
        iterateSix: (pArray) => {
            for (let [ix, val] of pArray.entries()) {
                console.log(ix, val)
            }
        }
    };
})();

