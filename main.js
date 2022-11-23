let wordsDiv = document.querySelector(".words");
let btn = document.querySelector(".btn")
let fault = 10;
let text = document.querySelector(".gameOver")
let attempts = document.querySelector(".attempts")
let input = document.querySelector(".inp")
let newGame = document.querySelector(".newGame")
let msg = document.querySelector(".msg")


let words = ["odlican", "prinesi", "aspekt", "dodaj", "obnoviti", "tuziti", "osoblje", "intrige"];

let random = Math.floor(Math.random() * words.length);

let randomWords = words[random]
console.log(randomWords)

for (const letter of randomWords) {
    let span = document.createElement("span")
    span.classList.add("span")
    wordsDiv.appendChild(span)

}
let span = document.querySelectorAll(".span")
attempts.innerHTML = `Reamining number of attempts: ${fault}`

btn.addEventListener("click", () => {

    let seletLetter = input.value;

    for (let i = 0; i < randomWords.length; i++) {
        if (randomWords[i] === seletLetter) {
            console.log("object");
            span[i].innerHTML = seletLetter
        }


    }
    let arrawWords = [...randomWords]
    if (!arrawWords.includes(seletLetter)) {
        fault--
        if (fault < 1) {
            msg.style.display = "block"
            btn.disabled = true;
        }
    }

    attempts.innerHTML = `Reamining number of attempts: ${fault}`
    input.value = ''
}
)
newGame.addEventListener("click", () => {
    location.reload()
}
)