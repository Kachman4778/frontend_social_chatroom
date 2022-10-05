let toggle = document.querySelector('.toggle');
let text = document.querySelector('.text');
let body = document.querySelector('body');
// let anchor = document.querySelectorAll('.nav-link')

function Animatedtoggle(){
    toggle.classList.toggle('active_1')

    if(toggle.classList.contains('active_1')){
        text.innerHTML = "Light"
        text.style.color = "black"
        body.style.backgroundColor = "white"
        body.style.color = "black"
        // anchor.style.color = "black"
    }else{
        text.innerHTML = "Dark"
        text.style.color = "white"
        body.style.backgroundColor = "black"
        body.style.color='white'
    }
}






