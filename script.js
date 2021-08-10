const displayPrevValue = document.getElementById('prev-value');
const displayActualValue = document.getElementById('actual-value');
const buttonNumbers = document.querySelectorAll('.number');
const buttonOperators = document.querySelectorAll('.operator');

const display = new Display(displayPrevValue, displayActualValue);

buttonNumbers.forEach(btn => {
    btn.addEventListener('click', () => display.addNumber(btn.innerHTML));
});

buttonOperators.forEach(btn => {
    btn.addEventListener('click', () => display.compute(btn.value))
});