'use strict';

app.controller('PatientBarCtrl', function ($scope, $routeParams) {
  var viewModel = this;
  
  //Mock up Data for Patient Bar
  viewModel.fullName = "Booker, Beth";
  viewModel.dateOfBirth = "10/5/1957";
  viewModel.displayId = "987566";
  viewModel.age = "57 yrs";
  //Hardcoding single variable for diagnosis mock up
  viewModel.diagnosis = "174.2* Left Upper-inner quadrant of breast, ER+ PgR+ Her2 1+ 174.2* Left Upper-inner quadrant of breast, ER+ PgR+ Her2 1+";
  viewModel.patientPhoto = "img/user1.jpg"
});