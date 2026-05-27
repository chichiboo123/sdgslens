// App state
let cur = null;        // current news object
let curIdx = -1;
let sel = [];          // selected SDG numbers
let done = 0;
let used = [];
let hintOpen = false;

const STORAGE_KEY = 'sdgslens.lang';

function $(id) { return document.getElementById(id); }

/* ---------------- i18n rendering ---------------- */
function applyI18n() {
  document.documentElement.lang = I18N[CURRENT_LANG].htmlLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (typeof val === 'string') el.innerHTML = val;
  });
  // Buttons/inputs that aren't just text nodes
  $('life-input').placeholder = t('life.placeholder');
  // Prompts
  const lp = $('lp-row');
  lp.innerHTML = '';
  t('life.prompts').forEach(p => {
    const b = document.createElement('button');
    b.className = 'lp'; b.type = 'button';
    b.textContent = p.trim() + '...';
    b.onclick = () => { const ta = $('life-input'); ta.value = p; ta.focus(); };
    lp.appendChild(b);
  });
  // SDG grid labels
  document.querySelectorAll('.sc').forEach((el, i) => {
    const labelEl = el.querySelector('.sl');
    if (labelEl) labelEl.textContent = t('sdgLabels')[i];
  });
  // Action buttons text refresh (preserve icon)
  refreshActionLabels();
  // Howto
  const list = $('howto-list');
  list.innerHTML = '';
  t('help.steps').forEach(s => {
    const li = document.createElement('li');
    li.innerHTML = s;
    list.appendChild(li);
  });
  // If a news is currently shown in the placeholder state, refresh news text
  if (curIdx >= 0) renderNews();
}

function refreshActionLabels() {
  const fetchBtn = $('fetch-btn');
  const isAgain = curIdx >= 0;
  fetchBtn.querySelector('span:last-child').textContent =
    isAgain ? t('actions.fetchAgain') : t('actions.fetch');
  const hintBtn = $('hint-btn');
  hintBtn.querySelector('span:last-child').textContent =
    hintOpen ? t('actions.hintHide') : t('actions.hint');
  hintBtn.querySelector('.material-symbols-rounded').textContent =
    hintOpen ? 'visibility_off' : 'lightbulb';
}

/* ---------------- Steps ---------------- */
function setStep(s) {
  [1,2,3].forEach(i => {
    const el = $('step'+i);
    el.classList.remove('on','ok');
    if (i < s) el.classList.add('ok');
    else if (i === s) el.classList.add('on');
  });
}

/* ---------------- SDG grid ---------------- */
function buildGrid() {
  const g = $('sdg-grid');
  g.innerHTML = '';
  for (let i = 0; i < 17; i++) {
    const n = i+1;
    const d = document.createElement('div');
    d.className = 'sc';
    d.id = 'sc'+n;
    d.style.background = SDG_COLORS[i];
    d.setAttribute('role','button');
    d.setAttribute('aria-pressed','false');
    d.setAttribute('tabindex','0');
    d.setAttribute('aria-label', `SDG ${n}`);
    d.innerHTML = `<span class="sn">${n}</span><span class="sl">${t('sdgLabels')[i]}</span>`;
    d.onclick = () => toggleSDG(n, d);
    d.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSDG(n, d);
      }
    };
    g.appendChild(d);
  }
}

function toggleSDG(n, el) {
  if (sel.includes(n)) {
    sel = sel.filter(x => x !== n);
    el.classList.remove('sel');
    el.setAttribute('aria-pressed','false');
  } else {
    sel.push(n);
    el.classList.add('sel');
    el.setAttribute('aria-pressed','true');
  }
  const show = sel.length > 0;
  $('life-sec').style.display = show ? 'block' : 'none';
  $('sub-btn').style.display = show ? 'flex' : 'none';
  const counter = $('sel-count');
  if (show) {
    counter.hidden = false;
    $('sel-num').textContent = sel.length;
  } else {
    counter.hidden = true;
  }
  setStep(show ? 2 : 1);
}

