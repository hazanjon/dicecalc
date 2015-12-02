'use strict';

/**
 * @ngdoc service
 * @name diceCalcApp.reportFactory
 * @description
 * # reportFactory
 * Factory in the diceCalcApp.
 */
angular.module('diceCalcApp')
  .factory('reportFactory', function (calcFactory) {
    
    function reportFactory(intialData) {
      
        this.settings = {
          diceSides: 6,
          oneFails: true
        };
        
        this.attackerData = {
          personData:{
            toHitModifier: 3,
            toWoundModifier: 0,
            damage: 1,
            saveModifiers: []
          },
          weaponData:{
            toHitModifier: 0,
            toWoundModifier: 3,
            saveModifiers: [
              {armor: function (){
                return 0; 
              }}
            ]
          }
        };
                
        this.defenderData = {
          personData:{
            toHitModifier: 6,
            toWoundModifier: 6,
            saveModifiers: {
              armor: 4,
              cover: 3,
            }
          },
          weaponData:{
            toHitModifier: 0,
            toWoundModifier: 0,
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
        // Some other initializations related to book
    };
    reportFactory.prototype = {
        setData: function(intialData) {
            angular.extend(this, intialData);
        },
        getHitChance: function() {
          console.log(this.attackerData.personData.toHitModifier+this.attackerData.weaponData.toHitModifier);
          console.log(this.defenderData.personData.toHitModifier+this.defenderData.weaponData.toHitModifier);
          console.log(this.settings);
          return this.calculatedData.hitChance = calcFactory.rollChance(this.attackerData.personData.toHitModifier+this.attackerData.weaponData.toHitModifier, this.defenderData.personData.toHitModifier+this.defenderData.weaponData.toHitModifier, this.settings);
        },
        getWoundChance: function() {
          return this.calculatedData.hitChance = calcFactory.rollChance(this.attackerData.personData.toWoundModifier+this.attackerData.weaponData.toWoundModifier-4, this.defenderData.personData.toWoundModifier+this.defenderData.weaponData.toWoundModifier, this.settings);
        },
    };
    return reportFactory;
  });
