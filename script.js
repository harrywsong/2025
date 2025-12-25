// Sound effects
function playPaperSound() {
    const audio = new Audio('sounds/paper.mp3');
    audio.volume = 0.5;
    audio.play().catch(error => {
        // Ignore autoplay errors - user interaction may be required
        console.log('Could not play paper sound:', error);
    });
}

function playRandomGlassSound() {
    const glassSounds = ['sounds/glass1.mp3', 'sounds/glass2.mp3', 'sounds/glass3.mp3'];
    const randomSound = glassSounds[Math.floor(Math.random() * glassSounds.length)];
    const audio = new Audio(randomSound);
    audio.volume = 0.5;
    audio.play().catch(error => {
        // Ignore autoplay errors - user interaction may be required
        console.log('Could not play glass sound:', error);
    });
}

// Helper function to set image src with fallback to .png if .jpg fails
function setImageSrcWithFallback(img, basePath) {
    // Remove existing extension if present
    const base = basePath.replace(/\.(jpg|png)$/i, '');
    
    // Try .jpg first
    const jpgUrl = base + '.jpg';
    img.src = jpgUrl;
    
    // If .jpg fails to load, try .png
    img.onerror = function() {
        const pngUrl = base + '.png';
        // Remove the error handler to prevent infinite loop if both fail
        img.onerror = null;
        img.src = pngUrl;
    };
}

// Memory data for each month
// Each image can have its own unique text - just edit the text field for each image
const monthData = {
    january: {
        name: 'January',
        images: [
            {
                id: 1,
                url: 'images/jan1', // No extension - will try both .jpg and .png
                text: 'January Memory 1: 뭘 하고 있는지 모르겠지만 일단 V^^'
            },
            {
                id: 2,
                url: 'images/jan2',
                text: 'January Memory 2: 예원이가 먹으라고 시켜준 Nonna Lia! 짱맛있었다.'
            },
            {
                id: 3,
                url: 'images/jan3',
                text: 'January Memory 3: 뭘 하고 있는지 모르겠지만 pt2 - 일단 하트'
            },
            {
                id: 4,
                url: 'images/jan4',
                text: 'January Memory 4: 진짜 뭐 하고 있는지 모르겠지만 pt3 - 일단 포즈 잡아주자'
            }
        ]
    },
    february: {
        name: 'February',
        images: [
            {
                id: 1,
                url: 'images/feb1',
                text: 'February Memory 1: 2025년도 첫 만남!'
            },
            {
                id: 2,
                url: 'images/feb2',
                text: 'February Memory 2: 밥 먹으러 이화행 - 근데 눈..!'
            },
            {
                id: 3,
                url: 'images/feb3',
                text: 'February Memory 3: 눈 오니까 엄청 신난 예원이'
            },
            {
                id: 4,
                url: 'images/feb4',
                text: 'February Memory 4: CN Tower 위에서 토론토 내려다보기'
            }
        ]
    },
    march: {
        name: 'March',
        images: [
            {
                id: 1,
                url: 'images/mar1',
                text: 'March Memory 1: 우리의 200일'
            },
            {
                id: 2,
                url: 'images/mar2',
                text: 'March Memory 2: 어머 모델이 열일하시네'
            },
            {
                id: 3,
                url: 'images/mar3',
                text: 'March Memory 3: V^^V.'
            },
            {
                id: 4,
                url: 'images/mar4',
                text: 'March Memory 4: ??? 뭘 하고 있는지 모르겠지만 pt 5 - 우성이가 우혁이 끌고 다니기'
            }
        ]
    },
    april: {
        name: 'April',
        images: [
            {
                id: 1,
                url: 'images/apr1',
                text: 'April Memory 1: 멍멍이랑 포토슛'
            },
            {
                id: 2,
                url: 'images/apr2',
                text: 'April Memory 2: 우성이랑 우혁이 영화관 데이트'
            },
            {
                id: 3,
                url: 'images/apr3',
                text: 'April Memory 3: 예원이가 그려준 우혁'
            },
            {
                id: 4,
                url: 'images/apr4',
                text: 'April Memory 4: "나도 없는데 그렇게 꾸미고 어딜 가는거야?" - 우혁'
            }
        ]
    },
    may: {
        name: 'May',
        images: [
            {
                id: 1,
                url: 'images/may1',
                text: 'May Memory 1: 또 다시 만난 3종 세트'
            },
            {
                id: 2,
                url: 'images/may2',
                text: 'May Memory 2: 평생 가보고싶었던 퀘벡에 있는 크리스마스 가계 가서 너무 신난 예원이'
            },
            {
                id: 3,
                url: 'images/may3',
                text: 'May Memory 3: 둘만의 평온한 여행'
            },
            {
                id: 4,
                url: 'images/may4',
                text: 'May Memory 4: 폭포 앞에서 브이이이이이'
            }
        ]
    },
    june: {
        name: 'June',
        images: [
            {
                id: 1,
                url: 'images/jun1',
                text: 'June Memory 1: 발로란트 마스터즈 토론토 시청하러 간 우혁'
            },
            {
                id: 2,
                url: 'images/jun2',
                text: 'June Memory 2: 맛있는거 먹느라 신난 우혁'
            },
            {
                id: 3,
                url: 'images/jun3',
                text: 'June Memory 3: 직장 생활 시작한 예원이'
            },
            {
                id: 4,
                url: 'images/jun4',
                text: 'June Memory 4: 주토피아 현실판'
            }
        ]
    },
    july: {
        name: 'July',
        images: [
            {
                id: 1,
                url: 'images/jul1',
                text: 'July Memory 1: 사진 찍어야해서 포즈 잡는 예원이'
            },
            {
                id: 2,
                url: 'images/jul2',
                text: 'July Memory 2: Coffee break!'
            },
            {
                id: 3,
                url: 'images/jul3',
                text: 'July Memory 3: 영차! 작년에 찍은 사진 따라하기'
            },
            {
                id: 4,
                url: 'images/jul4',
                text: 'July Memory 4: "낮엔 파란 하늘, 별이 보이는 밤"'
            }
        ]
    },
    august: {
        name: 'August',
        images: [
            {
                id: 1,
                url: 'images/aug1',
                text: 'August Memory 1: 와 미쳐따..! 근데 이거 어떻게 다 먹어 우리?'
            },
            {
                id: 2,
                url: 'images/aug2',
                text: 'August Memory 2: 인생네컷 찍고 나온 우혁예원'
            },
            {
                id: 3,
                url: 'images/aug3',
                text: 'August Memory 3: 후식까지 때리면서 하루 마무리!'
            },
            {
                id: 4,
                url: 'images/aug4',
                text: 'August Memory 4: 우성이랑 우혁이의 데이트날 pt2'
            }
        ]
    },
    september: {
        name: 'September',
        images: [
            {
                id: 1,
                url: 'images/sep1',
                text: 'September Memory 1: 피카츄라이츄아이원츄'
            },
            {
                id: 2,
                url: 'images/sep2',
                text: 'September Memory 2: 카페 거울 앞에서 폼잡는중'
            },
            {
                id: 3,
                url: 'images/sep3',
                text: 'September Memory 3: (ㅁㅁ)V'
            },
            {
                id: 4,
                url: 'images/sep4',
                text: 'September Memory 4: 옴념념'
            }
        ]
    },
    october: {
        name: 'October',
        images: [
            {
                id: 1,
                url: 'images/oct1',
                text: 'October Memory 1: 거울 셀카는 못참지'
            },
            {
                id: 2,
                url: 'images/oct2',
                text: 'October Memory 2: 우혁이는 이제 26살...'
            },
            {
                id: 3,
                url: 'images/oct3',
                text: 'October Memory 3: 예원이랑 지원이 만난지 25주년 파티 - pt1'
            },
            {
                id: 4,
                url: 'images/oct4',
                text: 'October Memory 4: B) 예원이랑 지원이 만난지 25주년 파티 - pt2'
            }
        ]
    },
    november: {
        name: 'November',
        images: [
            {
                id: 1,
                url: 'images/nov1',
                text: 'November Memory 1: 아니... 11월인데 왜 벌써 크리스마스 트리야...'
            },
            {
                id: 2,
                url: 'images/nov2',
                text: 'November Memory 2: 흔하지 않은 우리 둘만의 셀카'
            },
            {
                id: 3,
                url: 'images/nov3',
                text: 'November Memory 3: 의자는 오버사이즈 사면 안되는 이유'
            },
            {
                id: 4,
                url: 'images/nov4',
                text: 'November Memory 4: CCTV 셀카. 유행은 내가 만든다.'
            }
        ]
    },
    december: {
        name: 'December',
        images: [
            {
                id: 1,
                url: 'images/dec1',
                text: 'December Memory 1: 올해 마지막 V^^'
            },
            {
                id: 2,
                url: 'images/dec2',
                text: 'December Memory 2: 우혁이네 트리 꾸미기'
            },
            {
                id: 3,
                url: 'images/dec3',
                text: 'December Memory 3: 에헹 크뤼스마스!'
            },
            {
                id: 4,
                url: 'images/dec4',
                text: 'December Memory 4: 우효기 생각나는 짱 이쁜 곳'
            }
        ]
    }
};

