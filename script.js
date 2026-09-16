
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    
    const inputCurrency = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real que será convertido
    const currencyValueToConverted = document.querySelector(".currency-value") // Valor convertido em outras moedas

    const dolarToday = 5.15
    const euroToday = 5.94
    const libraToday = 6.92
    const bitToday = 390530.00
    const ienetoday = 0.033

    if (currencySelect.value == "Dolar") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }) .format(inputCurrency / dolarToday)
    }

    if (currencySelect.value == "Euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }) .format(inputCurrency / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }) .format(inputCurrency / libraToday)
    }

    if (currencySelect.value == "bit") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }) .format(inputCurrency / bitToday)
    }

    if (currencySelect.value == "iene") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }) .format(inputCurrency / ienetoday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency",
        currency: "BRL"
    }) .format(inputCurrency)
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./assets/libra.png"
    }

    if(currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencySelect.value == "bit") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene Japonês"
    }

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", convertValues)