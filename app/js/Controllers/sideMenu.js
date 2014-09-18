'use strict';

app.controller('sideMenu', function($scope) {
  $scope.menuOpened = false;
  
  $scope.toggleMenu = function() {
    $scope.menuOpened = !$scope.menuOpened;
  };
});