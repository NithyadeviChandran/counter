const input = document.getElementById('input')
const plus = document.getElementById('plus')
const reset = document.getElementById('reset')
const minus = document.getElementById('minus')

input.textContent = '0'

let currentNumber = 0

    function addn(){
        currentNumber = currentNumber + 1 
        input.textContent = currentNumber
        console.log(currentNumber)
    }
plus.addEventListener('click', addn)


function sub(){
    currentNumber = currentNumber - 1 
    input.textContent = currentNumber
    console.log(currentNumber)
}
minus.addEventListener('click', sub)

function res(){
    input.textContent = 0
    currentNumber = 0
}
reset.addEventListener('click', res)