import config from './config.js';


let main = document.querySelector(".main");
loadMain();

function layoutMain(title, explanation, descriptionBy, url, date){
    let mainContainer, imageLayout, descriptionLayout;

    mainContainer = document.createElement("section");
    mainContainer.classList.add("main__container");

    imageLayout = document.createElement("div");
    imageLayout.classList.add("main__image-layout");

    descriptionLayout = document.createElement("div");
    descriptionLayout.classList.add("main__description-layout");

    let mainTitle, image, imageDate, imageTitle, description, byTag;

    mainTitle = document.createElement("h2");
    mainTitle.classList.add("main__title");
    mainTitle.textContent = " Astronomy Picture of the Day";

    image = document.createElement("img");
    image.classList.add("main__image");
    image.setAttribute("src", url);
    image.setAttribute("alt", "Image of the day");

    imageDate = document.createElement("p");
    imageDate.classList.add("main__date");
    imageDate.textContent = date;

    imageTitle = document.createElement("p");
    imageTitle.classList.add("main__image-title");
    imageTitle.textContent = title;
    
    description = document.createElement("p");
    description.classList.add("main__description");
    description.textContent = explanation;

    byTag = document.createElement("p");
    byTag.classList.add("main__by-tag");
    byTag.textContent = "Description by " +descriptionBy;

    main.appendChild(mainContainer);

    mainContainer.appendChild(imageLayout);
    mainContainer.appendChild(descriptionLayout);

    imageLayout.appendChild(mainTitle);
    imageLayout.appendChild(imageDate);
    imageLayout.appendChild(image);
    imageLayout.appendChild(imageTitle);
    
    descriptionLayout.appendChild(description);
    descriptionLayout.appendChild(byTag);

}

async function loadMain(){

    try {
        let response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${config.apod_api_key}`);

        let title = response.data.title;
        let explanation = response.data.explanation;
        let descriptionBy = response.data.copyright;
        let url = response.data.url;
        let date = response.data.date;


        layoutMain(title, explanation, descriptionBy, url, date);

    } catch (error) {
        console.log(error);
    }

}
