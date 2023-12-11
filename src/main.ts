type DivField = HTMLDivElement | null;

const wordsDiv = document.querySelector(".words");
const btn: HTMLButtonElement | null = document.querySelector(".btn");
let fault = 10;
const displayWord = document.querySelector(".displayWord");
const text = document.querySelector(".gameOver");
const attempts = document.querySelector(".attempts");
const input: HTMLInputElement | null = document.querySelector(".inp");
const newGame = document.querySelector(".newGame");
const startGame = document.querySelector(".startGame");
const msg: DivField = document.querySelector(".msg");
const win: DivField = document.querySelector(".win");
const words = [
  "elephant",
  "computer",
  "bicycle",
  "sunshine",
  "library",
  "butterfly",
  "rainbow",
  "adventure",
  "champion",
  "delicious",
  "guitar",
  "kangaroo",
  "mountain",
  "jigsaw",
  "excitement",
];
const random = Math.floor(Math.random() * words.length);
const randomWords = words[random];

input !== null && input.focus();

for (const letter of randomWords) {
  const span = document.createElement("span");
  span.classList.add("span");
  wordsDiv !== null && wordsDiv.appendChild(span);
}
const span: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".span");
if (attempts !== null)
  attempts.innerHTML = `Remaining number of attempts: ${fault}`;

if (input !== null) {
  btn !== null &&
    btn.addEventListener("click", () => {
      const selectLetter = input.value;

      for (let i = 0; i < randomWords.length; i++) {
        if (randomWords[i] === selectLetter) {
          span[i].innerHTML = selectLetter;
        }
      }
      let arr = [];

      span.forEach((e: HTMLSpanElement) => {
        if (e.innerText !== "") {
          arr.push(e);
        }
      });
      if (arr.length === randomWords.length) {
        if (win !== null) {
          win.style.display = "block";
          btn.disabled = true;
          input.disabled = true;
        }
      }

      let arrowWords = [...randomWords];

      if (!arrowWords.includes(selectLetter) && selectLetter !== "") {
        fault--;

        if (fault < 1) {
          if (msg !== null) {
            msg.style.display = "block";
            btn.disabled = true;
            input.disabled = true;
            if (displayWord !== null) {
              displayWord.innerHTML = randomWords;
            }
          }
        }
      }

      if (attempts !== null)
        attempts.innerHTML = `Remaining number of attempts: ${fault}`;
      input.value = "";
      input.focus();
    });
}

newGame !== null &&
  newGame.addEventListener("click", () => {
    location.reload();
  });

startGame !== null &&
  startGame.addEventListener("click", () => {
    location.reload();
  });
