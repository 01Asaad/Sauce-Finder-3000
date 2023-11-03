
const randomColorText = document.getElementById('randomColorText');
const colors = ['red', 'blue', 'green', 'orange', 'purple'];
let index = 0;

setInterval(() => {
    randomColorText.style.color = colors[index];
    index = (index + 1) % colors.length;
}, 1000);
