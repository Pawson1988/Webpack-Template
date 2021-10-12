import { addtwo } from "./add.js";
import "./main.scss";
import img1 from "./assets/ds-pic.jpg";

const text = document.querySelector(".text");
const img = document.querySelector(".myImg");


text.setAttribute("class", "text-success bg-primary w-25 p-2");
text.textContent = `This is the answer to your query: ${add(1, 2)}`;

img.setAttribute("src", img1);


function add (a, b) {
    return addtwo(a, b);
}

// just a template
