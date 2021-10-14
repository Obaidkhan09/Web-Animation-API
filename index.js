
// BACKGROUND ANIMATION FUNCTION AND IT'S DETAILS
var backgroundAnimate =()=>{
    var backgroundElement = document.querySelector('.sky');
    var backgroundFrame = [
        {background : '#9ecae1'},
        {background: '#2a3033'},
        {background : '#9ecae1'}
    ];
    var backgroundTiming = {
        duration: 9000,
        iterations: Infinity,
    }
    console.log('out');
    backgroundElement.animate(backgroundFrame, backgroundTiming);
}

var  cloudAnimate =() =>{
    var cloudElement_1 = document.querySelector('.cloud-group-1');
    var cloudElement_2 = document.querySelector('.cloud-group-2');
    var cloudFrame = [
        {transform: 'translateX(0px)'},
        {transform: 'translateX(-700px)'},
    ];
    var cloudTiming = {
        duration: 4500,
        iterations: Infinity,
    }
    cloudElement_1.animate(cloudFrame, cloudTiming);
    cloudElement_2.animate(cloudFrame, cloudTiming);
}

var carAnimateX = () => {
    var carElement = document.querySelector('#car');
    var carFrame = [
        { transform: 'translateX(-1100px)'},
        {transform: 'translateX(0px)'}
    ];
    var carTIming = {
        duration: 5000,
        easing: 'ease-out',
        complete: window.addEventListener('click', carAnimateY),
    };
    carElement.animate(carFrame, carTIming);
}

var carAnimateY =() => {
    var carElement = document.querySelector('#car');
    var carFrame = [
        { transform: 'translateY(0px)'},
        {transform: 'translateY(-50px)'},
        {transform: 'translateY(0px)'},
    ];
    var carTIming = {
        duration: 9000,
        easing: 'ease-in-out',
        iterations: Infinity,
    };
    carElement.animate(carFrame, carTIming);
}

var yellowAnimate = () => {
    // FOR SOME REASON 'yellowElement' ONLY TAKE 1ST VALUE THAT IS 'yellow1', & INGORES THE REST
    //  var yellowElement = document.querySelector('#yellow1, #yellow2, #yellow3, #yellow4, #yellow5, #yellow6, #yellow7');
    var yellowElement1 = document.querySelector('#yellow1');
    var yellowElement2 = document.querySelector('#yellow2');
    var yellowElement3 = document.querySelector('#yellow3');
    var yellowElement4 = document.querySelector('#yellow4');
    var yellowElement5 = document.querySelector('#yellow5');
    var yellowElement6 = document.querySelector('#yellow6');
    var yellowElement7 = document.querySelector('#yellow7');
    var yellowFrame = [
        {transform: 'translateX(0px)'},
        {transform: 'translateX(-1002px)'}
    ];
    var yellowTiming = {
        duration: 4000,
        iterations: Infinity,
    };
    yellowElement1.animate(yellowFrame, yellowTiming);
    yellowElement2.animate(yellowFrame, yellowTiming);
    yellowElement3.animate(yellowFrame, yellowTiming);
    yellowElement4.animate(yellowFrame, yellowTiming);
    yellowElement5.animate(yellowFrame, yellowTiming);
    yellowElement6.animate(yellowFrame, yellowTiming);
    yellowElement7.animate(yellowFrame, yellowTiming);
}


window.addEventListener('load', backgroundAnimate);
window.addEventListener('load', carAnimateX);
window.addEventListener('load', yellowAnimate);
window.addEventListener('load', cloudAnimate);
