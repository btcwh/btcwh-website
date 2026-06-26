const items=document.querySelectorAll('.reveal');const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible')}})},{threshold:.12});items.forEach(i=>obs.observe(i));
const translations={
  en:{
    brand:"BTC WHITE",nav_about:"About",nav_advantages:"Advantages",nav_tokenomics:"Tokenomics",nav_roadmap:"Roadmap",nav_whitepaper:"Whitepaper",nav_faq:"FAQ",
    connect_wallet:"Connect Wallet",hero_eyebrow:"BTCWH • Solana • Global Payment Vision",hero_title_1:"The Time Has Come.",hero_title_2:"Now BTCWH.",
    hero_lead:"BTC White is a next-generation digital asset created with a white and silver identity, fixed supply, transparent tokenomics, and a long-term goal to become a practical payment asset.",
    buy_btcwh:"Buy BTCWH",download_whitepaper:"Download Whitepaper",total_supply:"Total Supply",presale_price:"Presale Price",minimum_purchase:"Minimum Purchase",
    about_eyebrow:"About BTCWH",about_title:"BTC White is built for a new digital generation.",
    about_text:"The project combines a premium white/silver brand identity with a clear economic model and a long-term mission: to develop BTCWH into a usable digital payment instrument within its ecosystem and with future partners where permitted by law.",
    wallet_soon_title:"Wallet connection is coming soon",wallet_soon_text:"The official BTCWH presale wallet connection will be enabled only after the token contract and presale smart contract are published."
  },
  ru:{
    brand:"BTC WHITE",nav_about:"О проекте",nav_advantages:"Преимущества",nav_tokenomics:"Токеномика",nav_roadmap:"План",nav_whitepaper:"Whitepaper",nav_faq:"FAQ",
    connect_wallet:"Кошелек",hero_eyebrow:"BTCWH • Solana • Глобальная платежная идея",hero_title_1:"Время настало.",hero_title_2:"Теперь — BTCWH.",
    hero_lead:"BTC White — цифровой актив нового поколения с бело-серебристым стилем, ограниченной эмиссией, прозрачной токеномикой и долгосрочной целью стать практичным платежным активом.",
    buy_btcwh:"Купить BTCWH",download_whitepaper:"Скачать Whitepaper",total_supply:"Эмиссия",presale_price:"Цена Presale",minimum_purchase:"Минимум",
    about_eyebrow:"О BTCWH",about_title:"BTC White создан для нового цифрового поколения.",
    about_text:"Проект объединяет премиальный бело-серебристый бренд, понятную экономическую модель и долгосрочную миссию: развивать BTCWH как цифровой платежный инструмент в экосистеме и у будущих партнеров.",
    wallet_soon_title:"Подключение кошелька скоро",wallet_soon_text:"Официальное подключение кошелька BTCWH Presale будет включено только после публикации контракта токена и смарт-контракта пресейла."
  },
  uk:{
    brand:"BTC WHITE",nav_about:"Про проект",nav_advantages:"Переваги",nav_tokenomics:"Токеноміка",nav_roadmap:"План",nav_whitepaper:"Whitepaper",nav_faq:"FAQ",
    connect_wallet:"Гаманець",hero_eyebrow:"BTCWH • Solana • Глобальна платіжна ідея",hero_title_1:"Час настав.",hero_title_2:"Тепер — BTCWH.",
    hero_lead:"BTC White — цифровий актив нового покоління з біло-срібним стилем, обмеженою емісією, прозорою токеномікою та довгостроковою метою стати практичним платіжним активом.",
    buy_btcwh:"Купити BTCWH",download_whitepaper:"Завантажити Whitepaper",total_supply:"Емісія",presale_price:"Ціна Presale",minimum_purchase:"Мінімум",
    about_eyebrow:"Про BTCWH",about_title:"BTC White створений для нового цифрового покоління.",
    about_text:"Проєкт поєднує преміальний біло-срібний бренд, зрозумілу економічну модель і довгострокову місію розвитку BTCWH як цифрового платіжного інструменту.",
    wallet_soon_title:"Підключення гаманця скоро",wallet_soon_text:"Офіційне підключення гаманця BTCWH Presale буде ввімкнено після публікації контрактів."
  },
  zh:{connect_wallet:"连接钱包",hero_title_1:"时代已至。",hero_title_2:"现在是 BTCWH。",buy_btcwh:"购买 BTCWH",download_whitepaper:"下载白皮书"},
  es:{connect_wallet:"Conectar wallet",hero_title_1:"Ha llegado el momento.",hero_title_2:"Ahora BTCWH.",buy_btcwh:"Comprar BTCWH",download_whitepaper:"Descargar Whitepaper"},
  ko:{connect_wallet:"지갑 연결",hero_title_1:"때가 왔습니다.",hero_title_2:"이제 BTCWH.",buy_btcwh:"BTCWH 구매",download_whitepaper:"백서 다운로드"},
  hi:{connect_wallet:"Wallet जोड़ें",hero_title_1:"समय आ गया है.",hero_title_2:"अब BTCWH.",buy_btcwh:"BTCWH खरीदें",download_whitepaper:"Whitepaper डाउनलोड करें"}
};
function setLang(lang){
  const base=translations.en, t={...base,...(translations[lang]||{})};
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(t[k]) el.textContent=t[k];});
  localStorage.setItem("btcwh_lang",lang);
}
const languageSelect=document.getElementById("languageSelect");
if(languageSelect){const saved=localStorage.getItem("btcwh_lang")||"en";languageSelect.value=saved;setLang(saved);languageSelect.addEventListener("change",e=>setLang(e.target.value));}
const themeToggle=document.getElementById("themeToggle");
if(localStorage.getItem("btcwh_theme")==="light") document.body.classList.add("light");
themeToggle?.addEventListener("click",()=>{document.body.classList.toggle("light");localStorage.setItem("btcwh_theme",document.body.classList.contains("light")?"light":"dark");});
const modal=document.getElementById("walletModal");
document.getElementById("walletBtn")?.addEventListener("click",()=>modal?.classList.add("show"));
document.getElementById("closeModal")?.addEventListener("click",()=>modal?.classList.remove("show"));
modal?.addEventListener("click",e=>{if(e.target===modal) modal.classList.remove("show");});
