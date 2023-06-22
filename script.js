// THE COUNTER AND THE TEXT COLOR EFFECT ========================================================================
let count = 0;
const value = document.querySelector("#value");

function minus(){
    count--;
    value.textContent = count}

function reset(){
    count = 0;
    value.textContent = count
}

function add(){
    count++;
    value.textContent = count;
}

// THE BORDER COLOR CHANGE AND MOUSE EFFECT =========================================================================
let button = document.querySelectorAll('footer button')
button.forEach(buttons =>{
    buttons.addEventListener('click',()=>{
    if (count < 0 ) {
        value.style.color = "red"
        buttons.style.borderColor = 'red'
    }else{
        value.style.color = "green"
        buttons.style.borderColor = 'green'
    }
    if (count == 0) {
        value.style.color = "blue"
        buttons.style.borderColor = 'blue'

    }
    buttons.addEventListener('mousedown',()=>{
        buttons.style.transform = "scale(0.7)"
    })
    buttons.addEventListener('mouseup',()=>{
        buttons.style.transform = "none"
    })
})
})