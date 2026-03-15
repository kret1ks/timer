// Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.




const outPutRef = document.querySelector(".output")
const btnRef = document.querySelector(".click")


let s = 60

btnRef.addEventListener("click", (event) => {

    
const id = setInterval(() => {
    s -= 1;
    outPutRef.textContent = s;

    if(s === 30){
        alert("Залишилося 30 секунд")
    }

    if(s === 0){
        clearInterval(id)
        alert("Час вийшов")
    }
    },1000)
})



