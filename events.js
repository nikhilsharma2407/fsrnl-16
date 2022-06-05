const btn = document.querySelector('#btn');
const input = document.querySelector('#ip');
const arrowKeys = {
    ArrowRight:"ArrowRight",
    ArrowLeft:"ArrowLeft"
}
const box = document.querySelector('.box');
input.addEventListener('keydown',(event)=>{
    console.log(event.key);
    const [pos] = box.style.left.split('px');
    
    switch (event.key) {
        case arrowKeys.ArrowRight:
            box.style.left = `${+pos+5}px` ;        
            break;
        case arrowKeys.ArrowLeft:
            box.style.left = `${+pos-5}px` ;        
            break;
        default:
            break;
    }
})
input.addEventListener('focus',(event)=>{
    console.log("focus");
})
input.addEventListener('blur',(event)=>{
    console.log("blur");
})

btn.addEventListener('click',()=>{
    console.log(input.value);
    input.value = "abc" 
    // alert("clicked!!!")
});



box.addEventListener('mouseover',(event)=>{
    // wrt to the main widow or viewport
    // console.log(event.clientX);
    // console.log(event.clientY);
    // relative to the element
    console.log(event.offsetX);
    console.log(event.offsetY);
})