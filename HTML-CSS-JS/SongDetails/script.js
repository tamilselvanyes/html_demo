async function getPhone(name) {
  var URL = `https://api-mobilespecs.azharimm.site/v2/search?query=${name}`;
  console.log(name);

  try {
    const phone_details = await fetch(URL, {
      method: "GET",
    });

    var result = await phone_details.json();

    console.log(result);
    showData(result, name);
    let search = document.getElementById("search");
    if (search != undefined) {
      search.value = "";
    }
  } catch (error) {
    console.log(error);
  }
}

var input_phone = document.getElementById("phone-search-input");
input_phone.addEventListener("keyup", onEnterClicked);

// handling the Enter key press inside the search box
function onEnterClicked(e) {
  //calling the searchclick only for Enter click events
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    getPhone(e.target.value);
  }
}

function showData(result, text) {
  //Removing the previous results before showing the new results
  let temp = document.getElementById("container");
  if (temp) {
    document.body.removeChild(temp);
  }

  let temp_1 = document.getElementById("end_credits");
  if (temp_1) {
    document.body.removeChild(temp_1);
  }

  //Clearing the search input after showing the result.
  let element = document.getElementById("search");
  if (element != null) {
    element.value = "";
  }

  //handling when internal server error occurs
  if (result.status == "500") {
    showEndcredit(result);
    return;
  }

  var container = document.createElement("div");
  container.setAttribute("class", "container-lg");
  container.setAttribute("id", "container");

  // used to show the description of the result.

  var result_info = document.createElement("span");

  //skipping the creation of columns if the arraylength is 0
  if (result.data.phones.length === 0) {
    result_info.innerHTML = "No results found...";
    result_info.setAttribute("class", "result");
    container.appendChild(result_info);
    document.body.append(container);
    return;
  }

  result_info.innerHTML = `Results for "${text}".`;

  result_info.setAttribute("class", "result");
  container.appendChild(result_info);

  var row = document.createElement("div");
  row.setAttribute("class", "row");

  //Looping to get many column elements

  for (let i = 0; i < result.data.phones.length; i++) {
    var col = document.createElement("div");
    col.setAttribute("class", "col-md-3");

    image = document.createElement("img");
    image.setAttribute("id", "image" + i);

    var content = document.createElement("div");

    var title = document.createElement("span");
    title.setAttribute("id", "title" + i);
    title.setAttribute("class", "phone-title");

    var brand_text = document.createElement("span");
    brand_text.innerHTML = "Brand: ";

    var brand_value = document.createElement("span");
    brand_value.setAttribute("id", "brand_value" + i);

    //code for  creation of accordion starts here...

    var accordion_showDetais = document.createElement("div");
    accordion_showDetais.setAttribute("id", `accordion${i}`);
    accordion_showDetais.setAttribute("class", "accordion");

    var accordion_panel = document.createElement("div");
    accordion_panel.setAttribute("class", "panel");

    var accordion_header = document.createElement("div");
    accordion_header.setAttribute("class", "header");
    accordion_header.innerHTML = "Show Specs";

    var accordion_body = document.createElement("div");
    accordion_body.setAttribute("class", "body");
    //Implementation of specs start here

    accordion_panel.append(accordion_header, accordion_body);
    accordion_showDetais.append(accordion_panel);

    // appending

    content.append(title, brand_text, brand_value, accordion_showDetais);

    col.append(image, content);
    row.append(col);
    container.append(row);
    document.body.append(container);

    function initAccordion(accordionElem, result) {
      //when panel is clicked, handlePanelClick is called.

      function handlePanelClick(event, result) {
        console.log("panel clicked" + event.currentTarget);
        showPanel(event.currentTarget, result);
      }

      //Hide currentPanel and show panel.

      function showPanel(panel, result) {
        //Hide current one. First time it will be null.
        var expandedPanel = accordionElem.querySelector(".active");

        if (expandedPanel) {
          expandedPanel.classList.remove("active");
          return;
        } else {
          //Show new one
          panel.classList.add("active");
          getSpec(result.data.phones[accordionElem.id.substr(9)].slug);
        }
      }

      var allPanelElems = accordionElem.querySelectorAll(".panel");
      for (var i = 0, len = allPanelElems.length; i < len; i++) {
        allPanelElems[i].addEventListener("click", (event) =>
          handlePanelClick(event, result)
        );
      }
    }

    initAccordion(document.getElementById(`accordion${i}`), result);

    //Assigning values for the respective fields

    document.getElementById("image" + i).src = result.data.phones[i].image;
    document.getElementById("title" + i).innerHTML =
      result.data.phones[i].phone_name;
    document.getElementById(
      "brand_value" + i
    ).innerHTML = `${result.data.phones[i].brand}   `;
  }

  showEndcredit(result);
}

function showEndcredit(result) {
  var end_credits = document.createElement("p");
  // sometimes when internal server error happens it is handled here...
  if (result.status == "500") {
    end_credits.innerHTML = "--Oops no results found, Search again--";
  } else {
    end_credits.innerHTML = "--End of Search Result--";
  }
  end_credits.className = "end_credits";
  end_credits.id = "end_credits";
  document.body.append(end_credits);
}

async function getSpec(slug) {
  var URL = `https://api-mobilespecs.azharimm.site/v2/${slug}`;
  console.log(slug);

  try {
    const phone_spec = await fetch(URL, {
      method: "GET",
    });

    var phonespec_result = await phone_spec.json();

    console.log(phonespec_result);
    showSpec("Got the specs" + phonespec_result);
  } catch (error) {
    console.log(error);
  }
}
