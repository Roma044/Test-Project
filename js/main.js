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

// const reviewTrack = document.querySelector(".review-track");
// const reviewItems = document.querySelectorAll(".review-item");
// const prevReview = document.getElementById("prevReview");
// const nextReview = document.getElementById("nextReview");
// let reviewIndex = 0;
// let autoSlide;

// function updateReviewSlider() {
//   reviewTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
// }

// function nextSlide() {
//   reviewIndex = reviewIndex < reviewItems.length - 1 ? reviewIndex + 1 : 0;
//   updateReviewSlider();
// }

// function prevSlide() {
//   reviewIndex = reviewIndex > 0 ? reviewIndex - 1 : reviewItems.length - 1;
//   updateReviewSlider();
// }

// prevReview.addEventListener("click", () => {
//   prevSlide();
//   resetAutoSlide();
// });

// nextReview.addEventListener("click", () => {
//   nextSlide();
//   resetAutoSlide();
// });

// function startAutoSlide() {
//   autoSlide = setInterval(nextSlide, 3000);
// }

// function resetAutoSlide() {
//   clearInterval(autoSlide);
//   startAutoSlide();
// }

// startAutoSlide();
const openModalBtn = document.getElementById("openEnrollModalBtn");
const closeModalBtn = document.getElementById("closeEnrollModalBtn");
const modal = document.getElementById("modalEnrollForm");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
