import './particules';
import './reveal';
import './formulaire';
import '../css/main.scss';



// ***************** menu mobile *************************
//
// ajout supp classe open sur les boutons hamburger
let toggle = document.querySelector('.header__nav__btn');

toggle.addEventListener('click', () => {
    // ajoute et supprime la classe open au body (permet de savoir si la menu est ouvert)
    document.body.classList.toggle('open');
});

// ferme le menu au click d'un lien mobile
let links = document.querySelectorAll('.nav__link--mobile');

links.forEach((link) => {
    link.addEventListener('click', () => {
        // ajoute et supprime la classe open au body (permet de savoir si la menu est ouvert)
        document.body.classList.toggle('open');
    });
});
//

// ***************** boutons linkedln *************************
//

let linkedlnButton = document.querySelector('.linkedln-button');
let linkedlnModal = document.querySelector('.modale-linkedln');
let linkedlnButtonFooter = document.querySelector('#linkedln-button-footer');
let linkedlnModalFooter = document.querySelector('#linkedlnFooter');

// -------- boutons a propos -------------
linkedlnButton.addEventListener('click', (e) => {
    e.preventDefault();
    linkedlnModal.classList.add('show-right');
    setTimeout(() => {
        linkedlnModal.classList.remove('show-right');
    }, 1500);
});

// -------- boutons footer -------------
linkedlnButtonFooter.addEventListener('click', (e) => {
    e.preventDefault();
    linkedlnModalFooter.classList.add('show-left');

    setTimeout(() => {
       linkedlnModalFooter.classList.remove('show-left');
    linkedlnModalFooter.classList.add('hide-left');

    }, 2000);
});

// ***************** boutons mentions légales *************************
//

let mentionsBtn = document.querySelector('#mentions-link');
let closeMentionsBtn = document.querySelector('#btn-close-mentions');
let modaleMentions = document.querySelector('#mentions');

// -------- boutons lien mentions-------------
mentionsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modaleMentions.classList.add('show');
});

// -------- boutons fermer modale mentions -------------
closeMentionsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modaleMentions.classList.remove('show');
});

// ***************** modale info realisations *************************

//   -------- freelance ----------
let infoButtonFreelance = document.querySelector('#info-icon-freelance');
let infoModalFreelance = document.querySelector('#info-modal-freelance');

infoButtonFreelance.addEventListener('mouseover', (e) => {
    e.preventDefault();
    infoModalFreelance.classList.add('info-modal-show');
});

infoModalFreelance.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    infoModalFreelance.classList.remove('info-modal-show');
});

//   -------- vitrine ----------
let infoButtonVitrine = document.querySelector('#info-icon-vitrine');
let infoModalVitrine = document.querySelector('#info-modal-vitrine');

infoButtonVitrine.addEventListener('mouseover', (e) => {
    e.preventDefault();
    infoModalVitrine.classList.add('info-modal-show');
});

infoModalVitrine.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    infoModalVitrine.classList.remove('info-modal-show');
});

//   -------- commerce ----------
let infoButtonCommerce = document.querySelector('#info-icon-commerce');
let infoModalCommerce = document.querySelector('#info-modal-commerce');

infoButtonCommerce.addEventListener('mouseover', (e) => {
    e.preventDefault();
    infoModalCommerce.classList.add('info-modal-show');
});

infoModalCommerce.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    infoModalCommerce.classList.remove('info-modal-show');
});

//   -------- application ----------
let infoButtonApplication = document.querySelector('#info-icon-application');
let infoModalApplication = document.querySelector('#info-modal-application');

infoButtonApplication.addEventListener('mouseover', (e) => {
    e.preventDefault();
    infoModalApplication.classList.add('info-modal-show');
});

infoModalApplication.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    infoModalApplication.classList.remove('info-modal-show');
});



// ***************** modale info diplome *************************

//   -------- freelance ----------
let infoButtonDiplome = document.querySelector('#info-icon-diplome');
let infoModalDiplome = document.querySelector('#info-modal-diplome');

infoButtonDiplome.addEventListener('mouseover', (e) => {
    e.preventDefault();
    infoModalDiplome.classList.add('info-modal-show');
});

infoModalDiplome.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    infoModalDiplome.classList.remove('info-modal-show');
});


// ***************** vidéo présentation *************************

const videoCta = document.querySelector('.video-cta');
const presentationVideo = document.querySelector('#my-video');

