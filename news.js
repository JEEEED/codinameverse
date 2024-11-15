const newsData = [
    {
        id: 1,
        title: "PROJECT: GLITCHES - ALPHA TEST",
        description: "Alpha teste do jogo PROJECT: GLITCHES já está disponível, faça o formulário para participar!",
        date: "15/11/2024",
        tag: "Jogos",
        image: "https://cdn.discordapp.com/attachments/1288557843410190459/1307024699900956772/146_Sem_Titulo_20241115134521.jpg?ex=6738cd1b&is=67377b9b&hm=f0b6bad6fd7095dae7968f7c0ee152bf77446c13d2bb266e7343457f10f97d6b&"
    },
    {
        id: 2,
        title: "BEM-VINDO AO NOVO SITE!",
        description: "Lançamento do novo site da JeffinVerso!",
        date: "15/11/2024",
        tag: "SITE",
        image: "https://cdn.discordapp.com/attachments/1288557843410190459/1307025088511475792/147_Sem_Titulo_20241115135100.jpg?ex=6738cd78&is=67377bf8&hm=fc3d61b36e4cf7409fae9396f426b5ac454dd0d8bb8291893d325cf5bedf4b49&"
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