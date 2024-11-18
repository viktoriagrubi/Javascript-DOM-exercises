/*To dobre ćwiczenie, aby dowiedzieć się więcej o funkcjach rekurencyjnych . Funkcja move w poniższym kodzie przesuwa przycisk o 1 px w lewo lub w prawo. Jest rekurencyjna, ponieważ wywołuje samą siebie wielokrotnie. Dzięki temu przycisk pozostaje w ruchu.
Rozszerz kod JavaScript. Po kliknięciu przycisku powinien on przestać się poruszać. Po ponownym kliknięciu powinien on ponownie się poruszać.
Potwierdź swój kod, klikając przycisk dwa razy.*/

const button = document.getElementById("button");
let stopped = false;

function move(isReturning) {
  const width = button.parentNode.clientWidth;
  const left = parseInt(button.style.left, 10) || 0;
  if (!stopped) {
    button.style.left = (isReturning ? left - 1 : left + 1) + "px";
    setTimeout(
      () =>
        move((isReturning && left > 0) || left === width - button.clientWidth),
      10
    );
  }
}

move();

button.addEventListener("click", () => {
  // type in your code here
  // za trudne
});
