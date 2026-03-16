// Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.




const outPutRef = document.querySelector(".output")
const btnRef = document.querySelector(".click")
const stopRef = document.querySelector(".stop")



let s = 60
let id = null;



btnRef.addEventListener("click", () => {
if(id) return;    

id = setInterval(() => {
s--;
outPutRef.textContent = s
},1000)

if(s === 30){
    alert("залишилось 30 секунд")
}
if(s === 0){
    clearInterval(id)
    alert("час вийшов!!!")
}
})

stopRef.addEventListener("click", (event) => {
    clearInterval(id)
    id = null;
})








// Створити таймер, який буде починати відлік з 30 секунд та зменшувати час кожну мілісекунду. При досягненні 10 секунд, таймер повинен відтворювати якусь анімацію, а при досягненні 0 секунд — виконувати певну дію, наприклад, робити кнопку почати знову активною.






const milisecRef = document.querySelector(".milisec")
const startRef = document.querySelector(".start")


let time = 30000
let timerId = null

startRef.addEventListener("click", () => {
startRef.disabled = true;
timerId = setInterval(() => {

time -= 10;
milisecRef.textContent = (time / 1000).toFixed(2);

if(time === 10000){
    milisecRef.classList.add("active")

}

if(time === 0){
    clearInterval(timerId)
    startRef.disabled = false;
}
},10)

})




























// let s = 60
// let id = null;


// btnRef.addEventListener("click", (event) => {
// if(id) return;

// id = setInterval(() => {
//     s -= 1;
//     outPutRef.textContent = s;

//     if(s === 30){
//         alert("Залишилося 30 секунд")
//     }

//     if(s === 0){
//         clearInterval(id)
//         id = null;
//         alert("Час вийшов")
//     }
//     },1000)
// })

// stopRef.addEventListener("click", (event) => {
// clearInterval(id)
// id = null
// })