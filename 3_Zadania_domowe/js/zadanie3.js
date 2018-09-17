function getEvenSum(n) {
    var sum = 0;
    for (var i = 0 ; i <=n ; i++){
        if(i%2 === 0){
            sum+=i;
        }
    }
    return sum;
}
var n = 2;
console.log(getEvenSum(n));

/*function getEvenSum (n) {
    var suma = 0;
    for (var i=0 ; i<=n; i++){
        if (i%2 ==0){
            suma = suma + i;
        }
    }
    return suma

}
console.log(getEvenSum(4));



//inny sposob

var x= 5;
var sum= 0;
for (var i=0; i<x; i++){
    if (i%2 ==0){
        sum = sum + i;
    }
}

console.log(sum);*/