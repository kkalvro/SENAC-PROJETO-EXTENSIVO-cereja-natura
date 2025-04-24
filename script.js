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
const produtos = document.querySelectorAll('.produto');
const searchResults = document.createElement('div');
searchResults.id = 'search-results';
document.querySelector('.nav-container').appendChild(searchResults); 

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    searchResults.innerHTML = ''; 

    if (query) {
        produtos.forEach(produto => {
            const name = produto.querySelector('h3').textContent.toLowerCase();
            if (name.includes(query)) {
                
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');

               
                const img = produto.querySelector('img').cloneNode(true);
                const link = document.createElement('a');
                link.href = produto.querySelector('a') ? produto.querySelector('a').href : '#';
                link.textContent = produto.querySelector('h3').textContent;

                resultItem.appendChild(img);
                resultItem.appendChild(link);
                searchResults.appendChild(resultItem);
            }
        });
    }
});