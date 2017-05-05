angular.module('translate').
filter('translate',['translateService',function(translateService){
    return function(input){
        return translateService.translate(input);
    }
}]);