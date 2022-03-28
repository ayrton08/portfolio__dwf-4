function form(element) {
    const componenteNodo = document.createElement("section");
    componenteNodo.className = "form";
    componenteNodo.innerHTML = `
    <div class="container-form" >
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

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        fetch(`https://apx-api.vercel.app/api/utils/dwf`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: "ayrtonjuarez90@gmail.com",
                message: `Mis Datos: {
                Nombre: ${name},
                Email: ${email},
                Message: ${message}
            }`,
            }),
        }).then((res) => {
            if(res.ok) {
                form.reset()
            } else {
                alert("El formulario no se ha podido enviar")
            }
        })
            
    });

    const button = form.querySelector("button");
    button.addEventListener(
        "click",
        (event) => {
            event.target.style.backgroundColor = "purple";

            setTimeout(function () {
                event.target.style.backgroundColor = "#ffd953";
            }, 80);
        },
        false
    );

    element.insertAdjacentElement("beforebegin", componenteNodo);
}
