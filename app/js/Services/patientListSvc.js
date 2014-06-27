'use strict';

//exploring the following concepts from this article
//http://toddmotto.com/rethinking-angular-js-controllers/

app.factory('PatientListSvc', function() {
  var PatientListSvc = {};
  
  var data = [{Name: 'Bill', ID: 1, Age: 36},
              {Name: 'Gennean', ID: 2, Age: 34},
              {Name: 'Josh', ID: 3, Age: 36},
              {Name: 'Nate', ID: 4, Age: 29}];
  
  PatientListSvc.patients = [];
  //PatientListSvc.patients = data;
  
  PatientListSvc.getPatients = function() {
    // this could be an API call    
    PatientListSvc.patients = data;    
  };
  
  return PatientListSvc;
});