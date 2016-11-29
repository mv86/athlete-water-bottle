var athlete = {
  distancePerPercent: 100,
  hydrationLevel: 100, 
  distanceCovered: 0,
  run: function(distance){
    var maxPossibleDistance = this.distancePerPercent * this.hydrationLevel;
    if ( distance > maxPossibleDistance) {
      distance = maxPossibleDistance;
    };
    this.distanceCovered += distance;
    var hydrationDeduction = (distance / this.distancePerPercent);
    this.hydrationLevel -= hydrationDeduction;
  },

  drink: function(bottle, swigs){
    for (i = 0; i < swigs; i++){
      this.hydrationLevel += bottle.drink();
    }
    if (this.hydrationLevel > 100) {
      this.hydrationLevel = 100;
    };
  }


};

module.exports = athlete;