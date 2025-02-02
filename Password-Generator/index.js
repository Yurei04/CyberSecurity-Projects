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
})

function randomGeneration(content) {
    content.Math.floor(Math.random() * length)
}
