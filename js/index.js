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
const about = document.querySelector(".moveBtn");
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

const skill_content = document.querySelectorAll(".skill_content");
const skill_content_text = document.querySelectorAll(".skill_content_text");

skill_content.forEach((item) => {
  item.addEventListener("mouseover", skilTabHandler);
});
skill_content.forEach((item) => {
  item.addEventListener("mouseleave", skilRemoveHandler);
});
function skilTabHandler(item) {
  const tabTarget = item.currentTarget;
  const target = tabTarget.dataset.tab;
  skill_content_text.forEach((target) => {
    target.classList.remove("show");
  });
  document.querySelector("#" + target).classList.add("show");
}
function skilRemoveHandler(item) {
  const tabTarget = item.currentTarget;
  const target = tabTarget.dataset.tab;
  skill_content_text.forEach((target) => {
    target.classList.remove("show");
  });
}
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    $("footer").addClass("active");
  } else {
    $("footer").removeClass("active");
  }
});
