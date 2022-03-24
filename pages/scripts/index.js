function addDataHome(params = {}) {
    const template = document.querySelector("#template-main");
    const container = document.querySelector(".main");

    template.content.querySelector(".title").textContent = params.title;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getDataHome() {
    return fetch(
        "https://cdn.contentful.com/spaces/0r1nruzkr3wh/environments/master/entries?access_token=osSbZBNatM92vVy0_RtJkpIRZsDRkgkbvdBCVG8Glks&content_type=contenidoHome"
    )
        .then((res) => {
            return res.json();
        })

        .then((data) => {
            const fieldsCollection = data.items.map((item) => {
                return {
                    title: item.fields.title,
                };
            });
            return fieldsCollection;
        });
}

function addServiceCard(params = {}) {
    const template = document.querySelector("#portfolio-template");
    const container = document.querySelector(".services-section-two");

    template.content.querySelector(".sub-service").textContent = params.title;

    template.content.querySelector(".parrafo").textContent = params.description;

    template.content.querySelector(".logo-section-two").src = params.image;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getContentfulData() {
    return fetch(
        "https://cdn.contentful.com/spaces/0r1nruzkr3wh/environments/master/entries?access_token=osSbZBNatM92vVy0_RtJkpIRZsDRkgkbvdBCVG8Glks&content_type=servicesCard"
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            
            const fieldsCollection = data.items.map((item, index) => {
                
                return {

                    title: item.fields.title,
                    description: item.fields.description.content[0].content[0].value,
                };
                
            });
            
            return fieldsCollection;
        });
}



(function main() {
    getContentfulData().then((data) => {
        for (const c of data) {
            addServiceCard(c);
        }
    });
    getDataHome().then((data) => {
        for (const c of data) {
            addDataHome(c);
        }
    });
    
    const elementFooter = document.querySelector('body')
    footer(elementFooter)

    const elementForm = document.querySelector('footer')
    form(elementForm)
    
    const elementHeader = document.querySelector('main')
    header(elementHeader)

})();
