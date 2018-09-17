function calculateTip(amount, raiting) {
    if (raiting == 'Bardzo dobra obsluga' ){
        return '25% napiwku';
    }
    if (raiting == 'Dobra obsluga'){
        return '20% napiwku';
    }
    if (raiting == 'Srednia obsluga'){
        return '15% napiwku';
    }
    if (raiting == 'Zla obsluga'){
        return '0% napiwku';
    }

};

console.log(calculateTip(100,'Zla obsluga' ));