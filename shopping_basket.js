var ShoppingBasket = function(){
  this.listOfItems = new Array();
}

ShoppingBasket.prototype = {
  add: function(item){
    this.listOfItems.push(item);
  },

  remove: function() {
    this.listOfItems.pop();
  }
}

module.exports = ShoppingBasket;