angular.
    module('navigation').
    component('navigation',{
        templateUrl: 'js/app/navigation/navigation.template.html',
        controller:['translateService','$route',function navigationController(translateService,$route){
            this.data = translateService.getData(); 
            this.lang = translateService.lang;
            this.update = function(){
                translateService.lang = this.lang;
                $route.reload();
                this.data = translateService.getData();                              
            };
        }]
    });