//step 01: creation of XHR object
var request = new XMLHttpRequest();
//step 02: open a connection
//HTTP parameter , ( HTTP method [ GET, POST, PUT, DELETE] , URL api, true ( to avoid server problems;optional))
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
//step 03: connection path
request.send();
//step 04: once data successfully loaded from the server(200)
request.onload = function(){
    //data travelling from server will be string generally this method converts into an object
    var data = JSON.parse(request.response);
    data.forEach(item => {
        console.log(`${item.name}-${item.latlng[0]},${item.latlng[1]}`)
     });
}

