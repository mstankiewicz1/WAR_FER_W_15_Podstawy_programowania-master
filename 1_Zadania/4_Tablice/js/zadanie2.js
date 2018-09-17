var min = 1;
var max=60;
var tab =[];
var tab2 =[];

for (var i=1;i<=10;i++) {
    tab.push(Math.ceil(Math.random()*(max-min)+min));
}
console.log(tab);



for (var j=1; j<=tab.length;j++) {
    if (tab[j]%2!=0) {
        tab2.push(tab[j]+1);
    } else tab2.push(tab[j]);
}
console.log(tab2);