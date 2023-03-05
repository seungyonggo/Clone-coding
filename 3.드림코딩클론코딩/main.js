const moreBtn = document.queryselector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classlist.toggle("clicked");
  title.classList.toggle("clamp");
});
