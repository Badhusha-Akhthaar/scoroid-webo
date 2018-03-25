$(document).ready(function() {
  setInterval(rotateImages, 4000);
});

function rotateImages(){
  $("#photoShow").animate({marginLeft: "-400px"}, 1000).delay(2000);

  $("#photoShow").animate({marginLeft: "-800px"}, 1000).delay(2000);

  $("#photoShow").animate({marginLeft: "0px"}, 1000).delay(2000);
}
