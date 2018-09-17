function getNegativeNumbers(array){

    var arr = [];
    for (var i = 0 ; i < array.length ; i++){
        if(array[i] < 0){
            arr.push(array[i]);
        }
    }
    return arr;
}
var arr1 = [4, -5, 0, 2, -67, 8, 10, -34 ];
console.log(getNegativeNumbers(arr1));

/*var tablica = [-2, -1, 1,2];
var nowatablica= [];

function getNegativeNumbers() {
    for (var i=0; i<tablica.length; i++){
        if (tablica[i] < 0){
            tablica.push(i);
            return tablica;
        }
    }

};

console.log(getNegativeNumbers(tablica));*/