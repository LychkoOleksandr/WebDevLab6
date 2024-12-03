document.getElementById('toastForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const toastContent = document.getElementById('toastContent').value.trim();
  if (!toastContent) return;

  const toasts = JSON.parse(localStorage.getItem('toasts')) || [];

  toasts.push(toastContent);
  localStorage.setItem('toasts', JSON.stringify(toasts));

  displayToasts(toasts);

  document.getElementById('toastContent').value = '';
});

function displayToasts(toasts) {
  const container = document.getElementById('toastsContainer');
  container.innerHTML = '';
  toasts.forEach((toast, index) => {
    const toastElement = document.createElement('div');
    toastElement.className = 'toast';
    toastElement.innerHTML = `
      <span>${toast}</span>
      <button class="deleteToast" data-index="${index}">&times;</button>
    `;
    container.appendChild(toastElement);
  });

  document.querySelectorAll('.deleteToast').forEach(button => {
    button.addEventListener('click', function () {
      const index = parseInt(this.getAttribute('data-index'));
      toasts.splice(index, 1);
      localStorage.setItem('toasts', JSON.stringify(toasts));
      displayToasts(toasts);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const toasts = JSON.parse(localStorage.getItem('toasts')) || [];
  displayToasts(toasts);
});
