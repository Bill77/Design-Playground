'use strict'

app.controller('calendarCtrl', function PatientListCtrl($scope) {
  var viewModel = this;  
  viewModel.data = [{date:24, treatment: 1},
                    {date:25, treatment: 2},
                    {date:26, treatment: 3},
                    {date:27, treatment: ''},
                    {date:28, treatment: ''},
                    {date:29, treatment: 4},
                    {date:30, treatment: 6},
                    {date:31, treatment: 7},
                    {date:1, treatment: 8},
                    {date:2, treatment: ''},
                    {date:3, treatment: ''},
                    {date:4, treatment: 9},
                    {date:4, treatment: 10},
                    {date:5, treatment: 11},
                    {date:6, treatment: 12},
                    {date:7, treatment: 13},
                    {date:9, treatment: ''},
                    {date:10, treatment: ''},
                    {date:11, treatment: 14},
                    {date:12, treatment: 15, partial: true},
                    {date:13, treatment: 16},
                    {date:14, treatment: ''},
                    {date:15, treatment: ''},
                    {date:16, treatment: ''},
                    {date:17, treatment: ''},
                   ]
});