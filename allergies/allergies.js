const allergyTypes = [ 'eggs', 'peanuts', 'shellfish', 'strawberries',
  'tomatoes', 'chocolate', 'pollen', 'cats'];

var Allergies = function(val) {
    if(!isNaN(val)) this.totalAllergyScore = val;
    else throw Error('invalid input!');
};

Allergies.prototype.allergicTo = function(val) {
    return this.list().includes(val);
};

Allergies.prototype.list = function() {
    return allergyTypes.filter((allergy, index) => Math.pow(2, index) & this.totalAllergyScore);
};

module.exports = Allergies;

