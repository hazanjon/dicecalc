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
			
				var weaponProfile = function (){
					var profile = {
						name:'test',
						toWoundModifier: 3,
						ap: 3,
						shots: 1,
						number: 1,
						results:{
							hit: 0,
							wound: 0,
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
				
				this.weapons.push(weaponProfile());
								
				this.defenderData = {
						toHitModifier: 6,
						toWoundModifier: 6,
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
					console.log(this);
					weapon.results.hit = threeDP(calcFactory.rollChance(this.attackerData.toHitModifier, this.defenderData.toHitModifier, this.settings));
					weapon.results.wound = threeDP(calcFactory.rollChance(weapon.toWoundModifier, this.defenderData.toWoundModifier, this.settings));
				},
				calculateAll: function() {
					console.log('calcall');
					this.weapons.forEach(this.calculateWeapon);
				},
		};
		return reportFactory;
	});
