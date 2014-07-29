'use strict';

/* Spark Line Directive */

app.directive('sparkline', [function () {
  return {
    restrict: 'EA',
    scope: {
      data: '=',      
      getX: '&',
      getY: '&',
      ptColor: '@',
      ptAltColor: '@',
      height: '@',            
      max: '@',
      min: '@',
      ptRadius: '@',
      firstValue: '@',  // local scope value for the ng-bind
      lastValue: '@'    // local scope value for the ng-bind
    },
    template:'<div class="row sparklineControl"><span class="col-sm-2">{{firstValue | number:1 }}</span><svg class="col-sm-8"></svg><span class="col-sm-2">{{lastValue | number:1}}</span></div>',
    replace:true,    
    link: function ( scope, element, attrs ) {
      // Config values
      var maxPlottedPts = 10; // max points to be plotted

      // Input parameters
      var getXfunc = attrs.getX === undefined ? function(d) {return d.x} : d3.functor(scope.getX());
      var getYfunc = attrs.getY === undefined ? function(d) {return d.y} : d3.functor(scope.getY());
      var defColor = attrs.ptColor === undefined? "black" : scope.ptColor;
      var altColor = attrs.ptAltColor === undefined? "red" : scope.ptAltColor;
      var height = attrs.height === undefined? 25 : scope.height;
      var ptRadius = attrs.ptRadius === undefined? 4 : scope.ptRadius;
      
      var svg = d3.select(element[0].children[1]);
      var sparklineCtrl = d3.select(element[0]);
      
      // setup height of the control
      sparklineCtrl.style('height', height)
      .style('line-height', height);
      svg.style('height', height);
            
      // Browser onresize event
      window.onresize = function() {
        scope.$apply();
      }
      
      // Watch for resize event
      scope.$watch(function() {
        return angular.element(window)[0].innerWidth;
      }, function() {
        scope.render(scope.data);
      });
      
      // Watch for data change
      scope.$watch('data', function(newData) {
        scope.render(newData);
      }, true);
      
      // function for color setup
      var inRangeColor = function(value) {
        return (value < scope.min || value > scope.max)? altColor : defColor
      }
      
      // Render function
      scope.render = function(data) {
        // remove all previous items before render
        svg.selectAll('*').remove();
        
        // if no data do not do anything
        if (!data) return;
        
        scope.firstValue = getYfunc(scope.data[0]);
        scope.lastValue = getYfunc(scope.data[scope.data.length-1]);
                
        var width = svg.node().clientWidth;
        var height = svg.node().clientHeight;
        var adjustedHeight = height - (2*ptRadius);
        var adjustedWidth = width - (2*ptRadius);                        

        var x = d3.scale.linear()
        var y = d3.scale.linear()        
        var line = d3.svg.line()
        .x(function(data) { return x(getXfunc(data));})
        .y(function(data) { return y(getYfunc(data));});

        // setup svg translation
        x.range([ptRadius, adjustedWidth]);
        x.domain(d3.extent(data, getXfunc));
        y.range([adjustedHeight, ptRadius]);
        y.domain(d3.extent(data, getYfunc));
        
        // plot limit box
        if (attrs.max !== undefined && attrs.min !== undefined) {
          var limitBox = svg.append('rect')
          .attr('x', ptRadius)
          .attr('y', y(scope.min) - window.Math.abs(y(scope.max) - y(scope.min)))
          .attr('width', 0)
          .attr('height', window.Math.abs(y(scope.max) - y(scope.min)))
          .attr('fill', 'lightgrey');
          
          limitBox.transition().duration(1000).attr('width', adjustedWidth);
          
          d3.select(element[0].children[0]).style('color', inRangeColor(scope.firstValue));
          d3.select(element[0].children[2]).style('color', inRangeColor(scope.lastValue));
        }
                
        // plot sparkline
        var path = svg.append('path')
        .datum(data)
        .attr('d', line)
        .attr('class', 'sparkline');
        
        var linelen = path.node().getTotalLength();
        
        path
        .attr("stroke-dasharray", linelen + ", " + linelen)
        .attr("stroke-dashoffset", linelen);
        
        path.transition().duration(1000)        
        .attr("stroke-dashoffset", 0);
                        
        // plot points
        svg.selectAll("points").data(data.length < maxPlottedPts? data : [data[scope.data.length-1]])        
        .enter().append('circle')
        .transition().delay(1000)
        .attr('cx', function(d) {return x(getXfunc(d))})
        .attr('cy', function(d) {return y(getYfunc(d))})
        .attr('r', ptRadius)
        .attr('fill', function(d) { return inRangeColor(getYfunc(d))});
      };
    }
  };
}]);
