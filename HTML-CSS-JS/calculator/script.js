var title = document.createElement('h1');
title.setAttribute('id', 'title');
title.innerHTML = "Calculator using DOM";
title.style.textAlign = "center";
document.body.append(title);

var description = document.createElement('p');
description.setAttribute('id', 'description');
description.innerHTML = "Calculator can perform addition, subtraction,  multiplication and division.";
description.style.textAlign = "center";
document.body.append(description);


var mainbox = document.createElement('div');
mainbox.setAttribute('id', 'mainbox');
mainbox.style.width = "250px";
mainbox.style.height = "300px";
mainbox.style.backgroundColor = "LightSteelBlue ";
mainbox.style.margin = "auto";
mainbox.style.marginTop = "50px";
document.body.append(mainbox);

var textbox = document.createElement('input');
textbox.setAttribute('type', 'text');
textbox.setAttribute('id','result');
textbox.addEventListener('keyup', keyboardpressed);
textbox.style.backgroundColor = "Bisque";
textbox.value = 0;
textbox.style.marginLeft ="30px";
textbox.style.marginTop = "10px";
mainbox.append(textbox);

var container = document.createElement('div');
container.setAttribute('class','container');
container.style.width = "250px";
var row_1 = createrow();


var column_1 = createColumn();
var button_cancel = createbutton('clear','C')
column_1.append(button_cancel);
button_cancel.addEventListener('click', function() { buttonclick('clear')});

var column_2 = createColumn();
var button_backspace = createbutton('backspace','B')
column_2.append(button_backspace);
button_backspace.addEventListener('click', function() { buttonclick('backspace')});

var column_3 = createColumn();
var button_dot = createbutton('dot','.');
column_3.append(button_dot);
button_dot.addEventListener('click', function() { buttonclick('.')});

var column_4 = createColumn();
var button_multiply = createbutton('multiply','*')
column_4.append(button_multiply);
button_multiply.addEventListener('click', function() { buttonclick('*')});

row_1.append(column_1,column_2,column_3,column_4);

var row_2 = createrow();

var column_5 = createColumn();
var button_seven = createbutton ('7' , '7');
column_5.append(button_seven);
button_seven.addEventListener('click', function() { buttonclick('7')});

var column_6 = createColumn();
var button_eight = createbutton ('8' , '8');
column_6.append(button_eight);
button_eight.addEventListener('click', function() { buttonclick('8')});

var column_7 = createColumn();
var button_nine = createbutton ('9' , '9');
column_7.append(button_nine);
button_nine.addEventListener('click', function() { buttonclick('9')});

var column_8 = createColumn();
var button_division = createbutton ('division' , '/');
column_8.append(button_division);
button_division.addEventListener('click', function() { buttonclick('/')});

row_2.append(column_5, column_6, column_7, column_8);


var row_3 = createrow();

var column_9 = createColumn();
var button_four = createbutton ('4' , '4');
column_9.append(button_four);
button_four.addEventListener('click', function() { buttonclick('4')});

var column_10 = createColumn();
var button_five = createbutton ('5' , '5');
column_10.append(button_five);
button_five.addEventListener('click', function() { buttonclick('5')});

var column_11 = createColumn();
var button_six = createbutton ('6' , '6');
column_11.append(button_six);
button_six.addEventListener('click', function() { buttonclick('6')});

var column_12 = createColumn();
var button_subtract = createbutton ('subtract' , '-');
column_12.append(button_subtract);
button_subtract.addEventListener('click', function() { buttonclick('-')});

row_3.append(column_9, column_10, column_11, column_12);


var row_4 = createrow();

var column_13 = createColumn();
var button_one = createbutton ('1' , '1');
column_13.append(button_one);
button_one.addEventListener('click', function() { buttonclick('1')});

var column_14 = createColumn();
var button_two = createbutton ('2' , '2');
column_14.append(button_two);
button_two.addEventListener('click', function() { buttonclick('2')});

var column_15 = createColumn();
var button_three = createbutton ('3' , '3');
column_15.append(button_three);
button_three.addEventListener('click', function() { buttonclick('3')});

var column_16 = createColumn();
var button_add = createbutton ('add' , '+');
column_16.append(button_add);
button_add.addEventListener('click', function() { buttonclick('+')});

row_4.append(column_13, column_14, column_15, column_16);


var row_5 = createrow();

var column_17 = createColumn();
var button_zero = createbutton ('0' , '0');
column_17.append(button_zero);
button_zero.addEventListener('click', function() { buttonclick('0')});

var column_18 = createColumn();
var button_zero_zero = createbutton ('zero-zero' , '00');
column_18.append(button_zero_zero);
button_zero_zero.addEventListener('click', function() { buttonclick('00')});

var column_19 = createColumnEqual();
var button_equal = createbutton ('equal' , '=');
column_19.append(button_equal);
button_equal.addEventListener('click', function() { buttonclick('equal')});

row_5.append(column_17, column_18, column_19);

container.append(row_1, row_2, row_3, row_4, row_5);
mainbox.append(container);

function createrow (){
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    row.style.margin = "auto";
    row.style.marginTop = "15px";
    return row;
}

function createColumn (){
    let column = document.createElement('div');
    column.setAttribute('class', 'col-sm-3');
    return column;
}

function createColumnEqual (){
    let column = document.createElement('div');
    column.setAttribute('class', 'col-sm-6');
    return column;
}

function createbutton(id,text){

    let button = document.createElement('button');
    button.setAttribute('id',id);
    button.setAttribute('type','button');
    button.innerHTML = text;
    button.style.margin = "auto";
    if(id === "equal"){
        button.style.width = "85px";
        button.style.backgroundColor = 'green';
    }else{
        button.style.width = "35px";
        button.style.borderRadius = '40%';
        if(id == "clear" || id == "backspace" ){
            button.style.backgroundColor = 'red';
        }
        else if(id == "add" || id == "subtract" || id == "multiply" || id == "division"){
            button.style.backgroundColor = 'blue';
        }else{
            button.style.backgroundColor = 'black';
        }
        button.style.color = "white";
        
    }
    
    return button;
}

function buttonclick(value){
    let existing_value = document.getElementById('result').value;
    if(value === "clear"){
        document.getElementById('result').value = 0 ;
        return;
    }
    if(value === "backspace"){
        if(existing_value == 0){
            document.getElementById('result').value = 0 ;
            return;
        }else{
            document.getElementById('result').value = existing_value.substring(0, existing_value.length -1);
            if(existing_value.length === 0 ){
                document.getElementById('result').value = 0 ;
            }
            return;
        }
    }
    if(value === "equal"){
        onEqualpressed();
        return;

    }
    if(existing_value == 0){
        document.getElementById('result').value = value;
        return;
    }else{
        document.getElementById('result').value = existing_value + value;
    }
    
}

function onEqualpressed(){
    let existing_value = document.getElementById('result').value;
        let result = eval(existing_value);
        document.getElementById('result').value = result;
        return;
}

function keyboardpressed(event){ 
    if(isFinite(event.key) || event.key == "+" || event.key == "-" || event.key == "/" || event.key == "*"
    || event.key == "." || event.key == "Backspace" || event.key == "Enter"){
        if(event.key == "Enter"){
            onEqualpressed();
        }
        if(document.getElementById('result').value == "0"+ event.key ){
            document.getElementById('result').value = event.key;
         }
    }else{
        let existing_value = document.getElementById('result').value;
        document.getElementById('result').value = existing_value.substring(0, existing_value.length -1);
        alert("Invalid input");

    }
}



