/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

(function(){
    'use strict';

    angular.module('ngTable')
        .controller('ngTableFilterRowController', ngTableFilterRowController);

    ngTableFilterRowController.$inject = ['$scope', 'ngTableFilterConfig'];

    function ngTableFilterRowController($scope, ngTableFilterConfig){

        $scope.config = ngTableFilterConfig;
        $scope.getFilterCellCss = function (filter){
            var size = Object.keys(filter).length;
            var width = parseInt(12 / size, 10);
            return 's' + width;
        }
    }
})();
