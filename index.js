const inputEl = document.getElementById("unit-input")
const buttonEl = document.getElementById("convert-btn")
const resultContainerEl = document.getElementById("result-container")

buttonEl.addEventListener("click", function() {
    //take input value and calculate in three variables
    const inputValue = inputEl.value
    const length = renderLength(inputValue)
    const volume = renderVolume(inputValue)
    const mass = renderMass(inputValue)

    resultContainerEl.innerHTML = length + volume + mass
})

const renderLength = num => {
    const feet = calcFeetFromMeter(num);
    const meter = calcMeterFromFeet(num);
    return `
        <div class="result-container-single">
            <h2 class="result-h2">Length (Meter/Feet)</h2>
            <p class="result-p">${num} meters = ${feet} feet | ${num} feet = ${meter} meters</p>
        </div>
    `
}
const renderVolume = num => {
    const gallons = calcGallonsFromLiter(num);
    const liter = calcLitersFromGallons(num);
    return `
        <div class="result-container-single">
            <h2 class="result-h2">Length (Gallons/Liter)</h2>
            <p class="result-p">${num} liters = ${gallons} gallons | ${num} gallons = ${liter} liters</p>
        </div>
    `
}
const renderMass = num => {
    const pounds = calcPoundsFromKilos(num);
    const kilo = calcKilosFromPounds(num);
    return `
        <div class="result-container-single">
            <h2 class="result-h2">Length (Gallons/Liter)</h2>
            <p class="result-p">${num} kilos = ${pounds} pounds | ${pounds} pounds = ${kilo} kilos</p>
        </div>
    `
}
const calcFeetFromMeter = num => {
    return Math.round((num * 3.821 + Number.EPSILON) * 1000) / 1000
}
const calcMeterFromFeet = num => {
    return Math.round((num / 3.821 + Number.EPSILON) * 1000) / 1000
}
const calcGallonsFromLiter = num => {
    return Math.round((num * 0.264 + Number.EPSILON) * 1000) / 1000
}
const calcLitersFromGallons = num => {
    return Math.round((num / 0.264 + Number.EPSILON) * 1000) / 1000
}
const calcPoundsFromKilos = num => {
    return Math.round((num * 2.204 + Number.EPSILON) * 1000) / 1000
}
const calcKilosFromPounds = num => {
    return Math.round((num / 2.204 + Number.EPSILON) * 1000) / 1000
}
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/*
*  
*/