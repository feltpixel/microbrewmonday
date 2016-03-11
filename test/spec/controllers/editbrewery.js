'use strict';

describe('Controller: EditbreweryCtrl', function () {

  // load the controller's module
  beforeEach(module('microbrewMondayApp'));

  var EditbreweryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditbreweryCtrl = $controller('EditbreweryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditbreweryCtrl.awesomeThings.length).toBe(3);
  });
});
