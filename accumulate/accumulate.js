var accumulate = function(input, operation) {
    var result = [];
    if(Array.isArray(input) || typeof input === 'string') {
        input.forEach( val => result.push(operation(val)) );
        return result;
    } else {
        throw Error('invalid input!');
    }
}

module.exports = accumulate;