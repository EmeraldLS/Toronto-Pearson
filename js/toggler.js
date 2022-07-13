function togglerNav() {
  let toggler_icon = document.querySelector(".toggler_icon");
  let show_nav = document.querySelector(".show_nav");
  toggler_icon.addEventListener("click", function () {
    show_nav.classList.toggle("show");
  });
}

togglerNav();
