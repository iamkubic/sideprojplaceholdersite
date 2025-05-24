window.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('p');
  const logo = document.querySelector('img');
  const targetURL = logo.parentElement.getAttribute('href');

  if (sessionStorage.getItem('textShown')) {
    text.style.opacity = '1';
    text.style.animation = 'breathe 6s ease-in-out infinite';
  } else {
    text.style.opacity = '0';
    text.style.animation = 'fadeIn 1s ease forwards, breathe 6s ease-in-out infinite';
    text.style.animationDelay = '1.5s, 2.5s';
    text.addEventListener('animationend', () => {
      sessionStorage.setItem('textShown', 'true');
    }, { once: true });
  }

  logo.addEventListener('click', (e) => {
    e.preventDefault();
    logo.style.animation = 'clickExpandFade 0.6s forwards';
    text.style.opacity = '0';
    setTimeout(() => {
      window.location.href = targetURL;
    }, 600);
  });
});