// DOM Elements
const scrapbookModal = document.getElementById('scrapbookModal');
const imageModal = document.getElementById('imageModal');
const letterModal = document.getElementById('letterModal');
const scrapbookTitle = document.getElementById('scrapbookTitle');
const scrapbookGrid = document.getElementById('scrapbookGrid');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const letterText = document.getElementById('letterText');
const closeScrapbook = document.getElementById('closeScrapbook');
const closeImage = document.getElementById('closeImage');
const closeLetter = document.getElementById('closeLetter');
const presentOverlay = document.getElementById('presentOverlay');

// Event listeners are now handled in initStringLights()

closeScrapbook.addEventListener('click', closeScrapbookModal);
closeImage.addEventListener('click', closeImageModal);
closeLetter.addEventListener('click', closeLetterModal);

// Present overlay click handler
if (presentOverlay) {
    presentOverlay.addEventListener('click', () => {
        playPaperSound();
        openLetterModal();
    });
}

// Close modals when clicking outside
scrapbookModal.addEventListener('click', (e) => {
    if (e.target === scrapbookModal) {
        closeScrapbookModal();
    }
});

imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        closeImageModal();
    }
});

letterModal.addEventListener('click', (e) => {
    if (e.target === letterModal) {
        closeLetterModal();
    }
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (letterModal.classList.contains('active')) {
            closeLetterModal();
        } else if (imageModal.classList.contains('active')) {
            closeImageModal();
        } else if (scrapbookModal.classList.contains('active')) {
            closeScrapbookModal();
        }
    }
});

// Functions
function openScrapbook(monthKey) {
    const month = monthData[monthKey];
    if (!month) return;

    // Update title
    scrapbookTitle.textContent = `${month.name} Memories`;

    // Clear previous images
    scrapbookGrid.innerHTML = '';

    // Add images to grid
    month.images.forEach((imageData, index) => {
        const item = document.createElement('div');
        item.className = 'scrapbook-item';
        item.style.animationDelay = `${index * 0.05}s`;
        
        const img = document.createElement('img');
        setImageSrcWithFallback(img, imageData.url);
        img.alt = `${month.name} Memory ${imageData.id}`;
        img.loading = 'lazy';
        
        item.appendChild(img);
        item.addEventListener('click', () => {
            playPaperSound();
            openImageModal(imageData);
        });
        
        scrapbookGrid.appendChild(item);
    });

    // Show modal
    scrapbookModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animate items
    const items = scrapbookGrid.querySelectorAll('.scrapbook-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.4s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        }, index * 30);
    });
}

