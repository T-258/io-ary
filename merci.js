// On clique sur l'emoji ou la bande pour faire apparaître la barre "Bienvenue"
const emojiContainer = document.getElementById('emojiContainer');
const dialog = document.getElementById('dialog');
const scrollingBar = document.getElementById('scrolling');

// Lorsqu'on clique sur la bande ou l'emoji, faire apparaître la barre
document.getElementById('emoji').addEventListener('click', () => {
  dialog.style.display = 'block';
});
document.querySelector('.dialog').addEventListener('click', () => {
  if (scrollingBar.style.display === 'none') {
    scrollingBar.style.display = 'block';
    // Peut ajouter une animation supplémentaire ici si tu veux
    scrollingBar.animate([
      { transform: 'translateY(-50px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 }
    ], {
      duration: 700,
      fill: 'forwards'
    });
  }
});