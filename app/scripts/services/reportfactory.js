'use strict';

/**
 * @ngdoc service
 * @name diceCalcApp.reportFactory
 * @description
 * # reportFactory
 * Factory in the diceCalcApp.
 */
angular.module('diceCalcApp')
	.factory('reportFactory', function ($rootScope, calcFactory) {
		
		function threeDP (value){
			return Math.round(value * 1000) / 1000; 
		}
		
		function reportFactory(intialData) {
				var self = this;
			
				var weaponProfile = function (name, str, ap, shots, number){
					
					var profile = {
						name: name || '',
						toWoundModifier: str || 1,
						ap: ap || 0,
						shots: shots || 1,
						number: number || 1,
						results:{
							hitChance: 0,
							hit: 0,
							woundChance: 0,
							wound: 0,
							unsavedChance: 0,
							unsaved: 0,
						}
					};
					
					$rootScope.$watchCollection(function(){return profile;}, function(a){
						console.log('watchc', a);
						self.calculateWeapon(profile);
					});
					
					return profile;
				}
			
				this.settings = {
					diceSides: 6,
					oneFails: true,
					woundTopEnd: true
				};
				
				this.attackerData = {
						toHitModifier: 3,
						toWoundModifier: 3,
						damage: 1,
						saveModifiers: []
				};
				
				this.weapons = [];
				
				this.weapons.push(weaponProfile('Lasgun', 3, 0, 1, 35));
				this.weapons.push(weaponProfile('Lascannon', 9, 2, 1, 5));
								
				this.defenderData = {
						toHitModifier: 7,
						toWoundModifier: 6,
						hp: 4,
						saveModifiers: {
							armor: 4,
							cover: 3,
						}
				};
				this.calculatedData = {
					hit:{
						
					}
				};
				
				this.outcome = null;
				
				if (intialData) {
						this.setData(intialData);
				}
				
				//this.calculateAll();
				// Some other initializations related to book
		};
		reportFactory.prototype = {
				setData: function(intialData) {
						angular.extend(this, intialData);
				},
				getHitChance: function() {
					return this.calculatedData.hitChance = calcFactory.rollChance(this.attackerData.toHitModifier, this.defenderData.toHitModifier, this.settings);
				},
				getWoundChance: function() {
					return this.calculatedData.hitChance = calcFactory.rollChance(this.attackerData.toWoundModifier, this.defenderData.toWoundModifier, this.settings);
				},
				calculateWeapon: function(weapon) {
					var damage = weapon.shots * weapon.number;
					
					weapon.results.hitChance = threeDP(calcFactory.hitChance(this.attackerData.toHitModifier, this.defenderData.toHitModifier, this.settings));
					weapon.results.hit = threeDP(damage * weapon.results.hitChance);
					weapon.results.woundChance = threeDP(calcFactory.hitChance(weapon.toWoundModifier, this.defenderData.toWoundModifier + 4, this.settings));
					weapon.results.wound = threeDP(weapon.results.hit * weapon.results.woundChance);
					weapon.results.unsavedChance = threeDP(weapon.results.hitChance * weapon.results.woundChance);
					weapon.results.unsaved = threeDP(weapon.shots * weapon.number * weapon.results.hitChance * weapon.results.woundChance);
				},
				calculateAll: function() {
					console.log('calcall');
					this.weapons.forEach(this.calculateWeapon);
				},
		};
		return reportFactory;
	});