function closeScrapbookModal() {
    scrapbookModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openImageModal(imageData) {
    setImageSrcWithFallback(modalImage, imageData.url);
    modalText.textContent = imageData.text;
    
    // Reset animation by removing and re-adding the class
    const modalContent = imageModal.querySelector('.image-modal-content');
    if (modalContent) {
        modalContent.style.animation = 'none';
        // Force reflow to reset animation
        void modalContent.offsetWidth;
        modalContent.style.animation = '';
    }
    
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    imageModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openLetterModal() {
    // Reset animation by removing and re-adding the class
    const letterContent = letterModal.querySelector('.letter-modal-content');
    if (letterContent) {
        letterContent.style.animation = 'none';
        // Force reflow to reset animation
        void letterContent.offsetWidth;
        letterContent.style.animation = '';
    }
    
    letterModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLetterModal() {
    letterModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add smooth scroll behavior
document.querySelectorAll('.month-indicator').forEach(indicator => {
    indicator.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
});

// Preload images for better performance (optional)
function preloadImages() {
    Object.values(monthData).forEach(month => {
        month.images.forEach(imageData => {
            const img = new Image();
            setImageSrcWithFallback(img, imageData.url);
        });
    });
}

// Start preloading after page load
// YouTube Player API
let youtubePlayer = null;

// YouTube IFrame API callback - must be in global scope BEFORE the API script loads
window.onYouTubeIframeAPIReady = function() {
    const playerContainer = document.getElementById('youtubePlayer');
    if (!playerContainer) {
        console.error('YouTube player container not found');
        return;
    }
    
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        console.error('YouTube IFrame API not loaded');
        return;
    }
    
    // Don't initialize if player already exists
    if (youtubePlayer) {
        console.log('YouTube player already initialized');
        return;
    }
    
    try {
        youtubePlayer = new YT.Player('youtubePlayer', {
            height: '0',
            width: '0',
            videoId: 'qwdzIECTqn8',
            playerVars: {
                'autoplay': 1,
                'controls': 0,
                'disablekb': 1,
                'fs': 0,
                'iv_load_policy': 3,
                'loop': 1,
                'playlist': 'qwdzIECTqn8', // Required for looping
                'modestbranding': 1,
                'playsinline': 1,
                'rel': 0,
                'showinfo': 0
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
                'onError': onPlayerError
            }
        });
        console.log('YouTube player initialized');
    } catch (error) {
        console.error('Error initializing YouTube player:', error);
    }
};

function onPlayerReady(event) {
    console.log('YouTube player ready');
    try {
        // Set initial volume to 20%
        event.target.setVolume(20);
        
        // Update volume display
        const volumeSlider = document.getElementById('volumeSlider');
        if (volumeSlider) {
            volumeSlider.value = 20;
        }
        const volumeValue = document.getElementById('volumeValue');
        if (volumeValue) {
            volumeValue.textContent = '20%';
        }
        
        // Try to play (may be blocked by browser autoplay policy)
        // User interaction may be required
        setTimeout(() => {
            try {
                event.target.playVideo();
                
                // Check if video actually started playing after a short delay
                setTimeout(() => {
                    try {
                        const playerState = event.target.getPlayerState();
                        // YT.PlayerState.PLAYING = 1
                        if (playerState !== 1) {
                            // Autoplay was blocked - mark that user interaction is needed
                            window.musicNeedsUserInteraction = true;
                            console.log('Autoplay blocked. User interaction required to start music.');
                            
                            // Add visual indicator to music button
                            const musicToggleBtn = document.getElementById('musicToggle');
                            if (musicToggleBtn) {
                                musicToggleBtn.classList.add('needs-interaction');
                                musicToggleBtn.title = 'Click to start music';
                            }
                        } else {
                            window.musicNeedsUserInteraction = false;
                        }
                    } catch (checkError) {
                        // If we can't check state, assume interaction is needed
                        window.musicNeedsUserInteraction = true;
                        console.log('Could not verify playback state. User interaction may be required.');
                    }
                }, 500);
            } catch (error) {
                // Autoplay may be blocked by browser policy - user interaction required
                window.musicNeedsUserInteraction = true;
                console.log('Autoplay blocked. User interaction required.', error);
                
                // Add visual indicator to music button
                const musicToggleBtn = document.getElementById('musicToggle');
                if (musicToggleBtn) {
                    musicToggleBtn.classList.add('needs-interaction');
                    musicToggleBtn.title = 'Click to start music';
                }
            }
        }, 100);
    } catch (error) {
        console.error('Error in onPlayerReady:', error);
    }
}

function onPlayerStateChange(event) {
    // Handle player state changes if needed
    if (event.data === YT.PlayerState.PLAYING) {
        console.log('Video is playing');
    } else if (event.data === YT.PlayerState.PAUSED) {
        console.log('Video is paused');
    } else if (event.data === YT.PlayerState.ENDED) {
        console.log('Video ended');
    }
}

function onPlayerError(event) {
    console.error('YouTube player error:', event.data);
    // Error codes: 2=invalid video, 5=HTML5 error, 100=video not found, 101/150=not playable
}

// Toggle boundary indicators with tilde key
let showBoundaries = false;

document.addEventListener('keydown', (e) => {
    if (e.key === '~' || e.key === '`') {
        showBoundaries = true;
        const indicators = document.querySelectorAll('.month-boundary-indicator');
        indicators.forEach(indicator => {
            indicator.style.display = 'block';
        });
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === '~' || e.key === '`') {
        showBoundaries = false;
        const indicators = document.querySelectorAll('.month-boundary-indicator');
        indicators.forEach(indicator => {
            indicator.style.display = 'none';
        });
    }
});

// Hide landing page on scroll
function initLandingPage() {
    const landingPage = document.getElementById('landingPage');
    if (!landingPage) return;
    
    const hideOnScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Hide landing page after scrolling down a bit (e.g., 50px)
        if (scrollTop > 50) {
            landingPage.classList.add('hidden');
        } else {
            landingPage.classList.remove('hidden');
        }
    };
    
    window.addEventListener('scroll', hideOnScroll);
    hideOnScroll(); // Initial check
}

window.addEventListener('load', () => {
    setTimeout(preloadImages, 1000);
    initLandingPage();
    initSnowfall();
    initSnowfallToggle();
    initMusicControls();
    initMonthIndicatorsToggle();
    initStringLights();
    initBackToTop();
    initScrollTimeline();
    
    // Try to start music playback on first user interaction (click, touch, or keypress)
    // This helps with browsers that block autoplay but allow playback after any user interaction
    const startMusicOnInteraction = () => {
        if (window.musicNeedsUserInteraction && youtubePlayer) {
            try {
                const playerState = youtubePlayer.getPlayerState();
                if (playerState !== 1) { // Not playing
                    youtubePlayer.playVideo();
                    window.musicNeedsUserInteraction = false;
                    const musicToggleBtn = document.getElementById('musicToggle');
                    if (musicToggleBtn) {
                        musicToggleBtn.classList.remove('needs-interaction');
                        musicToggleBtn.title = 'Music controls';
                    }
                    console.log('Music playback started via page interaction');
                }
            } catch (error) {
                console.error('Error starting playback on interaction:', error);
            }
        }
    };
    
    // Listen for first user interaction (one-time only)
    let interactionHandled = false;
    const handleFirstInteraction = () => {
        if (!interactionHandled) {
            interactionHandled = true;
            startMusicOnInteraction();
            // Remove listeners after first interaction
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
        }
    };
    
    // Add listeners for various interaction types
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });
    
    // Check if YouTube API is already loaded (in case it loaded before our callback was set)
    if (typeof YT !== 'undefined' && typeof YT.Player !== 'undefined' && !youtubePlayer) {
        // API might already be loaded, trigger callback manually
        setTimeout(() => {
            if (!youtubePlayer && typeof window.onYouTubeIframeAPIReady === 'function') {
                window.onYouTubeIframeAPIReady();
            }
        }, 500);
    }
    
    // Retry mechanism in case API loads later
    let retryCount = 0;
    const checkYouTubeAPI = setInterval(() => {
        if (typeof YT !== 'undefined' && typeof YT.Player !== 'undefined' && !youtubePlayer) {
            if (typeof window.onYouTubeIframeAPIReady === 'function') {
                window.onYouTubeIframeAPIReady();
            }
            retryCount++;
            if (youtubePlayer || retryCount > 10) {
                clearInterval(checkYouTubeAPI);
            }
        } else if (retryCount > 20) {
            clearInterval(checkYouTubeAPI);
        } else {
            retryCount++;
        }
    }, 500);
});

