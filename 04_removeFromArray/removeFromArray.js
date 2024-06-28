const removeFromArray = function(numArr, remove1, remove2, remove3, remove4) {
    let arr =[]
    let arr2 = []
    let arr3 =[]
    let arr4 =[]
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] !== remove1){
            arr.push(numArr[i])
        }
        
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== remove2){
            arr2.push(arr[i])
        }
        
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] !== remove3){
            arr3.push(arr2[i])
        }
        
    }
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] !== remove4){
            arr4.push(arr3[i])
        }
        
    }
    
    return arr4
};

// Do not edit below this line
module.exports = removeFromArray;
