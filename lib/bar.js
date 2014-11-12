var Drink = require("./drink");
var Selection = require("./selection");

var stone = new Drink("Stone IPA",
  [
  "Beer"
  ]
);

var whisky = new Selection("Whisky",
  [
  "Yamazaki",
  "Jameson",
  "Sazerac",
  "Glen McKenna"
  ]
);

whisky.addDrink("Macallan");
whisky.display();

stone.addSelection("IPA");
stone.display();
