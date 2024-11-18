/*W tym scenariuszu chcemy, aby kolor okręgu zmieniał się w zależności od rodzaju ruchu kursora. Użyj funkcji toggleColor , aby zmienić kolor okręgu na pomarańczowy, gdy kursor się na niego przesunie. Ponownie użyj tej samej funkcji, aby zmienić kolor na czarny, gdy kursor go opuści.
Najtrudniejszą częścią jest to, że musisz wywołać toggleColor z różnymi wartościami dla parametru isEntering . Sprawdź, czy Twój kod działa, najeżdżając kursorem myszy na okrąg i ponownie go opuszczając.*/

const element = document.querySelector("#element");

const toggleColor = (isEntering) => {
  element.style.background = isEntering ? "orange" : "black";
};

// type in your code here

element.addEventListener("mouseover", () => toggleColor(true));

element.addEventListener("mouseout", () => toggleColor(false));
