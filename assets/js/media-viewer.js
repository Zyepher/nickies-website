// Media Viewer Functionality
const imageViewerModal = document.getElementById('image-viewer-modal');
const viewerImage = document.getElementById('viewer-image');
const viewerVideo = document.getElementById('viewer-video');
const imageCounter = document.getElementById('image-counter');
const closeViewer = document.getElementById('close-viewer');
const prevImage = document.getElementById('prev-image');
const nextImage = document.getElementById('next-image');
const mediaGrid = document.getElementById('media-grid');

let currentMediaIndex = 0;

// Media sources array with type indicators
const mediaSources = [
    { type: 'image', src: './assets/images/reviews/grid-img-1.jpeg', alt: 'Customer review 1' },
    { type: 'video', src: './assets/images/reviews/grid-vid-1.mov', alt: 'Customer review video', poster: './assets/images/reviews/grid-img-1.jpeg' },
    { type: 'image', src: './assets/images/reviews/grid-img-2.jpeg', alt: 'Customer review 2' },
    { type: 'image', src: './assets/images/reviews/grid-img-3.jpeg', alt: 'Customer review 3' },
    { type: 'image', src: './assets/images/reviews/grid-img-1.jpeg', alt: 'Customer review 4' },
    { type: 'image', src: './assets/images/reviews/grid-img-2.jpeg', alt: 'Customer review 5' },
    { type: 'image', src: './assets/images/reviews/grid-img-3.jpeg', alt: 'Customer review 6' },
    { type: 'image', src: './assets/images/reviews/grid-img-1.jpeg', alt: 'Customer review 7' },
    { type: 'image', src: './assets/images/reviews/grid-img-2.jpeg', alt: 'Customer review 8' }
];

// Create Instagram-style video play icon SVG
function createPlayIcon() {
    return `
        <div class="absolute top-2 right-2 pointer-events-none">
            <div class="w-[30px] h-[30px] bg-white/25 backdrop-blur-sm rounded-md flex items-center justify-center">
                <svg class="w-[22px] h-[22px] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </div>
        </div>
    `;
}

// Generate media grid dynamically
function generateMediaGrid() {
    mediaGrid.innerHTML = '';
    mediaSources.forEach((media, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'relative aspect-square overflow-hidden bg-stone-200 dark:bg-stone-800 cursor-pointer group';
        
        if (media.type === 'image') {
            gridItem.innerHTML = `
                <img src="${media.src}" alt="${media.alt}" 
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform">
            `;
        } else if (media.type === 'video') {
            // Use video element directly as thumbnail with progress bar
            gridItem.innerHTML = `
                <video src="${media.src}" 
                       class="w-full h-full object-cover group-hover:scale-105 transition-transform"
                       muted
                       loop
                       playsinline
                       preload="metadata">
                </video>
                ${createPlayIcon()}
                <!-- Progress indicator -->
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div class="progress-bar h-full bg-white/80 origin-left" style="transform: scaleX(0)"></div>
                </div>
            `;
            
            // Set up video hover autoplay and progress
            const video = gridItem.querySelector('video');
            const progressBar = gridItem.querySelector('.progress-bar');
            let hoverTimeout;
            let animationFrame;
            
            video.addEventListener('loadedmetadata', function() {
                video.currentTime = 0.1; // Slight offset to ensure frame is loaded
            });
            
            // Smooth progress animation using requestAnimationFrame
            function updateProgress() {
                if (video.duration && !video.paused) {
                    const progress = video.currentTime / video.duration;
                    progressBar.style.transform = `scaleX(${progress})`;
                    progressBar.style.transition = 'none'; // Remove transition for smooth animation
                    animationFrame = requestAnimationFrame(updateProgress);
                }
            }
            
            // Start animation when video plays
            video.addEventListener('play', function() {
                progressBar.style.transition = 'none';
                updateProgress();
            });
            
            // Stop animation when video pauses
            video.addEventListener('pause', function() {
                cancelAnimationFrame(animationFrame);
            });
            
            // Hover to play
            gridItem.addEventListener('mouseenter', function() {
                hoverTimeout = setTimeout(() => {
                    video.currentTime = 0;
                    progressBar.style.transform = 'scaleX(0)';
                    video.play().catch(e => console.log('Autoplay prevented:', e));
                }, 200); // Small delay to prevent accidental plays
            });
            
            // Stop on mouse leave
            gridItem.addEventListener('mouseleave', function() {
                clearTimeout(hoverTimeout);
                cancelAnimationFrame(animationFrame);
                video.pause();
                video.currentTime = 0.1;
                progressBar.style.transition = 'transform 0.3s ease-out';
                progressBar.style.transform = 'scaleX(0)';
            });
            
            // Override click to handle video differently
            gridItem.addEventListener('click', function(e) {
                e.stopPropagation();
                // Pause hover video
                video.pause();
                // Open in fullscreen viewer starting from beginning
                openMediaViewer(index);
            });
        }
        
        if (media.type === 'image') {
            gridItem.addEventListener('click', () => openMediaViewer(index));
        }
        
        mediaGrid.appendChild(gridItem);
    });
}

// Open media viewer
function openMediaViewer(index) {
    currentMediaIndex = index;
    updateViewerMedia();
    imageViewerModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close media viewer
function closeMediaViewer() {
    // Pause video if playing
    if (!viewerVideo.classList.contains('hidden')) {
        viewerVideo.pause();
    }
    imageViewerModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Update viewer media
function updateViewerMedia() {
    const media = mediaSources[currentMediaIndex];
    
    if (media.type === 'image') {
        viewerImage.src = media.src;
        viewerImage.classList.remove('hidden');
        viewerVideo.classList.add('hidden');
        viewerVideo.pause();
    } else if (media.type === 'video') {
        viewerVideo.src = media.src;
        viewerVideo.currentTime = 0; // Start from beginning
        viewerVideo.classList.remove('hidden');
        viewerImage.classList.add('hidden');
        // Auto-play video when opened
        setTimeout(() => {
            viewerVideo.play().catch(e => console.log('Auto-play prevented:', e));
        }, 100);
    }
    
    imageCounter.textContent = `${currentMediaIndex + 1} / ${mediaSources.length}`;
}

// Navigate to previous media
function showPrevMedia() {
    // Pause current video if playing
    if (!viewerVideo.classList.contains('hidden')) {
        viewerVideo.pause();
    }
    currentMediaIndex = (currentMediaIndex - 1 + mediaSources.length) % mediaSources.length;
    updateViewerMedia();
}

// Navigate to next media
function showNextMedia() {
    // Pause current video if playing
    if (!viewerVideo.classList.contains('hidden')) {
        viewerVideo.pause();
    }
    currentMediaIndex = (currentMediaIndex + 1) % mediaSources.length;
    updateViewerMedia();
}

// Initialize media grid
generateMediaGrid();

// Event listeners for viewer controls
closeViewer.addEventListener('click', closeMediaViewer);
prevImage.addEventListener('click', showPrevMedia);
nextImage.addEventListener('click', showNextMedia);

// Close on background click
imageViewerModal.addEventListener('click', (e) => {
    if (e.target === imageViewerModal) {
        closeMediaViewer();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!imageViewerModal.classList.contains('hidden')) {
        if (e.key === 'Escape') closeMediaViewer();
        if (e.key === 'ArrowLeft') showPrevMedia();
        if (e.key === 'ArrowRight') showNextMedia();
    }
});