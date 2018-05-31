window.onload = function() {
    let multButton = document.getElementById('multiply');
    let divButton = document.getElementById('divide');

    function calculate() {
        let num1 = document.getElementById('first').value;
        let num2 = document.getElementById('second').value;
        let result = document.getElementById('result');
        
        switch (this.value) {
            case 'Multiply':
                result.innerHTML = num1 * num2
                break;
            case 'Divide':
                result.innerHTML = num1 / num2
                break;
        }
    }
    multButton.addEventListener('click', calculate);
    divButton.addEventListener('click', calculate);
}