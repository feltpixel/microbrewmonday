'use strict';

describe('Controller: NewreviewCtrl', function () {

  // load the controller's module
  beforeEach(module('microbrewMondayApp'));

  var NewreviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewreviewCtrl = $controller('NewreviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewreviewCtrl.awesomeThings.length).toBe(3);
  });
});
