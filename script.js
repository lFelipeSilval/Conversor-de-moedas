
const convertButton = document.querySelector(".convert-button")

function convertValues() {
    
    const inputCurrency = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real que será convertido
    const currencyValueToConverted = document.querySelector(".currency-value") // Valor convertido em outras moedas

    const dolarToday = 5.15

    const convertedValue = inputCurrency / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency",
        currency: "BRL"
    }) .format(inputCurrency)

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }) .format(convertedValue)

}

convertButton.addEventListener("click", convertValues)