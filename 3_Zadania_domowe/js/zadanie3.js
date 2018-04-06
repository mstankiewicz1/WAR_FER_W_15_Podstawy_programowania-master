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