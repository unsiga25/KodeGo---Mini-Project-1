window.onscroll = () => {
  const navbar = document.querySelector("#navbar");
  // navbar height is 80
  if (this.scrollY <= 80) navbar.className = "";
  else navbar.className = "navbar--scroll";
};

var flkty = new Flickity(".carousel", {
  freeScroll: true,
  wrapAround: true,
});
