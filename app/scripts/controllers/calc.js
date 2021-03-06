'use strict';

/**
 * @ngdoc function
 * @name wienerbaeumeApp.controller:CalcCtrl
 * @description
 * # CalcCtrl
 * Controller of the wienerbaeumeApp
 */
angular.module('wienerbaeumeApp')
  .controller('CalcCtrl', function ($scope) {
        $scope.art = '+';
        $scope.zahl1 = 1;
        $scope.zahl2 = 1;

        $scope.operators = ['+', '-', '*', '/'];
        $scope.selectedOperator = $scope.operators[0];

        $scope.calculate = function() {
            var A = $scope.zahl1;
            var B = $scope.zahl2;
            var C = 0;

            switch ($scope.art) {
                case '+':
                    C = A + B;
                    break;
                case '-':
                    C = A - B;
                    break;
                case '*':
                    C = A * B;
                    break;
                case '/':
                    C = A / B;
                    break;
            }

            $scope.result = C;
        };


  });
