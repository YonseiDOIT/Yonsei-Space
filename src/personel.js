document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.querySelector('input[type="number"]');
    const incrementButton = document.getElementById('plus');
    const decrementButton = document.getElementById('minus');

    decrementButton.addEventListener('click', () => {
        const currentValue = parseInt(numberInput.value);
        if (currentValue > parseInt(numberInput.min)) {
            numberInput.value = currentValue - 1;
        }
    });

    incrementButton.addEventListener('click', () => {
        const currentValue = parseInt(numberInput.value);
        if (currentValue < parseInt(numberInput.max)) {
            numberInput.value = currentValue + 1;
        }
    });
});