const input = document.querySelector('input');
const randomNum = document.querySelector('#random-num');
const hintResult = document.querySelector('#hint-result');
const btn = document.querySelector('button');
const attempts = document.querySelector('#attempts');
let randomValue = Math.floor(Math.random() * 100) + 1;

const guess = () => {
    const inputValue = input.value;
    if (inputValue.trim() === '') return;

    if (inputValue == randomValue) {
        hintResult.textContent = 'You guessed right in';
        input.disabled = true;
        btn.disabled = true;
    } else if (inputValue > 100 || inputValue == 0) {
        hintResult.textContent = 'I said between 1 and 100 dumbass';
    } else if (inputValue < randomValue) {
        hintResult.textContent = 'Too Low';
    } else if (inputValue > randomValue) {
        hintResult.textContent = 'Too High';
    }
};

let count = 0;

btn.addEventListener('click', () => {
    guess();
    count++;
    attempts.textContent = count;
});

console.log(randomValue);
