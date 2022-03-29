function header(element) {
    const componenteNodo = document.createElement("header");
    componenteNodo.className = "header";
    componenteNodo.innerHTML = `
    <div class="izquierda">
    <a href="http://127.0.0.1:8080/">
    <img class="logo-inicio" src="./components/header/media/logo-footer.png" alt="" />
    </a>
</div>
<div class="derecha">
<button class="abre-ventana">☰</button>
</div>
<div class="ventana">
    <button class="cierra-ventana">Close</button>
    
    <ul class="sections">
            <a class="links" href="/portfolio.html">Portfolio</a>
            <a class="links" href="/services.html">Servicios</a>
            <a class="links" href="/contact.html">Contacto</a>
        </ul>
    
    
</div>
    
    <menu class="menu">
    <a href="./portfolio.html" class="menu__links">Portfolio</a>
    <a href="./services.html" class="menu__links">Services</a>
    <a href="./contact.html" class="menu__links">Write Me</a>
    
    </menu>
</div>
   `;
    element.insertAdjacentElement("beforebegin", componenteNodo);

    function ventanaMenu() {
        const botonAbreVentana = document.querySelector(".abre-ventana");
        const botonCierraVentana = document.querySelector(".cierra-ventana");
        const ventana = document.querySelector(".ventana");

        botonAbreVentana.addEventListener("click", () => {
            ventana.style.display = "inherit";
        });

        botonCierraVentana.addEventListener("click", () => {
            ventana.style.display = "none";
        });
    }
    ventanaMenu();

}
