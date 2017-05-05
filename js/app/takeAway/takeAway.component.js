angular.
    module('takeAway').
    component('takeaway',{
        templateUrl: 'js/app/takeAway/takeAway.template.html',
        controller:['translateService',function takeAwayController(translateService){
            this.lang = translateService.lang;                       
        }]
    });