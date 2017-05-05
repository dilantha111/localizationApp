angular.module('translate').
service('translateService',['en','si','ta',function(en,si,ta){
    this.lang = "en";  

    this.changeLang = function(lang){
        this.lang = lang;
    }
    
    this.translate = function(key){
        if(this.lang == "en"){                      
            return en.data[key];
        }else if(this.lang == "si"){
            return si.data[key];
        }else if(this.lang == "ta"){
            return ta.data[key];
        }
        else{
            return key;
        }
    }

    this.getData = function(){
        if(this.lang == "en"){
            return en.data;
        }else if(this.lang == "si"){
            return si.data;
        }else if(this.lang == "ta"){
            return ta.data;
        }
    }        
}]);