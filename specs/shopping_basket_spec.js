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

  it('should start empty', function() {
    assert.strictEqual(undefined, shoppingBasket.listOfItems[0])
  })

  it('should add items',function(){
    shoppingBasket.add(pear)

    assert.strictEqual(pear,shoppingBasket.listOfItems[0])
  }),

  it('should remove items', function(){
    shoppingBasket.add(banana)
    shoppingBasket.remove()

    assert.strictEqual(undefined, shoppingBasket.listOfItems[0])
  })

  it('should count the total price', function() {
    shoppingBasket.add(pear)
    shoppingBasket.add(banana)
    shoppingBasket.add(orange)

    assert.strictEqual(45, shoppingBasket.totalPrice())
  })

  it('should not apply discount below £20', function() {
    shoppingBasket.add(pear)
    shoppingBasket.add(orange)

    assert.strictEqual(15, shoppingBasket.discountPrice())
  })

  it('should apply discount above £20', function(){
    shoppingBasket.add(pear)
    shoppingBasket.add(banana)

    assert.strictEqual(36, shoppingBasket.discountPrice())
  })

})