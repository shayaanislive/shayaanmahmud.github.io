(function ($) {
  $(document).ready(function () {
    $(document).on("click", ".header-area .show-menu", function () {
      $(this).toggleClass("active");
      $(".header-area .navbar").toggleClass("active");
    });
    // $(document).on('click', '.header-area .navbar .close-menu', function() {
    //     $(".header-area .navbar").removeClass('active');
    // });

    AOS.init({
      duration: 1500,
      once: true,
    });
  });
})(jQuery);

var div = document.createElement("div");
(div.id = "preloader"),
  (div.className = "preloader"),
  (div.innerHTML = '<div class="black_wall"></div><div class="loader"></div>'),
  document.body.insertBefore(div, document.body.firstChild),
  (window.onload = function () {
    document.getElementById("preloader").classList.add("off");
  });

// Array of possible headings
const headings = [
  "A WEB DEVELOPER",
  "A GRAPHIC DESIGNER",
  "A PHOTOGRAPHER",
  "A PROGRAMMER",
  "A VLOGGER",
  "A YOUTUBER",
  "A PRODUCER",
  "AN ETHICAL HACKER",
  "A CYBERSECURITY SPECIALIST",
  "A TECH EXPERT",
  "A VIDEOGRAPHER",
  "A STUDENT",
  "A LEARNER",
];

// Get the h4 element by its id
const jobTitle = document.getElementById("occupation");
const whoAmI = document.getElementById("whoAmI");

// Generate a random index to choose a heading from the array
const randomIndex = Math.floor(Math.random() * headings.length);

// Set the new heading text
jobTitle.textContent = headings[randomIndex];
whoAmI.textContent = headings[randomIndex].toLowerCase();

function onSubmitForm() {
  // Get the success message element
  var successMessage = document.querySelector(".messenger-box-contact__msg");

  // Set the text content of the success message
  successMessage.textContent = "Your message was sent successfully.";

  // Show the success message box
  successMessage.style.display = "block";

  // Delay for 5 seconds before hiding the success message
  setTimeout(function () {
    // Hide the success message box
    successMessage.style.display = "none";
  }, 5000); // 5000 milliseconds (5 seconds)
}
