const message = document.querySelector('.main-message-saying');
const text = "Qualquer um pode escrever código que máquinas entendem. Bons programadores escrevem códigos que humanos entendem. ~Martin Fowler";
const interval = 100;

function showText(message, text, interval) {
    const char = text.split("").reverse();

    const typer = setInterval(() => {
        if (!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        message.innerHTML += next;
    }, interval);
}

showText(message, text, interval);