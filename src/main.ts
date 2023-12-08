const wordsDiv = document.querySelector(".words")!;
const btn: HTMLButtonElement = document.querySelector(".btn")!;
let fault = 10;
const text = document.querySelector(".gameOver");
const attempts = document.querySelector(".attempts")!;
const input: HTMLInputElement = document.querySelector(".inp")!;
const newGame = document.querySelector(".newGame");
const startGame = document.querySelector(".startGame");
const msg = document.querySelector(".msg");
const win = document.querySelector(".win");
const words = ["elephant", "computer", "bicycle", "sunshine", "library", "butterfly", "rainbow", "adventure", "champion", "delicious", "guitar", "kangaroo", "mountain", "jigsaw", "excitement"];
const random = Math.floor(Math.random() * words.length);
const randomWords = words[random];

console.log(randomWords);

input.focus();

for (const letter of randomWords) {
    const span = document.createElement("span");
    span.classList.add("span");
    wordsDiv.appendChild(span);
}
const span = document.querySelectorAll(".span");
attempts.innerHTML = `Remaining number of attempts: ${fault}`;

btn.addEventListener("click", () => {
    const selectLetter = input.value;

    for (let i = 0; i < randomWords.length; i++) {
        if (randomWords[i] === selectLetter) {
            span[i].innerHTML = selectLetter;
        }
    }
let niz=[];

    span.forEach(e => {
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