if (videoCta && presentationVideo) {
    const videoPlayer =
        typeof window !== 'undefined' && window.videojs
            ? typeof window.videojs.getPlayer === 'function'
                ? window.videojs.getPlayer(presentationVideo.id)
                : window.videojs(presentationVideo)
            : null;

    const playerElement =
        videoPlayer && typeof videoPlayer.el === 'function'
            ? videoPlayer.el()
            : presentationVideo;

    const CONTROL_HIDE_DELAY = 3000;

    let controlsEnabled = false;
    let hideControlsTimeout = null;
    let ctaRemoved = false;

    const isVideoPlaying = () =>
        videoPlayer && typeof videoPlayer.paused === 'function'
            ? !videoPlayer.paused()
            : !presentationVideo.paused;

    const setControlsVisibility = (visible) => {
        if (playerElement && playerElement.classList) {
            if (visible) {
                playerElement.classList.add('video-controls-active');
            } else {
                playerElement.classList.remove('video-controls-active');
            }
        }

        if (!videoPlayer) {
            presentationVideo.controls = visible;
        }
    };

    const clearHideControlsTimeout = () => {
        if (hideControlsTimeout) {
            window.clearTimeout(hideControlsTimeout);
            hideControlsTimeout = null;
        }
    };

    const hideControls = () => {
        clearHideControlsTimeout();
        setControlsVisibility(false);
    };

    const showControls = (autoHide = false) => {
        if (!controlsEnabled || ctaRemoved) {
            return;
        }

        clearHideControlsTimeout();
        setControlsVisibility(true);

        if (autoHide) {
            hideControlsTimeout = window.setTimeout(() => {
                if (!controlsEnabled || ctaRemoved) {
                    return;
                }

                if (isVideoPlaying()) {
                    setControlsVisibility(false);
                }
            }, CONTROL_HIDE_DELAY);
        }
    };

    const enableControls = () => {
        if (ctaRemoved) {
            return;
        }

        controlsEnabled = true;
    };

    const disableControls = () => {
        controlsEnabled = false;
        hideControls();
    };

    disableControls();

    if (videoPlayer && typeof videoPlayer.ready === 'function') {
        videoPlayer.ready(() => {
            if (videoPlayer.controlBar && videoPlayer.controlBar.fullscreenToggle) {
                videoPlayer.controlBar.fullscreenToggle.dispose();
            }

            if (videoPlayer.controlBar && videoPlayer.controlBar.playbackRateMenuButton) {
                videoPlayer.controlBar.playbackRateMenuButton.dispose();
            }

            const preventFullscreen = () => {
                if (typeof videoPlayer.isFullscreen === 'function' && videoPlayer.isFullscreen()) {
                    videoPlayer.exitFullscreen();
                }

                if (document.fullscreenElement) {
                    document.exitFullscreen().catch(() => {});
                }
            };

            videoPlayer.on('fullscreenchange', preventFullscreen);

            if (playerElement) {
                playerElement.addEventListener('dblclick', (event) => {
                    event.preventDefault();
                });
            }

            disableControls();
        });
    } else {
        disableControls();
    }

    const getCurrentTime = () =>
        videoPlayer && typeof videoPlayer.currentTime === 'function'
            ? videoPlayer.currentTime()
            : presentationVideo.currentTime;

    const hideCta = () => {
        if (!ctaRemoved) {
            videoCta.classList.add('video-cta--hidden');
        }
    };
    const showCta = () => {
        if (!ctaRemoved) {
            videoCta.classList.remove('video-cta--hidden');
        }
    };

    const handlePlay = () => {
        enableControls();
        hideCta();
        showControls(true);
    };

    const handlePause = () => {
        const currentTime = getCurrentTime();

        if (!currentTime || currentTime < 0.1) {
            disableControls();
            showCta();
            return;
        }

        enableControls();
        showControls(false);
    };

    const removeUiAfterEnd = () => {
        if (ctaRemoved) {
            return;
        }

        ctaRemoved = true;

        disableControls();

        if (videoPlayer && typeof videoPlayer.controls === 'function') {
            videoPlayer.controls(false);
            if (videoPlayer.controlBar && typeof videoPlayer.controlBar.hide === 'function') {
                videoPlayer.controlBar.hide();
            }
        }

        if (videoCta.parentElement) {
            videoCta.parentElement.removeChild(videoCta);
        }
    };

    const playVideo = () => {
        hideCta();

        let playPromise;

        if (videoPlayer && typeof videoPlayer.play === 'function') {
            playPromise = videoPlayer.play();
        } else if (typeof presentationVideo.play === 'function') {
            playPromise = presentationVideo.play();
        }

        if (playPromise && typeof playPromise.then === 'function') {
            playPromise.catch(() => {
                showCta();
            });
        }
    };

    const handleUserInteraction = () => {
        if (!controlsEnabled || ctaRemoved) {
            return;
        }

        showControls(isVideoPlaying());
    };

    if (playerElement) {
        ['mousemove', 'mouseenter', 'touchstart', 'keydown', 'focusin'].forEach((eventName) => {
            playerElement.addEventListener(eventName, handleUserInteraction);
        });
    }

    videoCta.addEventListener('click', () => {
        playVideo();
    });

    if (videoPlayer && typeof videoPlayer.on === 'function') {
        videoPlayer.on('play', handlePlay);
        videoPlayer.on('pause', handlePause);
        videoPlayer.on('ended', removeUiAfterEnd);
    } else {
        presentationVideo.addEventListener('play', handlePlay);
        presentationVideo.addEventListener('pause', handlePause);
        presentationVideo.addEventListener('ended', removeUiAfterEnd);
    }
}

