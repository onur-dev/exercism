var BinarySearch = function(input) {
    if(!Array.isArray(input)) throw Error('invalid input!');
    if(this.isSorted(input)) this.array = input;
};

BinarySearch.prototype.isSorted = function(array) {
    return array.every((val, i, arr) => !i || (val >= arr[i - 1]));
};

BinarySearch.prototype.indexOf = function(val) {
   let currentArray = this.array;
   return this.search(val, 0, currentArray.length);
};

BinarySearch.prototype.search = function(val, start, end) {
    let currentArray = this.array;
    if (start === end) return -1;
    let middle = Math.floor((start + end) / 2);
    if (currentArray[middle] > val) return this.search(val, start, middle);
    if (currentArray[middle] < val) return this.search(val, middle + 1, end);
    return middle;
};

module.exports = BinarySearch;