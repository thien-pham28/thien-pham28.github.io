function toggleTheme() {
    var body = document.body;
    body.classList.toggle('light-mode');
  }

  // You can add the following code if you want to remember the user's preference using localStorage

  // Check if a theme preference is already stored in localStorage
  var currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
  }

  // Toggle the theme and store the preference in localStorage
  function toggleTheme() {
    var body = document.body;
    body.classList.toggle('light-mode');

    // Store the preference in localStorage
    var themePreference = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', themePreference);
  }