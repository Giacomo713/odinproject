console.log(4 + 5)
console.log(2 + 6 +2 + 55 +11)
console.log((4 + 6 + 9) / 77)

let a = 10
console.log(a)
console.log(a * 9)

let b = 7 * a
console.log(b)

const max = 57
const actual = max - 13
const percentage = actual / max

const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
