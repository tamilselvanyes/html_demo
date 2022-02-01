var dateofbirth = document.createElement('input');
dateofbirth.setAttribute('type','date');
dateofbirth.setAttribute('id','dob');
document.body.append(dateofbirth);
var display_button = document.createElement('button');
display_button.innerHTML = "Display Data";
display_button.className = "btn btn-primary";
display_button.setAttribute ('type','button');
display_button.addEventListener('click', displaydata);
document.body.append(display_button);


function displaydata() {
    let input = document.getElementById("dob").value;

    if(Date.parse(input)){
        var birthdate = new Date (input);
        var currentdate = new Date ();

        var display_heading = document.createElement('p');
        display_heading.setAttribute('id','heading')
        document.body.append(display_heading);
        document.getElementById('heading').innerHTML = "For the given date::" + birthdate;

        var millsecdiff = currentdate.getTime() - birthdate.getTime();
        var display_millisecond = document.createElement('p');
        display_millisecond.setAttribute('id','millisecond')
        document.body.append(display_millisecond);
        document.getElementById('millisecond').innerHTML = "Millisecond Difference:" + millsecdiff;

        var second_diff = Math.floor(millsecdiff /1000);
        var display_second = document.createElement('p');
        display_second.setAttribute('id','second')
        document.body.append(display_second);
        document.getElementById('second').innerHTML = "Second Difference:" + second_diff;

        var minutediff = Math.floor(second_diff/60);
        var display_minute = document.createElement('p');
        display_minute.setAttribute('id','minute')
        document.body.append(display_minute);
        document.getElementById('minute').innerHTML = "Minute Difference:" + minutediff;

        var hoursdiff = Math.floor(minutediff/60);
        var display_hour = document.createElement('p');
        display_hour.setAttribute('id','hour')
        document.body.append(display_hour);
        document.getElementById('hour').innerHTML = "Hour Difference:" + hoursdiff;

        var daysdiff = Math.floor(hoursdiff/24);
        var display_day = document.createElement('p');
        display_day.setAttribute('id','days')
        document.body.append(display_day);
        document.getElementById('days').innerHTML = "Days Difference:" + daysdiff;

        var yeardiff = currentdate.getFullYear() - birthdate.getFullYear();
        var display_year = document.createElement('p');
        display_year.setAttribute('id','year')
        document.body.append(display_year);
        document.getElementById('year').innerHTML = "Years Difference:" + yeardiff;

        var monthdiff = (yeardiff *12)+ (currentdate.getMonth() - birthdate.getMonth())
        var display_month = document.createElement('p');
        display_month.setAttribute('id','month')
        document.body.append(display_month);
        document.getElementById('month').innerHTML = "Month Difference" + monthdiff;


        document.body.append(display_year, display_month, display_day, display_hour, display_minute, display_second, display_millisecond);

      }else{
        console.log("Please enter a proper/valid date...")
      }


}