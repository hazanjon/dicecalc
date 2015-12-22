'use strict';

/**
 * @ngdoc directive
 * @name diceCalcApp.directive:unitProfile
 * @description
 * # unitProfile
 */
angular.module('diceCalcApp')
	.directive('unitProfile', function () {
		return {
			templateUrl: 'views/unitprofile.html',
			restrict: 'E',
			scope: { 
				options: '=',
				profile: '='
			},
			link: function postLink(scope, element, attrs) {
				scope.display = {
					attack: true,
					defense: true,
					hp: true,
					armor: true,
				}
				
				scope.editable = false;
				
				if(scope.options && scope.options.editable){
					scope.editable = true;
				}
				
				console.log(scope.options);
				console.log('editable', scope.editable);
				
				if(scope.options && scope.options.display){
					if(scope.options.display == 'attacker'){
						scope.display.defense = false;
						scope.display.armor = false;
						scope.display.hp = false;
					}
					if(scope.options.display == 'defender'){
						scope.display.attack = false;
					}
				}
				
				console.log("profile", scope.profile);
			}
		};
	});
