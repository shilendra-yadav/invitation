// Set the date we're counting down to
var countDownDate = new Date("April 21, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
$(".loader").delay(2500).fadeOut("slow");

var winScrollTop = 0;
$(window).on("scroll", function () {
  var nav = $("#navbar");
  var top = 200;
  if ($(window).scrollTop() >= top) {
    nav.addClass("onscroll");
  } else {
    nav.removeClass("onscroll");
  }
  winScrollTop = $(this).scrollTop();
  parallax();
});

function mycallback() {
  this.el.classList.add("finish");
}
Vivus.prototype.myremoveclass = function () {
  this.el.classList.remove("finish");
};
var loaderSvg = new Vivus(
  "my-svg",
  {
    file: "images/loader.svg",
    type: "delayed",
    duration: 200,
    animTimingFunction: Vivus.EASE,
  },
  mycallback
);

$.fn.is_on_screen = function () {
  var win = $(window);
  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft(),
  };
  //viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  //bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return !(viewport.bottom < bounds.top || viewport.top > bounds.bottom);
};
function parallax() {
  var scrolled = $(window).scrollTop();
  $(".parallax").each(function () {
    if ($(this).is_on_screen()) {
      var firstTop = $(this).offset().top;
      var moveTop = (firstTop - winScrollTop) * 0.2; //speed;
      $(this).css("transform", "translateY(" + moveTop + "px)");
    }
  });
}
