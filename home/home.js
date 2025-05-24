const logoWrapper = document.querySelector('.logo-wrapper');
const origin = window.location.origin;
const cameFromIndex = document.referrer === origin + '/' || document.referrer === origin + '/index.html';

if (cameFromIndex) {
  logoWrapper.classList.add('animate-logo');
  sessionStorage.setItem('animationPlayed', 'true');
} else if (sessionStorage.getItem('animationPlayed') === 'true') {
  logoWrapper.classList.add('no-animation');
} else {
  logoWrapper.classList.add('no-animation');
}
