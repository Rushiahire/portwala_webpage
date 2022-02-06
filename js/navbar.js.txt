const toggleNavbar = () => {
  const navbar_bottom = document.getElementById("navbar_bottom");
  const overlay = document.getElementById("overlay");
  navbar_bottom.style.display =
    navbar_bottom.style.display == "none" ? "flex" : "none";
  overlay.style.display =
    navbar_bottom.style.display == "flex" ? "block" : "none";
};

const toggleMenu = (index) => {
  const menu_1 = document.getElementById("menu_1");
  const menu_2 = document.getElementById("menu_2");
  const navbar_bottom = document.getElementById("navbar_bottom");
  switch (index) {
    case 1:
      menu_1.style.display = menu_1.style.display == "none" ? "block" : "none";
      menu_2.style.display = "none";
      navbar_bottom.style.height =
        menu_1.style.display == "none" ? "30vh" : "50vh";
      break;
    case 2:
      menu_2.style.display = menu_2.style.display == "none" ? "block" : "none";
      menu_1.style.display = "none";
      navbar_bottom.style.height =
        menu_2.style.display == "none" ? "30vh" : "50vh";
      break;
    default:
      break;
  }
};
