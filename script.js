const barcode = document.getElementById("barcode");
const overlay = document.getElementById("overlay");
var pos = document.documentElement;

barcode.addEventListener('touchstart', (event) => {
  event.preventDefault(); // Отменяем стандартное поведение при касании

  overlay.style.display = "block"; // Показываем эффект
});

barcode.addEventListener('touchmove', (event) => {
  overlay.style.left = event.pageX+'px';
  overlay.style.top = event.pageY+'px';
});

barcode.addEventListener('touchend', (event) => {
  event.preventDefault(); // Отменяем стандартное поведение при отпускании

  overlay.style.display = "none"; // Скрываем эффект
});




