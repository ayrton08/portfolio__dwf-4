function footer(element) {
    const componenteNodo = document.createElement("footer");
    componenteNodo.className = "footer";
    componenteNodo.innerHTML = `
    <div class="container-footer">
                <img class="logo-footer" src="./components/footer/media/logo-footer.png" alt="" />
                <div class="text-logo-footer">© 2022 Ayrton</div>
            </div>
            <div class="redes-footer">
                <div class="redes-facebook">
                    <img
                        class="logo-social"
                        src="./components/footer/media/facebook-2429746_640.png"
                        alt=""
                    />
                    <span class="name-redes">Facebook</span>
                </div>
                <div class="redes-linkedin">
                    <img
                        class="logo-social"
                        src="./components/footer/media/linked-in-2674741_640.png"
                        alt=""
                    />
                    <span class="name-redes">LinkedIn</span>
                </div>
                <div class="redes-instagram">
                    <img
                        class="logo-social"
                        src="./components/footer/media/instagram-2433265_640.png"
                        alt=""
                    />
                    <span class="name-redes">Instagram</span>
                </div>
                <div class="redes-youtube">
                    <img
                        class="logo-social"
                        src="./components/footer/media/youtube-2433301_640.png"
                        alt=""
                    />
                    <span class="name-redes">Youtube</span>
                </div>
            </div>`;

    element.appendChild(componenteNodo);
}
