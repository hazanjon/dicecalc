'use strict';

/**
 * @ngdoc directive
 * @name diceCalcApp.directive:weapon
 * @description
 * # weapon
 */
angular.module('diceCalcApp')
	.directive('weapon', function () {
		return {
			templateUrl: 'views/weapon.html',
			restrict: 'E',
			scope: { weapon: '=weapon' },
			link: function postLink(scope, element, attrs) {
				console.log(scope);
			}
		};
	});
