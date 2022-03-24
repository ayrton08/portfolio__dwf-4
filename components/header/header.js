function header(element) {
    const componenteNodo = document.createElement("header");
    componenteNodo.className = ".header";
    componenteNodo.innerHTML = `
    <div class="izquierda">
    <img class="logo-inicio" src="./components/header/media/logo-footer.png" alt="" />
</div>
<div class="derecha">
    <img
        class="logo-opciones"
        src="./components/header/media/logo-derecha.png"
        alt=""
    />
    <menu class="menu">
        <div>About Me</div>
        <div>Services</div>
        <div>Write Me</div>
    </menu>
</div>
   `;
    element.insertAdjacentElement("beforebegin", componenteNodo);
}
