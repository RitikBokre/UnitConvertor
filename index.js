/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const converBtn = document.querySelector(".convert-btn")
const mainEl = document.querySelector(".main-content")
const conversionInput = document.querySelector("#conversion-value")
let conversionValue = Number(conversionInput.value)
const lengthPara = document.querySelector(".length")
const massPara = document.querySelector(".mass")
const volumePara = document.querySelector(".volume")

function conversionCalculate(domNode, value, unit1, unit2, factor) {
    const mul = Number(value * factor).toFixed(3);
    const div = Number(value / factor).toFixed(3);
    domNode.textContent = `${value} ${unit1} = ${mul} ${unit2} | ${value} ${unit2} = ${div} ${unit1}`;
}

converBtn.addEventListener("click", function () {
    conversionValue = Number(conversionInput.value)
    if (conversionValue > 0) {
        mainEl.classList.remove("hidden")
        conversionCalculate(lengthPara, conversionValue, "meter", "feet", 3.2821);
        conversionCalculate(volumePara, conversionValue, "liters", "gallons", 0.264);
        conversionCalculate(massPara, conversionValue, "kilos", "pounds", 2.204);
    }
    else {
        mainEl.classList.add("hidden")
        alert("Enter Valid Value")
    }

})