function rentCost(days) {
    var numbersOfWeeks = Math.floor(days / 7);

    if (days == 1){
        return days*200;
    }
    if (days== 2 || days==3){
        return days*180;
    }
    if (days == 4 || days<=6 ){
        return days * 160

    }
    if (days == 7){
        if (numbersOfWeeks>=1){
            return days *160 -50;
        }
    }

    if (days>=8){
        if (numbersOfWeeks >= 1){
            return days*150 - 50*numbersOfWeeks;

        }

    }

}

console.log(rentCost(21));