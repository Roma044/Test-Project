const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/icons/nav-close.svg";
  } else {
    navBtnImg.src = "./img/icons/nav-open.svg";
  }
};

AOS.init();
// disable: 'mobile'  -- відключити анімацію в телефонів
//   once: true, -- зробити щоб анімація не повторювалася

/*-------------------------Modal WIndow---------------------*/

function openModal(title, text) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-text").innerText = text;
  document.getElementById("modal").style.display = "flex";
}
function closeModal(event) {
  if (
    event.target === document.getElementById("modal") ||
    event.target.classList.contains("close")
  ) {
    document.getElementById("modal").style.display = "none";
  }
}

/*----------------------------Послуги-------------------------------*/
function openModal(title) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
window.onclick = function (event) {
  if (event.target === document.getElementById("modal")) {
    closeModal();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо URL поточної сторінки
  let currentLocation = window.location.pathname.split("/").pop();

  // Отримуємо всі посилання у навігації
  let navLinks = document.querySelectorAll(".nav-link");

  // Перебираємо всі посилання та додаємо клас 'active' для відповідного
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    }
  });
});
