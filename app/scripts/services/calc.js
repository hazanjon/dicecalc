'use strict';

/**
 * @ngdoc service
 * @name diceCalcApp.calcFactory
 * @description
 * # calcFactory
 * Factory in the diceCalcApp.
 */
angular.module('diceCalcApp')
  .factory('calcFactory', function ($q) {
    var calcFactory = {};
    
    calcFactory.lifeCycle = function (report){
      $q.when(report)
        //.then(calcFactory.preHitModifiers)
        .then(function() {
        })
        //.then(calcFactory.postHitModifiers)
        //.then(calcFactory.preWoundModifiers)
        .then(calcFactory.woundChance)
        //.then(calcFactory.postWoundModifiers)
        .then(function (out){
          console.log(out);
        })
    }
    
    calcFactory.hitChance = function (modifier, targetValue, settings){
            
      var maxModifier = modifier;
      if(settings.oneFails){
        maxModifier = settings.diceSides - 1;
      }
      // console.log('maxModifier', maxModifier)
      modifier = Math.min(modifier, maxModifier);
      
      var modifiedTarget = targetValue - modifier;
      
      // console.log('modifiedTarget', modifiedTarget);
      // console.log('settings', settings);
      
      //if(modifiedTarget <= settings.diceSides){
        return calcFactory.rollChance(modifiedTarget, settings.diceSides);
      // }else if(modifiedTarget < settings.diceSides){
        
      // }
    }
    
    calcFactory.rollChance = function (targetValue, diceSides){
      // console.log(diceSides + 1 - targetValue);   
      // console.log((diceSides + 1 - targetValue) / diceSides);   
      return Math.max((diceSides + 1 - targetValue) / diceSides, 0);
    }
    
    calcFactory.hitChanceBuff = function (chance, modifier, targetValue, dice){
            
      var minModifiedTarget = 0;
      if(dice.oneFails){
        minModifiedTarget = 1;
      }
      
      return MATH.max(targetValue - modifier, minModifiedTarget) / CONFIG.dice.sides;
    }
    
    return calcFactory;
  });

