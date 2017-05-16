var cats_array = [
  { name: "Pusheen", food: "Everything", image: "https://i.ytimg.com/vi/tHGIZ4rLbOY/hqdefault.jpg" },
  { name: "Boba", food: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg" },
  { name: "Barnaby", food: "Tuna feesh", image: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg" },
  { name: "Max", food: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg" }
];

var createUlist = function() {
  var ulist = document.createElement("ul");
  ulist.classList.add("ul");
  return ulist;
}

var createList1 = function(name) {
  var list1 = document.createElement("li");
  list1.innerText = "Name: " + name;
  return list1;
}

var createList2 = function(food) {
  var list2 = document.createElement("li");
  list2.innerText = "Favourite food: " + food;
  return list2;
}

var createListImage = function(imageURL) {
  var list3 = document.createElement("li");
  var listimage = document.createElement("img");
  listimage.setAttribute("width", "500");
  listimage.setAttribute("src", imageURL);
  list3.appendChild(listimage);
  return list3;
}

var appendElements = function(cats, ulist, list1, list2, listimage) {
  cats.appendChild(ulist);
  ulist.appendChild(list1);
  ulist.appendChild(list2);
  ulist.appendChild(listimage);
}

var addCat = function(name, food, imageURL) {
  var cats = document.querySelector("#cats");
  var ulist = createUlist();
  var list1 = createList1(name);
  var list2 = createList2(food);
  var listimage = createListImage(imageURL);
  appendElements(cats, ulist, list1, list2, listimage);
}

var app = function() {

  for(var cat of cats_array) {
    addCat(cat.name, cat.food, cat.image);
  }

};

window.onload = app;