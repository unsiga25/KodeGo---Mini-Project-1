window.onscroll = () => {
  const navbar = document.querySelector("#navbar");
  // navbar height is 80
  if (this.scrollY <= 80) navbar.className = "";
  else navbar.className = "navbar--scroll";
};

var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  contain: true,
  adaptiveHeight: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".carousel", {
  // options
});
