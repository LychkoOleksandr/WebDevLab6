document.addEventListener('DOMContentLoaded', function () {
  const toasts = JSON.parse(localStorage.getItem('toasts')) || [];
  const container = document.getElementById('toastsDisplay');

  if (toasts.length === 0) {
    container.innerHTML = '<p>No toasts to view</p>';
    return;
  }

  toasts.forEach(toast => {
    const toastElement = document.createElement('div');
    toastElement.className = 'toast';
    toastElement.textContent = toast;
    container.appendChild(toastElement);
  });
});
