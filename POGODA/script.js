const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

// dodawanie wiadomości do czatu
function addMessage(message, sender) {

    const div = document.createElement("div");

    div.classList.add(sender);
    div.innerText = message;

    chatBox.appendChild(div);

    // auto scroll
    chatBox.scrollTop = chatBox.scrollHeight;
}

// odpowiedź bota
function botResponse(input) {

    input = input.toLowerCase();

    let recommendation = "";

    // pobranie temperatury (obsługuje liczby ujemne)
    const tempMatch = input.match(/-?\d+/);

    const temperature = tempMatch
        ? parseInt(tempMatch[0])
        : null;

    // analiza temperatury
    if (temperature !== null) {

        // poniżej 0
        if (temperature < 0) {

            recommendation =
            "🥶 Jest mróz! Załóż grubą kurtkę zimową, czapkę, rękawiczki, szalik i ciepłe buty.";

        }

        // 0–5
        else if (temperature <= 5) {

            recommendation =
            "🧥 Jest zimno. Załóż grubą kurtkę i cieplejsze ubrania.";

        }

        // 6–10
        else if (temperature <= 10) {

            recommendation =
            "🧥 Załóż kurtkę przejściową lub bluzę oraz długie spodnie.";

        }

        // 11–20
        else if (temperature <= 20) {

            recommendation =
            "👕 Pogoda jest przyjemna. Wystarczy bluza lub lekka kurtka.";

        }

        // powyżej 20
        else {

            recommendation =
            "☀️ Jest ciepło! Załóż koszulkę, krótkie spodenki i okulary przeciwsłoneczne.";

        }

    }

    // brak temperatury
    else {

        recommendation =
        "🌤️ Podaj temperaturę, np. '10 stopni i deszcz'.";
    }

    // deszcz
    if (
        input.includes("deszcz") ||
        input.includes("pada")
    ) {

        recommendation +=
        " ☔ Zabierz parasol i wodoodporne buty.";
    }

    // wiatr
    if (input.includes("wiatr")) {

        recommendation +=
        " 🌬️ Przyda się kurtka chroniąca przed wiatrem.";
    }

    // śnieg
    if (input.includes("śnieg")) {

        recommendation +=
        " ❄️ Załóż rękawiczki i ciepłą czapkę.";
    }

    // słońce
    if (
        input.includes("słońce") ||
        input.includes("słonecznie")
    ) {

        recommendation +=
        " 😎 Przydadzą się okulary przeciwsłoneczne.";
    }

    return recommendation;
}

// wysyłanie wiadomości
function sendMessage() {

    const text = userInput.value.trim();

    // jeśli puste pole
    if (text === "") return;

    // wiadomość użytkownika
    addMessage(text, "user-message");

    // odpowiedź bota po chwili
    setTimeout(() => {

        const response = botResponse(text);

        addMessage(response, "bot-message");

    }, 500);

    // czyszczenie inputa
    userInput.value = "";
}

// kliknięcie przycisku
sendButton.addEventListener(
    "click",
    sendMessage
);

// ENTER = wysłanie wiadomości
userInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            event.preventDefault();
            sendMessage();

        }

    }
);