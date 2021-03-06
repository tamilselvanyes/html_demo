SQL commands
To select the entire table
SELECT * 
FROM mytable;

To select the specific column

SELECT title FROM movies; --title name of the column

To apply conditions to the result

where year NOT BETWEEN 2000 AND 2010;
where id = 6 AND year > 2000 AND year < 2011

//mongo
//use b30wd
//show dbs
//show collections
//db.movies.insertMany([
//   {
//     "id": "100",
//     "name": "Iron man 2",
//     "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//     "rating": 7,
//     "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//     "id": "101",
//     "name": "No Country for Old Men",
//     "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     "rating": 8.1,
//     "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//     "id": "102",
//     "name": "Jai Bhim",
//     "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//     "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//     "rating": 8.8,
//     "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//     "id": "103",
//     "name": "The Avengers",
//     "rating": 8,
//     "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//     "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//     "id": "104",
//     "name": "Interstellar",
//     "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     "rating": 8.6,
//     "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//     "id": "105",
//     "name": "Baahubali",
//     "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     "rating": 8,
//     "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//     "id": "106",
//     "name": "Ratatouille",
//     "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//     "rating": 8,
//     "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   }
// ])

db.movies.find({});
db.movies.find({}).pretty();
db.movies.find({}, { name: 1, rating: 1 }).sort({ rating: 1 }).pretty();

db.movies.find({
  rating: {
    $gt: 8,
  },
});

//First part {rating: {$gt:8}} filtering  and
//Second part options => inclusiong and Exclusion {_id: 0 ,name: 1, rating: 1}
//You cannot mix inclusion and exclusion but there is an exception for _id only you mix with either inclusion or exclusion

db.movies.find({ rating: { $gt: 8 } }, { _id: 0, name: 1, rating: 1 });

//sorting is an different function like find so use with "." at the end, similarly to all other functions like limit and pretty

db.movies
  .find({}, { _id: 0, name: 1, rating: 1 })
  .sort({ rating: -1 })
  .pretty();
db.movies
  .find({}, { _id: 0, name: 1, rating: 1 })
  .sort({ rating: -1 })
  .limit(2)
  .pretty();
db.movies
  .find({}, { _id: 0, name: 1, rating: 1, trailer: 1 })
  .sort({ rating: -1 })
  .limit(2)
  .skip(2)
  .pretty();



