var assert = require('assert');
var Item = require('../item.js');

describe('Item',function(){

  var item;

  beforeEach(function(){
    item = new Item('pear',10,true)
  });

  it('should have a name',function(){
    assert.strictEqual('pear',item.name)
  });

  it('should have a price', function() {
    assert.strictEqual(10, item.price)
  });

  it('should be eliglible for bogof', function() {
    assert.strictEqual(true, item.bogof)
  })
})