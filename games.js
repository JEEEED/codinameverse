const gamesData = [
    {
        id: 1,
        title: "PANIC MEMORIES: Cápitulo 1 e 2",
        description: "SUA ULTIMA CHANCE! Explore o passado de uma jovem estagiaria de robótica e descubra os mistérios que a cercam.",
        tags: ["Story-Rich", "Puzzles"],
        price: "GRATUITO",
        image: "https://cdn.discordapp.com/attachments/1288557843410190459/1307024678551949372/103_Sem_Titulo_20241031222753.jpg?ex=6738cd16&is=67377b96&hm=257e751aecc9a1e0ddfe3b41f19e17774851351ce1f648183f74eed2ac298d91&",
        buttonText: "Jogar Agora",
        url: "https://valleystudios.itch.io/panicmemoriesofficial"
    },
    {
        id: 2,
        title: "PROJECT: GLITCHES",
        description: "O NEXUS TOTAL! Um fan-game de Minecraft com mecanicas de Gacha e Clicker.",
        tags: ["Clicker", "Gacha"],
        price: "ALPHA TESTE",
        image: "https://cdn.discordapp.com/attachments/1288557843410190459/1307024679407714375/146_Sem_Titulo_20241115134602.jpg?ex=6738cd16&is=67377b96&hm=e8b2880b627386dfb308e57140c84950a9d57502066d3c11bf9e9c2cd8cf7c0b&",
        buttonText: "APLIQUE-SE",
        url: "https://forms.gle/h3GadxtG56mBpU1P6"
    },
    {
        id: 3,
        title: "SPACE IN TIME",
        description: "VIAJE EM BURACOS NEGROS! Um Space-Shooter dinamico com uma historia envolvente com mecanicas de RPG.",
        tags: ["Space-Shooter", "RPG"],
        price: "NÃO DISPONÍVEL",
        image: "https://cdn.discordapp.com/attachments/1288557843410190459/1307024679046746152/129_Sem_Titulo_20241115134810.jpg?ex=6738cd16&is=67377b96&hm=e40b181ce8656829e4ac01bab0e0a8e6ec8585aae30b0650aaffc27dbba578ab&",
        buttonText: "EM BREVE",
        url: ""
    }
];

function loadGames() {
    const gamesSection = document.querySelector('.games-grid');
    
    if (gamesSection) {
        gamesSection.innerHTML = gamesData.map(game => `
            <article class="game-card">
                <div class="game-image" style="background-image: url('${game.image}')">
                </div>
                <h3>${game.title}</h3>
                <div class="game-tags">
                    ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p>${game.description}</p>
                <div class="game-price">${game.price}</div>
                <a href="${game.url}" target="_blank" class="game-link">
                    <button class="retro-button">${game.buttonText}</button>
                </a>
            </article>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', loadGames); 