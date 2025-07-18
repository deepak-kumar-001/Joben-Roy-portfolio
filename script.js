const form = document.getElementById('recommendationForm');
const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');
const cards = document.getElementById('recommendationCards');

form.onsubmit = function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (message === '') return;

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <p><span class="quote">“</span> ${message} <span class="quote">”</span>
    ${name ? `<br><br><strong>- ${name}</strong>` : ''}</p>
  `;

  cards.appendChild(card);

  nameInput.value = '';
  messageInput.value = '';
  alert("Thank you for your recommendation!");

};
