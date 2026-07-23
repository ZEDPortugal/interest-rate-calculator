const calculate = require('./script.js');

document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            const p = document.getElementById('principal').value;
            const r = document.getElementById('rate').value;
            const t = document.getElementById('time').value;
            const resultDiv = document.getElementById('result');
            try {
                const interest = calculate(p, r, t);
                resultDiv.innerText = `Interest is: ${interest}`;
            } catch (e) {
                resultDiv.innerText = `Error: ${e.message}`;
            }
        });
    }
});
