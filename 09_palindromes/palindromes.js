const palindromes = function (str) {
    let strClean = "";
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str[i] != "," && str[i] != " " && str[i] != "!" && str[i] != "."){
            strClean += char    
        }
    }  
    strClean = strClean.toLowerCase()
    let midpoint = 0;
    let firstHalf = [];
    let secondHalf = [];
    let strFlipped = "";

    if(strClean.length % 2 == 0){
        midpoint = strClean.length/2;
        firstHalf = strClean.slice(0, midpoint);
        secondHalf = strClean.slice(midpoint, );
        for (let i = secondHalf.length-1; i >= 0 ; i--) {
            strFlipped += secondHalf[i];
        }
    }else{
        midpoint = (strClean.length+1)/2;
        firstHalf = strClean.slice(0, midpoint-1);
        secondHalf = strClean.slice(midpoint, );
        for (let i = secondHalf.length-1; i >= 0 ; i--) {
            strFlipped += secondHalf[i];
        }
    }

    
        if  (firstHalf == strFlipped){
            return true
        }else{
            return false
        }
      

};


// Do not edit below this line
module.exports = palindromes;