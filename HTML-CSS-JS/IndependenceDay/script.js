
var text = document.getElementById("text");
var gif = document.getElementById("gif");
console.log(gif)
gif.style.display = "none";


var max_count = 10;
text.innerHTML = max_count;

//Call back :  whenever a function is passed as a parameter, the parameter function is callback function.
//Call back hell.. call stack goes very deep and not easy to understand the flow properly.

function displayInpedenceDay (displayIndependence) {

    displayIndependence();
        function display1_function(display1){
            display1();
            function display2_function(display2){
                display2();
                function display3_function(display3){
                    display3();
                    function display4_function(display4){
                        display4();
                        function display5_function(display5){
                            display5();
                            function display6_function(display6){
                                display6();
                                function display7_function(display7){
                                    display7();
                                    function display8_function(display8){
                                        display8();
                                        function display9_function(display9){
                                            display9();
                                        }
                                        display9_function(()=>{
                                            setTimeout(()=>{
                                            text.innerHTML = "9";
                                            },1000);
                                            return;
                                        });
                                    }
                                    display8_function(()=>{
                                        setTimeout(()=>{
                                        text.innerHTML = "8";
                                        },2000);
                                        return;
                                    });
                                }
                                display7_function(()=>{
                                    setTimeout(()=>{
                                    text.innerHTML = "7";
                                    },3000);
                                    return;
                                });
                            }
                            display6_function(()=>{
                                setTimeout(()=>{
                                text.innerHTML = "6";
                                },4000);
                                return;
                            });
                        }
                        display5_function(()=>{
                            setTimeout(()=>{
                            text.innerHTML = "5";
                            },5000);
                            return;
                        });
                    }
                    display4_function(()=>{
                        setTimeout(()=>{
                        text.innerHTML = "4";
                        },6000);
                        return;
                    });
                }
                display3_function(()=>{
                    setTimeout(()=>{
                    text.innerHTML = "3";
                    },7000);
                    return;
                    });

            }
            display2_function(()=>{
                setTimeout(()=>{
                    text.innerHTML = "2";
                },8000);
                return;
            });
            
        }
        display1_function(()=>{
        setTimeout(()=>{
            text.innerHTML = "1";
        },9000);
        return;
    });
    
}


displayInpedenceDay(()=>{
    setTimeout(()=>{
        let colorOne = "#FF9933";
        let colorTwo = "#FFFFFF";
        let colorThree = "#138808";
        let colorFour = "#000080"
        text.style.fontSize = "80px";
        text.innerHTML = "Happy Independence Day";
        text.style.backgroundColor = "#FFFFFF"
        text.style.backgroundImage = `linear-gradient(to bottom, ${colorOne}, ${colorTwo}, ${colorThree})`;
        text.style.textShadow = `5px 5px ${colorFour}`;      
        gif.style.display = "block";
        let quote = document.createElement('p');
        quote.innerHTML = "Warm wishes on the occasion of Independence Day! Salute to all those brave hearts who fought for the country.";
        quote.setAttribute('class','quote');
        document.body.append(quote);

    },10000);
    return;
});

