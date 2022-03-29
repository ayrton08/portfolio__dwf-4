function footer(element) {
    const componenteNodo = document.createElement("footer");
    componenteNodo.className = "footer";
    componenteNodo.innerHTML = `
    <div class="container-footer">
    <span class="marca" >Ayrton</span>
            </div>
            <div class="redes-footer">

            <a class="footer__links" href="https://www.facebook.com/ayrton.juarez" target="_blank">
            <div class="redes-facebook">
            <img
            class="logo-social"
            src="./components/footer/media/facebook-2429746_640.png"
            alt=""
            />
            <span class="name-redes">Facebook</span>
            </div>
            </a>
            
            
            <a class="footer__links" href="https://www.linkedin.com/in/ayrton-juarez-8461a7234/" target="_blank">
                <div class="redes-linkedin">
                <img
                class="logo-social"
                src="./components/footer/media/linked-in-2674741_640.png"
                alt=""
                />
                <span class="name-redes">LinkedIn</span>
                </div>
            </a>

                <a class="footer__links" href="https://www.instagram.com/ayrtonjuarez/" target="_blank" >
                <div class="redes-instagram">
                    <img
                        class="logo-social"
                        src="./components/footer/media/instagram-2433265_640.png"
                        alt=""
                    />
                    <span class="name-redes">Instagram</span>
                </div>
                </a>

                <a class="footer__links" href="https://github.com/ayrton08" target="_blank">
                <div class="redes-github">
                    <img
                        class="logo-social"
                        src="./components/footer/media/github.png"
                        alt=""
                    />
                    <span class="name-redes">GitHub</span>
                </div>
                </a>
            </div>`;

    element.appendChild(componenteNodo);
}