// Initialize Tree Layout
function initStringLights() {
    const monthSectionsContainer = document.getElementById('monthSections');
    const imageOrnamentsContainer = document.getElementById('imageOrnamentsContainer');
    const treeWrapper = document.querySelector('.tree-wrapper');
    
    if (!monthSectionsContainer || !imageOrnamentsContainer || !treeWrapper) return;

    const months = Object.keys(monthData);
    
    // Month positions on tree - heavily compressed, December at ~32% (where August was)
    // treeWidthStart: width at the top of this month's section (in percentage)
    // treeWidthEnd: width at the bottom of this month's section (in percentage)
    const monthPositions = [
        { top: 2, left: 50, sectionHeight: 2.4, treeWidthStart: 8, treeWidthEnd: 12 },     // January - center
        { top: 4.4, left: 45, sectionHeight: 2.4, treeWidthStart: 20, treeWidthEnd: 25 },   // February - left
        { top: 6.8, left: 55, sectionHeight: 2.4, treeWidthStart: 25, treeWidthEnd: 30 },   // March - right
        { top: 9.2, left: 40, sectionHeight: 2.4, treeWidthStart: 38, treeWidthEnd: 42 },   // April - left
        { top: 11.6, left: 60, sectionHeight: 2.4, treeWidthStart: 48, treeWidthEnd: 52 },  // May - right
        { top: 14, left: 30, sectionHeight: 2.4, treeWidthStart: 60, treeWidthEnd: 58 },    // June - left
        { top: 16.4, left: 65, sectionHeight: 2.4, treeWidthStart: 62, treeWidthEnd: 60 },  // July - right
        { top: 18.8, left: 30, sectionHeight: 2.4, treeWidthStart: 62, treeWidthEnd: 65 },  // August - left
        { top: 21.2, left: 70, sectionHeight: 2.4, treeWidthStart: 68, treeWidthEnd: 68 },  // September - right
        { top: 23.6, left: 24, sectionHeight: 2.4, treeWidthStart: 78, treeWidthEnd: 80 },  // October - left
        { top: 26, left: 80, sectionHeight: 2.4, treeWidthStart: 80, treeWidthEnd: 82 },    // November - right
        { top: 28.4, left: 20, sectionHeight: 4, treeWidthStart: 88, treeWidthEnd: 88 }     // December - left
    ];
    
    // Function to check if a point is within tree bounds (green area)
    // Tree is centered at 50% x, slim at top (~20% width), wide at bottom (~60% width)
    function isPointOnTree(xPercent, yPercent) {
        const centerX = 50;
        // Tree width increases from top to bottom: 20% at top (yPercent=0) to 60% at bottom (yPercent=100)
        const treeWidthAtHeight = 20 + (yPercent / 100) * 40;
        const minX = centerX - treeWidthAtHeight / 2;
        const maxX = centerX + treeWidthAtHeight / 2;
        
        // Tree goes from ~2% to ~97% vertically (leaving space for trunk)
        return xPercent >= minX && xPercent <= maxX && yPercent >= 2 && yPercent <= 97;
    }
    
    // SVG decorative elements removed - using tree image instead
    
    months.forEach((monthKey, monthIndex) => {
        const month = monthData[monthKey];
        if (!month) return;
        
        const position = monthPositions[monthIndex];
        
        // Create month badge section
        const monthSection = document.createElement('div');
        monthSection.className = 'month-section';
        monthSection.setAttribute('data-month', monthKey);
        
        const monthBadge = document.createElement('div');
        monthBadge.className = 'month-badge';
        monthBadge.textContent = month.name.substring(0, 3); // Jan, Feb, etc.
        monthBadge.addEventListener('click', () => {
            playPaperSound();
            openScrapbook(monthKey);
        });
        
        monthSection.appendChild(monthBadge);
        monthSection.style.left = position.left + '%';
        monthSection.style.top = position.top + '%';
        monthSectionsContainer.appendChild(monthSection);
        
        // Create visual boundary indicator for this month section (hidden by default)
        const boundaryIndicator = document.createElement('div');
        boundaryIndicator.className = 'month-boundary-indicator';
        boundaryIndicator.setAttribute('data-month', monthKey);
        boundaryIndicator.style.display = 'none'; // Hidden by default
        
        // Calculate section boundaries (matching the ornament placement logic)
        const sectionStart = position.top + 0.5;
        // December gets quarter the normal section height (half of the previous half)
        const defaultSectionEnd = monthIndex < 11 ? monthPositions[monthIndex + 1].top - 0.5 : 35;
        const sectionEnd = monthIndex === 11 ? sectionStart + (defaultSectionEnd - sectionStart) / 4 : defaultSectionEnd;
        const sectionHeight = sectionEnd - sectionStart;
        
        // Position and size the boundary indicator
        boundaryIndicator.style.top = sectionStart + '%';
        boundaryIndicator.style.height = sectionHeight + '%';
        boundaryIndicator.style.left = '0%';
        boundaryIndicator.style.width = '100%';
        
        // Create horizontal boundary lines at top, middle, and bottom to show tree width
        // Use per-month horizontal boundary settings
        const monthTreeWidthStart = position.treeWidthStart || 15;
        const monthTreeWidthEnd = position.treeWidthEnd || 60;
        
        const topLine = document.createElement('div');
        topLine.className = 'boundary-line boundary-line-top';
        const topTreeWidth = monthTreeWidthStart;
        topLine.style.left = (50 - topTreeWidth / 2) + '%';
        topLine.style.width = topTreeWidth + '%';
        topLine.style.top = '0%';
        boundaryIndicator.appendChild(topLine);
        
        const middleLine = document.createElement('div');
        middleLine.className = 'boundary-line boundary-line-middle';
        const middleTreeWidth = monthTreeWidthStart + ((monthTreeWidthEnd - monthTreeWidthStart) * 0.5);
        middleLine.style.left = (50 - middleTreeWidth / 2) + '%';
        middleLine.style.width = middleTreeWidth + '%';
        middleLine.style.top = '50%';
        middleLine.style.transform = 'translateY(-50%)';
        boundaryIndicator.appendChild(middleLine);
        
        const bottomLine = document.createElement('div');
        bottomLine.className = 'boundary-line boundary-line-bottom';
        const bottomTreeWidth = monthTreeWidthEnd;
        bottomLine.style.left = (50 - bottomTreeWidth / 2) + '%';
        bottomLine.style.width = bottomTreeWidth + '%';
        bottomLine.style.bottom = '0%';
        boundaryIndicator.appendChild(bottomLine);
        
        // Add label showing month name
        const label = document.createElement('div');
        label.className = 'boundary-label';
        label.textContent = month.name;
        boundaryIndicator.appendChild(label);
        
        // Append to tree-wrapper (parent of imageOrnamentsContainer)
        treeWrapper.appendChild(boundaryIndicator);
        
        // Create image ornaments positioned on the tree - show first 4 images per month
        // Images go BELOW the month header, above the next month header
        if (month.images && month.images.length > 0) {
            // Calculate the section for this month (between this header and next)
            const sectionStart = position.top + 0.5; // Start slightly below month badge
            // December gets quarter the normal section height (half of the previous half)
            const defaultSectionEnd = monthIndex < 11 ? monthPositions[monthIndex + 1].top - 0.5 : 35;
            const sectionEnd = monthIndex === 11 ? sectionStart + (defaultSectionEnd - sectionStart) / 4 : defaultSectionEnd;
            const sectionHeight = sectionEnd - sectionStart;
            
            // Different colors for ornaments (including December now)
            const ornamentColors = ['#ffd700', '#4ecdc4', '#ffe66d', '#a29bfe', '#55efc4', '#ff8787', '#ffd43b', '#74c0fc', '#ff922b'];
            
            // Show only first 4 images per month
            const imagesToShow = Math.min(4, month.images.length);
            
            // Special case for January: hardcode positions to fit without overlapping
            if (monthIndex === 0) {
                // Hardcoded positions for January's 4 ornaments to fit in narrow 8-12% width
                // Position them in a 2x2 grid with some spacing
                const janPositions = [
                    { x: 49, y: sectionStart + sectionHeight * 0.4 },  // Top left
                    { x: 52, y: sectionStart + sectionHeight * 0.5 },  // Top right
                    { x: 47, y: sectionStart + sectionHeight * 0.9 },  // Bottom left
                    { x: 55, y: sectionStart + sectionHeight * 1 }   // Bottom right
                ];
                
                for (let i = 0; i < Math.min(imagesToShow, janPositions.length); i++) {
                    const imageData = month.images[i];
                    const pos = janPositions[i];
                    
                    const ornament = document.createElement('div');
                    ornament.className = 'image-ornament';
                    
                    ornament.style.left = pos.x + '%';
                    ornament.style.top = pos.y + '%';
                    ornament.style.transform = 'translate(-50%, -50%) rotate(' + ((Math.random() - 0.5) * 20) + 'deg)';
                    
                    // Random color
                    const colorIndex = Math.floor(Math.random() * ornamentColors.length);
                    ornament.style.color = ornamentColors[colorIndex];
                    
                    ornament.setAttribute('data-image-index', i);
                    ornament.setAttribute('data-month-key', monthKey);
                    
                    ornament.addEventListener('click', () => {
                        playRandomGlassSound();
                        openImageModal(imageData);
                    });
                    
                    imageOrnamentsContainer.appendChild(ornament);
                }
            } else {
                // Track placed ornaments for collision detection (for all other months)
            const placedOrnaments = [];
            // Ornament size is 50px, so minimum distance should be 50px (one ornament width)
            // Get actual rendered dimensions of tree wrapper to calculate percentage equivalents
            const treeWrapperRect = treeWrapper.getBoundingClientRect();
            const ornamentSizePx = 50;
            
            // Convert 50px to percentage based on actual rendered dimensions
            // If dimensions aren't available yet, calculate from viewport and initial tree height (800vh)
            let wrapperWidth = treeWrapperRect.width;
            let wrapperHeight = treeWrapperRect.height;
            
            // Fallback if dimensions aren't available (shouldn't happen, but just in case)
            if (wrapperWidth === 0) wrapperWidth = window.innerWidth;
            if (wrapperHeight === 0) wrapperHeight = (800 / 100) * window.innerHeight;
            
            // Horizontal: based on tree wrapper width
            const minDistancePercentX = (ornamentSizePx / wrapperWidth) * 100;
            // Vertical: based on tree wrapper height (dynamically calculated to match image)
            const minDistancePercentY = (ornamentSizePx / wrapperHeight) * 100;
            
            // Generate random positions for each ornament - truly random each time with collision detection
            for (let i = 0; i < imagesToShow; i++) {
                const imageData = month.images[i];
                
                const ornament = document.createElement('div');
                ornament.className = 'image-ornament'; // All months use same class now
                
                // Try to find a non-overlapping position (max 50 attempts)
                let attempts = 0;
                let xPos, yInSection, treeWidthAtHeight;
                let foundPosition = false;
                
                while (!foundPosition && attempts < 50) {
                    attempts++;
                    
                    // Truly random Y position within section (15% to 85% to avoid edges)
                    const yFraction = 0.15 + Math.random() * 0.7;
                    yInSection = sectionStart + (yFraction * sectionHeight);
                    
                    // Random X position - wider spread for wider tree sections
                    // Calculate tree width based on position within this month's section using per-month boundaries
                    const yInSectionFraction = (yInSection - sectionStart) / sectionHeight; // 0 at top of section, 1 at bottom
                    const monthTreeWidthStart = position.treeWidthStart || 15; // Default if not specified
                    const monthTreeWidthEnd = position.treeWidthEnd || 60; // Default if not specified
                    // Interpolate between start and end width for this month
                    treeWidthAtHeight = monthTreeWidthStart + (yInSectionFraction * (monthTreeWidthEnd - monthTreeWidthStart));
                    const maxXSpread = (treeWidthAtHeight / 2) - 5; // Leave 5% margin on each side
                    
                    // Random X offset from center
                    const xOffsetPercent = (Math.random() - 0.5) * 2 * maxXSpread;
                    xPos = position.left + xOffsetPercent;
                    
                    // Ensure x position is within tree bounds
                    const minX = 50 - treeWidthAtHeight / 2 + 5;
                    const maxX = 50 + treeWidthAtHeight / 2 - 5;
                    xPos = Math.max(minX, Math.min(maxX, xPos));
                    
                    // Check collision with already placed ornaments
                    // Use actual ornament width (50px) converted to percentage
                    let collision = false;
                    for (const placed of placedOrnaments) {
                        const dx = Math.abs(xPos - placed.x);
                        const dy = Math.abs(yInSection - placed.y);
                        // Check if within one ornament width in BOTH directions (rectangular collision box)
                        // This ensures ornaments don't overlap - they must be far enough apart in BOTH X and Y
                        if (dx < minDistancePercentX && dy < minDistancePercentY) {
                            collision = true;
                            break;
                        }
                    }
                    
                    if (!collision) {
                        foundPosition = true;
                        placedOrnaments.push({ x: xPos, y: yInSection });
                    }
                }
                
                // If we couldn't find a position after 50 attempts, skip this ornament
                // (don't place it if it would overlap)
                if (!foundPosition) {
                    console.warn(`Could not find non-overlapping position for ornament ${i + 1} in ${month.name} after 50 attempts`);
                    continue; // Skip this ornament
                }
                
                // Random rotation (-20 to +20 degrees)
                const rotation = (Math.random() - 0.5) * 40;
                
                ornament.style.left = xPos + '%';
                ornament.style.top = yInSection + '%';
                ornament.style.transform = 'translate(-50%, -50%) rotate(' + rotation + 'deg)';
                
                // Random color for all months (including December)
                const colorIndex = Math.floor(Math.random() * ornamentColors.length);
                ornament.style.color = ornamentColors[colorIndex];
                
                // Store image data for click handler
                ornament.setAttribute('data-image-index', i);
                ornament.setAttribute('data-month-key', monthKey);
                
                // Make clickable to show image detail
                ornament.addEventListener('click', () => {
                    playRandomGlassSound();
                    openImageModal(imageData);
                });
                
                imageOrnamentsContainer.appendChild(ornament);
                }
            }
        }
    });
    
    // Store original positions for scaling
    window.originalMonthPositions = monthPositions;
    
    // Set container height to match actual image height, then scale positions
    setTreeContainerHeight();
}

