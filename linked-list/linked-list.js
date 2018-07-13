var Node = function(data, prev, next) {
    this.data = data;
    this.prev = prev;
	this.next = next;	
}

var LinkedList = function () {
    this.front = null;
	this.back = null;
	this.length = 0;
};

LinkedList.prototype.push = function(data) {
	this.back = new Node(data, this.back, null);
	if(this.length >= 1) this.back.prev.next = this.back;
	else this.front = this.back;
	this.length++;
};

LinkedList.prototype.unshift = function(data) {
    this.front = new Node(data, null, this.front);
	if(this.length >= 1) this.front.next.prev = this.front;
	else this.back = this.front;
	this.length++;
};

LinkedList.prototype.pop = function() {
	if(this.length === 0) return;
    this.length--;
    var backNode = this.back;
	this.back = backNode.prev;
	if(this.length === 0) this.front = this.back;
	backNode.delete();
	return backNode.data;
};

LinkedList.prototype.shift = function() {
	if(this.length === 0) return;
    this.length--;
    var frontNode = this.front;
	this.front = frontNode.next;
	if(this.length === 0) this.back = this.front;
	frontNode.delete();
	return frontNode.data;
};

Node.prototype.delete = function() {
    if(this.prev) this.prev.next = this.next;
    if(this.next) this.next.prev = this.prev;
    this.prev = null, this.next = null;
};

LinkedList.prototype.delete = function(data) {
	var currentNode = this.front;
	while(currentNode && currentNode.data !== data) currentNode = currentNode.next;
	if(currentNode){
		this.length--;
		currentNode.delete();
	}
};

LinkedList.prototype.count = function() {
	return this.length;
};

module.exports = LinkedList;