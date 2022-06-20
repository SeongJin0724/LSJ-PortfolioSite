const img_box = document.querySelectorAll(".img_box");
const info_box = document.querySelectorAll(".info_box");
const info_title = document.querySelector(".info_title_box");

img_box.forEach((item) => {
  item.addEventListener("mouseover", mouseOverHandler);
  item.addEventListener("mouseover", hide);
});

function mouseOverHandler(item) {
  item.preventDefault();
  const tabTarget = item.currentTarget;
  const target = tabTarget.dataset.tab;
  info_box.forEach((target) => {
    target.classList.remove("on");
  });
  document.querySelector("#" + target).classList.add("on");
}

function hide() {
  info_title.classList.add("hide");
}

const topBtn = document.querySelector(".moveTopBtn");

topBtn.addEventListener("click", scrollTopHandler);

function scrollTopHandler(item) {
  const tabTarget = item.currentTarget;
  const target = tabTarget.dataset.tab;
  window.scrollTo({ top: 0, behavior: "smooth" });
  info_box.forEach((target) => {
    target.classList.remove("on");
  });
  info_title.classList.remove("hide");
}
