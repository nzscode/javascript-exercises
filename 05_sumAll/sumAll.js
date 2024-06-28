const sumAll = function(num1, num2) {
    let sum = 0;
    let numStart = 0;
    let numEnd = 0;
    if ((typeof num1 != "number" || typeof num2 != "number") || (num1 < 0 || num2 < 0)){
        return 'ERROR';
    }
    else if (num1 > num2){
        numStart = num2;
        numEnd = num1;
    }else{
        numStart = num1;
        numEnd = num2
    }
    
    for (let i = numStart; i < numEnd+1; i++) {
        let num = i;
        sum += num;
        
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
