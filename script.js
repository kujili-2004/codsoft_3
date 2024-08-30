document.addEventListener('DOMContentLoaded', () => {
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
        display.value = display.value.slice(0, -1);
    });
});