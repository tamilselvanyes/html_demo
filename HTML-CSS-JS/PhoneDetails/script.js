// Function get the phones based on Search text and
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
    let search = document.getElementById("phone-search-input");
    if (search != undefined) {
      search.value = "";
    }
  } catch (error) {
    console.log(error);
  }
}

//Function to get the Latest phone different API
async function getLatestPhone() {
  var URL = `https://api-mobilespecs.azharimm.site/v2/latest`;

  try {
    const phone_details = await fetch(URL, {
      method: "GET",
    });

    var result = await phone_details.json();

    console.log(result);
    showData(result, "Latest Phones");
    let search = document.getElementById("phone-search-input");
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

getLatestPhone();

//This function shows the phone in the container...
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
  let element = document.getElementById("phone-search-input");
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

    var icon_div = document.createElement("div");

    var star_icon = document.createElement("span");
    star_icon.setAttribute("class", "fa fa-star");
    star_icon.setAttribute("id", `star-icon${i}`);

    star_icon.addEventListener("click", () => {
      if (document.getElementById(`star-icon${i}`).className === "fa fa-star") {
        document
          .getElementById(`star-icon${i}`)
          .setAttribute("class", "fa fa-star checked");
      } else {
        document
          .getElementById(`star-icon${i}`)
          .setAttribute("class", "fa fa-star");
      }
    });

    var cart_icon = document.createElement("i");
    cart_icon.setAttribute("class", "fa fa-shopping-cart");
    cart_icon.setAttribute("id", `cart-icon${i}`);

    cart_icon.addEventListener("click", () => {
      if (
        document.getElementById(`cart-icon${i}`).className ===
        "fa fa-shopping-cart"
      ) {
        document
          .getElementById(`cart-icon${i}`)
          .setAttribute("class", "fa fa-shopping-cart cartchecked");
      } else {
        document
          .getElementById(`cart-icon${i}`)
          .setAttribute("class", "fa fa-shopping-cart");
      }
    });

    icon_div.append(star_icon, cart_icon);

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

    var accordion_body_flex = document.createElement("div");
    accordion_body_flex.setAttribute("class", "body-flex");

    //body items
    var dimension_div = document.createElement("div");
    var dimension_text = document.createElement("p");
    dimension_text.innerHTML = "Dimension :";
    var dimension_value = document.createElement("span");
    dimension_value.setAttribute("id", `dimension_value${i}`);
    dimension_div.append(dimension_text, dimension_value);

    var OS_div = document.createElement("div");
    var OS_text = document.createElement("p");
    OS_text.innerHTML = "OS :";
    var OS_value = document.createElement("span");
    OS_value.setAttribute("id", `OS_value${i}`);
    OS_div.append(OS_text, OS_value);

    var release_div = document.createElement("div");
    var release_text = document.createElement("p");
    release_text.innerHTML = "Release Date :";
    var release_value = document.createElement("span");
    release_value.setAttribute("id", `release_value${i}`);
    release_div.append(release_text, release_value);

    var storage_div = document.createElement("div");
    var storage_text = document.createElement("p");
    storage_text.innerHTML = "Storage :";
    var storage_value = document.createElement("span");
    storage_value.setAttribute("id", `storage_value${i}`);
    storage_div.append(storage_text, storage_value);

    var display_div = document.createElement("div");
    var display_text = document.createElement("p");
    display_text.innerHTML = "Display :";
    var display_value = document.createElement("span");
    display_value.setAttribute("id", `display_value${i}`);
    display_div.append(display_text, display_value);

    var maincamera_div = document.createElement("div");
    var maincamera_text = document.createElement("p");
    maincamera_text.innerHTML = "Main Camera :";
    var maincamera_value = document.createElement("span");
    maincamera_value.setAttribute("id", `maincamera_value${i}`);
    maincamera_div.append(maincamera_text, maincamera_value);

    var selfiecamera_div = document.createElement("div");
    var selfiecamera_text = document.createElement("p");
    selfiecamera_text.innerHTML = "Selfie Camera :";
    var selfiecamera_value = document.createElement("span");
    selfiecamera_value.setAttribute("id", `selfiecamera_value${i}`);
    selfiecamera_div.append(selfiecamera_text, selfiecamera_value);

    var battery_div = document.createElement("div");
    var battery_text = document.createElement("p");
    battery_text.innerHTML = "Battery :";
    var battery_value = document.createElement("span");
    battery_value.setAttribute("id", `battery_value${i}`);
    battery_div.append(battery_text, battery_value);

    accordion_body_flex.append(
      dimension_div,
      OS_div,
      release_div,
      storage_div,
      display_div,
      maincamera_div,
      selfiecamera_div,
      battery_div
    );
    accordion_body.append(accordion_body_flex);

    accordion_panel.append(accordion_header, accordion_body);
    accordion_showDetais.append(accordion_panel);

    // appending
    if (text === "Latest Phones") {
      content.append(title, icon_div, accordion_showDetais);
    } else {
      content.append(
        title,
        icon_div,
        brand_text,
        brand_value,
        accordion_showDetais
      );
    }

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
          getSpec(
            result.data.phones[accordionElem.id.substr(9)].slug,
            accordionElem.id.substr(9)
          ).then(() => panel.classList.add("active"));
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
    if (text !== "Latest Phones") {
      document.getElementById(
        "brand_value" + i
      ).innerHTML = `${result.data.phones[i].brand}   `;
    }
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

async function getSpec(slug, element_number) {
  var URL = `https://api-mobilespecs.azharimm.site/v2/${slug}`;
  console.log(slug);

  try {
    const phone_spec = await fetch(URL, {
      method: "GET",
    });

    var phonespec_result = await phone_spec.json();

    console.log(phonespec_result);
    showSpec(phonespec_result, element_number);
  } catch (error) {
    console.log(error);
  }
}

function showSpec(phonespec_result, element_number) {
  document.getElementById(`dimension_value${element_number}`).innerHTML =
    phonespec_result.data.dimension === ""
      ? "Not released yet"
      : phonespec_result.data.dimension;

  document.getElementById(`OS_value${element_number}`).innerHTML =
    phonespec_result.data.os === ""
      ? "Not released yet"
      : phonespec_result.data.os;

  document.getElementById(`release_value${element_number}`).innerHTML =
    phonespec_result.data.release_date === ""
      ? "Not released yet"
      : phonespec_result.data.release_date;

  document.getElementById(`storage_value${element_number}`).innerHTML =
    phonespec_result.data.storage === ""
      ? "Not released yet"
      : phonespec_result.data.storage;

  document.getElementById(`display_value${element_number}`).innerHTML =
    phonespec_result.data.specifications[3].specs[0].val[0] === ""
      ? "Not released yet"
      : phonespec_result.data.specifications[3].specs[0].val[0];

  document.getElementById(`maincamera_value${element_number}`).innerHTML =
    phonespec_result.data.specifications[6].specs[0].val[0] === ""
      ? "Not released yet"
      : phonespec_result.data.specifications[6].specs[0].val[0];

  document.getElementById(`selfiecamera_value${element_number}`).innerHTML =
    phonespec_result.data.specifications[7].specs[0].val[0] === ""
      ? "Not released yet"
      : phonespec_result.data.specifications[7].specs[0].val[0];

  document.getElementById(`battery_value${element_number}`).innerHTML =
    phonespec_result.data.specifications[11].specs[0].val[0] === ""
      ? "Not released yet"
      : phonespec_result.data.specifications[11].specs[0].val[0];
}
