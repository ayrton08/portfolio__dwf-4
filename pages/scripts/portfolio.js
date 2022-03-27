function addDataPortfolio(params = {}) {
    const template = document.querySelector("#portfolio-template");
    const container = document.querySelector(".works");

    template.content.querySelector(".subtitle").textContent = params.title;
    
    template.content.querySelector(".picture").src = params.picture;

    template.content.querySelector(".description").textContent = params.description;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getDataPortfolio() {
    return fetch(
        "https://cdn.contentful.com/spaces/0r1nruzkr3wh/environments/master/entries?access_token=osSbZBNatM92vVy0_RtJkpIRZsDRkgkbvdBCVG8Glks&content_type=portfolio"
    )
        .then((res) => {
            return res.json();
        })

        .then((data) => {
            console.log(data); 
            const laData = data.items.map((item) => {
                return {
                    title: item.fields.title,
                    description: item.fields.description.content[0].content[0].value,
                    picture: data.includes.Asset[0].fields.file.url
                };
            });
            return laData;
        });
}








(function () {
    const elementHeader = document.querySelector("body");
    header(elementHeader);

    const elementFooter = document.querySelector("body");
    footer(elementFooter);

    
    
    getDataPortfolio().then((data) => {
        for (const c of data) {
            addDataPortfolio(c);
        }
    });

})();
