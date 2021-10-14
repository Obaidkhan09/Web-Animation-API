var carElement = document.querySelector('#car');
var yellowElement = document.querySelector('#yellow-divider');
var cloudElement_1 = document.querySelector('.cloud-group-1');
var cloudElement_2 = document.querySelector('.cloud-group-2');


// BACKGROUND ANIMATION FUNCTION AND IT'S DETAILS
var backgroundAnimate =()=>{
    var backgroundElement = document.querySelector('.sky');
    var backgroundFrame = [
        {background : '#9ecae1'},
        {background: '#2a3033'},
        {background : '#9ecae1'}
    ];

    var backgroundTiming = {
        duration: 4500,
        iterations: Infinity,
    }


    console.log('out');
    backgroundElement.animate(backgroundFrame, backgroundTiming);
    console.log('Here');
}

window.addEventListener('load', backgroundAnimate);