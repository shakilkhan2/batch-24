// JavaScript for mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// memories modal
function openModal(memoryId) {
  const modal = document.getElementById(memoryId + "Modal");
  modal.classList.remove("hidden");
  // Close modal when clicking outside of the modal content
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal(memoryId);
    }
  });
}

function closeModal(memoryId) {
  const modal = document.getElementById(memoryId + "Modal");
  modal.classList.add("hidden");
}

// view profile
function openProfileModal(profileId) {
  const modal = document.getElementById(profileId + "Modal");
  modal.classList.remove("hidden");

  // Close modal when clicking outside of the modal content
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal(profileId);
    }
  });
}

function closeModal(profileId) {
  const modal = document.getElementById(profileId + "Modal");
  modal.classList.add("hidden");
}

console.log("got it!")