//Event Handling in JS
let dbl=document.querySelector('#dbl');
dbl.ondblclick = () =>{
    console.log('Used event handler#1 function');
    alert('Helloo, I appeared on bouble click !!!');
};
dbl.ondblclick = () =>{
    console.log('Used event handler#2 function');
    alert('Helloo, I appeared on bouble click !!!');
};

//event object demo
dbl.ondblclick = (event) =>{
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX,event.clientY);
    
};