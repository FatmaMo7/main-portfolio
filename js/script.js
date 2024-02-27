
let mixerPortofolio = mixitup(".box-container", {
  load: {
      filter: '.home'
  },
  selectors: {
    target: ".list-card",
  },
  animation: {
    duration: 300,
  },
});

const linkwork = document.querySelectorAll(".list-item");
function activework() {
  linkwork.forEach((L) => L.classList.remove("active-list"));
  this.classList.add("active-list");
}
linkwork.forEach((L) => L.addEventListener("click", activework));


let tabs = document.querySelectorAll(".tabs .tab");
let boxes = document.querySelectorAll(".work-container .box");
tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    tabs.forEach((t) => {
      t.classList.remove("active");
    });
    this.classList.add("active");
    boxes.forEach((box) => {
      box.style.display = "none";
      if (box.dataset.box === e.target.dataset.tab) {
        box.style.display = "block";
        box.style.animation = "scale 0.5s linear";
      }
      if (e.target.dataset.tab === ".all") {
        box.style.display = "block";
        box.style.animation = "scale 0.5s linear";
      }
    });
  });
});

/* dark light theme */
let sunicon = document.querySelector(".modeicon .moon");
let moonicon = document.querySelector(".modeicon .sun");
sunicon.addEventListener("click", function () {
  sunicon.classList.add("hidden");
  moonicon.classList.remove("hidden");
  document.body.classList.add("darkmode");
});
moonicon.addEventListener("click", function () {
  moonicon.classList.add("hidden");
  sunicon.classList.remove("hidden");

  document.body.classList.remove("darkmode");
});