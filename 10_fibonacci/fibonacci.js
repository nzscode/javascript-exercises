const fibonacci = function(num) {
    let seq = [0, 1, 1]
    for (let i = 1; i < (num+5); i++) {
            seq.push(i + seq[i-1])
         
        
        
    }
    console.log(seq)
};

fibonacci(3)
// Do not edit below this line
// module.exports = fibonacci;
