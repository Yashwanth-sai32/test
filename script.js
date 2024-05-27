"use strict";
const inputPin = document.querySelector(".input-pin");
const login = document.querySelector(".login-btn");
const loginDiv = document.querySelector(".login");
const form = document.querySelector(".form");
const allSections = document.querySelectorAll(".section");
const understandBtn = document.querySelector(".understand-Btn");
const understand = document.querySelector("#understand");

// Understand event listener
understandBtn.addEventListener("click", function () {
  understand.scrollIntoView({
    behavior: "smooth",
  });
});

// Disabling the scrolling before entering the correct code
document.body.style.overflow = "hidden";

// Validating the User
const passcode = "iloveyashwanth";
let check = 0;
login.addEventListener("click", function (e) {
  e.preventDefault();
  // const receivedPin = Number(inputPin.value);
  const receivedPin = inputPin.value;
  if (receivedPin === passcode) {
    allSections.forEach((section) => {
      section.style.transition = "all 0.6s ease-out";
      section.classList.remove("blur-background");
      loginDiv.classList.add("hidden");
      activateEvents(allSections, "auto");
      document.body.style.overflow = "auto";
    });
  } else {
    if (check == 0) {
      form.insertAdjacentHTML(
        "beforeend",
        `<p>You are not the Honey that i Know ❌</p>`
      );
    }
    check++;
  }
});

// Setting up the pointer-events to none for all sections
const activateEvents = function (sections, property) {
  sections.forEach((section) => {
    section.style.pointerEvents = `${property}`;
  });
};
activateEvents(allSections, "none");

// Set the date you met
const metDate = new Date("2023 October 7");

function updateCountdown() {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = currentDate - metDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the countdown element
  document.getElementById(
    "timer-component"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
