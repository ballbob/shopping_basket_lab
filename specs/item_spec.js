var assert = require('assert');
var Item = require('../item.js');

describe('Item',function(){

  var item;

  beforeEach(function(){
    item = new Item('pear',10,true)
  })

  it('should have a name',function(){
    assert.strictEqual('pear',item.name)
  })

})