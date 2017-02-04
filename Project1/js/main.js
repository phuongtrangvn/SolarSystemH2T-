$(document).ready(function(){
  var arr = $(".about_us").children();
  for(let i = 0; i < arr.length; i+=2) {
    arr[i].style["text-align"] = i / 2 % 2 == 0 ? "left" : "right";
  }
})
