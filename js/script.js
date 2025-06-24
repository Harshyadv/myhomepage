// Clock
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Greeting
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = 'Hello';
  if (hour < 12) greeting = 'Good morning';
  else if (hour < 18) greeting = 'Good afternoon';
  else greeting = 'Good evening';
  document.getElementById('greeting').textContent = greeting + '.';
}
updateGreeting();

// Search Engine Logic
const searchInput = document.getElementById('search-query');
const searchBtn = document.getElementById('search-button');
const engineSelect = document.getElementById('search-engine');
const customInput = document.getElementById('custom-engine-url');

let engineURL = localStorage.getItem('searchEngine') || 'https://duckduckgo.com/?q=';

engineSelect.addEventListener('change', () => {
  if (engineSelect.value === 'custom') {
    customInput.style.display = 'block';
  } else {
    engineURL = engineSelect.value;
    customInput.style.display = 'none';
    localStorage.setItem('searchEngine', engineURL);
  }
});

customInput.addEventListener('input', () => {
  engineURL = customInput.value;
  localStorage.setItem('searchEngine', engineURL);
});

searchBtn.addEventListener('click', () => {
  const query = encodeURIComponent(searchInput.value);
  if (query) window.location.href = engineURL + query;
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchBtn.click();
});
