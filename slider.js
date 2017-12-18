var slide_proto = "slide";
var slides = $(".slider-container").children(".slide");
var circles = $(".indicator").children(".circle");
console.log(circles);
var current_slide = slides[0];
var counter = 0;
var current_circle = circles[counter];
console.log(current_circle);
current_circle.style.background = "white";
var right_stack = [],
  left_stack = [];
var prop_right = {
    right: "-100%"
  },
  left_prop = {
    left: "-100%"
  };
// functions

function move_right() {
  if (left_stack.length != 0) {
    current_circle.style.background = "rgba(96.1%, 96.1%, 96.1%,0.7)";
    counter--;
    current_circle = circles[counter];
    current_circle.style.background = "white";
    console.log("move right");
    right_stack.push(current_slide);
    current_slide.style.left = "100%";
    current_slide = left_stack.pop();
    current_slide.style.left = 0;
    if (counter == 0) {
      clearInterval(auto);
      auto = setInterval(move_left, 4000);
      flag = true;
    }
  }
}

function move_left() {
  if (right_stack.length != 0) {
    current_circle.style.background = "rgba(96.1%, 96.1%, 96.1%,0.7)";
    counter++;
    current_circle = circles[counter];
    current_circle.style.background = "white";
    console.log("move left");
    left_stack.push(current_slide);
    current_slide.style.left = "-100%";
    current_slide = right_stack.pop();
    current_slide.style.left = 0;

    if (counter == 3) {
      clearInterval(auto);
      auto = setInterval(move_right, 4000);
      flag = false;
    }
  }
}

console.log(slides);
for (var i = 1; i < 4; i++) {
  slides[i].style.left = "100%";
  right_stack.push(slides[i]);
}
console.log(right_stack);
$("#left_arrow").on("click", function() {
  move_right();
});
$("#right_arrow").on("click", function() {
  move_left();
});

$("#slider-container").hover(
  function() {
    console.log("mouse in");
    clearInterval(auto);
  },
  function() {
    console.log("mouse out");
    if(flag)
      auto = setInterval(move_left , 4000);
    else
      auto = setInterval(move_right, 4000);
  }
);

// automatic scrool
var flag = true; //true for left and false for right
var auto = setInterval(move_left, 4000);
