const inputEl = document.getElementById("unit-input")
const buttonEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

buttonEl.addEventListener("click", function() {

    const inputValue = inputEl.value

    lengthEl.textContent = `${inputValue} meter = ${(inputValue * meterToFeet).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meterToFeet).toFixed(3)} meter`
    volumeEl.textContent = `${inputValue} liters = ${(inputValue * literToGallon).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / literToGallon).toFixed(3)} liters`
    massEl.textContent = `${inputValue} kilos = ${(inputValue * kiloToPound).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / kiloToPound).toFixed(3)} kilos`
})
