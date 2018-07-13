const cases = {
    0: "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n",
    1: "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n",
    2: "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n",
};

var BeerSong = function() {};

BeerSong.prototype.verse = function(val) {
    if(isNaN(val)) throw Error('invalid input!');
    let currentVerse = val.toString(), nextVerse = (val - 1).toString();
	var normalLine = `${val} bottles of beer on the wall, ${val} bottles of beer.\nTake one down and pass it around, ${val-1} bottles of beer on the wall.\n`;
	return val in cases ? cases[val] : normalLine;
};

BeerSong.prototype.sing = function(start, end) {
    if(!end) end = 0;
    if(isNaN(start) || isNaN(end)) throw Error('invalid input!');
    let result = [];
    for(var i = start; i >= end; i--) {
		result.push(this.verse(i));
	}
	return result.join('\n');
};

module.exports = BeerSong;