console.log('Hello World');

const darkModeToggle = document.getElementById('darkModeToggle');

function toggleDarkMode() {
  if (darkModeToggle.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

darkModeToggle.addEventListener('change', toggleDarkMode);
