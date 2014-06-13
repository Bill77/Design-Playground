app.directive('widget', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<div class="widgetTitle">{{widgetTitle}}</div><div class="widgetDetails" ng-transclude></div>',
    scope: {
      widgetTitle: '@'
    }
  }
});