var ShoppingBasket = function(){
  this.listOfItems = new Array();
}

ShoppingBasket.prototype = {
  add: function(item){
    this.listOfItems.push(item);
  },

  remove: function() {
    this.listOfItems.pop();
  },

  totalPrice: function() {
    var totalcost = 0
    for( var i = 0; i < this.listOfItems.length; i++) {
        totalcost = totalcost + this.listOfItems[i].price
    }
    return totalcost
  },

  discountPrice: function() {
    var total = this.totalPrice();
    if (total > 20){
       total = basicTotal * 0.9
    }
    return total;
  }
}

module.exports = ShoppingBasket;