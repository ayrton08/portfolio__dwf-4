
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
                    description: item.fields.description.content[0].content[0].value,
                    image: data.includes.Asset[0].fields.file.url,
                };
            });

            return fieldsCollection;
        });
}



(function () {

    const elementHeader = document.querySelector("body");
    header(elementHeader);

    const elementFooter = document.querySelector("body");
    footer(elementFooter);

    getDataService().then((data) => {
        for (const c of data) {
            addServiceCard(c);
        }
    });

})()