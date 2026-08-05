export default function Header() {

    const h1 = document.createElement("h1");

    h1.innerText = "Welcome To Webpack";

    h1.style.color = "blue";

    return h1;

}