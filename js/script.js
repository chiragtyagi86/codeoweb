document.addEventListener('DOMContentLoaded', () => {
  const query = new URLSearchParams(window.location.search).get('q');
  if (query) {
    searchGitHub(query);
  }
});



async function searchGitHub(query) {
  const apiUrl = `https://api.github.com/search/repositories?q=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayResults(data.items);
  } catch (error) {
    console.error('Error fetching data from GitHub:', error);
    handle404()
  }
}

let allProjects = [];


function displayResults(projects) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';


  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `
    
   <h2>${project.name}</h2>
   <p>${project.description}</p>
   <a href="${project.html_url}" target="_blank">View on GitHub</a>
   <hr>
   <br>
    `;
    resultsContainer.appendChild(projectDiv);
  });
}
window.onscroll = function() {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 400) {
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("sticky");
  }
}