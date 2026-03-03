const DOMAIN = "appsthataustinmade.com";

function createCard(app, index) {
  const card = document.createElement("a");
  card.href = `https://${app.subdomain}.${DOMAIN}`;
  card.className = "card";
  card.style.setProperty("--accent", app.color);
  card.style.animationDelay = `${index * 0.07}s`;

  card.innerHTML = `
    <div class="card-glow"></div>
    <div class="card-content">
      <span class="card-icon">${app.icon}</span>
      <h2 class="card-title">${app.name}</h2>
      <p class="card-desc">${app.description}</p>
      <span class="card-link">Visit app &rarr;</span>
    </div>
  `;

  return card;
}

function render() {
  const grid = document.getElementById("card-grid");
  APPS.forEach((app, i) => grid.appendChild(createCard(app, i)));
}

document.addEventListener("DOMContentLoaded", render);
