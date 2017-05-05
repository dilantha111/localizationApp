angular.
    module('home').
    component('home',{
        templateUrl: 'js/app/home/home.template.html',
        controller:['translateService',function homeController(translateService){  
            this.data = translateService.getData();            
        }]
    });