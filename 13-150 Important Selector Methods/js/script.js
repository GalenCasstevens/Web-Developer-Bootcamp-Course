var id = document.getElementById("highlight");
var classes = document.getElementsByClassName("bolded");
var tags = document.getElementsByTagName("li");
var querySel = document.querySelector("#highlight");
var querySelAll = document.querySelectorAll(".bolded");

for(var i = 0; i < querySelAll.length; i++) {
  querySelAll[i].style.color = "red";
}
