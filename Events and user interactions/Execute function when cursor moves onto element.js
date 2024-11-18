/*Funkcja JavaScript changeText zmienia tekst wewnątrz okręgu. Ale znowu, nie ma kodu do wykonania tej funkcji.
Uzupełnij istniejący kod poniżej tak, aby funkcja była wywoływana, gdy kursor przesunie się na okrąg. Sprawdź, czy Twój kod działa, najeżdżając kursorem na okrąg.*/

const element = document.getElementById("element");

const changeText = () => {
  element.innerText = "Thanks!";
};

// type in your code here

element.addEventListener("mouseover", changeText);
