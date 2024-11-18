/* Możesz tego nie widzieć w przykładowym interfejsie użytkownika, ale pod czerwonym okręgiem znajduje się zielony okrąg. Rozszerz funkcję removeRedCircle , aby usunąć okrąg o identyfikatorze red z DOM.
Upewnij się, że naprawdę usuwasz element, a nie tylko go ukrywasz. Potwierdź, że Twój kod działa, klikając przycisk.*/

const button = document.querySelector("#button");

const removeRedCircle = () => {
  const redCircle = document.querySelector("#red");
  if (redCircle) {
    redCircle.remove();
  }
};

button.addEventListener("click", removeRedCircle);
