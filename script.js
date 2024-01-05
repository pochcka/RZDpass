const barcode = document.getElementById("barcode");
const overlay = document.getElementById("overlay");
let x;
let y;


barcode.addEventListener('touchstart', (event) => {
  overlay.style.display = "block"; // Показываем эффект

});

overlay.addEventListener('touchmove', (event) => {
  overlay.style.left = event.pageX + 'px';
  overlay.style.top = event.pageY + 'px';
});

barcode.addEventListener('touchend', (event) => {
  overlay.style.display = "none"; // Скрываем эффект
});