//sorting with two fields when the ratings are same

  db.movies.find({},{_id: 0 ,name: 1, rating: 1}).sort({rating:1, name:1}).pretty()



  db.orders.insertMany(
    [
    { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
    { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
    { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
    { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
    { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
    { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
    ])

  db.orders.find({status:"urgent"})
  db.orders.find({})


  // _id is must for grouping // $ is must for getting the values from the db
  //aggregate is just another function which takes array of objects as a parameter
  db.orders.aggregate([{$match: {status:"urgent"}},
  {$group : {
    _id: "$productName",
    totalQuantityRequired: {$sum: "$quantity"}
 }}, 
 
 {$sort: {_id :-1}} 

])


db.movies.updateMany({},{$set:{language:"English"}})

db.movies.find({name:{"$nin": ["Jai Bhim", "Baahubali"]}}).pretty()


db.movies.updateMany({name:{"$nin": ["Jai Bhim", "Baahubali"]}}, {$set:{language:"English"}})


db.movies.updateMany({name:{"$in": ["Jai Bhim"]}}, {$set:{language:"Tamil"}})

db.movies.updateOne({name:"Jai Bhim"}, {$set:{language:"Tamil"}})


db.movies.updateOne({name:"Baahubali"}, {$set:{language:"Telugu"}})



db.movies.find({rating:8,language:"English"},{_id:0,name:1, language:1,rating:1})






db.products.insertMany([
  {
      "id": "1",
      "product_name": "Intelligent Fresh Chips",
      "product_price": 655.00,
      "product_material": "Concrete",
      "product_color": "mint green"
  },
  {
      "id": "2",
      "product_name": "Practical Fresh Sausages",
      "product_price": 911.0,
      "product_material": "Cotton",
      "product_color": "indigo"
  },
  {
      "id": "3",
      "product_name": "Refined Steel Car",
      "product_price": 690.00,
      "product_material": "Rubber",
      "product_color": "gold"
  },
  {
      "id": "4",
      "product_name": "Gorgeous Plastic Pants",
      "product_price": 492.00,
      "product_material": "Soft",
      "product_color": "plum"
  },
  {
      "id": "5",
      "product_name": "Sleek Cotton Chair",
      "product_price": 33.00,
      "product_material": "Fresh",
      "product_color": "black"
  },
  {
      "id": "6",
      "product_name": "Awesome Wooden Towels",
      "product_price": 474.00,
      "product_material": "Plastic",
      "product_color": "orange"
  },
  {
      "id": "7",
      "product_name": "Practical Soft Shoes",
      "product_price": 500.00,
      "product_material": "Rubber",
      "product_color": "pink"
  },
  {
      "id": "8",
      "product_name": "Incredible Steel Hat",
      "product_price": 78.00,
      "product_material": "Rubber",
      "product_color": "violet"
  },
  {
      "id": "9",
      "product_name": "Awesome Wooden Ball",
      "product_price": 28.00,
      "product_material": "Soft",
      "product_color": "azure"
  },
  {
      "id": "10",
      "product_name": "Generic Wooden Pizza",
      "product_price": 84.00,
      "product_material": "Frozen",
      "product_color": "indigo"
  },
  {
      "id": "11",
      "product_name": "Unbranded Wooden Cheese",
      "product_price":26.00,
      "product_material": "Soft",
      "product_color": "black"
  },
  {
      "id": "12",
      "product_name": "Unbranded Plastic Salad",
      "product_price": 89.00,
      "product_material": "Wooden",
      "product_color": "pink"
  },
  {
      "id": "13",
      "product_name": "Gorgeous Cotton Keyboard",
      "product_price": 37.00,
      "product_material": "Concrete",
      "product_color": "sky blue"
  },
  {
      "id": "14",
      "product_name": "Incredible Steel Shirt",
      "product_price": 54.00,
      "product_material": "Metal",
      "product_color": "white"
  },
  {
      "id": "15",
      "product_name": "Ergonomic Cotton Hat",
      "product_price": 43.00,
      "product_material": "Rubber",
      "product_color": "mint green"
  },
  {
      "id": "16",
      "product_name": "Small Soft Chair",
      "product_price": 47.00,
      "product_material": "Cotton",
      "product_color": "teal"
  },
  {
      "id": "17",
      "product_name": "Incredible Metal Car",
      "product_price":36.00,
      "product_material": "Fresh",
      "product_color": "indigo"
  },
  {
      "id": "18",
      "product_name": "Licensed Plastic Bacon",
      "product_price":88.00,
      "product_material": "Steel",
      "product_color": "yellow"
  },
  {
      "id": "19",
      "product_name": "Intelligent Cotton Chips",
      "product_price": 46.00,
      "product_material": "Soft",
      "product_color": "azure"
  },
  {
      "id": "20",
      "product_name": "Handcrafted Wooden Bacon",
      "product_price": 36.00,
      "product_material": "Concrete",
      "product_color": "lime"
  },
  {
      "id": "21",
      "product_name": "Unbranded Granite Chicken",
      "product_price": 90.00,
      "product_material": "Metal",
      "product_color": "gold"
  },
  {
      "id": "22",
      "product_name": "Ergonomic Soft Hat",
      "product_price": 99.00,
      "product_material": "Rubber",
      "product_color": "black"
  },
  {
      "id": "23",
      "product_name": "Intelligent Steel Pizza",
      "product_price": 95.00,
      "product_material": "Cotton",
      "product_color": "azure"
  },
  {
      "id": "24",
      "product_name": "Tasty Rubber Cheese",
      "product_price":47.00,
      "product_material": "Frozen",
      "product_color": "orchid"
  },
  {
      "id": "25",
      "product_name": "Licensed Steel Car",
      "product_price":20.00,
      "product_material": "Cotton",
      "product_color": "indigo"
  }
])



1. Find all the information about each products
Solution: 
db.products.find({}, {_id:0}).pretty()

2. Find the product price which are between 400 to 800
Solution: 
db.products.find({ product_price : { $gt : 400  , $lt : 800}}).pretty()

3. Find the product price which are not between 400 to 600 
Solution: 
db.products.find({ product_price : { $not: { $gt : 400  , $lt : 600}}} , {_id:0}).pretty()

4. List the four product which are grater than 500 in price 
Solution: 
db.products.find({ product_price : { $gt : 500 }}).limit(5).pretty()

5.  Find the product name and product material of each products
Solution:
db.products.find({}, {_id :0 , product_name:1, product_material:1}).pretty()

6.Find the product with a row id of 10
Solution:
db.products.find( {id: "10"}, {_id:0}).pretty()

7.Find only the product name and product material
Solution:
db.products.find({}, {_id :0 , product_name:1, product_material:1}).pretty()

8.Find all products which contain the value of soft in product material 
Solution:
db.products.find({product_material:"Soft"} ).pretty()

9.Find products which contain product color indigo  and product price 492.00
Solution:
db.products.find({product_color:"indigo", product_price:492.00 } ).pretty()

10. Delete the products which product price value are same
Solution:
db.products.aggregate([
  
  { $group: { _id: "$product_price", No_of_Times_repeated: { $count: {}} } },
  { $match: { "No_of_Times_repeated": { $gte: 2 } } },
  {$project: {_id: "$_id" }} 

  
]).forEach((doc)=>db.products.deleteMany({ product_price: doc._id}))


db.products.aggregate([
  
  { $group: { _id: "$product_price", No_of_Times_repeated: { $count: {}} } },
  { $match: { "No_of_Times_repeated": { $gte: 2 } } },
  {$project: {_id: "$_id" }} 

  
]).forEach((doc)=>db.products.deleteMany({ product_price: doc._id}))


{ $project : { _id : 0, product_price : 1, product_name : 1} },



db.products.find({id: "5"}).forEach((product)=> db.products.deleteOne({ id : product.id}))


db.products.deleteMany({})