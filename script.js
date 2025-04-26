// botao voltar para cima

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' //
    });
});

// carrossel

const carrosselContainer = document.querySelector('.carrossel-container');
const images = document.querySelectorAll('.carrossel-container img');
let currentIndex = 0;

function slideCarrossel() {
    currentIndex = (currentIndex + 1) % images.length;
    carrosselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideCarrossel, 5000);


// pesquisa
const searchBar = document.getElementById('search-bar');
const searchResults = document.createElement('div');
searchResults.id = 'search-results';
document.querySelector('.nav-container').appendChild(searchResults);

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    searchResults.innerHTML = ''; 

    if (query) {
        let hasResults = false;

        produtosData.forEach(produto => {
            if (produto.name.toLowerCase().includes(query)) {
                hasResults = true;

                
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');

                
                const img = document.createElement('img');
                img.src = produto.img;
                img.alt = produto.name;

                const link = document.createElement('a');
                link.href = produto.link;
                link.textContent = produto.name;

                resultItem.appendChild(img);
                resultItem.appendChild(link);
                searchResults.appendChild(resultItem);
            }
        });

        if (!hasResults) {
            const noResults = document.createElement('p');
            noResults.textContent = 'Nenhum produto encontrado.';
            searchResults.appendChild(noResults);
        }
    } else {
        searchResults.innerHTML = '';
    }
});

// lista de produtos
const produtosData = [
    {
        name: "Kaiak Urbe",
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwea3c4f86/Produtos%20Joia/Nova%20experi%C3%AAncia/NATBRA-108401/NATBRA-108401_contentBanner_mobile.jpg",
        link: "urbe.html"
    },
    {
        name: "Essencial Feminino",
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw422ff18f/produto-joia/background/mobile/76421.jpg",
        link: "essencial.html"
    },
    {
        name: "Colônia Humor Liberta",
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw790d6772/produto-joia/background/mobile/102422.jpg",
        link: "liberta.html"
    }
];

//info produtos
const infoButtons = document.querySelectorAll('.info-btn');

infoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetBox = document.getElementById(targetId);

       
        document.querySelectorAll('.info-box').forEach(box => {
            if (box !== targetBox) {
                box.style.display = 'none'; 
            }
        });

        
        if (targetBox.style.display === 'none' || targetBox.style.display === '') {
            targetBox.style.display = 'block';
        } else {
            targetBox.style.display = 'none';
        }
    });
});