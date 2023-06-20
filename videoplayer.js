function playVideo(videoId) {
    var videoOverlay = document.querySelector('.video-overlay');
    var videoPlayer = videoOverlay.querySelector('#' + videoId);
  
    videoPlayer.classList.add('active');
    videoOverlay.style.display = 'flex';
    videoPlayer.play();
  
    // Close the overlay when clicking outside the video container
    videoOverlay.addEventListener('click', function (event) {
      if (!event.target.closest('.video-container')) {
        closeVideo();
      }
    });
  }
  
  function closeVideo() {
    var videoOverlay = document.querySelector('.video-overlay');
    var videoPlayer = videoOverlay.querySelector('.video-player video.active');
  
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.classList.remove('active');
    videoOverlay.style.display = 'none';
  }
  