function getTable() {
   var number = document.getElementById('numberInput').value;
   var resultDiv = document.getElementById('result');
    resultDiv.innerHTML =""; // Clear previous results

    if (number) {
        for (let i = 1; i <= 10; i++) {
           
            resultDiv.innerHTML += `<p>${number} x ${i} = ${number * i}</p>`;
        }
    } else {
        resultDiv.innerHTML = '<p>Please enter a number.</p>';
    }
}
