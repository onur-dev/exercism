var primeFactors = {};

primeFactors.for = function(value) {
    if(isNaN(value)) throw Error('invalid input');
    var result = [];
    for (var i = 2; i <= value; i++) {
        while ((value % i) === 0) {
            result.push(i);
            value /= i;
        }
    }
    
    return result;
}

module.exports = primeFactors;