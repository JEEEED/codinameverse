const newsData = [
    {
        id: 1,
        title: "Novo Conteúdo Space Explorer",
        description: "Nova expansão com planetas e missões",
        date: "12/03/2024",
        tag: "Atualização",
        image: "URL_DA_IMAGEM_1"
    },
    {
        id: 2,
        title: "Promoção de Verão",
        description: "Jogos com até 50% de desconto",
        date: "10/03/2024",
        tag: "Promoção",
        image: "URL_DA_IMAGEM_2"
    }
];

// Função para carregar as notícias
function loadNews() {
    const newsSection = document.querySelector('.news-grid');
    
    if (newsSection) {
        newsSection.innerHTML = newsData.map(news => `
            <article class="news-card">
                <div class="news-image" style="background-image: url('${news.image}')">
                </div>
                <div class="news-content">
                    <div class="news-tag">${news.tag}</div>
                    <h3>${news.title}</h3>
                    <p>${news.description}</p>
                    <span class="news-date">${news.date}</span>
                </div>
            </article>
        `).join('');
    }
}

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', loadNews); 