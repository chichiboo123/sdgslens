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
    d.innerHTML = `<span class="sn">${n}</span><span class="sl">${t('sdgLabels')[i]}</span>`;
    d.onclick = () => toggleSDG(n, d);
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
  setStep(show ? 2 : 1);
}

/* ---------------- Hint ---------------- */
function toggleHint() {
  if (!cur) return;
  hintOpen = !hintOpen;
  $('hint-box').style.display = hintOpen ? 'block' : 'none';
  $('hint-box').textContent = cur.i18n[CURRENT_LANG].hint;
  refreshActionLabels();
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
  $('life-input').value = '';
  $('bonus-card').style.display = 'none';
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
  const loc = cur.i18n[CURRENT_LANG];
  $('nsrc-txt').textContent = loc.source;
  $('ntitle').textContent = loc.title;
  $('nbody').textContent = loc.body;
  $('ntags').innerHTML = cur.tags[CURRENT_LANG].map(x => `<span class="ntag">#${x}</span>`).join('');
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
  const loc = cur.i18n[CURRENT_LANG];

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
  $('cnt').textContent = done;
  $('res-sec').scrollIntoView({behavior: 'smooth', block: 'start'});
}

function nextNews() {
  $('res-sec').style.display = 'none';
  $('next-btn').style.display = 'none';
  $('hint-btn').style.display = 'none';
  fetchNews();
}

/* ---------------- Modal ---------------- */
function openHelp() { $('help-modal').hidden = false; }
function closeHelp() { $('help-modal').hidden = true; }

/* ---------------- Language switch ---------------- */
function switchLang(lang) {
  CURRENT_LANG = lang;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyI18n();
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

  $('fetch-btn').addEventListener('click', fetchNews);
  $('hint-btn').addEventListener('click', toggleHint);
  $('sub-btn').addEventListener('click', analyze);
  $('next-btn').addEventListener('click', nextNews);
  $('help-btn').addEventListener('click', openHelp);
  document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeHelp));
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => switchLang(b.dataset.lang));
    if (b.dataset.lang === CURRENT_LANG) b.classList.add('active');
    else b.classList.remove('active');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeHelp();
  });
}

document.addEventListener('DOMContentLoaded', init);
