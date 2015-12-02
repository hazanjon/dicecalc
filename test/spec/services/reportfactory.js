'use strict';

describe('Service: reportFactory', function () {

  // load the service's module
  beforeEach(module('diceCalcApp'));

  // instantiate service
  var reportFactory;
  beforeEach(inject(function (_reportFactory_) {
    reportFactory = _reportFactory_;
  }));

  it('should do something', function () {
    expect(!!reportFactory).toBe(true);
  });

});
