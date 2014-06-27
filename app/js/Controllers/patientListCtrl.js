'use strict'

app.controller('PatientListCtrl', function PatientListCtrl($scope, PatientListSvc) {
  var viewModel = this;  
  viewModel.test = "Patient List Information";
  viewModel.patients = PatientListSvc.patients;
  
  PatientListSvc.getPatients();
  //$scope.$apply();
});