
const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value
    console.log(inputCurrency)
}

convertButton.addEventListener("click", convertValues)