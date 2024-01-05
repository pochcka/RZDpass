const barcode = document.getElementById("barcode");
const overlay = document.getElementById("overlay");

barcode.addEventListener('touchmove', (event) => {
  overlay.style.display = "block"; // Показываем эффект
  overlay.style.left = event.offsetX + 'px';
  overlay.style.top = event.offsetY +60+ 'px';
});



barcode.addEventListener('touchend', (event) => {
  overlay.style.display = "none"; // Скрываем эффект
});









