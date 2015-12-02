'use strict';

describe('Service: calcFactory', function () {

  // load the service's module
  beforeEach(module('diceCalcApp'));

  // instantiate service
  var calcFactory;
  beforeEach(inject(function (_calcFactory_) {
    calcFactory = _calcFactory_;
  }));

  it('should do something', function () {
    expect(!!calcFactory).toBe(true);
  });
    
  it('Return %16.66', function () {
    var settings = {
      diceSides: 6,
      oneFail: false
    }
    expect(Math.round(calcFactory.rollChance(1,6,settings),3)).toBe(Math.round(1/6,3));
  });
  
  it('Return %83.33', function () {
    var settings = {
      diceSides: 6,
      oneFail: false
    }
    expect(Math.round(calcFactory.rollChance(5,6,settings),3)).toBe(Math.round(5/6,3));
  });
  
  it('Return %100', function () {
    var settings = {
      diceSides: 6,
      oneFail: false
    }
    expect(Math.round(calcFactory.rollChance(6,6,settings),3)).toBe(1);
  });
  
  it('Return %83.33 when 1 always fails', function () {
    var settings = {
      diceSides: 6,
      oneFail: true
    }
    expect(Math.round(calcFactory.rollChance(6,6,settings),3)).toBe(Math.round(5/6,3));
  });

});
