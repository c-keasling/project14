const body = document.querySelector("body");
const modeToggle = document.getElementById("mode-toggle");
const modeStatus = document.querySelector(".mode-status");

function toggleMode() {
  body.classList.toggle("dark-mode");
}
modeToggle.addEventListener("click", toggleMode);

document.addEventListener("DOMContentLoaded", (event) => {
  const sections = document.querySelectorAll(".Career, .Projects");
  const options = {
    threshold: 0.1,
  };

  function addSlideIn(entries) {
    entries.forEach((entry) => {
      console.log("Observing:", entry.target);
      if (entry.isIntersecting) {
        console.log("Element sliding in:", entry.target);
        entry.target.classList.add("slide-in");
      }
    });
  }

  const observer = new IntersectionObserver(addSlideIn, options);
  sections.forEach((section) => {
    observer.observe(section);
  });

  document.querySelector(".landing").classList.add("slide-in");
});
// adding form modal pop up action
const contact = document.getElementById("contact");
const closeBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const closeModal = function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
};

contact.addEventListener("click", function () {
  document.querySelector(".modal").classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//validating form
const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submit");
const successMessage = document.getElementById("form-submitted-msg");
const formElements = [...form.elements].filter((el) => el.type !== "submit");

const allInputsValid = () => {
  return formElements.every((element) => element.checkValidity());
};

const validateAndStyleFields = () => {
  let hasErrors = false;

  formElements.forEach((element) => {
    if (!element.checkValidity()) {
      element.style.borderColor = "red";
      element.nextElementSibling.style.color = "red";
      element.nextElementSibling.style.display = "block";
      element.previousElementSibling.style.color = "red";
      hasErrors = true;
    } else {
      element.style.borderColor = "green";
      element.nextElementSibling.style.color = "#CED4DA";
      element.nextElementSibling.style.display = "none";
      element.previousElementSibling.style.color = "#212529";
    }
  });

  return hasErrors;
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const hasValidationErrors = validateAndStyleFields();

  if (hasValidationErrors) {
    submitButton.disabled = false;
  } else {
    successMessage.style.display = "block";
    form.reset();
    submitButton.disabled = true;
    console.log("okay");
    setTimeout(() => {
      formElements.forEach((element) => {
        element.style.borderColor = "black";
      });
      successMessage.style.display = "none";
    }, 1500);
  }
});
