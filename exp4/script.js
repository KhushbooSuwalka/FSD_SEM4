// const myBody = document.body;
// console.log(myBody);

// const box2 = document.getElementById('box-2');
// console.log(box2);

// const divs = document.getElementsByTagName('p');
// console.log(divs);

// const boxes= document.getElementsByClassName('random');
// console.log(boxes);

const box1 = document.getElementById('box-1');
box1.innerHTML = 'Hello !!!!';
// box1.style.backgroundColor = 'rgba(167, 240, 254, 0.95)';

const boxes= document.getElementsByClassName('box');
for(let i=0; i<boxes.length; i++){
    boxes[i].classList.add('round-border');
}
// box1.classList.remove('round-border');

//creating new element
const newPara= document.createElement('p');
newPara.innerText = "It's new !!!!";
newPara.classList.add('box');

const container = document.getElementById('container');
container.appendChild(newPara);