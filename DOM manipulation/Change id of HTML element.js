/*W tym scenariuszu istniejący kod nasłuchuje kliknięcia przycisku. Po kliknięciu przycisku wyzwalana jest funkcja changeInput . changeInput próbuje wybrać pole wejściowe o identyfikatorze inputEl . Jednak istniejące pole wejściowe nie ma tego identyfikatora. Dodaj kod JavaScript, aby dodać identyfikator inputEl do istniejącego pola wejściowego.
Sprawdź, czy kod działa, klikając przycisk.*/

const button = document.querySelector("#wrapper button");

// Dodaje identyfikator 'inputEl' do istniejącego pola wejściowego
const inputField = document.querySelector("#wrapper input");
inputField.id = "inputEl";

const changeInput = () => {
  const input = document.querySelector("#inputEl");
  if (input) {
    input.value = "Hello World";
  }
};

button.addEventListener("click", changeInput);
