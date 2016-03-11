'use strict';

describe('Controller: NewbreweryCtrl', function () {

  // load the controller's module
  beforeEach(module('microbrewMondayApp'));

  var NewbreweryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewbreweryCtrl = $controller('NewbreweryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewbreweryCtrl.awesomeThings.length).toBe(3);
  });
});
