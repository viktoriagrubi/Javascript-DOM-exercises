/*Tutaj istniejący kod oczekuje, że zmienne „buttonElem” i „inputElem” będą reprezentować elementy przycisku i input w przykładowym interfejsie użytkownika.
Przypisz odpowiednie elementy do zmiennych.
W tym przypadku dwa elementy nie mają unikalnych identyfikatorów — na przykład identyfikatora. Zamiast tego są bezpośrednimi potomkami elementu div o identyfikatorze „wrapper”. Użyj odpowiedniej metody selektora!
Kliknij przycisk, aby sprawdzić, czy kod działa. */

// przypisz zmiennym właściwe elementy
const buttonElem = document.querySelector("#wrapper button");
const inputElem = document.querySelector("#wrapper input");

buttonElem.addEventListener("click", () => {
  const oldText = inputElem.value;
  return (inputElem.value = oldText === "ON" ? "OFF" : "ON");
});
