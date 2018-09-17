
//4
//Stwórz funkcję, która będzie zwracała (poprzez return) sumę liczb z tablicy.
// Tablica powinna być przekazana do funkcji jako argument.

//     Przykład:

//   input -> [1,2,3]
//    output -> 6



function sumaTablicy (tablica = [1,2,3]) {
    var sum = 0;
    for (var i=0; i<tablica.length; i++){
        sum = sum + tablica[i];
    }
    return sum + ' to suma liczb znajdujacych sie w tablicy';
}
console.log(sumaTablicy());