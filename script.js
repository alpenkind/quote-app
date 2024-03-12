const btn = document.querySelector("button");
const quoteInput = document.querySelector(".bubble");

btn.addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      console.log("API-Antwort erhalten:", response);
      return response.json();
    })

    .then((data) => {
      console.log("API-Daten:", data);
      const quote = data.quote + " - " + data.author;

      quoteInput.innerText = quote;
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der API:", error);
    });
});
