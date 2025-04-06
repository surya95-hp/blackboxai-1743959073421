// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Search Suggestions
function showSuggestions() {
  const input = document.getElementById('search').value;
  if (input.length > 2) {
    document.getElementById('suggestions').classList.remove('hidden');
  } else {
    document.getElementById('suggestions').classList.add('hidden');
  }
}

// Profile Dropdown
function toggleProfile() {
  const dropdown = document.getElementById('profile-dropdown');
  dropdown.classList.toggle('hidden');
}

// Mobile Menu
function toggleMenu() {
  const sidebar = document.querySelector('aside');
  sidebar.classList.toggle('active');
}