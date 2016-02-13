/*
(function () {
  'use strict';

  angular
    .module('mean.myTheme')
    .config(myTheme);

  myTheme.$inject = ['$viewPathProvider'];

  function myTheme($viewPathProvider) {
    $viewPathProvider.override('system/views/index.html', 'myTheme/views/index.html'); //override arg a with arg b
  }

})(); */

'use strict' ;

angular.module('mean.myTheme').config(['$viewPathProvider', '$stateProvider',
    function($viewPathProvider, $stateProvider) {
  $viewPathProvider.override('system/views/index.html', 'myTheme/views/index.html');
}]);

