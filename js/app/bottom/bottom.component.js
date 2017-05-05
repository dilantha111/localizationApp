angular.
module('Bottom', []).
    component('bottom',{
        templateUrl: 'js/app/bottom/bottom.template.html',
        controller:['translateService',function homeController(translateService){  
            this.data = translateService.getData();            
        }]
    });
