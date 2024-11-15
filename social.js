const socialData = [
    {
        id: 1,
        platform: "YouTube",
        username: "@JeffinORDEM",
        url: "https://www.youtube.com/channel/UCf2wL7rzfkDQa5_se1F-YFg",
        icon: "fab fa-youtube",
        color: "#FF0000"
    },
    {
        id: 2,
        platform: "Twitch",
        username: "@JefinLives",
        url: "https://www.twitch.tv/jefinlives",
        icon: "fab fa-twitch",
        color: "#9146FF"
    },
    {
        id: 3,
        platform: "Twitter",
        username: "@JeffiinYT",
        url: "https://x.com/JeffiinYT",
        icon: "fab fa-twitter",
        color: "#1DA1F2"
    },
    {
        id: 4,
        platform: "Instagram",
        username: "@jeffinyt",
        url: "https://www.instagram.com/jeffinyt?igsh=NjliNGc2czVmZWFm&utm_source=qr",
        icon: "fab fa-instagram",
        color: "#E4405F"
    },
    {
        id: 5,
        platform: "Discord",
        username: "JeffinVerso",
        url: "https://discord.gg/DxyZzkSSz8",
        icon: "fab fa-discord",
        color: "#7289DA"
    },
    {
        id: 6,
        platform: "TikTok",
        username: "@jeffinhodovalley",
        url: "https://tiktok.com/@jeffinhodovalley",
        icon: "fab fa-tiktok",
        color: "#00F2EA"
    }
];

function loadSocial() {
    const socialSection = document.querySelector('.social-grid');
    
    if (socialSection) {
        socialSection.innerHTML = socialData.map(social => `
            <a href="${social.url}" 
               target="_blank" 
               class="social-card ${social.platform.toLowerCase()}"
               style="--hover-color: ${social.color}"
            >
                <i class="${social.icon}"></i>
                <span class="platform-name">${social.platform}</span>
                <span class="social-user">${social.username}</span>
            </a>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', loadSocial); 