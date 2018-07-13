var accumulate = function(array, operation) {
    var result = [];
    array.forEach( val => result.push(operation(val)) );
	return result;
}

module.exports = accumulate;