var assert = require('assert');
var athlete = require('../athlete');
var bottle = require('../water_bottle');

describe('Athlete', function() {
  it('should start at 100 hydration', function() {
    assert.equal(100, athlete.hydrationLevel);
  });
});

describe('Athlete', function() {
  it('distance covered starts at 0', function() {
    assert.equal(0, athlete.distanceCovered);
  });
});

describe('Athlete', function() {
  it('hydration decreases by expected amount & distance increases by run amount', function() {
    athlete.run(1000);
    assert.equal(90, athlete.hydrationLevel);
    assert.equal(1000, athlete.distanceCovered);
  });
});

describe('Athlete', function() {
  it('hydration decreases by expected amount & distance increases by run amount', function() {
    athlete.run(1000000);
    assert.equal(0, athlete.hydrationLevel);
    assert.equal(10000, athlete.distanceCovered);
  });
});

describe('Athlete', function() {
  it('can hydrate from bottle', function() {
    bottle.fillBottle();
    athlete.hydrationLevel = 70;
    var swigs = 2;
    athlete.drink(bottle, swigs);
    assert.equal(80, bottle.volume);
    assert.equal(90, athlete.hydrationLevel);

  });
});

//TEST ATHLETE CANT DRINK MOE THAN IS IN THE BOTTLE


