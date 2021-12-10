var request= new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);

request.send();

request.onload=function(){
   
    var data=JSON.parse(request.response);
    for(var i in data){
        try{
            var name=data[i].name;
            var lang=data[i].latlng;
            if(lang.length === 0) throw new Error("Longitude not found ");
            getWeather(name,...lang);
        }catch(e){
           console.log("invalid coordinates"+name+" "+e.message);
        }
       
    }
}

function getWeather(name,latitude,longitude){
var url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ef8c88634a587a6e3c5df52e6cd9b775`;

var request=new XMLHttpRequest();
request.open('GET',url,true);
request.send();
request.onload=function(){
   var data=JSON.parse(request.response);
    console.log(`${name}-${data.main.temp}`);
}
}