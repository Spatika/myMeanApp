
  'use strict';

  function MyTheme() {
    return {
      name: 'myTheme'
    };
  }

  angular
    .module('mean.myTheme')
    .factory(MyTheme);

  MyTheme.$inject = [];



