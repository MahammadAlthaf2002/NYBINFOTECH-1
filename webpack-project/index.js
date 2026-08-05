import "./style.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { add, sub, mul, div } from "./math";

document.body.appendChild(Header());

const p = document.createElement("p");

p.innerHTML = `
<h2>Math Operations</h2>

Addition : ${add(20,10)} <br><br>

Subtraction : ${sub(20,10)} <br><br>

Multiplication : ${mul(20,10)} <br><br>

Division : ${div(20,10)}
`;

document.body.appendChild(p);

const button = document.createElement("button");

button.innerText = "Click Me";

button.addEventListener("click", () => {
    alert("Webpack is Working Successfully!");
});

document.body.appendChild(button);

document.body.appendChild(Footer());