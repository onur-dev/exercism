const commands = [ 'wink', 'double blink', 'close your eyes', 'jump', 'REVERSE' ];

var SecretHandshake = function (val) {
    if(isNaN(val)) throw new Error("Handshake must be a number");
    this.currentVal = val;   
    this.handshake = this.execute();
};

SecretHandshake.prototype.commands = function() {
    return this.handshake;
};

SecretHandshake.prototype.execute = function() {
    let handshake = [];

    for (var i = 0; i < commands.length; i++) {
      let currentCommand = commands[i];
      let command = this.currentVal & Math.pow(2, i);
      if (command) {
        currentCommand === 'REVERSE' ?  handshake.reverse() : handshake.push(commands[i]);
      }
    }

    return handshake;
};

module.exports = SecretHandshake;