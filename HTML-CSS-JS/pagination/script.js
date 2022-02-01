var request= new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);

request.send();

request.onload=function(){
   
    var data=JSON.parse(request.response);

    var title = document.createElement('h1');
    title.setAttribute('id', 'title');
    title.innerHTML = "Pagination";
    title.style.textAlign = "center";;
    document.body.append(title);

    var description = document.createElement('p');
    description.setAttribute('id', 'description');
    description.innerHTML = "Table consist of Id, Name and Email of 100 students.";
    description.style.textAlign = "center";;
    document.body.append(description);

    var table_div = document.createElement('div');
    table_div.setAttribute('class', 'table-responsive');

    var table = document.createElement('table');
    table.setAttribute('id','table');
    table.setAttribute('class', 'table');
    table.style.marginTop = "40px";
    
    table_div.append(table);
    document.body.append(table_div);

    var thead = document.createElement('thead');
    thead.setAttribute('class', 'thead-dark');
    var tr = document.createElement('tr');
    var th_1 = document.createElement('th');
    th_1.innerHTML = "Id";
    var th_2 = document.createElement('th');
    th_2.innerHTML = "Name"
    var th_3 = document.createElement('th');
    th_3.innerHTML = "Email"
    tr.append(th_1, th_2, th_3);
    thead.append(tr);
    table.append(thead);

    //one time creation:::

        var tbody = document.createElement('tbody');
        var tr_0 = createRow();
        var td_0_1 = createDataCell("0_1","0","1");
        var td_0_2 = createDataCell("0_2","0","2");
        var td_0_3 = createDataCell("0_3","0","3");

        tr_0.append(td_0_1, td_0_2, td_0_3);

        var tr_1 = createRow();
        var td_1_1 = createDataCell("1_1","1","1");
        var td_1_2 = createDataCell("1_2","1","2");
        var td_1_3 = createDataCell("1_3","1","3");

        tr_1.append(td_1_1, td_1_2, td_1_3);

        var tr_2 = createRow();
        var td_2_1 = createDataCell("2_1","2","1");
        var td_2_2 = createDataCell("2_2","2","2");
        var td_2_3 = createDataCell("2_3","2","3");

        tr_2.append(td_2_1, td_2_2, td_2_3);


        var tr_3 = createRow();
        var td_3_1 = createDataCell("3_1","3","1");
        var td_3_2 = createDataCell("3_2","3","2");
        var td_3_3 = createDataCell("3_3","3","3");

        tr_3.append(td_3_1, td_3_2, td_3_3);


        var tr_4 = createRow();
        var td_4_1 = createDataCell("4_1","4","1");
        var td_4_2 = createDataCell("4_2","4","2");
        var td_4_3 = createDataCell("4_3","4","3");

        tr_4.append(td_4_1, td_4_2, td_4_3);
        tbody.append(tr_0, tr_1 , tr_2, tr_3, tr_4);
        table.append(tbody);
        table_div.append(table);
        document.body.append(table_div);
        updateContent(0);
        
   
    //-----------------------------------------------------------//

    function createRow(){
        let row = document.createElement('tr');
        return row;
    }

    function createDataCell(id,row,column){
        let datacell = document.createElement('td');
        datacell.setAttribute('id',id);
        return datacell;    
    }

     function updateContent(page) {
        for(let row = 0 ; row < 5 ; row++){
            let record_number = parseInt(row) + (parseInt(page) * 5);
            for(let i=1 ; i< 4; i++){
                let identify = row+"_"+i;
                if(i == 1){
                    document.getElementById(identify).innerHTML = data[record_number].id;
                }

                if(i == 2){
                    document.getElementById(identify).innerHTML = data[record_number].name;
                }

                if(i == 3){
                    document.getElementById(identify).innerHTML = data[record_number].email;
                }
            }
        }
    }



//-one time execution
var buttons = document.createElement('div');
buttons.setAttribute('id', 'buttons');
buttons.setAttribute('class', 'd-flex justify-content-center')
document.body.append(buttons);

var button_first_page = createButton("first_page", "First");
var button_previous =  createButton ("previous", "Previous");
var button_first =  createButton ("first", "1");
var button_second =  createButton ("second", "2");
var button_third =  createButton ("third", "3");
var button_fourth =  createButton ("fourth", "4");
var button_fifth =  createButton ("fifth", "5");
var button_next =  createButton ("next", "Next");
var button_last =  createButton ("last", "Last");

buttons.append(button_first_page, button_previous, button_first, button_second, button_third, button_fourth, button_fifth, button_next,button_last);
updateButtonColor("first");

//----------------------------------------------------------------//


function createButton(id, name){
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('id', id);
    button.setAttribute('class', 'btn btn-primary');
    button.innerHTML = name;
    button.addEventListener('click', function(){
        onbuttonClicked(id, name);
    });
    return button;

}

function updatebuttonContent(buttonpressed_id, button_value){

    let button_name = parseInt(button_value);

    document.getElementById('first').innerHTML = button_name + 1;
    document.getElementById('second').innerHTML = button_name + 2; 
    document.getElementById('third').innerHTML = button_name + 3; 
    document.getElementById('fourth').innerHTML = button_name + 4; 
    document.getElementById('fifth').innerHTML = button_name + 5; 

}

    function onbuttonClicked(id, name){
        if(id == "first_page"){
            updateContent(0);
            updatebuttonContent(first_page, 0);
            updateButtonColor("first");
            return;
        } else if(id == "last"){
            updateContent(19);
            updatebuttonContent(last, 15);
            updateButtonColor("fifth");
            return;
        } else if(id == "previous"){
               let previous_value = document.getElementById('first').innerHTML;
               let new_value = parseInt(previous_value) -6 ;
               console.log("ERROR"+new_value);
                    if(new_value < 0){
                        alert("This is the first page");
                        return;
                    }
               updateContent(new_value);
               updatebuttonContent(previous , new_value);
               updateButtonColor("first");
        }else if(id == "next"){
            let previous_value = document.getElementById('first').innerHTML;
            let new_value = parseInt(previous_value) +4 ;
            console.log("ERROR"+new_value);
                if(new_value > 19){
                    alert("This is the last page");
                    return;
                }
            updateContent(new_value);
            updatebuttonContent(previous , new_value);
            updateButtonColor("first");
        }else{
            let value = document.getElementById(id).innerHTML;
            updateContent(value-1);
            updateButtonColor(id);
        }

    }

    function updateButtonColor(id){
        var green_button = document.getElementsByClassName('btn btn-success');
        //Resetting the color of previous button, why index 0 because always only one button will be selected.
        if(green_button[0] != undefined){
            green_button[0].setAttribute('class', 'btn btn-primary');
        }
        //Setting the button color to green
        document.getElementById(id).setAttribute('class', 'btn btn-success');
    }



}