// Scale month positions proportionally
function scaleMonthPositions(scaleFactor, offsetPercent) {
    const monthSections = document.querySelectorAll('.month-section');
    const monthBoundaries = document.querySelectorAll('.month-boundary-indicator');
    
    // Original positions (for reference)
    const originalPositions = [
        2, 4.4, 6.8, 9.2, 11.6, 14, 16.4, 18.8, 21.2, 23.6, 26, 28.4
    ];
    
    // Scale month badge positions with offset
    monthSections.forEach((section, index) => {
        if (index < originalPositions.length) {
            const originalTop = originalPositions[index];
            // Scale relative to the starting point (2%), then add offset
            const scaledTop = 2 + (originalTop - 2) * scaleFactor + offsetPercent;
            section.style.top = scaledTop + '%';
        }
    });
    
    // Scale boundary indicators and recalculate their heights
    monthBoundaries.forEach((boundary, index) => {
        if (index < originalPositions.length) {
            const originalTop = originalPositions[index];
            const scaledTop = 2 + (originalTop - 2) * scaleFactor + offsetPercent;
            
            // Calculate scaled section height
            const originalSectionEnd = index < 11 ? originalPositions[index + 1] : 35;
            const originalSectionStart = originalTop + 0.5;
            const originalSectionHeight = (index === 11) 
                ? (originalSectionEnd - originalSectionStart) / 4 
                : (originalSectionEnd - 0.5) - originalSectionStart;
            
            const scaledSectionStart = scaledTop + 0.5;
            const scaledSectionHeight = originalSectionHeight * scaleFactor;
            
            boundary.style.top = scaledSectionStart + '%';
            boundary.style.height = scaledSectionHeight + '%';
        }
    });
    
    // Scale ornament positions proportionally (same scale factor and offset as month badges)
    const ornaments = document.querySelectorAll('.image-ornament');
    ornaments.forEach((ornament) => {
        const currentTop = parseFloat(ornament.style.top);
        if (!isNaN(currentTop)) {
            // Scale relative to the starting point (2%), then add offset
            const scaledTop = 2 + (currentTop - 2) * scaleFactor + offsetPercent;
            ornament.style.top = scaledTop + '%';
        }
    });
}

