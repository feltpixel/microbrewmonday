'use strict';

describe('Controller: ReviewsCtrl', function () {

  // load the controller's module
  beforeEach(module('microbrewMondayApp'));

  var ReviewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReviewsCtrl = $controller('ReviewsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReviewsCtrl.awesomeThings.length).toBe(3);
  });
});