function updateStreakBadge() {
  $('cnt').textContent = done;
  $('streak-badge').classList.toggle('zero', done === 0);
}

/* ---------------- Hint ---------------- */
function toggleHint() {
  if (!cur) return;
  hintOpen = !hintOpen;
  $('hint-box').style.display = hintOpen ? 'block' : 'none';
  $('hint-box').textContent = newsLoc(cur, CURRENT_LANG).hint;
  $('hint-btn').classList.toggle('is-active', hintOpen);
  refreshActionLabels();
}

/* ---------------- News locale helper ---------------- */
// Returns localized fields for cur news item, falling back to 'ko' if lang not present.
function newsLoc(item, lang) {
  if (item.i18n) {
    return item.i18n[lang] || item.i18n['ko'];
  }
  // Legacy flat format (Korean only)
  return {
    source: item.source, title: item.title, body: item.body,
    hint: item.hint, fc: item.fc, fp: item.fp, fm: item.fm,
    lc: item.lc, bonus: item.bonus,
  };
}
function newsTags(item, lang) {
  if (item.tags && !Array.isArray(item.tags)) {
    return item.tags[lang] || item.tags['ko'];
  }
  return item.tags || [];
}

/* ---------------- News ---------------- */
function fetchNews() {
  const btn = $('fetch-btn');
  btn.disabled = true;
  btn.querySelector('span:last-child').textContent = t('actions.fetching');
  btn.querySelector('.material-symbols-rounded').textContent = 'hourglass_top';

  sel = [];
  document.querySelectorAll('.sc').forEach(c => { c.classList.remove('sel'); c.setAttribute('aria-pressed','false'); });
  ['life-sec','res-sec','hint-box'].forEach(id => $(id).style.display = 'none');
  $('sub-btn').style.display = 'none';
  $('next-btn').style.display = 'none';
  $('retry-btn').style.display = 'none';
  $('life-input').value = '';
  $('bonus-card').style.display = 'none';
  $('sel-count').hidden = true;
  $('hint-btn').classList.remove('is-active');
  hintOpen = false;
  setStep(1);

  if (used.length === NEWS_DB.length) used = [];
  const avail = NEWS_DB.map((_, i) => i).filter(i => !used.includes(i));
  curIdx = avail[Math.floor(Math.random()*avail.length)];
  used.push(curIdx);
  cur = NEWS_DB[curIdx];

  setTimeout(() => {
    renderNews();
    $('hint-btn').style.display = 'inline-flex';
    btn.disabled = false;
    btn.querySelector('.material-symbols-rounded').textContent = 'autorenew';
    refreshActionLabels();
    setStep(1);
  }, 320);
}

function renderNews() {
  if (!cur) return;
  const loc = newsLoc(cur, CURRENT_LANG);
  $('nsrc-txt').textContent = loc.source;
  $('ntitle').textContent = loc.title;
  $('nbody').textContent = loc.body;
  $('ntags').innerHTML = newsTags(cur, CURRENT_LANG).map(x => `<span class="ntag">#${x}</span>`).join('');
  const nl = $('nlink');
  nl.href = cur.url; nl.style.display = 'inline-flex';
  if (hintOpen) $('hint-box').textContent = loc.hint;
}

