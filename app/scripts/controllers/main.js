'use strict';

/**
 * @ngdoc function
 * @name diceCalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the diceCalcApp
 */
angular.module('diceCalcApp')
  .controller('MainCtrl', function ($scope, calcFactory, reportFactory) {
  	
  	$scope.mainReport = new reportFactory();
  	
  	var set ={
          diceSides: 6,
          oneFails: true
        };
  	// console.log(0.5, calcFactory.rollChance(3,6,set));
  	// console.log(0.83, calcFactory.rollChance(5,6,set));
  	// console.log(0.83, calcFactory.rollChance(6,6,set));
  	// console.log(0.83, calcFactory.rollChance(10,6,set));
  	
  	var set ={
          diceSides: 20,
          oneFails: true
        };
  	//console.log(calcFactory.hitChance(0,11,set));
  	console.log($scope.mainReport.weapons);
  	
  	// $scope.$watch('mainReport.weapons[0].ap', function(a){
  	// 	console.log('asdf', a);
  	// });
  	// var report = new reportFactory();
  	
  	// console.log(report.getHitChance());
  	// console.log(report.getWoundChance());
  });
