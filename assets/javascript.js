let newParagraph = document.createElement("p");
let oldParagraph = document.getElementById("main");

newParagraph.textContent = "I'm here too!!!";

oldParagraph.appendChild(newParagraph);