/* ---------------- Analyze ---------------- */
function analyze() {
  if (!cur || sel.length === 0) return;
  setStep(3);
  const correct = cur.correct;
  const hit = sel.filter(n => correct.includes(n));
  const pct = Math.round((hit.length/correct.length)*100);
  const loc = newsLoc(cur, CURRENT_LANG);

  let feedback, ico, label;
  if (hit.length === correct.length && sel.length === correct.length) {
    feedback = loc.fc; ico = '🏆'; label = t('result.perfect');
  } else if (hit.length >= Math.ceil(correct.length/2)) {
    feedback = loc.fp; ico = '⭐'; label = t('result.good');
  } else {
    feedback = loc.fm; ico = '🔍'; label = t('result.try');
  }

  $('res-correct').innerHTML = correct.map(n => {
    return `<span class="rchip${sel.includes(n) ? '' : ' miss'}" style="background:${SDG_COLORS[n-1]}">SDG ${n}: ${t('sdgLabels')[n-1]}</span>`;
  }).join('');
  $('res-feedback').textContent = feedback;
  $('score-ico').textContent = ico;
  $('score-num').textContent = label;
  $('score-sub').textContent = t('result.scoreSub')(hit.length, correct.length, pct);

  const lifeText = $('life-input').value.trim();
  $('res-life').textContent = lifeText ? lifeText + '\n\n' + loc.lc : loc.lc;
  $('res-bonus').textContent = loc.bonus;
  $('bonus-card').style.display = 'block';
  $('sub-btn').style.display = 'none';
  $('res-sec').style.display = 'block';
  $('next-btn').style.display = 'inline-flex';
  done++;
  updateStreakBadge();
  $('retry-btn').style.display = 'inline-flex';
  $('res-sec').scrollIntoView({behavior: 'smooth', block: 'start'});
}

function nextNews() {
  $('res-sec').style.display = 'none';
  $('next-btn').style.display = 'none';
  $('retry-btn').style.display = 'none';
  $('hint-btn').style.display = 'none';
  fetchNews();
}

function retryNews() {
  sel = [];
  document.querySelectorAll('.sc').forEach(c => { c.classList.remove('sel'); c.setAttribute('aria-pressed','false'); });
  $('res-sec').style.display = 'none';
  $('next-btn').style.display = 'none';
  $('retry-btn').style.display = 'none';
  $('life-sec').style.display = 'none';
  $('sub-btn').style.display = 'none';
  $('sel-count').hidden = true;
  setStep(1);
  $('news-card').scrollIntoView({behavior: 'smooth', block: 'start'});
}

/* ---------------- Modal ---------------- */
function openHelp() { $('help-modal').hidden = false; }
function closeHelp() { $('help-modal').hidden = true; }

function openDict() {
  renderDict();
  $('dict-modal').hidden = false;
}
function closeDict() { $('dict-modal').hidden = true; }

function renderDict() {
  const D = SDG_DICT[CURRENT_LANG] || SDG_DICT.ko;
  $('dict-title').textContent = D.ui.title;
  const body = $('dict-body');

  const introKeys = D.intro.keys.map(o =>
    `<div class="dict-key"><span class="dict-k">${o.k}</span><span class="dict-v">${o.v}</span></div>`
  ).join('');
  const introBody = D.intro.body.map(p => `<p>${p}</p>`).join('');

  const goals = D.goals.map((g, i) => {
    const n = i + 1;
    const color = SDG_COLORS[i];
    const targets = g.targets.map(t => `<li>${t}</li>`).join('');
    return `
      <details class="dict-goal" style="--gc:${color}">
        <summary>
          <span class="dict-badge" style="background:${color}">${n}</span>
          <span class="dict-gname">${g.name}</span>
          <span class="material-symbols-rounded dict-chev">expand_more</span>
        </summary>
        <div class="dict-goal-body">
          <p class="dict-gdesc">${g.desc}</p>
          <div class="dict-tlabel">${D.ui.targetsLabel}</div>
          <ul class="dict-targets">${targets}</ul>
        </div>
      </details>`;
  }).join('');

  const sources = D.sources.list.map(s => `<li>${s}</li>`).join('');

  body.innerHTML = `
    <section class="dict-intro">
      <h4>${D.ui.introHeading}</h4>
      <div class="dict-intro-card">
        ${introBody}
        <div class="dict-keys">${introKeys}</div>
      </div>
    </section>
    <section class="dict-goals-sec">
      <h4>${D.ui.goalsHeading}</h4>
      <p class="dict-hint"><span class="material-symbols-rounded">touch_app</span> ${D.ui.tapHint}</p>
      <div class="dict-goals">${goals}</div>
    </section>
    <section class="dict-sources">
      <h4><span class="material-symbols-rounded">verified</span> ${D.sources.title}</h4>
      <ul>${sources}</ul>
      <p class="dict-note">${D.sources.note}</p>
    </section>
  `;
}

