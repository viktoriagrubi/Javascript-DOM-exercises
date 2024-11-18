/* Twoje pierwsze ćwiczenie JavaScript DOM. Zacznijmy prosto.
Rozszerz poniższy kod JavaScript, aby wchodzić w interakcję z wyświetlanymi elementami HTML. Po kliknięciu przycisku pole wyboru powinno być zaznaczone.
Potwierdź swój kod, klikając przycisk! */

const button = document.getElementById("button");
button.addEventListener("click", () => {
  const checkbox = document.getElementById("checkbox");

  checkbox.disabled = false;

  checkbox.checked = true;
});
