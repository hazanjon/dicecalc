'use strict';

describe('Service: calcFactory', function () {

  // load the service's module
  beforeEach(module('diceCalcApp'));

  // instantiate service
  var calcFactory;
  beforeEach(inject(function (_calcFactory_) {
    calcFactory = _calcFactory_;
  }));
  
  function threeDP (value){
    return Math.round(value * 1000) / 1000; 
  }

  it('should do something', function () {
    expect(!!calcFactory).toBe(true);
  });
    
  it('Return %50, AC11 +0 D20', function () {
    var settings = {
      diceSides: 20,
      oneFails: false
    }
    expect(threeDP(calcFactory.hitChance(0,11,settings))).toBe(0.5);
  });
    
  it('Return %0, AC21 +0 D20', function () {
    var settings = {
      diceSides: 20,
      oneFails: false
    }
    expect(threeDP(calcFactory.hitChance(0,21,settings))).toBe(0);
  });
    
  it('Return %0', function () {
    var settings = {
      diceSides: 6,
      oneFails: false
    }
    expect(threeDP(calcFactory.hitChance(0,7,settings))).toBe(0);
  });
    
  it('Return %16.66', function () {
    var settings = {
      diceSides: 6,
      oneFails: false
    }
    expect(threeDP(calcFactory.hitChance(1,7,settings))).toBe(threeDP(1/6));
  });
  
  it('Return %83.33', function () {
    var settings = {
      diceSides: 6,
      oneFails: false
    }
    expect(threeDP(calcFactory.hitChance(5,7,settings))).toBe(threeDP(5/6));
  });
  
  it('Return %100', function () {
    var settings = {
      diceSides: 6,
      oneFails: false
    }
    expect(threeDP(calcFactory.hitChance(6,7,settings))).toBe(1);
  });
  
  it('Return %83.33 when 1 always fails', function () {
    var settings = {
      diceSides: 6,
      oneFails: true
    }
    expect(threeDP(calcFactory.hitChance(6,7,settings))).toBe(threeDP(5/6));
  });

});
