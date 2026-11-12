const themeButton = document.querySelector('#theme-toggle');

// This preference lasts for this page visit; no storage or setup is needed.
themeButton.addEventListener('click', () => {
  const lightMode = document.body.classList.toggle('light');
  themeButton.textContent = lightMode ? 'Dark mode' : 'Light mode';
  themeButton.setAttribute('aria-pressed', String(lightMode));
});

document.querySelector('#year').textContent = new Date().getFullYear();
