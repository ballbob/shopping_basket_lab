var ShoppingBasket = function(loyalty){
  this.listOfItems = new Array();
  this.loyalty = loyalty;
  this.totalCost = 0;
}

ShoppingBasket.prototype = {
  add: function(item){
    this.listOfItems.push(item);
  },

  remove: function() {
    this.listOfItems.pop();
  },

  totalPrice: function() {
    for( var i = 0; i < this.listOfItems.length; i++) {
        this.totalCost = this.totalCost + this.listOfItems[i].price
    }
    return this.totalCost
  },

  discountPrice: function() {
    if (this.totalCost > 20){
       this.totalCost = this.totalCost * 0.9
    }
    return this.totalCost;
  },

  loyaltyPrice: function(){
    if (this.loyalty === true){
      this.totalCost = this.totalCost * 0.95
    }
    return this.totalCost;
  },

  totalDiscount: function(){
    this.totalPrice()
    this.discountPrice()
    this.loyaltyPrice()
    return this.totalCost
  }

}

module.exports = ShoppingBasket;