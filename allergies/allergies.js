const allergyTypes = [ 'eggs', 'peanuts', 'shellfish', 'strawberries',
  'tomatoes', 'chocolate', 'pollen', 'cats'];

var Allergies = function(val) {
    if(!isNaN(val)) this.currentVal = val;
    else throw Error('invalid input!');
};

Allergies.prototype.allergicTo = function(val) {
    return this.list().includes(val);
};

Allergies.prototype.list = function() {
    let allergies = [];
    allergyTypes.forEach((elem, index) => {
        var allergy = allergyTypes[index], currentAllergy = Math.pow(2, index);
        if (currentAllergy & this.currentVal) allergies.push(allergy);
    });
    return allergies;
};

module.exports = Allergies;

