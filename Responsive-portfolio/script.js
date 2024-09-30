// Filter Function
function filterVideos(category) {
    const videos = document.querySelectorAll('.video');
    videos.forEach(video => {
        if (category === 'all' || video.classList.contains(category)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightbox-video');

document.querySelectorAll('.video-preview').forEach(video => {
    video.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxVideo.src = this.src;
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxVideo.src = ''; // Stop the video
}

// Close lightbox when clicking outside the video
lightbox.addEventListener('click', function(event) {
    if (event.target !== lightboxVideo) {
        closeLightbox();
    }
});
