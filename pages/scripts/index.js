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

function getDataService() {
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
                    description:
                        item.fields.description.content[0].content[0].value,
                    image: data.includes.Asset[0].fields.file.url,
                };
            });

            return fieldsCollection;
        });
}

function addDataFirstSection(params = {}) {

    const template = document.querySelector("#first-section__container");
    
    const container = document.querySelector(".first-section");

    template.content.querySelector(".title-first-section").textContent =
        params.title;

    template.content.querySelector(".text-first-section").textContent =
        params.about_me;

    template.content.querySelector(".logo-first-section").src =
        params.picture;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getDataFirstSection() {
    return fetch(
        "https://cdn.contentful.com/spaces/0r1nruzkr3wh/environments/master/entries?access_token=osSbZBNatM92vVy0_RtJkpIRZsDRkgkbvdBCVG8Glks&content_type=contenidoFirstSection"
    )
        .then((res) => {
            return res.json();
        })

        .then((data) => {
            console.log(data)
            const laData = data.items.map((item) => {
                console.log(data.includes.Asset[0].fields.file.url)
                return {
                    title: item.fields.title,
                    about_me: item.fields.aboutMe.content[0].content[0].value,
                    picture: "https:" + data.includes.Asset[0].fields.file.url            
                   };
            });
            return laData;
        });
}

(function main() {
    getDataService().then((data) => {
        for (const c of data) {
            addServiceCard(c);
        }
    });
    getDataHome().then((data) => {
        for (const c of data) {
            addDataHome(c);
        }
    });

    getDataFirstSection().then((data) => {
        for (const c of data) {
            addDataFirstSection(c);
        }
    });

    const elementFooter = document.querySelector("body");
    footer(elementFooter);

    const elementForm = document.querySelector("footer");
    form(elementForm);

    const elementHeader = document.querySelector("main");
    header(elementHeader);
})();
