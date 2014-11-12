var Drink = function(name, selArr) {
  this.name = name;
  this.selArr = selArr || [];
};

Drink.prototype.addSelection = function(selection) {
  this.selArr.push(selection);
};

Drink.prototype.display = function() {
  for(i=0; i < this.selArr.length; i++) {
    console.log(this.name + " is this type of alcohol:");
    console.log(this.selArr);
  }
};

module.exports = Drink;
