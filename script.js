function checkNumber() {
    let input = document.getElementById("numberInput").value;
    let message = document.getElementById("message");

    let scientificNotationRegex = /^[+-]?\d+(\.\d+)?(e[+-]?\d+)?$/i;

    if (scientificNotationRegex.test(input)) {
        message.textContent = "Yes, it is a number";
        message.style.color = "green";
    } else {
        message.textContent = "No, it is not a number";
        message.style.color = "red";
    }
}
