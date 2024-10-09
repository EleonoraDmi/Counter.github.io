let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

updateDisplay();

function incrementCounter() {
    counter += 1;
    updateDisplay();
}

function decrementCounter() {
    counter -= 1;
    updateDisplay();

function resetCounter() {
    counter = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('counterDisplay').innerText = counter;
    localStorage.setItem('counter', counter);
}

document.getElementById('incrementCounter').addEventListener('click', incrementCounter);
document.getElementById('decrementCounter').addEventListener('click', decrementCounter);
document.getElementById('resetButton').addEventListener('click', resetCounter);
