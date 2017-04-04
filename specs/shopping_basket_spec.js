var assert = require('assert');
var Item = require('../item.js');
var ShoppingBasket = require('../shopping_basket.js');

describe('Shopping basket', function() {

  var shoppingBasket;
  var pear;
  var banana;
  var orange;


  beforeEach(function() {
    pear = new Item('pear', 10, true);
    banana = new Item('banana', 30, false);
    orange = new Item('orange', 5, true);

    shoppingBasket = new ShoppingBasket()
  })

  it('should add items',function(){
    shoppingBasket.add(pear)

    assert.strictEqual(pear,shoppingBasket.listOfItems[0])
  })

})