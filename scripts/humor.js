/*
Bygg en sida med flera knappar för olika humör och en ruta under knapparna. När man klickar på en knapp ska humöret visas i rutan. Klickar man sedan på en annan knapp ska det nya humöret ersätta det gamla.

Skapa en rubrik, minst fem knappar med olika humör (t.ex. 😄 Glad, 😢 Ledsen, 😠 Arg, 😴 Trött, 😲 Förvånad) och en tom ruta under dem. Ge knapparna en gemensam klass och rutan ett id. Lägg till en CSS-klass per humör som ger rutan en egen bakgrundsfärg.
Hämta rutan och den första knappen med querySelector(). Logga båda i konsolen.
När man klickar på den första knappen ska humöret visas i rutan, t.ex. 😄 Jag är glad!. Använd textContent.
Gör samma sak för de andra knapparna, med en egen klicklyssnare för varje. Testa att varje nytt klick texten i rutan i stället för att lägga till.
Ge rutan humörets CSS-klass vid klick. Se till att den gamla färgen försvinner när man byter humör. Tips: classList.remove() och classList.add().
Du har nu nästan samma kod flera gånger. Hämta i stället alla knappar med querySelectorAll(), gå igenom dem med forEach och sätt en lyssnare på varje. Läs humöret från knappens egen text med button.textContent.
Den knapp man senast klickat på ska få klassen active (styla den i CSS), och klassen ska tas bort från de andra knapparna.

Lägg till en "Nollställ"-knapp som tömmer rutan och tar bort färgen.
Lägg till en "Slumpa humör"-knapp. Lägg humören i en array och välj ett med Math.random().
Räkna hur många gånger varje humör har valts och visa det under rutan.
*/

const moodButtons = document.querySelectorAll(".mood-button")
const moodBox = document.querySelector("#mood-box")

moodButtons.forEach((button) => {
    button.addEventListener("click", () => {
        moodBox.textContent = button.textContent
        moodBox.classList.remove("happy", "sad", "angry", "surprised", "tired")
        moodBox.classList.add(button.id)
    })
})