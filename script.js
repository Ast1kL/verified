// Create header
const header = document.createElement('header');
const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Welcome to My Website';
header.appendChild(headerTitle);
document.body.appendChild(header);

// Create main content
const main = document.createElement('main');
const mainParagraph = document.createElement('p');
mainParagraph.textContent = 'This is a simple website dynamically generated with JavaScript.';
main.appendChild(mainParagraph);
document.body.appendChild(main);

// Create footer
const footer = document.createElement('footer');
const footerText = document.createElement('p');
footerText.textContent = '© 2025 My Website';
footer.appendChild(footerText);
document.body.appendChild(footer);
