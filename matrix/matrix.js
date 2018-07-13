var Matrix = function (val) {
    if(typeof val !== 'string') throw Error('invalid input!');
    let rows = val.split("\n");
    this.rows = rows.map( currentRow =>  {
		return currentRow.split(" ").map(currentVal => parseInt(currentVal) );
    });
    let columnIndexes = Object.keys(this.rows[0]);
	this.columns = columnIndexes.map( function(col) {
		return this.map(function(row) { return row[col] });
	}, this.rows);
};

module.exports = Matrix;