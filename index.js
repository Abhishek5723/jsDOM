

// function eventfunction(){
//     console.log('i have clicked');
// }
// document.addEventListener('click',eventfunction);

// document.removeEventListener('click',eventfunction);


let link = document.querySelectorAll('a');
let thirdlink= link[2];

thirdlink.addEventListener('click', function(event){
    event.preventDefault();console.log('maja aya, acha laga');
});

