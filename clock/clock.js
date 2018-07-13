var Clock = function (hour, minute) {
    if(!minute) minute = 0;
    this.hour = (hour + Math.floor(minute / 60)) % 24;
    this.minute = minute % 60 + (minute < 0 ? 60 : 0);
    if(this.hour < 0) this.hour += 24;
};   

Clock.at = function(hour, minute) {
	return new Clock(hour, minute);
};

Clock.prototype.plus = function(val) {
	return new Clock(this.hour, this.minute + val);
};

Clock.prototype.minus = function(val) {
	return new Clock(this.hour, this.minute - val);
};

Clock.prototype.equals = function(time) {
	return this.hour == time.hour && this.minute == time.minute;
};

Clock.prototype.toString = function() {
	return ('00' + this.hour).slice(-2) + ':' + ('00' + this.minute).slice(-2);
};

module.exports = Clock;