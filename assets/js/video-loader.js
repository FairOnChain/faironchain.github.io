// Force video reload on page load to fix navigation issues
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video');
  videos.forEach(function(video) {
    video.load();
    if (video.hasAttribute('autoplay')) {
      video.play().catch(function(error) {
        console.log('Autoplay prevented:', error);
      });
    }
  });
});

// Reload videos when page becomes visible (for navigation between pages)
document.addEventListener('visibilitychange', function() {
  if (!document.hidden) {
    const videos = document.querySelectorAll('video[autoplay]');
    videos.forEach(function(video) {
      video.load();
      video.play().catch(function(error) {
        console.log('Autoplay prevented:', error);
      });
    });
  }
});
