'use strict';

app.controller('sideMenu', function($scope) {
  $scope.menuOpened = false;
  
  $scope.setMenuOpened = function(menuOpen) {
    $scope.menuOpened = menuOpen;
  };
});