const panels = document.querySelectorAll(".panel");
function addFlexAnimation() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex-grow"))
    this.classList.toggle("open-active");
}

panels.forEach((panel) => panel.addEventListener("click", addFlexAnimation));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
