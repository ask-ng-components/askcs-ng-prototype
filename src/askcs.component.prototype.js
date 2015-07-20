(function () {
  'use strict';

  function prototypeComponent () {
    return {
      restrict: 'E',
      templateUrl: 'prototype.html',
      controller: prototypeController,
      controllerAs: 'vm'
    }
  };

  function prototypeController(){
    var vm = this;

    vm.more = 'Actually I totally work';
  }

  angular
    .module('askcs.component.prototype',[])
    .directive('askcsPrototype', prototypeComponent);

})();
