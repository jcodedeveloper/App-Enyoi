function scrollToElement(id) {
  var element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}