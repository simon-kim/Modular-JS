var expect = require('chai').expect;
var Drink = require("../lib/drink");
var Selection = require("../lib/selection");

describe("Drink Constructor", function() {
  it("should create a new drink constructor", function() {
    var hoegaarden = new Drink("Hoegaarden");
    expect(hoegaarden.name).to.eql("Hoegaarden");
  });

  it("should create a new selection constructor", function() {
    var cocktail = new Selection("Cocktails");
    expect(cocktail.name).to.eql("Cocktails");
  });

  it("should add a new drink to a selection", function() {
    var amf = new Drink("AMF");
    amf.addSelection("Cocktails");
    expect(amf.selArr).to.include("Cocktails");
  });
});
