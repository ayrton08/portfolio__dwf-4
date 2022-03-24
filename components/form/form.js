function form(element) {
    const componenteNodo = document.createElement("section");
    componenteNodo.className = "form";
    componenteNodo.innerHTML = `
    <div class="container-form">
    <h2 class="title-form">Write Me</h2>
    <form class="inputs-form">
        <div class="fieldset">
            <label class="label" for="name">Name</label>
            <input class="name" type="name" id="name" />
        </div>
        <div class="fieldset">
        <label class="label" for="email">Email</label>
        <input class="input-text" type="email" id="email" />
        </div>
        <div class="fieldset">
        <label class="label" for="message">Message</label>
        <textarea class="textarea" id="message"></textarea>
        </div>
        <div class="button-seccion" >
        <button type='submit' class="button" >Send</button>
        </div>
        </form>
        </div>`;

    const form = componenteNodo.querySelector(".inputs-form");
    
    form.addEventListener("submit", function (event) {
        console.log(event)
        event.preventDefault();
        console.log("el form se envio");
    });

    element.insertAdjacentElement("beforebegin", componenteNodo);
}
