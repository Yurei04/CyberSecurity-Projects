const uppercaseSet = ["Q", "W", "E"];
const lowercaseSet = ["a", "b", "c"];
const numbersSet = ["1", "2", "3"];
const specialSet = ["/", "@", "!"];

let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let special = document.getElementById("special");
let length = document.getElementById("length");
let output = document.getElementById("output");

document.getElementById("generate").addEventListener("click", function() {
    let randomPassword = "";
    let lengthConverted = parseInt(length.value);
    let chosenSets = [];

    if (uppercase.checked) chosenSets.push(uppercaseSet);
    if (lowercase.checked) chosenSets.push(lowercaseSet);
    if (numbers.checked) chosenSets.push(numbersSet);
    if (special.checked) chosenSets.push(specialSet);

    if (chosenSets.length === 0) {
        output.textContent = "Please select at least one option";
        return;
    }

    for (let i = 0; i < lengthConverted; i++) {
        let randomSet = chosenSets[Math.floor(Math.random() * chosenSets.length)];
        randomPassword += randomGeneration(randomSet);
    }

    output.textContent = randomPassword;
});

function randomGeneration(content) {
    return content[Math.floor(Math.random() * content.length)];
}

window.addEventListener("DOMContentLoaded", function() {
    let lengthDisplay = document.getElementById("lengthDisplay");

    length.addEventListener("input", function() {
        lengthDisplay.textContent = length.value;
    });
});
