'use strict';

describe('Controller: BreweryCtrl', function () {

  // load the controller's module
  beforeEach(module('microbrewMondayApp'));

  var BreweryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BreweryCtrl = $controller('BreweryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BreweryCtrl.awesomeThings.length).toBe(3);
  });
});
