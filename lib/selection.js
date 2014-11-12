var Selection = function(name, drinkArr) {
  this.name = name;
  this.drinkArr = drinkArr || [];
};

Selection.prototype.addDrink = function(drink) {
  this.drinkArr.push(drink);
};

Selection.prototype.display = function() {
  for(i=0; i < this.drinkArr.length; i++) {
    console.log(this.name + " includes these drinks:");
    console.log(this.drinkArr[i]);
  }
};

module.exports = Selection;
