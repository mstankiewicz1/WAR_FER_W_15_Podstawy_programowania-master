function getSecondMaxNumber(array) {
    function compareNr(a, b) {
        return a - b
    }
    var arr2 = array.sort(compareNr);

        return arr2[arr2.length-2];

}
var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));


/*
//zad1

var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];

function getSecondMaxNumber (element) {
    return element.sort(function (a,b) {
        return b-a;
    })[1];

}

console.log(getSecondMaxNumber(arr1));*/