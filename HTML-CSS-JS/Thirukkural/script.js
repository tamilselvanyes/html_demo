
//This method is used to get the thirukkural from the api
 async function getThirukkural(number){
    try {
        let data = await fetch(`https://api-thirukkural.vercel.app/api?num=${number}`);

        var result = await data.json();

        console.log(result);
        let search = document.getElementById("search");
        if(search != undefined){
            search.value = "";
        }
        showdetails(result);


    } catch (error) {
        console.log(error);
    }
}

//search box
var search_div = document.createElement('div');
search_div.setAttribute('class','search_div')
var search = document.createElement('input');
search.addEventListener('keyup', onEnterClicked)
search.setAttribute('type', 'text');
search.setAttribute('class', 'form-control');
search.setAttribute('id', 'search');
search.setAttribute('placeholder','Search for a Thirukkural by number 1 to 1330');


// search button

var search_button = document.createElement('button');
search_button.setAttribute('type','button');
search_button.setAttribute('class', 'btn btn-primary');
search_button.setAttribute('id','search_button');
search_button.addEventListener('click', ()=>{
    getThirukkural(search.value);
});
var search_icon = document.createElement('i');
search_icon.setAttribute('class','fa fa-search');
search_button.append(search_icon);
search_div.append(search, search_button);
document.body.append(search_div);


getThirukkural(1);

function showdetails(result) {

    //hidding the about thirukkural first before showing the kural

    let about_div = document.getElementById("about_div");
    if(about_div != undefined){
        about_div.style.display = "none";
    }

    let kural_div = document.getElementById("kural_div");
    if(kural_div != null){
        kural_div.style.display = "block";
    }
        


    document.getElementById("search_result").innerHTML = `குறள் ${result.number}`

    var chapter = document.getElementById("chapter");
    chapter.innerHTML = result.chap_tam;

    document.getElementById("chapter_grp").innerHTML = result.chapgrp_tam;
    document.getElementById("line_1").innerHTML = `"${result.line1}`;
    document.getElementById("line_2").innerHTML = `${result.line2}"`;
    document.getElementById("exp_tam").innerHTML = `விளக்கம்: ${result.tam_exp}`;

    var chapter_eng = document.getElementById("chapter_eng");
    chapter_eng.innerHTML = result.chap_eng;

    document.getElementById("chapter_grp_eng").innerHTML = result.chapgrp_eng;
    document.getElementById("line_eng").innerHTML = `" ${result.eng}"`;
    document.getElementById("exp_eng").innerHTML = `Explanation: ${result.eng_exp}`;

}

// handling the Enter key press inside the search box
function onEnterClicked(e){
    //calling the searchclick only for Enter click events
    console.log(e.code);
    if(e.code === "Enter" || e.code === "NumpadEnter" ){
        
        getThirukkural(search.value);
    }
}


//on AboutThirukkural button click
function aboutThirukkural(){

    

    let kural_div = document.getElementById("kural_div");
    if(kural_div != null){
        kural_div.style.display = "none";
    }

    let about_div = document.getElementById("about_div");
    if(about_div != undefined){
        about_div.style.display = "block";
    }

    console.log(kural_div,about_div);

    if(about_div != null){
        return;
    }
    

    about_div = document.createElement("div");
    about_div.setAttribute("id","about_div");

    let title = document.createElement("h2");
    title.innerHTML = "திருக்குறள்";

    let description = document.createElement('p')
    description.innerHTML = "தெய்வப்புலவர் என்று போற்றப்படும் திருவள்ளுவரால் இயற்றப்பட்டது திருக்குறள். இதில் மொத்தம் 133 அதிகாரங்கள் உள்ளன. ஒரு அதிகாரத்திற்கு பத்து குறள் வீதம் மொத்தம் 1330 திருக்குறள் உள்ளன. இவை அனைத்தும் அறத்துப்பால், பொருட்பால், இன்பத்துப்பால் என்ற மூன்று பிரிவுகளுக்குள் வருகின்றன.";
    description.setAttribute("class", "description")

    let title_eng = document.createElement("h2");
    title_eng.innerHTML = "Thirukkural";

    let description_eng = document.createElement('p')
    description_eng.innerHTML = "The Tirukkural or Thirukkural ( literally Sacred Verses), or shortly the Kural, is a classic Tamil sangam literature consisting of 1330 couplets or kurals, dealing with the everyday virtues of an individual.Considered one of the greatest works ever written on ethics and morality, chiefly secular ethics, it is known for its universality and non-denominational nature.It was authored by Valluvar, also known in full as Thiruvalluvar.";
    description_eng.setAttribute("class", "description");

    about_div.append(title, description, title_eng, description_eng);
    isshowingAbout = true;
    document.body.append(about_div);
    
}