/* ---------------- Language switch ---------------- */
function switchLang(lang) {
  CURRENT_LANG = lang;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyI18n();
  if (!$('dict-modal').hidden) renderDict();
}

/* ---------------- Init ---------------- */
function init() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) CURRENT_LANG = saved;
  } catch(e){}

  buildGrid();
  applyI18n();
  setStep(1);
  updateStreakBadge();

  $('fetch-btn').addEventListener('click', fetchNews);
  $('hint-btn').addEventListener('click', toggleHint);
  $('sub-btn').addEventListener('click', analyze);
  $('next-btn').addEventListener('click', nextNews);
  $('retry-btn').addEventListener('click', retryNews);
  $('help-btn').addEventListener('click', openHelp);
  $('dict-btn').addEventListener('click', openDict);
  $('help-modal').querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeHelp));
  $('dict-modal').querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeDict));
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => switchLang(b.dataset.lang));
    if (b.dataset.lang === CURRENT_LANG) b.classList.add('active');
    else b.classList.remove('active');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeHelp(); closeDict(); closeMenu(); }
  });

  // Mobile hamburger menu
  const menuBtn = $('menu-btn');
  const menuPanel = document.createElement('div');
  menuPanel.id = 'menu-panel';
  menuPanel.hidden = true;
  document.body.appendChild(menuPanel);

  function buildMenuPanel() {
    const D = SDG_DICT[CURRENT_LANG] || SDG_DICT.ko;
    menuPanel.innerHTML = `
      <div class="mpanel-lang">
        <button class="mpanel-lang-btn${CURRENT_LANG==='ko'?' active':''}" data-lang="ko">KO</button>
        <button class="mpanel-lang-btn${CURRENT_LANG==='en'?' active':''}" data-lang="en">EN</button>
        <button class="mpanel-lang-btn${CURRENT_LANG==='ja'?' active':''}" data-lang="ja">JA</button>
      </div>
      <div class="mpanel-divider"></div>
      <button class="mpanel-btn mpanel-btn-dict" id="mpanel-dict-btn">
        <span class="material-symbols-rounded">menu_book</span>
        <span>${D.ui.title}</span>
      </button>
      <button class="mpanel-btn mpanel-btn-help" id="mpanel-help-btn">
        <span class="material-symbols-rounded">help</span>
        <span>${I18N[CURRENT_LANG].help.title}</span>
      </button>
    `;
    menuPanel.querySelectorAll('.mpanel-lang-btn').forEach(b => {
      b.addEventListener('click', () => { switchLang(b.dataset.lang); buildMenuPanel(); });
    });
    $('mpanel-dict-btn').addEventListener('click', () => { closeMenu(); openDict(); });
    $('mpanel-help-btn').addEventListener('click', () => { closeMenu(); openHelp(); });
  }

  function openMenu() {
    buildMenuPanel();
    const rect = menuBtn.getBoundingClientRect();
    menuPanel.style.top = (rect.bottom + 6) + 'px';
    menuPanel.style.right = (window.innerWidth - rect.right) + 'px';
    menuPanel.style.left = 'auto';
    menuPanel.hidden = false;
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menuPanel.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', e => {
    menuPanel.hidden ? openMenu() : closeMenu();
    e.stopPropagation();
  });

  document.addEventListener('click', closeMenu);
}

document.addEventListener('DOMContentLoaded', init);
