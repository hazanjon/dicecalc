'use strict';

/**
 * @ngdoc directive
 * @name diceCalcApp.directive:weaponResults
 * @description
 * # weaponResults
 */
angular.module('diceCalcApp')
	.directive('weaponResults', function () {
		return {
			templateUrl: 'views/weaponresults.html',
			restrict: 'E',
			scope: { results: '=results' },
			link: function postLink(scope, element, attrs) {
				console.log(scope.results);
			}
		};
	});
