function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu__link");
    let links = menu.find(".burger-menu__navigation-link");
    let btnclose = menu.find(".burger-menu__navigation-close");
    let overlay = menu.find(".burger-menu__overlay");
  
    button.on("click", (e) => {
      e.preventDefault();
      toggleMenu();
    });
    btnclose.on("click", (e) => {
      e.preventDefault();
      toggleMenu();
    });
  
    links.on("click", () => toggleMenu());
    overlay.on("click", () => toggleMenu());
  
    function toggleMenu() {
      menu.toggleClass("burger-menu__active");
      if (menu.hasClass("burger-menu__active")) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "visible");
      }
    }
  }
  burgerMenu(".burger-menu");
  function BoxShow(id) {
    var box = document.getElementById(id);
    if (box.style.display == "block") {
        box.style.display = "none";
    } else {
        box.style.display = "block";
    }
}