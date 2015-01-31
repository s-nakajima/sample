
var NcModule = angular.module('nc.module', []);

NcModule.config(function(NcModuleConstants) {
  console.log('NcModuleConstants');
  console.log(NcModuleConstants);
});

//NcModule.config(function(NcModuleValues) {
//  console.log(NcModuleValues);
//});

NcModule.constant('NcModuleConstants', {
    value1: 'test constant 1',
    value2: 'test constant 2'
  });

NcModule.value('NcModuleValues', {
    value1: 'test value 1',
    value2: 'test value 2'
  });

NcModule.value('NcModuleValueFunc', function(a, b) {
    return a + b;
  });


NetCommonsApp.requires.push('nc.module');