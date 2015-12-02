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
    
    calcFactory.rollChance = function (modifier, targetValue, settings){
            
      var minModifiedTarget = 0;
      if(settings.oneFails){
        minModifiedTarget = 1;
      }
      
      var modifiedTarget = Math.max(targetValue - modifier, minModifiedTarget);
      
      // console.log(modifiedTarget);
      // console.log(settings);
      // console.log(1 - (modifiedTarget / settings.diceSides));
      
      return Math.max(1 - (modifiedTarget / settings.diceSides), 0);
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

