const barcode = document.getElementById("barcode");
const overlay = document.getElementById("overlay");

barcode.addEventListener("touchstart", (event) => {
event.preventDefault(); // Отменяем стандартное поведение при касании

overlay.style.display = "block"; // Показываем эффект
});

barcode.addEventListener("touchend", (event) => {
event.preventDefault(); // Отменяем стандартное поведение при отпускании

overlay.style.display = "none"; // Скрываем эффект
});

var pos = document.documentElement;
pos.addEventListener('touchmove', e =>
    {pos.style.setProperty('--x',e.clientX + 'px')
     pos.style.setProperty('--y',e.clientY + 'px')})