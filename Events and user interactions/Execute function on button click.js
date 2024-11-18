/*Funkcja JavaScript handleText wypełnia pole wprowadzania słowami Hello World . Jednak nie ma kodu do wykonania tej funkcji.
Uzupełnij istniejący kod poniżej tak, aby funkcja była wywoływana po kliknięciu przycisku. Sprawdź, klikając przycisk.*/

const button = document.getElementById("button");
const input = document.getElementById("input");

const handleClick = () => {
  input.value = "Hello World";
};

// wpisz tutaj swój kod

button.addEventListener("click", handleClick);
