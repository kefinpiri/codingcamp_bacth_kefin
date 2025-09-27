document.addEventListener("DOMContentLoaded", function() {
  // Hamburger toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");
  });

  // Form handling (punyamu sebelumnya)
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("outName").innerText = document.getElementById("name").value;
    document.getElementById("outBirth").innerText = document.getElementById("birthdate").value;
    document.getElementById("outGender").innerText = document.getElementById("gender").value;
    document.getElementById("outMessage").innerText = document.getElementById("messageText").value;
    document.getElementById("time").innerText = new Date().toString();
  });
});
