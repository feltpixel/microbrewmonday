'use strict';

/**
 * @ngdoc overview
 * @name microbrewMondayApp
 * @description
 * # microbrewMondayApp
 *
 * Main module of the application.
 */
angular
  .module('microbrewMondayApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/reviews', {
        templateUrl: 'views/reviews.html',
        controller: 'ReviewsCtrl',
        controllerAs: 'reviews'
      })
      .when('/beers', {
        templateUrl: 'views/beers.html',
        controller: 'BeersCtrl',
        controllerAs: 'beers'
      })
      .when('/brewery', {
        templateUrl: 'views/brewery.html',
        controller: 'BreweryCtrl',
        controllerAs: 'brewery'
      })
      .when('/beer', {
        templateUrl: 'views/beer.html',
        controller: 'BeerCtrl',
        controllerAs: 'beer'
      })
      .when('/review', {
        templateUrl: 'views/review.html',
        controller: 'ReviewCtrl',
        controllerAs: 'review'
      })
      .when('/newBrewery', {
        templateUrl: 'views/newbrewery.html',
        controller: 'NewbreweryCtrl',
        controllerAs: 'newBrewery'
      })
      .when('/editBrewery', {
        templateUrl: 'views/editbrewery.html',
        controller: 'EditbreweryCtrl',
        controllerAs: 'editBrewery'
      })
      .when('/newReview', {
        templateUrl: 'views/newreview.html',
        controller: 'NewreviewCtrl',
        controllerAs: 'newReview'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
