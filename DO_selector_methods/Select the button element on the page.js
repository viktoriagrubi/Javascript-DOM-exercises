/* W tym scenariuszu istniejący kod dodaje eventListener dla zdarzenia kliknięcia na zmiennej buttonElem . Oczekuje, że buttonElem będzie elementem przycisku w przykładowym interfejsie użytkownika. Jednak ten element nie jest jeszcze wybrany.
Przypisz element przycisku do zmiennej buttonElem . Kliknij przycisk, aby sprawdzić, czy kod działa.
Wskazówka: Użyj unikalnego identyfikatora elementu przycisku. */

// przypisz poprawny element do zmiennej
const buttonElem = document.getElementById("button");

buttonElem.addEventListener("click", () => {
  const oldText = buttonElem.innerText;
  return (button.innerText = oldText === "ON" ? "OFF" : "ON");
});
