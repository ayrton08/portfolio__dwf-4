function addServiceCard() {
    const template = document.querySelector("#portfolio-template");
    const container = document.querySelector(".portfolio-content");
    var clone = document.importNode(template.textContent, true)
    container.appendChild(clone)

}

(function main() {
    addServiceCard()
    addServiceCard()
    addServiceCard()
})();
