;(function() {
"use strict";

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

angular.module("askcs.component.prototype").run(["$templateCache", function($templateCache) {$templateCache.put("prototype.html","<div class=\"askcs-prototype\">Hi, I work kinda..{{vm.more}}</div>");}]);
}());
