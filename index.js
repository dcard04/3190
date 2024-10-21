document.addEventListener('DOMContentLoaded', () => {
    const janelysImagePath = 'images/Owner.jpeg';
    const diegoImagePath = 'images/diego_profile_pic.png';
    const kassonImagePath = 'images/kasson_profile_pic.png'; // Updated Kasson's image path

    // Inserting Janelys' image (if needed)
    const janelysDiv = document.getElementById('janelys-image');
    const janelysImgElement = document.createElement('img');
    janelysImgElement.src = janelysImagePath;
    janelysImgElement.alt = "Janelys Hernandez";
    janelysDiv.appendChild(janelysImgElement);

    // Inserting Kasson's image
    const kassonDiv = document.getElementById('kasson-image');
    const kassonImgElement = document.createElement('img');
    kassonImgElement.src = kassonImagePath;
    kassonImgElement.alt = "Kasson Plummer";
    kassonDiv.appendChild(kassonImgElement);

    // Inserting Diego's image
    const diegoDiv = document.getElementById('diego-image');
    const diegoImgElement = document.createElement('img');
    diegoImgElement.src = diegoImagePath;
    diegoImgElement.alt = "Diego Cardona";
    diegoDiv.appendChild(diegoImgElement);
});
