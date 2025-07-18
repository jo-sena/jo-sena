const words = ['Inovação', 'Automação', 'Resultados'];
let i = 0, j = 0, current = '', isDeleting = false;
const el = document.getElementById('typewriter');
function type() {
  if (isDeleting) {
    current = words[i].substring(0, j-1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i+1)%words.length;
    }
  } else {
    current = words[i].substring(0, j+1);
    j++;
    if (j === words[i].length) {
      isDeleting = true;
    }
  }
  el.textContent = current;
  setTimeout(type, isDeleting ? 80 : 150);
}
window.addEventListener('DOMContentLoaded', () => {
  if (el) type();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
});
