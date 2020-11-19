function toggle() {
  const x = document.getElementById("myNav");
  if (x.className === "left colapse") {
    x.className = "left responsive";
  } else {
    x.className = "left colapse";
  }
}
