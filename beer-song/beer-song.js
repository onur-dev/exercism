var BeerSong = function() {};

BeerSong.prototype.verse = function(bottleCount) {
 if(isNaN(bottleCount)) throw Error('invalid input!');
 return this.leftPart(bottleCount) + '\n' + this.rightPart(bottleCount);
};

BeerSong.prototype.countPhrase = function(bottleCount) {
 if (bottleCount === 0) return 'no more bottles';
 if (bottleCount === 1) return '1 bottle';
 return bottleCount.toString() + ' bottles';
};

BeerSong.prototype.bottleString = function (bottleCount) {
 if (bottleCount === 1) return 'it';
 return 'one';
};

BeerSong.prototype.leftPart = function(bottles) {
 let str = this.countPhrase(bottles) + ' of beer on the wall, ' + this.countPhrase(bottles) + ' of beer.';
 return str.slice(0,1).toUpperCase() + str.slice(1); 
}

BeerSong.prototype.rightPart = function(bottles) {
 if (bottles === 0) return 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
 return 'Take ' + this.bottleString(bottles) + ' down and pass it around, ' + this.countPhrase(bottles - 1) + ' of beer on the wall.\n';
}

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