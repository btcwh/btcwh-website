
const LANGS=['en','ru','es','zh','ko','hi'];
const state={lang:localStorage.getItem('btcwh_lang')||'en', data:null};
const $=(s)=>document.querySelector(s);
function el(tag,cls,text){const e=document.createElement(tag); if(cls)e.className=cls; if(text!==undefined)e.textContent=text; return e;}
async function loadLang(lang){
  if(!LANGS.includes(lang)) lang='en';
  const res=await fetch(`lang/${lang}.json`,{cache:'no-store'});
  if(!res.ok) throw new Error('Language file not found: '+lang);
  state.data=await res.json(); state.lang=lang; localStorage.setItem('btcwh_lang',lang); document.documentElement.lang=lang; document.documentElement.dir=state.data.direction||'ltr'; render();
}
function render(){const d=state.data;if(!d)return;renderNav(d);renderHero(d);renderStats(d);renderSections(d);}
function renderNav(d){const nav=$('#nav'); nav.innerHTML=''; const ids=['highlights','market','vision','principles','ecosystem','technology','tokenomics','presale','roadmap','pay','security','governance','community','whitepaper','links','faq']; const map=d.nav; const labelMap={highlights:map.about,market:map.market,vision:map.vision,principles:map.principles,ecosystem:map.ecosystem,technology:map.technology,tokenomics:map.tokenomics,presale:map.presale,roadmap:map.roadmap,pay:map.pay,security:map.security,governance:map.governance,community:map.community,whitepaper:map.whitepaper,links:map.links,faq:map.faq}; ids.forEach(id=>{const a=el('a',null,labelMap[id]||id);a.href='#'+id;nav.appendChild(a)});}
function renderHero(d){$('#heroEyebrow').textContent=d.hero.eyebrow;$('#heroTitle').textContent=d.hero.title;$('#heroLead').textContent=d.hero.lead;$('#heroPrimary').textContent=d.hero.primary;$('#heroSecondary').textContent=d.hero.secondary;$('#heroNotice').textContent=d.hero.notice;}
function renderStats(d){const box=$('#quickStats'); box.innerHTML=''; const stats=[[d.meta.supply,'21,000,000 BTCWH'],[d.meta.network,'Solana'],[d.meta.presale,'1,050,000 BTCWH'],[d.meta.minimum,'10 USDT'],[d.meta.contract,'GTUy76...7eJCTA']]; stats.forEach(([label,val])=>{const s=el('div','stat');s.appendChild(el('span',null,label));s.appendChild(el('strong',null,val));box.appendChild(s);});}
function renderSections(d){const root=$('#content'); root.innerHTML=''; d.sections.forEach(sec=>{const section=el('section','section'); section.id=sec.id; const head=el('div','sectionHead'); const left=el('div'); left.appendChild(el('p','eyebrow',sec.kicker||'')); left.appendChild(el('h2',null,sec.title)); head.appendChild(left); const paras=el('div','paras'); (sec.paras||[]).forEach(p=>paras.appendChild(el('p',null,p))); head.appendChild(paras); section.appendChild(head);
  if(sec.bullets){const ul=el('ul','bullets'); sec.bullets.forEach(b=>ul.appendChild(el('li',null,b))); section.appendChild(ul);}
  if(sec.cards){const grid=el('div','gridCards'); sec.cards.forEach(([a,b])=>{const c=el('div','card'); c.appendChild(el('b',null,a)); c.appendChild(el('p',null,b)); grid.appendChild(c);}); section.appendChild(grid);}
  if(sec.table){const wrap=el('div','tableWrap'); const table=el('table'); const tr=el('tr'); ['category','share','tokens'].forEach(k=>tr.appendChild(el('th',null,d.global.tableHeaders[k]))); const thead=el('thead');thead.appendChild(tr);table.appendChild(thead); const tb=el('tbody'); sec.table.forEach(r=>{const tr=el('tr');r.forEach(x=>tr.appendChild(el('td',null,x)));tb.appendChild(tr)}); table.appendChild(tb);wrap.appendChild(table);section.appendChild(wrap);}
  if(sec.timeline){const tl=el('div','timeline'); sec.timeline.forEach(([a,b])=>{const c=el('div','card'); c.appendChild(el('b',null,a)); c.appendChild(el('p',null,b)); tl.appendChild(c);}); section.appendChild(tl);}
  if(sec.docs){const dg=el('div','docGrid'); d.docs.forEach(doc=>{const a=el('a',null,doc.label);a.href=doc.url;a.target='_blank';a.rel='noopener';a.appendChild(el('small',null,d.global.docTitle));dg.appendChild(a)});section.appendChild(dg);}
  if(sec.links){const lg=el('div','linkGrid'); d.officialLinks.forEach(link=>{const a=el('a',null,link.label);a.href=link.url;a.target='_blank';a.rel='noopener';a.appendChild(el('small',null,link.url));lg.appendChild(a)});section.appendChild(lg);}
  if(sec.faq){sec.faq.forEach(([q,a])=>{const item=el('div','faqItem');item.appendChild(el('h3',null,q));item.appendChild(el('p',null,a));section.appendChild(item)});}
  root.appendChild(section); });}
$('#languageSelect').value=state.lang; $('#languageSelect').addEventListener('change',e=>loadLang(e.target.value)); $('#menuBtn').addEventListener('click',()=>$('#nav').classList.toggle('open')); $('#themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('btcwh_theme',document.body.classList.contains('dark')?'dark':'light');$('#themeToggle').textContent=document.body.classList.contains('dark')?'☀️':'🌙';}); if(localStorage.getItem('btcwh_theme')==='dark'){document.body.classList.add('dark');$('#themeToggle').textContent='☀️';}
loadLang(state.lang).catch(err=>{console.error(err); if(state.lang!=='en')loadLang('en');});
