let wordsDiv = document.querySelector(".words");
let btn = document.querySelector(".btn");
let fault = 10;
let text = document.querySelector(".gameOver");
let attempts = document.querySelector(".attempts");
let input = document.querySelector(".inp");
let newGame = document.querySelector(".newGame");
let startGame = document.querySelector(".startGame");
let msg = document.querySelector(".msg");
let win = document.querySelector(".win");
let words = ["elephant", "computer", "bicycle", "sunshine", "library", "butterfly", "rainbow", "adventure", "champion", "delicious", "guitar", "kangaroo", "mountain", "jigsaw", "excitement"];
let random = Math.floor(Math.random() * words.length);
let randomWords = words[random];

console.log(randomWords);

input.focus();

for (const letter of randomWords) {
    let span = document.createElement("span");
    span.classList.add("span");
    wordsDiv.appendChild(span);
}

let span = document.querySelectorAll(".span");
attempts.innerHTML = `Remaining number of attempts: ${fault}`;

btn.addEventListener("click", () => {

    let selectLetter = input.value;

    for (let i = 0; i < randomWords.length; i++) {
        if (randomWords[i] === selectLetter) {
            span[i].innerHTML = selectLetter;
        }
    }
let niz=[]
    span.forEach(e=>{
        if(e.innerText!==""){
            niz.push(e);
        }
    })
    if(niz.length===randomWords.length){

        win.style.display="block";
        btn.disabled = true;
            input.disabled = true;
    }

    let arrowWords = [...randomWords];

    if (!arrowWords.includes(selectLetter) && selectLetter !=='') {
        fault--
        
        if (fault < 1) {
            msg.style.display = "block"
            btn.disabled = true;
            input.disabled = true;
        }
    }

    attempts.innerHTML = `Reamining number of attempts: ${fault}`;
    input.value = '';
    input.focus();
}
)
newGame.addEventListener("click", () => {
    location.reload();
}
)
startGame.addEventListener("click", () => {
    location.reload();
}
)