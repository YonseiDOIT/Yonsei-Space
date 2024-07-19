document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab_list');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });
});
