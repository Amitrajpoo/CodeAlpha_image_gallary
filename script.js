// Filter images based on category
function filterImages(type) {
  const images = document.querySelectorAll('.image-item');
  images.forEach(image => {
    if (type === 'all' || image.classList.contains(type)) {
      image.classList.add('show');
      image.style.display = 'block';
    } else {
      image.classList.remove('show');
      image.style.display = 'none';
    }
  });
}

// Show all images by default on page load
document.addEventListener("DOMContentLoaded", function() {
  filterImages('all');
});

// Function to open the lightbox with the selected image
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;  // Set image source to the clicked image
  lightbox.style.display = 'flex'; // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none'; // Hide the lightbox
}
