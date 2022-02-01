
async function getdata(){
    try {
        let res = await fetch ("https://api.edamam.com/search?q=chicken&app_id=54deddcb&app_key=a041bda7411de7072cdf7746ded1c266");
        let result = await res.json();
        
        console.log(result);

        var image_1 = document.getElementById('image_1');
        image_1.src = result.hits[0].recipe.image;

        var name_1 = document.getElementById('name_1');
        name_1.innerHTML = result.hits[0].recipe.label + ".";

        var name_1 = document.getElementById('cuisine_1');
        name_1.innerHTML = result.hits[0].recipe.cuisineType.join(",") + ".";

        var name_1 = document.getElementById('ingredient_1');
        name_1.innerHTML = result.hits[0].recipe.ingredientLines.join(", ") + ".";

        var calories_1 = document.getElementById('calories_1');
        calories_1.innerHTML = Math.round(result.hits[0].recipe.calories) + ".";

        var mealtype_1 = document.getElementById('mealtype_1');
        mealtype_1.innerHTML = result.hits[0].recipe.mealType.join(",") + ".";



    } catch (error) {
        console.log(error);
    }
}
getdata();
