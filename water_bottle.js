var waterBottle =  {
  volume: 0,
  fillBottle: function() {
    this.volume = 100;
  },
  drink: function() {
    this.deduct(10);
    return 10;
  },
  deduct: function(amount) {
    this.volume -= amount;
    if ( this.volume < 0 ) {
      this.volume = 0;
    }
  },
  empty: function() {
    this.volume = 0;
  }
};  

module.exports = waterBottle;