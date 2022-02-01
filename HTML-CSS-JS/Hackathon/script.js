
//heading

var heading_div = document.createElement('div');
heading_div.className = 'heading_div';

var heading  = document.createElement('h1');
heading.setAttribute('class', 'title');
heading.setAttribute('id','heading')
heading.innerHTML = "TheAnimeWorld";
heading.onmouseover = mouseOvertitle;
heading.onmouseout = mouseOuttitle;
heading_div.append(heading);
document.body.append(heading_div);
document.getElementsByTagName('h1')[0].style.fontSize = "60px";

function mouseOvertitle(){
    let heading_element = document.getElementById('heading');
    heading.style.textShadow = "2px 2px 5px rgb(0, 255, 64)";
}

function mouseOuttitle(){
    let heading_element = document.getElementById('heading');
    heading.style.textShadow = "2px 2px 5px rgb(255, 196, 0)";
}

//search box
var search_div = document.createElement('div');
search_div.setAttribute('class','search_div')
var search = document.createElement('input');
search.setAttribute('type', 'text');
search.setAttribute('class', 'form-control');
search.setAttribute('id', 'search');
search.setAttribute('placeholder','Search for an Anime...');
search.addEventListener('keyup', onEnterClicked)

// search button

var search_button = document.createElement('button');
search_button.setAttribute('type','button');
search_button.setAttribute('class', 'btn btn-primary');
search_button.setAttribute('id','search_button')
search_button.addEventListener('click', onSearchClicked);
var search_icon = document.createElement('i');
search_icon.setAttribute('class','fa fa-search');
search_button.append(search_icon);
search_div.append(search, search_button);
document.body.append(search_div);

//url, call getdata only after declaring the URL
var url = "https://api.jikan.moe/v3/search/anime";

// shows the page with trending now Animes
getdata("TrendingNow", "1");


//function is responsible for providing the information
// search text is the query text and page is 1 by default.

async function getdata(search, page) { 
    try {
        var data  = await fetch (` ${url}?q=${search}&page=${page}`);
        var result =  await data.json();
        console.log(result);
        showData(result,search);
        
    } catch (error) {
        console.log("Error"+error)
        
    }
    
}

// handling the Enter key press inside the search box
function onEnterClicked(e){
        //calling the searchclick only for Enter click events
        if(e.code === "Enter"){
            onSearchClicked();
        }
}

function onSearchClicked(){
    let search_element = document.getElementById("search");
    let search_value = search_element.value;
    console.log("Searching..."+search_value);
    if(search_value.length < 3){
        alert("Enter a minimum of three characters...");
        return;
    }
    getdata(search_value,"1");

}

function showData(result, text){

    //Removing the previous results before showing the new results
    let temp = document.getElementById("container");
    if(temp){
        document.body.removeChild(temp);
    }

    let temp_1 = document.getElementById("end_credits");
    if(temp_1){
        document.body.removeChild(temp_1);
    }

    //Clearing the search input after showing the result.
    let element = document.getElementById('search');
    if(element != null){
        element.value = "";
    }

    //handling when internal server error occurs
    if(result.status == "500"){
        showEndcredit(result);
        return;
        
    }
    

    
    var container = document.createElement('div');
    container.setAttribute('class','container-lg');
    container.setAttribute('id', 'container')


    // used to show the description of the result.

    var result_info = document.createElement('span');

    //skipping the creation of columns if the arraylength is 0

    if (result.results.length === 0) {
        result_info.innerHTML = "No results found...";
        return;
    }

    if(text === "TrendingNow"){
        result_info.innerHTML = "Trending Now";
    }else{
        result_info.innerHTML = `Results for "${text}".`;
    }
    result_info.setAttribute('class', 'result')
    container.appendChild(result_info);


    var row =  document.createElement('div');
    row.setAttribute('class','row');

    //Looping to get many column elements 


    for(let i = 0; i < result.results.length;i++){
        var col = document.createElement('div');
        col.setAttribute('class','col-md-3');


        image = document.createElement('img');
        image.setAttribute('id', 'image' + i);
        

        var content = document.createElement('div');

        var title = document.createElement('span');
        title.setAttribute('id','title'+i);
        title.setAttribute('class','title')

        var line_1 = document.createElement('br');

        var imdb_text = document.createElement('span');
        imdb_text.innerHTML = "IMDB: ";

        var imdb_value = document.createElement('span');
        imdb_value.setAttribute('id','imdb_value'+i);

        var line_2 = document.createElement('br');

        var type_text = document.createElement('span');
        type_text.innerHTML ="Type: ";

        var type_value = document.createElement('span');
        type_value.setAttribute('id', 'type_value'+i);

        var rated_text = document.createElement('span');
        rated_text.innerHTML ="Rated: ";

        var rated_value = document.createElement('span');
        rated_value.setAttribute('id', 'rated_value'+i);

        var line_3 = document.createElement('br');

        var start_date_text = document.createElement('span');
        start_date_text.innerHTML = "Start Date:";

        var start_date_value = document.createElement('span');
        start_date_value.setAttribute('id','start_date_value'+i);

        var line_4 = document.createElement('br');

        var end_date_text = document.createElement('span');
        end_date_text.innerHTML = "End Date:";

        var end_date_value = document.createElement('span');
        end_date_value.setAttribute('id','end_date_value'+i);

        var line_5 = document.createElement('br');

        var no_of_episode = document.createElement('span');
        no_of_episode.innerHTML ="No of Episode:";

        var no_of_episode_value = document.createElement('span');
        no_of_episode_value.setAttribute('id','no_of_episode_value'+i);


        // appending 
        
        content.append(title, line_1, imdb_text,imdb_value,line_2,type_text, type_value, rated_text,rated_value,line_5,
            start_date_text,start_date_value,
            line_3, end_date_text,end_date_value,line_4,no_of_episode,no_of_episode_value);
        col.append(image,content);
        row.append(col);
        container.append(row);
        document.body.append(container);

        //Assigning values for the respective fields

        document.getElementById("image"+i).src = result.results[i].image_url;
        document.getElementById("title"+i).innerHTML = result.results[i].title;
        document.getElementById("imdb_value"+i).innerHTML = result.results[i].score;
        document.getElementById("type_value"+i).innerHTML = `${result.results[i].type}   `;
        document.getElementById("rated_value"+i).innerHTML = result.results[i].rated;
        

        //calculation only the date from the string format
        //handled when data is null 
        if(result.results[i].start_date == null){
            document.getElementById("start_date_value"+i).innerHTML = "-";
        }else{
            var startDate = new Date(result.results[i].start_date);
            document.getElementById("start_date_value"+i).innerHTML = startDate.toDateString();
        }
        if(result.results[i].end_date == null){
            document.getElementById("end_date_value"+i).innerHTML = "-";
        }else{
            var endDate = new Date(result.results[i].end_date);
            document.getElementById("end_date_value"+i).innerHTML = endDate.toDateString();
        }
        document.getElementById("no_of_episode_value"+i).innerHTML = result.results[i].episodes;
    }

    showEndcredit(result);
}

function showEndcredit(result){ 
    var end_credits = document.createElement('p');
    // sometimes when internal server error happens it is handled here...
    if(result.status == "500"){
        end_credits.innerHTML = "--Oops no results found, Search again--";
    }else{
        end_credits.innerHTML = "--End of Search Result--";
    }
    end_credits.className = "end_credits";
    end_credits.id = "end_credits"
    document.body.append(end_credits);
}