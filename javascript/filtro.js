// Esta función se ejecuta cuando el DOM ha sido completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Arreglo de objetos que contiene las imágenes y sus respectivas categorías
    const images = [
        {src: "./img/Galeria/zelda-delantero.jpg", category: "Zelda"},
        {src: "./img/Galeria/zelda 2 b.jpg", category: "Zelda"},
        {src: "./img/Galeria/Yasuo B 2.jpg", category: "LOL"},
        {src: "./img/Galeria/Vi1.jpg", category: "LOL"},
        {src: "./img/Galeria/ValorantB1.jpg", category: "Valorant"},
        {src: "./img/Galeria/Super Mario.jpg", category: "Mario"},
        {src: "./img/Galeria/Squirtle2 delantero.jpg", category: "Pokemon"},
        {src: "./img/Galeria/Squirtle delantero.jpg", category: "Pokemon"},
        {src: "./img/Galeria/Sonic delantero.jpg", category: "Sonic"},
        {src: "./img/Galeria/smash trasero.jpg", category: "Smash"},
        {src: "./img/Galeria/MK.jpg", category: "MK"},
        {src: "./img/Galeria/Lux N.jpg", category: "LOL"},
        {src: "./img/Galeria/Jhin N.jpg", category: "LOL"},
        {src: "./img/Galeria/jhin B2.jpg", category: "LOL"},
        {src: "./img/Galeria/jhin B1.jpg", category: "LOL"},
        {src: "./img/Galeria/Charmander2 delantero.jpg", category: "Pokemon"},
        {src: "./img/Galeria/Charmander delantero.jpg", category: "Pokemon"},
        {src: "./img/Galeria/Bulbasur2 delantero.jpg", category: "Pokemon"},
        {src: "./img/Galeria/Bulbasur delantero.jpg", category: "Pokemon"},
        
        // Puedes agregar más imágenes aquí con sus categorías correspondientes
    ];

    // Número de imágenes a mostrar por página
    const itemsPerPage = 12;
    let currentPage = 1;

    const gallery = document.querySelector(".images");
    const pagination = document.querySelector(".pagination");

    function showImages(category) {
        gallery.innerHTML = "";
        const filteredImages = images.filter(img => category === "todos" || img.category === category);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const displayedImages = filteredImages.slice(startIndex, endIndex);

        displayedImages.forEach(img => {
            const imageElement = document.createElement("div");
            imageElement.classList.add("image");
            imageElement.innerHTML = `<img src="${img.src}" alt="${img.category}" class="box-img">`;
            gallery.appendChild(imageElement);
        });

        showPagination(filteredImages.length);
    }

    function showPagination(totalImages) {
        const totalPages = Math.ceil(totalImages / itemsPerPage);
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement("button");
            pageBtn.classList.add("button-pag");
            pageBtn.innerText = i;
            pageBtn.addEventListener("click", function() {
                currentPage = i;
                showImages(getActiveCategory());
            });
            pagination.appendChild(pageBtn);
        }

        pagination.querySelectorAll("button").forEach(button => {
            if (parseInt(button.innerText) === currentPage) {
                button.classList.add("button-active");
            } else {
                button.classList.remove("button-active");
            }
        });
    }

    function getActiveCategory() {
        const activeCategoryBtn = document.querySelector(".catalogo .active .btn-menu");
        return activeCategoryBtn ? activeCategoryBtn.getAttribute("data-filter") : "todos";
    }

    function setActiveCategory(btn) {
        document.querySelectorAll(".catalogo .btn-menu").forEach(btn => {
            btn.parentElement.classList.remove("active");
        });
        btn.parentElement.classList.add("active");
    }

    document.querySelectorAll(".catalogo .btn-menu").forEach(btn => {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            setActiveCategory(this);
            currentPage = 1;
            showImages(this.getAttribute("data-filter"));
        });
    });

    showImages("todos");
});