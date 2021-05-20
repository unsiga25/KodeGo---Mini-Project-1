window.onscroll = () => {
  const navbar = document.querySelector("#navbar");
  // navbar height is 80
  if (this.scrollY <= 80) navbar.className = "";
  else navbar.className = "navbar--scroll";
};

var Testelem = document.querySelector(".carousel");
var Testflkty = new Flickity(Testelem, {
  // options
  cellAlign: "center",
  contain: true,
  adaptiveHeight: true,
});

// element argument can be a selector string
//   for an individual element
var Artelem = document.querySelector(".carousel");
var Artflkty = new Flickity(Artelem, {
  // options
  cellAlign: "center",
  contain: true,
  adaptiveHeight: true,
});
