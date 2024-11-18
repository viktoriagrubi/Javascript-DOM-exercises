/*W tym scenariuszu szukamy listy elementów zebranych w jednej zmiennej - a nie tylko jednego elementu.
Przypisz elementy listy w widoku do zmiennej 'listItems', używając odpowiedniej metody selektora.
Po ukończeniu poniższego kodu zweryfikuj go, najeżdżając kursorem na elementy listy, aż wszystkie elementy będą miały wartość 'ON' */

// przypisz prawidłowe elementy do zmiennej
const listItems = document.querySelectorAll("#list li");

const handleHover = (event) => {
  return (event.target.innerText = "ON");
};
if (listItems.length > 1) {
  listItems.forEach((item) => item.addEventListener("mouseover", handleHover));
}

//tego nie rozumiem
