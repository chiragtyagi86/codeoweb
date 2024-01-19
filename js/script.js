      // make the serch haps



   
   // display my resulats

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
  }
}

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