// Set tree container height to match the actual rendered image height
function setTreeContainerHeight() {
    const treeImage = document.querySelector('.tree-image');
    const treeWrapper = document.querySelector('.tree-wrapper');
    const treeContainer = document.querySelector('.tree-container');
    const snowContainer = document.getElementById('snowContainer');
    
    if (!treeImage || !treeWrapper || !treeContainer) return;
    
    // Function to measure and set height based on actual rendered image
    const measureAndSetHeight = () => {
        // Get the natural dimensions of the image
        const naturalWidth = treeImage.naturalWidth;
        const naturalHeight = treeImage.naturalHeight;
        
        if (naturalWidth === 0 || naturalHeight === 0) {
            // Image not loaded yet, try again
            setTimeout(measureAndSetHeight, 100);
            return;
        }
        
        // Get the viewport width (container width)
        const viewportWidth = window.innerWidth;
        
        // Calculate the rendered height based on object-fit: contain
        // The image will scale to fit the width while maintaining aspect ratio
        const aspectRatio = naturalWidth / naturalHeight;
        let renderedHeight = viewportWidth / aspectRatio;
        
        // Reduce scrollable space by 100px
        renderedHeight = renderedHeight - 100;
        
        // Convert to viewport height units (vh)
        const renderedHeightVh = (renderedHeight / window.innerHeight) * 100;
        
        // Calculate scale factor to extend months proportionally
        // Original design: January at 2%, December ends at ~32.4% (28.4% + 4% section)
        // Target: Extend December to ~90% of image height, keeping January at ~2%
        const originalRange = 32.4 - 2; // 30.4% range
        const targetRange = 90 - 2; // 88% range (December ends at 90%, January starts at 2%)
        const scaleFactor = targetRange / originalRange; // Scale factor to extend positions
        
        // Calculate January offset in percentage (150px offset)
        // Convert 150px to percentage based on the wrapper height
        const januaryOffsetPx = 150;
        const wrapperHeightPx = renderedHeight;
        const januaryOffsetPercent = (januaryOffsetPx / wrapperHeightPx) * 100;
        
        // Set the heights to match the actual image height (reduced by 100px)
        treeWrapper.style.height = renderedHeightVh + 'vh';
        treeContainer.style.minHeight = renderedHeightVh + 'vh';
        
        // Scale month positions proportionally with January offset
        scaleMonthPositions(scaleFactor, januaryOffsetPercent);
        
        // Store scale factor, offset, and image height for scroll timeline
        window.monthScaleFactor = scaleFactor;
        window.januaryOffsetPercent = januaryOffsetPercent;
        window.treeImageHeightVh = renderedHeightVh; // Store image height in vh units
        window.treeImageHeightPx = renderedHeight; // Store actual image height in pixels
        
        // Update snow container height
        if (snowContainer) {
            snowContainer.style.height = `calc(${renderedHeightVh}vh + 300px)`;
        }
        
        // Update snowfall animation end position by injecting updated keyframe
        // Remove any previously injected snowfall style
        const existingStyle = document.getElementById('dynamic-snowfall-style');
        if (existingStyle) {
            existingStyle.remove();
        }
        
        // Create new style with updated animation
        const style = document.createElement('style');
        style.id = 'dynamic-snowfall-style';
        style.textContent = `
            @keyframes snowfall {
                0% {
                    transform: translateY(0) translateX(0) rotate(0deg);
                    opacity: 0;
                }
                5% {
                    opacity: 0.8;
                }
                85% {
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(calc(${renderedHeightVh}vh + 400px)) translateX(var(--drift)) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    };
    
    // If image is already loaded and rendered, measure immediately
    if (treeImage.complete && treeImage.naturalWidth > 0) {
        // Give browser a moment to render
        setTimeout(measureAndSetHeight, 50);
    } else {
        // Wait for image to load
        treeImage.addEventListener('load', () => {
            setTimeout(measureAndSetHeight, 50);
        }, { once: true });
        // Fallback timeout in case load event doesn't fire
        setTimeout(measureAndSetHeight, 1000);
    }
    
    // Recalculate on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(measureAndSetHeight, 100);
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll Timeline
function initScrollTimeline() {
    const timelineBar = document.getElementById('timelineBar');
    const timelineContainer = document.querySelector('.scroll-timeline');
    const timelineMonths = document.querySelectorAll('.timeline-month');
    
    if (!timelineBar || !timelineContainer) return;

    // Month positions on the tree (as percentages from top)
    // Original positions - will be scaled by scaleMonthPositions
    const originalMonthPositions = [2, 4.4, 6.8, 9.2, 11.6, 14, 16.4, 18.8, 21.2, 23.6, 26, 28.4];
    
    // Get scaled positions (use scale factor and offset if available, otherwise use original)
    const getScaledPositions = () => {
        const scaleFactor = window.monthScaleFactor || 1;
        const januaryOffset = window.januaryOffsetPercent || 0;
        return originalMonthPositions.map(pos => 2 + (pos - 2) * scaleFactor + januaryOffset);
    };

    const updateTimeline = () => {
        const monthPositions = getScaledPositions();
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Get scroll timeline element
        const scrollTimeline = document.querySelector('.scroll-timeline');
        
        // Calculate scroll progress (0-100%) based on tree container
        const treeContainer = document.querySelector('.tree-container');
        const treeWrapper = document.querySelector('.tree-wrapper');
        if (!treeContainer || !scrollTimeline || !treeWrapper) return;
        
        const treeImageHeightPx = window.treeImageHeightPx; // Actual image height in pixels
        
        if (!treeImageHeightPx) {
            // Image height not set yet, hide scrollbar
            scrollTimeline.classList.remove('visible');
            return;
        }
        
        // Calculate viewport center (what's in the middle of the screen)
        const viewportCenter = scrollTop + (windowHeight / 2);
        
        // Calculate where the tree wrapper actually starts (this is where the tree image begins)
        const treeWrapperTop = treeWrapper.offsetTop;
        const treeWrapperHeight = treeWrapper.offsetHeight;
        
        // Calculate where Jan is positioned (in pixels from document top)
        const januaryPosition = monthPositions[0];
        const januaryPositionPx = treeWrapperTop + (treeWrapperHeight * januaryPosition / 100);
        
        // Calculate where December ends (in pixels from document top)
        const decemberPosition = monthPositions[11];
        const decemberPositionPx = treeWrapperTop + (treeWrapperHeight * decemberPosition / 100);
        
        // Scrollbar should ONLY appear when viewport center is between Jan and a bit past December
        if (viewportCenter < januaryPositionPx || viewportCenter > decemberPositionPx + (windowHeight * 0.5)) {
            // Before Jan is centered OR scrolled past December - hide scrollbar
            scrollTimeline.classList.remove('visible');
            timelineBar.style.setProperty('--scroll-progress', '0%');
            return;
        }
        
        // Viewport center is in the active range - show scrollbar
        scrollTimeline.classList.add('visible');
        
        // Now determine which month is at viewport center and calculate progress
        let activeIndex = -1;
        let scrollPercent = 0;
        
        // Within tree - calculate which month is at viewport center
        const relativePosition = viewportCenter - treeWrapperTop;
        const positionPercent = (relativePosition / treeWrapperHeight) * 100;
        
        // Find the closest month position to the viewport center
        let minDistance = Infinity;
        monthPositions.forEach((pos, index) => {
            const distance = Math.abs(positionPercent - pos);
            if (distance < minDistance) {
                minDistance = distance;
                activeIndex = index;
            }
        });
        
        // Calculate progress bar position based on active month
        const decemberPos = monthPositions[11];
        const januaryPos = monthPositions[0];
        const activeMonthPosition = monthPositions[activeIndex];
        
        // Calculate progress: where is the active month relative to Jan (0%) and Dec (100%)
        const totalRange = decemberPos - januaryPos;
        const progressFromJan = activeMonthPosition - januaryPos;
        scrollPercent = totalRange > 0 ? (progressFromJan / totalRange) * 100 : 0;
        scrollPercent = Math.min(100, Math.max(0, scrollPercent));
        
        // Update active state and progress bar
        timelineMonths.forEach((month, index) => {
            month.classList.toggle('active', index === activeIndex);
        });
        timelineBar.style.setProperty('--scroll-progress', scrollPercent + '%');
    };

    window.addEventListener('scroll', updateTimeline);
    updateTimeline(); // Initial call

    // Make timeline months clickable to jump to month
    timelineMonths.forEach((month, index) => {
        month.addEventListener('click', () => {
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) {
                const containerTop = treeContainer.offsetTop;
                const containerHeight = treeContainer.offsetHeight;
                const scaledPositions = getScaledPositions();
                const targetPercent = scaledPositions[index];
                const targetScroll = containerTop + (containerHeight * targetPercent / 100) - (window.innerHeight / 2);
                
                window.scrollTo({
                    top: Math.max(0, targetScroll),
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Snowfall Animation
function initSnowfall() {
    const snowContainer = document.getElementById('snowContainer');
    if (!snowContainer) return;

    const snowflakeSymbols = ['❄', '❅', '❆', '✻', '✼', '❉'];
    
    // Create initial batch of snowflakes
    const initialCount = 50;
    for (let i = 0; i < initialCount; i++) {
        createSnowflake(snowContainer, snowflakeSymbols);
    }
    
    // Continuously create new snowflakes at regular intervals to maintain steady snowfall
    // Create a new snowflake every 300-600ms (varies to keep it natural)
    const spawnInterval = setInterval(() => {
        // Check if container still exists (page hasn't unloaded)
        if (snowContainer.parentNode) {
            createSnowflake(snowContainer, snowflakeSymbols);
        } else {
            clearInterval(spawnInterval);
        }
    }, 400);
}

// Snowfall Toggle
function initSnowfallToggle() {
    const toggleBtn = document.getElementById('snowfallToggle');
    const snowContainer = document.getElementById('snowContainer');
    
    if (!toggleBtn || !snowContainer) return;
    
    let isSnowEnabled = true;
    
    toggleBtn.addEventListener('click', () => {
        isSnowEnabled = !isSnowEnabled;
        
        if (isSnowEnabled) {
            // Show snowfall
            snowContainer.style.display = 'block';
            toggleBtn.classList.remove('disabled');
        } else {
            // Hide snowfall
            snowContainer.style.display = 'none';
            toggleBtn.classList.add('disabled');
        }
    });
}

// Month Indicators Toggle
function initMonthIndicatorsToggle() {
    const toggleBtn = document.getElementById('monthIndicatorsToggle');
    const monthSections = document.getElementById('monthSections');
    
    if (!toggleBtn || !monthSections) return;
    
    let areIndicatorsVisible = true;
    
    toggleBtn.addEventListener('click', () => {
        areIndicatorsVisible = !areIndicatorsVisible;
        
        if (areIndicatorsVisible) {
            // Show month indicators
            monthSections.style.display = 'block';
            toggleBtn.classList.remove('disabled');
        } else {
            // Hide month indicators
            monthSections.style.display = 'none';
            toggleBtn.classList.add('disabled');
        }
    });
}

// Music Controls
function initMusicControls() {
    const musicToggleBtn = document.getElementById('musicToggle');
    const musicControlsPanel = document.getElementById('musicControlsPanel');
    const muteBtn = document.getElementById('musicMuteBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeValue = document.getElementById('volumeValue');
    const muteIcon = document.getElementById('muteIcon');
    
    if (!musicToggleBtn || !musicControlsPanel) return;
    
    let isMuted = false;
    let savedVolume = 20; // Remember volume when muted
    
    // Function to start playback if needed (for browsers that block autoplay)
    const startPlaybackIfNeeded = () => {
        if (window.musicNeedsUserInteraction && youtubePlayer) {
            try {
                const playerState = youtubePlayer.getPlayerState();
                // YT.PlayerState.PLAYING = 1, YT.PlayerState.PAUSED = 2, YT.PlayerState.ENDED = 0
                if (playerState !== 1) {
                    youtubePlayer.playVideo();
                    window.musicNeedsUserInteraction = false;
                    musicToggleBtn.classList.remove('needs-interaction');
                    musicToggleBtn.title = 'Music controls';
                    console.log('Music playback started via user interaction');
                }
            } catch (error) {
                console.error('Error starting playback:', error);
            }
        }
    };
    
    // Toggle controls panel
    musicToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Try to start playback if autoplay was blocked
        startPlaybackIfNeeded();
        
        musicControlsPanel.classList.toggle('active');
        musicToggleBtn.classList.toggle('active');
    });
    
    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!musicControlsPanel.contains(e.target) && !musicToggleBtn.contains(e.target)) {
            musicControlsPanel.classList.remove('active');
            musicToggleBtn.classList.remove('active');
        }
    });
    
    // Mute/Unmute button
    if (muteBtn && muteIcon) {
        muteBtn.addEventListener('click', () => {
            // Try to start playback if autoplay was blocked
            startPlaybackIfNeeded();
            
            // Wait for YouTube player to be ready
            const checkPlayer = setInterval(() => {
                if (youtubePlayer && typeof youtubePlayer.getVolume === 'function') {
                    clearInterval(checkPlayer);
                    
                    isMuted = !isMuted;
                    
                    try {
                        if (isMuted) {
                            savedVolume = youtubePlayer.getVolume();
                            youtubePlayer.mute();
                            muteIcon.textContent = '🔇';
                        } else {
                            youtubePlayer.unMute();
                            youtubePlayer.setVolume(savedVolume);
                            if (volumeSlider) volumeSlider.value = savedVolume;
                            if (volumeValue) volumeValue.textContent = savedVolume + '%';
                            muteIcon.textContent = '🔊';
                        }
                    } catch (error) {
                        console.error('Error toggling mute:', error);
                    }
                }
            }, 100);
            
            // Clear interval after 5 seconds if player never loads
            setTimeout(() => clearInterval(checkPlayer), 5000);
        });
    }
    
    // Volume slider
    if (volumeSlider && volumeValue) {
        volumeSlider.addEventListener('input', (e) => {
            // Try to start playback if autoplay was blocked
            startPlaybackIfNeeded();
            
            const volume = Number.parseInt(e.target.value, 10);
            volumeValue.textContent = volume + '%';
            
            // Wait for YouTube player to be ready
            const checkPlayer = setInterval(() => {
                if (youtubePlayer && youtubePlayer.setVolume !== undefined) {
                    clearInterval(checkPlayer);
                    youtubePlayer.setVolume(volume);
                    if (isMuted && volume > 0) {
                        // Auto-unmute when volume is increased
                        isMuted = false;
                        youtubePlayer.unMute();
                        if (muteIcon) muteIcon.textContent = '🔊';
                    }
                    savedVolume = volume;
                }
            }, 100);
            
            // Clear interval after 5 seconds if player never loads
            setTimeout(() => clearInterval(checkPlayer), 5000);
        });
    }
    
    // Update mute icon on player ready
    const updateMuteIconOnReady = setInterval(() => {
        if (youtubePlayer && youtubePlayer.isMuted !== undefined) {
            clearInterval(updateMuteIconOnReady);
            const muted = youtubePlayer.isMuted();
            if (muteIcon) {
                muteIcon.textContent = muted ? '🔇' : '🔊';
                isMuted = muted;
            }
        }
    }, 100);
    
    setTimeout(() => clearInterval(updateMuteIconOnReady), 5000);
    
    // Update mute icon based on initial state
    if (volumeSlider) {
        const initialVolume = parseInt(volumeSlider.value);
        if (initialVolume === 0 && muteIcon) {
            muteIcon.textContent = '🔇';
            isMuted = true;
        }
    }
}

function createSnowflake(container, symbols) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    // Random snowflake symbol
    snowflake.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    
    // Random starting position (horizontal)
    const startX = Math.random() * 100;
    snowflake.style.left = startX + '%';
    
    // Random size
    const size = Math.random() * 1.5 + 0.5;
    snowflake.style.fontSize = size + 'em';
    
    // Random animation duration (30-60 seconds for full tree height)
    // Longer duration = slower fall
    const duration = Math.random() * 30 + 30;
    snowflake.style.animationDuration = duration + 's';
    
    // Random drift (horizontal movement)
    const drift = (Math.random() - 0.5) * 200;
    snowflake.style.setProperty('--drift', drift + 'px');
    
    // No animation delay - snowflakes start falling immediately when created
    // The continuous spawning handles the staggered effect naturally
    snowflake.style.animationDelay = '0s';
    
    container.appendChild(snowflake);
    
    // Remove and recreate snowflake when animation ends
    const handleAnimationEnd = () => {
        if (snowflake.parentNode) {
            snowflake.remove();
            createSnowflake(container, symbols);
        }
    };
    
    snowflake.addEventListener('animationend', handleAnimationEnd);
    
    // Fallback setTimeout in case animationend doesn't fire
    setTimeout(() => {
        if (snowflake.parentNode) {
            snowflake.removeEventListener('animationend', handleAnimationEnd);
            snowflake.remove();
            createSnowflake(container, symbols);
        }
    }, (duration + 10) * 1000);
}

