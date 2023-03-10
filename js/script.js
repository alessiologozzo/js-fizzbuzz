const DIM = 100;
const MS = 100;
let row = document.querySelector(".container > div:last-of-type");
let num = [];
let startButton = document.getElementsByClassName("al-button")[0];

startButton.addEventListener("click", start);

async function start(){

    startButton.classList.add("d-none");

    for(let i = 0; i < DIM; i++){
        displayBox(i);
        await sleep(MS);
    }
}

function displayBox(i){

    num[i] = document.createElement("h5");

    if((i + 1) % 3 == 0 && (i + 1) % 5 == 0){
        num[i].classList.add("al-box", "bg-fizzbuzz");
        num[i].textContent = "fizzbuzz"
    }
    else if((i + 1) % 3 == 0){
        num[i].classList.add("al-box", "bg-fizz");
        num[i].textContent = "fizz";
    }
    else if((i + 1) % 5 == 0){
        num[i].classList.add("al-box", "bg-buzz");
        num[i].textContent = "buzz";
    }
    else{
        num[i].classList.add("al-box", "bg-normal");
        num[i].textContent = i + 1;
    }

    row.appendChild(num[i]);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
