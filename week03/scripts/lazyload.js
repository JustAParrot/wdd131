// JavaScript to populate current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last modified: ' + new Date(document.lastModified).toLocaleString();
