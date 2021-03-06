'use strict';

describe('Directive: unitProfile', function () {

  // load the directive's module
  beforeEach(module('diceCalcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<unit-profile></unit-profile>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the unitProfile directive');
  }));
});
