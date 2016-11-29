var assert = require('assert');
var bottle = require('../water_bottle');

// describe('Water bottle', function() {
//   it('should be empty at start', function() {
//     assert.equal(0, bottle.volume);
//   })
// });

describe('Water bottle', function() {
  it('should go to 100 when filled', function() {
    bottle.fillBottle();
    assert.equal(100, bottle.volume);
  })
});

describe("Water bottle", function() {
  it('should go down 10 when drank', function() {
    bottle.fillBottle();
    bottle.drink();
    assert.equal(90, bottle.volume);
  })
});

describe("Water bottle", function() {
  it('should go down to 60 when 40 deducted', function() {
    bottle.fillBottle();
    bottle.deduct(40);
    assert.equal(60, bottle.volume);
  })
});

describe("Water bottle", function() {
  it('should empty when emptied', function() {
    bottle.fillBottle();
    bottle.empty();
    assert.equal(0, bottle.volume);
  })
});

describe("Water bottle", function() {
  it('cannot go below 0 volume', function() {
    bottle.fillBottle();
    bottle.deduct(110);
    assert.equal(0, bottle.volume);
  })
});
