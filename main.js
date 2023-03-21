"use strict"


// scrolling to top button

let mySpan = document.querySelector("span[class ='top_button']");


window.addEventListener("scroll", showTopButton);

function showTopButton () {
  this.scrollY >= 650
    ? mySpan.classList.add("show_button")
    : mySpan.classList.remove("show_button");
};

mySpan.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// scrolling to top button

// progress bar filling

let allSpans = document.querySelectorAll(".bars .prog > span");

let targetSection = document.querySelector(".skills-sec");



window.addEventListener("scroll", progFilling);


function progFilling () {
  if (window.scrollY >= targetSection.offsetTop - 100) {
    allSpans.forEach((ele) => {
      ele.style.width = ele.dataset.width;
    });
  }
};

// progress bar filling
