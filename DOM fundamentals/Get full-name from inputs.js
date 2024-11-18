/*Rozszerz poniższy kod JavaScript, aby wejść w interakcję z wyświetlanymi elementami HTML.
Tym razem szukamy pełnego imienia. Po kliknięciu przycisku połącz nazwy pierwszych dwóch pól wprowadzania. Wprowadź pełne imię i nazwisko w trzecim polu wprowadzania.
Wskazówka: Sprawdź, czy Twój kod nadal działa, jeśli zmienisz imię lub nazwisko.
Potwierdź swój kod, klikając przycisk!*/

const button = document.getElementById("button");
button.addEventListener("click", () => {
  // type in your code here
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  const fullName = `${firstName} ${lastName}`;

  document.getElementById("fullName").value = fullName;
});
