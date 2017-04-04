var ShoppingBasket = function(loyalty){
  this.listOfItems = new Array();
  this.loyalty = loyalty;
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
       total = total * 0.9
    }
    return total;
  },

  loyaltyPrice: function(){
    var total = this.totalPrice();
    if (this.loyalty === true){
      total = total * 0.95
    }
    return total;
  }

  // totalDiscount: function(){
  //   var total = totalPrice();
    
  // }
}

module.exports = ShoppingBasket;