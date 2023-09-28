let isModalOpen = false;
let contrastToggle = false;

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_exbiv9q",
      "template_uyz2cla",
      event.target,
      "2l-xRecjXpp74DioP"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at cvariara@gmail.com"
      );
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const projectList = document.querySelector(".project__list");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const projectItems = document.querySelectorAll(".project");
  let currentIndex = 0;

  // Function to update the carousel display
  function updateCarousel() {
    const itemWidth = projectItems[currentIndex].offsetWidth;
    const translateX = -itemWidth * currentIndex;
    projectList.style.transform = `translateX(${translateX}px)`;
  }

  // Event listener for the "Next" button
  nextButton.addEventListener("click", function () {
    if (currentIndex < projectItems.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Event listener for the "Previous" button
  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Initial update
  updateCarousel();
});
