var Triangle = function (totalRows) {
	if(isNaN(totalRows)) throw Error('invalid input!');
    this.rows = [];
    let row = [1];

    for(var i = 0; i < totalRows; i++ ) {
		this.rows.push(row);
		this.lastRow = row;
		row = this.next(row);
	}
 
};

Triangle.prototype.next = function(currentRow) {
	let row = [], previousVal = 0;
	for(var i = 0; i < currentRow.length; i++) {
		row.push(previousVal + currentRow[i]);
		previousVal = currentRow[i];
	}
	row.push(previousVal);
	return row;
}

module.exports = Triangle;