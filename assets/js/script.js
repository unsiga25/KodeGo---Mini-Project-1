window.onscroll = () => {
  const navbar = document.querySelector("#navbar");
  // navbar height is 80
  if (this.scrollY <= 80) navbar.className = "";
  else navbar.className = "navbar--scroll";
};

var Favelem = document.querySelector(".fav-carousel");
var Favflkty = new Flickity(Favelem, {
  // options
  cellAlign: "center",
  contain: true,
  adaptiveHeight: true,
});
var Artelem = document.querySelector(".test-carousel");
var Artflkty = new Flickity(Artelem, {
  // options
  cellAlign: "center",
  contain: true,
  adaptiveHeight: true,
});
var Testelem = document.querySelector(".art-carousel");
var Testflkty = new Flickity(Testelem, {
  // options
  cellAlign: "center",
  contain: true,
  adaptiveHeight: true,
});
