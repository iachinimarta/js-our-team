//Creo l array contenente le informazioni dei membri del team
const team = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "immagine": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome" : "Angela Caroll",
        "ruolo": "Chief Editor",
        "immagine": "angela-caroll-chief-editor.jpg"
    },

    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "immagine": "walter-gordon-office-manager.jpg"
    },

    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "immagine": "angela-lopez-social-media-manager.jpg"
    },

    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "immagine": "scott-estrada-developer.jpg"
    },

    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "immagine": "barbara-ramos-graphic-designer.jpg"
    }

];

//Seleziono tutti i div con classe "card"
let cards = document.querySelectorAll(".card");

let names;
let roles;
let imageSrc;

//Scorro l array
for (let i = 0; i < team.length; i++) {
    names = team[i].nome;
    console.log(names);

    roles = team[i].ruolo;
    console.log(roles);

    imageSrc = team[i].immagine;
    console.log(imageSrc);

    //Stampo in html i dati del team e la foto
    cards[i].innerHTML =  `<img class="card-img" src="img/${imageSrc}">` + `<div class="card-name">${names}</div>` + `<div class="card-role">${roles}</div>`;

}