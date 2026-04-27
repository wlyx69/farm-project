'use strict';

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

const USERS = [
  { id:'u1', email:'ahmed@test.com',   pw:'123', role:'client',  fn:'أحمد',   ln:'العمري',    phone:'0501234567' },
  { id:'u2', email:'farmer@test.com',  pw:'123', role:'farmer',  fn:'سالم',   ln:'المزروعي',  phone:'0559876543', farm:'مزرعة النخيل الذهبي' },
  { id:'u3', email:'admin@test.com',   pw:'123', role:'admin',   fn:'محمد',   ln:'الإداري',   phone:'0551112233' },
  { id:'u4', email:'farmer2@test.com', pw:'123', role:'farmer',  fn:'خالد',   ln:'الوادي',    phone:'0554443322', farm:'مزرعة الوادي' },
  { id:'u5', email:'farmer3@test.com', pw:'123', role:'farmer',  fn:'عبدالله',ln:'الأخضر',   phone:'0556667788', farm:'مزرعة الخضراء' },
  { id:'u6', email:'farmer4@test.com', pw:'123', role:'farmer',  fn:'فهد',    ln:'الحمضاوي', phone:'0553332211', farm:'مزرعة الحمضيات' },
  { id:'u7', email:'farmer5@test.com', pw:'123', role:'farmer',  fn:'ناصر',   ln:'العشبي',    phone:'0558889900', farm:'مزرعة الأعشاب' },
  { id:'u8', email:'farmer6@test.com', pw:'123', role:'farmer',  fn:'راشد',   ln:'الفاكهاني', phone:'0557776655', farm:'مزرعة الفاكهة' },
];

const PRODUCTS = [
  { id:'p1', name:'تمر المجدول الفاخر',  price:85,  cat:'تمور',  stock:120, emoji:'🌴', farm:'مزرعة النخيل الذهبي', farmerId:'u2', origin:'الأفلاج',  harvest:'2024-10', desc:'تمر مجدول طازج من أجود المزارع، حجم كبير وطعم لا يُضاهى، غني بالعناصر الغذائية.', purchases:45, rating:4.7, ratings:[], img:null },
  { id:'p2', name:'عسل سدر أصلي',        price:180, cat:'عسل',   stock:30,  emoji:'🍯', farm:'مزرعة الوادي',        farmerId:'u4', origin:'السليل',   harvest:'2024-09', desc:'عسل سدر طبيعي 100% بدون أي إضافات، يُجنى من أشجار السدر البرية في جبال الأفلاج.', purchases:28, rating:4.9, ratings:[], img:null },
  { id:'p3', name:'طماطم عضوية',          price:12,  cat:'خضار',  stock:200, emoji:'🍅', farm:'مزرعة الخضراء',       farmerId:'u5', origin:'الأفلاج',  harvest:'2024-11', desc:'طماطم عضوية طازجة بدون مبيدات، تُزرع بالطرق التقليدية البيئية.', purchases:89, rating:4.3, ratings:[], img:null },
  { id:'p4', name:'ليمون حامض طازج',      price:8,   cat:'فواكه', stock:0,   emoji:'🍋', farm:'مزرعة الحمضيات',     farmerId:'u6', origin:'الأفلاج',  harvest:'2024-11', desc:'ليمون حامض طازج من المزرعة، غني بفيتامين C.', purchases:62, rating:4.1, ratings:[], img:null },
  { id:'p5', name:'أعشاب زعتر برية',      price:25,  cat:'أعشاب', stock:60,  emoji:'🌿', farm:'مزرعة الأعشاب',      farmerId:'u7', origin:'السليل',   harvest:'2024-10', desc:'زعتر بري مجفف ومطحون، تُجمع من مناطق السليل الجبلية النظيفة.', purchases:34, rating:4.5, ratings:[], img:null },
  { id:'p6', name:'بطيخ أصفر',            price:15,  cat:'فواكه', stock:45,  emoji:'🍈', farm:'مزرعة الفاكهة',      farmerId:'u8', origin:'الأفلاج',  harvest:'2024-10', desc:'بطيخ أصفر شهي ومحلى بشكل طبيعي، من أفضل أصناف المنطقة.', purchases:19, rating:4.6, ratings:[], img:null },
];

const GUIDES = [
  { id:'g1', title:'🌴 زراعة النخيل في المناخ الجاف',       intro:'تعرف على أسرار زراعة النخيل في المناخ الصحراوي وكيفية الحصول على تمور عالية الجودة.', pts:['اختر الفسائل الصحية من مصادر موثوقة','وفر ريًا منتظمًا خاصةً في موسم الإثمار','استخدم الأسمدة العضوية بدلاً من الكيماوية','اعتنِ بإزالة الفسائل القديمة سنوياً'] },
  { id:'g2', title:'🍯 أسرار إنتاج العسل الطبيعي',           intro:'دليلك الشامل لإنتاج العسل الطبيعي عالي الجودة من خلايا النحل التقليدية.',               pts:['اختر الموقع المناسب بعيدًا عن الكيماويات','راقب صحة الخلية أسبوعياً','تجنب فتح الخلية في الطقس البارد','استخدم معدات نظيفة ومعقمة دائمًا'] },
  { id:'g3', title:'🌿 الزراعة العضوية بلا مبيدات',          intro:'كيف تحول مزرعتك إلى زراعة عضوية معتمدة وتحصل على أعلى الأسعار في السوق.',              pts:['ابدأ بالتربة: أضف السماد العضوي','استخدم الحشرات النافعة لمكافحة الآفات','دور المحاصيل لتجنب استنزاف التربة','وثّق كل خطوة للحصول على شهادة العضوية'] },
  { id:'g4', title:'💧 ترشيد مياه الري في الأفلاج',          intro:'تقنيات حديثة لترشيد استهلاك المياه والحفاظ على مصادر الأفلاج للأجيال القادمة.',         pts:['استخدم نظام التنقيط بدلاً من الغمر','اختر أوقات الري الصباحية أو المسائية','راقب رطوبة التربة بالأجهزة الحديثة','أعد استخدام مياه الصرف الزراعي بعد معالجتها'] },
];

const ADS_DATA = [
  { id:'a1', txt:'🎉 عرض خاص: خصم ١٥٪ على جميع التمور هذا الأسبوع! استخدم كود TAMAR15', start:'2024-11-01', end:'2025-12-31', active:true },
  { id:'a2', txt:'🌿 منتجات عضوية جديدة وصلت من مزارع السليل — شوف المتجر الآن',        start:'2024-10-15', end:'2025-06-30', active:true },
];

// ═══════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════

const state = {
  user:          null,
  page:          'home',
  detail:        null,
  order:         null,
  orderDetail:   null,
  starVal:       0,
  delMode:       'standard',
  payMode:       'card',
  coQty:         1,
  activeChat:    null,
  refundOrderId: null,
  cancelOrderId: null,
  products:      [...PRODUCTS],
  guides:        [...GUIDES],
  ads:           [...ADS_DATA],
  orders: [
    { id:'ORD-1001', userId:'u1', prodId:'p1', prodName:'تمر المجدول الفاخر', prodEmoji:'🌴', farm:'مزرعة النخيل الذهبي', farmerId:'u2', qty:2, price:85,  total:185, del:'standard', delFee:15, pay:'card',  status:'done',    date:'2024-11-01', addr:{name:'أحمد العمري', phone:'0501234567', city:'الرياض',   addr:'حي النزهة'},  notes:'' },
    { id:'ORD-1002', userId:'u1', prodId:'p2', prodName:'عسل سدر أصلي',       prodEmoji:'🍯', farm:'مزرعة الوادي',        farmerId:'u2', qty:1, price:180, total:210, del:'express',  delFee:30, pay:'mada', status:'pending', date:'2024-11-10', addr:{name:'أحمد العمري', phone:'0501234567', city:'الرياض',   addr:'حي المروة'},  notes:'' },
    { id:'ORD-1003', userId:'u1', prodId:'p3', prodName:'طماطم عضوية',         prodEmoji:'🍅', farm:'مزرعة الخضراء',       farmerId:'u2', qty:5, price:12,  total:60,  del:'pickup',   delFee:0,  pay:'cod',  status:'cancel',  date:'2024-10-22', addr:{name:'أحمد العمري', phone:'0501234567', city:'الأفلاج', addr:'حي الورود'},  notes:'', cancelReason:'نفاذ المخزون', cancelNote:'عذراً نفذت الكمية' },
  ],
};

const MSGS = {
  'u1-u2': { with:'u2', withName:'سالم المزروعي', msgs:[
    { from:'u2', txt:'مرحبًا! كيف يمكنني مساعدتك؟',              ts: Date.now()-3600000 },
    { from:'u1', txt:'أريد الاستفسار عن منتج التمر',              ts: Date.now()-3500000 },
    { from:'u2', txt:'تفضل أي استفسار، يسعدني المساعدة 🌴',       ts: Date.now()-3400000 },
  ]},
};

// ═══════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════

function go(page) {
  const guarded = ['orders','messages','chat','account','farmer-dash','admin-dash','reports','ads','checkout','success'];
  if (guarded.includes(page) && !state.user) { go('login'); return; }
  if (page === 'farmer-dash' && state.user?.role !== 'farmer') return;
  if (page === 'admin-dash'  && state.user?.role !== 'admin')  return;
  if (page === 'reports'     && state.user?.role !== 'admin')  return;
  if (page === 'ads'         && state.user?.role !== 'admin')  return;

  state.page = page;
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('active'));
  document.getElementById('pg-' + page)?.classList.add('active');
  document.querySelectorAll('.nav-a').forEach(a => a.classList.remove('active'));
  document.getElementById('na-' + page)?.classList.add('active');

  const renders = {
    home:         renderHome,
    products:     renderProducts,
    orders:       renderOrders,
    messages:     renderMessages,
    guides:       renderGuides,
    account:      renderAccount,
    'farmer-dash':renderFarmerDash,
    'admin-dash': renderAdminDash,
    reports:      renderReports,
    ads:          renderAds,
  };
  renders[page]?.();
}

// ═══════════════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════════════

function doLogin() {
  const em = document.getElementById('l-em').value.trim();
  const u  = USERS.find(u => u.email === em);
  if (!u) { toast('البريد غير موجود', 'red'); return; }
  setUser(u);
  document.getElementById('l-em').value = '';
  document.getElementById('l-pw').value = '';
  toast('مرحباً ' + u.fn + '!', 'lime');
  go('home');
}

function doRegister() {
  const fn = document.getElementById('r-fn').value.trim();
  const em = document.getElementById('r-em').value.trim();
  const pw = document.getElementById('r-pw').value;
  if (!fn || !em || !pw) { toast('يرجى ملء الحقول الإلزامية', 'red'); return; }
  if (USERS.find(u => u.email === em)) { toast('البريد مسجل مسبقاً', 'red'); return; }
  const role = document.querySelector('.role-btn.active')?.id?.replace('rb-', '') || 'client';
  const newUser = { id:'u'+(USERS.length+1), email:em, pw, role, fn, ln:document.getElementById('r-ln').value.trim(), phone:document.getElementById('r-ph').value.trim() };
  USERS.push(newUser);
  setUser(newUser);
  toast('تم إنشاء الحساب!', 'lime');
  go('home');
}

function doLogout() {
  state.user = null;
  updateNav();
  toast('تم تسجيل الخروج', 'gold');
  go('home');
}

function setUser(u) {
  state.user = u;
  updateNav();
}

function updateNav() {
  const u = state.user;
  document.getElementById('auth-btns')?.classList.toggle('hidden', !!u);
  document.getElementById('na-logout')?.classList.toggle('hidden', !u);
  document.getElementById('na-farmer-dash')?.classList.toggle('hidden', u?.role !== 'farmer');
  document.getElementById('na-admin-dash')?.classList.toggle('hidden',  u?.role !== 'admin');
  document.getElementById('na-reports')?.classList.toggle('hidden',     u?.role !== 'admin');
  document.getElementById('na-ads')?.classList.toggle('hidden',         u?.role !== 'admin');
  const su = document.getElementById('sidebar-user');
  if (su) su.classList.toggle('hidden', !u);
  if (u) {
    document.getElementById('su-av').textContent   = u.fn[0];
    document.getElementById('su-name').textContent = u.fn + ' ' + (u.ln || '');
    document.getElementById('su-role').textContent = roleLabel(u.role);
  }
}

function roleLabel(r) {
  return r === 'farmer' ? 'مزارع' : r === 'admin' ? 'مدير النظام' : 'عميل';
}

function selRole(r) {
  document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('rb-' + r)?.classList.add('active');
}

// ═══════════════════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════════════════

function renderHome() {
  const adsEl = document.getElementById('home-ads');
  if (adsEl) {
    adsEl.innerHTML = state.ads.filter(a => a.active)
      .map(a => `<div class="ad-strip">${a.txt}</div>`).join('');
  }
  const hp = document.getElementById('home-prods');
  if (hp) hp.innerHTML = state.products.filter(p => p.stock > 0).slice(0, 4).map(prodCard).join('');
  const hg = document.getElementById('home-guides');
  if (hg) hg.innerHTML = state.guides.slice(0, 2).map(guideCard).join('');
}

// ═══════════════════════════════════════════════════════════
// PRODUCTS
// ═══════════════════════════════════════════════════════════

function renderProducts() {
  doFilter();
  const btn = document.getElementById('add-prod-btn');
  if (btn) btn.classList.toggle('hidden', state.user?.role !== 'farmer' && state.user?.role !== 'admin');
}

function doFilter() {
  const q    = (document.getElementById('srch')?.value || '').toLowerCase();
  const cat  = document.getElementById('f-cat')?.value  || '';
  const sort = document.getElementById('f-sort')?.value || '';
  let list = [...state.products];
  if (q)   list = list.filter(p => p.name.includes(q) || p.farm.includes(q));
  if (cat) list = list.filter(p => p.cat === cat);
  if (sort === 'pa')  list.sort((a, b) => a.price - b.price);
  if (sort === 'pd')  list.sort((a, b) => b.price - a.price);
  if (sort === 'pop') list.sort((a, b) => b.purchases - a.purchases);
  if (sort === 'rat') list.sort((a, b) => b.rating - a.rating);
  const g = document.getElementById('prods-grid');
  if (g) g.innerHTML = list.length ? list.map(prodCard).join('') : '<p style="color:var(--mu);padding:20px">لا توجد نتائج</p>';
}

function prodCard(p) {
  const imgHtml = p.img ? `<img src="${p.img}" alt="${p.name}">` : p.emoji;
  const outBadge = p.stock === 0 ? '<div class="out-badge">نفذ</div>' : '';
  return `<div class="pc" onclick="openDetail('${p.id}')">
    <div class="pc-img">${imgHtml}${outBadge}</div>
    <div class="pc-body">
      <div class="pc-name">${p.name}</div>
      <div class="pc-farm">${p.farm}</div>
      <div class="pc-foot">
        <span class="pc-price">${p.price} <small>ر/كغ</small></span>
        ${starsHtml(p.rating)}
      </div>
    </div>
  </div>`;
}

function starsHtml(r) {
  let s = '';
  for (let i = 1; i <= 5; i++) s += `<span class="${i <= Math.round(r) ? 'sf' : 'se'}" style="font-size:12px">★</span>`;
  return `<span class="stars-sm">${s}<span class="rn">${r.toFixed(1)}</span></span>`;
}

function openDetail(id) {
  const p = state.products.find(x => x.id === id);
  if (!p) return;
  state.detail = p;
  const imgHtml = p.img ? `<img src="${p.img}" alt="${p.name}">` : p.emoji;
  document.getElementById('d-img').innerHTML = imgHtml;
  document.getElementById('d-name').textContent = p.name;
  document.getElementById('d-farm').textContent = '🏡 ' + p.farm;
  document.getElementById('d-rating').innerHTML = starsHtml(p.rating) + ` <span style="font-size:12px;color:var(--mu)">(${p.ratings.length} تقييم)</span>`;
  document.getElementById('d-price').textContent = p.price + ' ر/كغ';
  const sb = document.getElementById('d-stock');
  if (p.stock === 0)      { sb.textContent = 'نفذ المخزون';  sb.className = 'stock-badge stock-ou'; }
  else if (p.stock < 20)  { sb.textContent = 'كمية محدودة'; sb.className = 'stock-badge stock-lo'; }
  else                    { sb.textContent = 'متوفر';         sb.className = 'stock-badge stock-av'; }
  document.getElementById('d-desc').textContent = p.desc;
  document.getElementById('d-badges').innerHTML = `<span class="badge lime">${p.cat}</span><span class="badge mu">📍 ${p.origin}</span>`;
  document.getElementById('d-meta').innerHTML = `
    <div class="meta-it"><span class="meta-k">المزرعة</span><span class="meta-v">${p.farm}</span></div>
    <div class="meta-it"><span class="meta-k">الأصل</span><span class="meta-v">${p.origin}</span></div>
    <div class="meta-it"><span class="meta-k">موسم الحصاد</span><span class="meta-v">${p.harvest}</span></div>
    <div class="meta-it"><span class="meta-k">المبيعات</span><span class="meta-v">${p.purchases}+</span></div>
  `;
  const acts = document.getElementById('d-acts');
  if (state.user?.role === 'farmer' && p.farmerId === state.user.id) {
    acts.innerHTML = `<button class="btn-pri" onclick="openAddProduct('${p.id}')">✏️ تعديل المنتج</button>`;
  } else if (p.stock > 0) {
    acts.innerHTML = `
      <button class="btn-pri" onclick="startCheckout('${p.id}')">🛒 اطلب الآن</button>
      <button class="btn-out" onclick="startChat('${p.farmerId}')">💬 تواصل مع المزارع</button>
    `;
  } else {
    acts.innerHTML = `<button class="btn-out" disabled style="opacity:.5">نفذ المخزون</button>`;
  }
  const rs = document.getElementById('rating-sec');
  rs.classList.toggle('hidden', state.user?.role !== 'client');
  state.starVal = 0;
  document.querySelectorAll('#stars-in .star').forEach(s => s.classList.remove('on'));
  document.getElementById('star-lbl').textContent = 'اختر تقييمك';
  document.getElementById('rv-txt').value = '';
  document.getElementById('rv-photo-name').textContent = '';
  renderReviews(p);
  go('detail');
}

function renderReviews(p) {
  const el = document.getElementById('reviews');
  if (!el) return;
  if (!p.ratings.length) { el.innerHTML = '<p style="color:var(--mu);font-size:13px">لا توجد تقييمات بعد</p>'; return; }
  el.innerHTML = p.ratings.map(r => `
    <div class="rv-card">
      <div class="rv-head">
        <span class="rv-user">${r.name}</span>
        <span class="stars-sm">${'★'.repeat(r.stars)}<span class="rn">${r.stars}/5</span></span>
      </div>
      ${r.txt ? `<div class="rv-text">${r.txt}</div>` : ''}
      ${r.img ? `<img class="rv-img" src="${r.img}" alt="صورة التقييم">` : ''}
      <div class="rv-date">${r.date}</div>
    </div>
  `).join('');
}

function setStar(n) {
  state.starVal = n;
  const labels = ['', 'سيئ', 'مقبول', 'جيد', 'جيد جداً', 'ممتاز'];
  document.getElementById('star-lbl').textContent = labels[n];
  document.querySelectorAll('#stars-in .star').forEach((s, i) => s.classList.toggle('on', i < n));
}

let rvPhotoData = null;
function previewRvPhoto(input) {
  const f = input.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = e => {
    rvPhotoData = e.target.result;
    document.getElementById('rv-photo-name').textContent = f.name;
  };
  reader.readAsDataURL(f);
}

function submitReview() {
  if (!state.user) { toast('سجل دخولك أولاً', 'red'); return; }
  if (!state.starVal) { toast('اختر تقييماً', 'red'); return; }
  state.detail.ratings.push({
    name:  state.user.fn + ' ' + (state.user.ln || ''),
    stars: state.starVal,
    txt:   document.getElementById('rv-txt').value.trim(),
    img:   rvPhotoData,
    date:  new Date().toLocaleDateString('ar-SA'),
  });
  state.detail.rating = state.detail.ratings.reduce((a, r) => a + r.stars, 0) / state.detail.ratings.length;
  rvPhotoData = null;
  document.getElementById('rv-txt').value = '';
  document.getElementById('rv-photo-name').textContent = '';
  state.starVal = 0;
  document.querySelectorAll('#stars-in .star').forEach(s => s.classList.remove('on'));
  document.getElementById('star-lbl').textContent = 'اختر تقييمك';
  renderReviews(state.detail);
  document.getElementById('d-rating').innerHTML = starsHtml(state.detail.rating) + ` <span style="font-size:12px;color:var(--mu)">(${state.detail.ratings.length} تقييم)</span>`;
  toast('شكراً على تقييمك!', 'lime');
}

// ═══════════════════════════════════════════════════════════
// CHECKOUT
// ═══════════════════════════════════════════════════════════

function startCheckout(prodId) {
  if (!state.user) { go('login'); return; }
  const p = state.products.find(x => x.id === prodId);
  if (!p) return;
  state.order = { prod: p };
  state.coQty   = 1;
  state.delMode = 'standard';
  state.payMode = 'card';
  const imgHtml = p.img ? `<img src="${p.img}" alt="${p.name}">` : p.emoji;
  document.getElementById('co-prod').innerHTML = `
    <div class="co-prod-card">
      <div class="co-prod-ico">${imgHtml}</div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:700">${p.name}</div>
        <div style="font-size:11px;color:var(--mu)">${p.farm}</div>
        <div style="font-size:13px;color:var(--lime);font-weight:700;margin-top:4px">${p.price} ر/كغ</div>
      </div>
    </div>
    <div class="qty-row">
      <span style="font-size:13px;color:var(--mu)">الكمية (كغ):</span>
      <button class="qty-b" onclick="changeQty(-1)">−</button>
      <span id="co-qty">${state.coQty}</span>
      <button class="qty-b" onclick="changeQty(1)">+</button>
    </div>
  `;
  if (state.user) {
    document.getElementById('sh-name').value  = state.user.fn + ' ' + (state.user.ln || '');
    document.getElementById('sh-phone').value = state.user.phone || '';
  }
  document.getElementById('sh-city').value = '';
  refreshCsel('sh-city');
  setPay('card');
  setDel('standard');
  go('checkout');
}

function changeQty(d) {
  const p = state.order?.prod;
  if (!p) return;
  state.coQty = Math.max(1, Math.min(p.stock, state.coQty + d));
  document.getElementById('co-qty').textContent = state.coQty;
  updatePriceBox();
}

function setDel(m) {
  state.delMode = m;
  const idMap = { standard: 'do-std', express: 'do-exp', pickup: 'do-pick' };
  Object.entries(idMap).forEach(([key, id]) => {
    document.getElementById(id)?.classList.toggle('active', key === m);
  });
  updatePriceBox();
}

function setPay(m) {
  state.payMode = m;
  ['card', 'mada', 'stc', 'cod'].forEach(k => {
    document.getElementById('pb-' + k)?.classList.toggle('active', k === m);
  });
  document.getElementById('card-flds')?.classList.toggle('hidden', !['card', 'mada'].includes(m));
  document.getElementById('stc-fld')?.classList.toggle('hidden',  m !== 'stc');
  document.getElementById('cod-note')?.classList.toggle('hidden', m !== 'cod');
  updatePriceBox();
}

function getDelFee() { return state.delMode === 'standard' ? 15 : state.delMode === 'express' ? 30 : 0; }
function getCodFee() { return state.payMode === 'cod' ? 5 : 0; }

function updatePriceBox() {
  const p = state.order?.prod;
  if (!p) return;
  const sub   = p.price * state.coQty;
  const dFee  = getDelFee();
  const cFee  = getCodFee();
  const total = sub + dFee + cFee;
  const rows  = [
    { lbl: 'المنتج (' + state.coQty + ' كغ)', val: sub + ' ر' },
    { lbl: 'الشحن',                            val: dFee === 0 ? 'مجاني' : dFee + ' ر' },
  ];
  if (cFee) rows.push({ lbl: 'رسوم الدفع عند الاستلام', val: cFee + ' ر' });
  rows.push({ lbl: 'الإجمالي', val: total + ' ر', total: true });
  document.getElementById('price-rows').innerHTML = rows.map(r =>
    `<div class="pr${r.total ? ' total' : ''}"><span class="lbl">${r.lbl}</span><span>${r.val}</span></div>`
  ).join('');
}

function fmtCardNum(el) {
  const v = el.value.replace(/\D/g, '').slice(0, 16);
  el.value = v.replace(/(.{4})/g, '$1 ').trim();
  const brand = v[0] === '4' ? '💳 Visa' : v[0] === '5' ? '💳 MC' : v.startsWith('9') ? '💳 Mada' : '💳';
  document.getElementById('cc-brand').textContent = brand;
}

function fmtCardExp(el) {
  let v = el.value.replace(/\D/g, '').slice(0, 4);
  if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
  el.value = v;
}

function confirmOrder() {
  const p = state.order?.prod;
  if (!p) return;
  const shName  = document.getElementById('sh-name').value.trim();
  const shPhone = document.getElementById('sh-phone').value.trim();
  const shCity  = document.getElementById('sh-city').value;
  const shAddr  = document.getElementById('sh-addr').value.trim();
  const errEl   = document.getElementById('sh-errors');
  const missing = [];
  if (!shName)  missing.push('⚠️ اسم المستلم مطلوب');
  if (!shPhone) missing.push('⚠️ رقم الجوال مطلوب');
  if (!shCity)  missing.push('⚠️ المدينة مطلوبة');
  if (!shAddr)  missing.push('⚠️ الحي / الشارع مطلوب');
  if (missing.length) {
    errEl.innerHTML = missing.join('<br>');
    errEl.style.display = 'block';
    errEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  errEl.style.display = 'none';
  const dFee = getDelFee(), cFee = getCodFee();
  const ord  = {
    id:        'ORD-' + (1000 + state.orders.length + 1),
    userId:    state.user.id,
    prodId:    p.id, prodName: p.name, prodEmoji: p.emoji,
    farm:      p.farm, farmerId: p.farmerId,
    qty:       state.coQty, price: p.price, total: p.price * state.coQty + dFee + cFee,
    del:       state.delMode, delFee: dFee, pay: state.payMode,
    status:    'pending', date: new Date().toLocaleDateString('ar-SA'),
    addr:      { name: shName, phone: shPhone, city: shCity, addr: shAddr },
    notes:     document.getElementById('sh-notes').value,
  };
  state.orders.unshift(ord);
  p.stock      = Math.max(0, p.stock - state.coQty);
  p.purchases += state.coQty;
  document.getElementById('suc-num').textContent = ord.id;
  document.getElementById('suc-detail').innerHTML = `
    <p style="color:var(--mu);font-size:13px;line-height:2">
      المنتج: ${p.name}<br>الكمية: ${state.coQty} كغ<br>
      الإجمالي: ${ord.total} ريال<br>
      التوصيل: ${ord.del === 'standard' ? 'عادي (٣-٥ أيام)' : ord.del === 'express' ? 'سريع (١-٢ يوم)' : 'استلام من المزرعة'}
    </p>`;
  toast('تم تأكيد الطلب!', 'lime');
  go('success');
}

// ═══════════════════════════════════════════════════════════
// ORDERS
// ═══════════════════════════════════════════════════════════

function renderOrders(filter) {
  filter = filter || 'all';
  const u = state.user;
  let list = state.orders.filter(o =>
    !u || o.userId === u.id || u.role === 'admin' || (u.role === 'farmer' && o.farmerId === u.id)
  );
  if (filter === 'pending') list = list.filter(o => o.status === 'pending');
  if (filter === 'done')    list = list.filter(o => o.status === 'done');
  if (filter === 'cancel')  list = list.filter(o => o.status === 'cancel');
  const el = document.getElementById('ords-list');
  if (!el) return;
  el.innerHTML = list.length ? list.map(orderCard).join('') : '<p style="color:var(--mu);padding:20px">لا توجد طلبات</p>';
}

function filterOrds(btn, f) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderOrders(f);
}

function orderCard(o) {
  const stMap = { pending: '⏳ قيد التنفيذ', done: '✓ مكتمل', cancel: '✕ ملغى' };
  const acts  = orderActions(o);
  const cancelBlock = (o.status === 'cancel' && o.cancelReason)
    ? `<div class="cancel-note" style="font-size:12px;color:rgba(255,255,255,.4)">سبب الإلغاء: ${o.cancelReason}${o.cancelNote ? ' — ' + o.cancelNote : ''}</div>`
    : '';
  return `<div class="ord-card">
    <div class="ord-hd" onclick="openOrderDetail('${o.id}')">
      <span><span class="ord-id">${o.id}</span><span class="ord-dt">${o.date}</span></span>
      <span class="st-badge ${o.status}">${stMap[o.status]}</span>
    </div>
    <div class="ord-body" onclick="openOrderDetail('${o.id}')">
      <div class="ord-ico">${o.prodEmoji}</div>
      <div style="flex:1">
        <div class="ord-nm">${o.prodName}</div>
        <div class="ord-mt">${o.farm} • ${o.qty} كغ</div>
      </div>
      <span class="ord-pr">${o.total} ر</span>
    </div>
    ${acts ? `<div class="ord-acts">${acts}</div>` : ''}
    ${cancelBlock}
  </div>`;
}

function orderActions(o) {
  const u = state.user;
  if (!u) return '';
  let btns = '';
  if (u.role === 'client' && o.userId === u.id) {
    if (o.status === 'done')    btns += `<button class="btn-sm gold" onclick="openRefund('${o.id}')">💰 استرداد</button>`;
    if (o.status === 'pending') btns += `<button class="btn-sm r"    onclick="openCancel('${o.id}')">✕ إلغاء</button>`;
    btns += `<button class="btn-sm g" onclick="openOrderDetail('${o.id}')">📋 التفاصيل</button>`;
  }
  if (u.role === 'farmer' && o.farmerId === u.id && o.status === 'pending') {
    btns += `<button class="btn-sm g" onclick="updateOrderStatus('${o.id}','done')">✓ تأكيد الشحن</button>`;
    btns += `<button class="btn-sm r" onclick="openCancel('${o.id}')">✕ إلغاء</button>`;
  }
  if (u.role === 'admin' && o.status === 'pending') {
    btns += `<button class="btn-sm g" onclick="updateOrderStatus('${o.id}','done')">✓ إنهاء</button>`;
    btns += `<button class="btn-sm r" onclick="updateOrderStatus('${o.id}','cancel')">✕ إلغاء</button>`;
  }
  return btns;
}

function openOrderDetail(id) {
  const o = state.orders.find(x => x.id === id);
  if (!o) return;
  state.orderDetail = o;
  const stMap  = { pending: '⏳ قيد التنفيذ', done: '✓ مكتمل', cancel: '✕ ملغى' };
  const delMap = { standard: 'أرامكس — ٣-٥ أيام', express: 'DHL — ١-٢ يوم', pickup: 'استلام من المزرعة' };
  const payMap = { card: 'بطاقة ائتمانية', mada: 'مدى', stc: 'STC Pay', cod: 'الدفع عند الاستلام' };
  const steps  = ['تأكيد الطلب', 'جاري التحضير', 'تم الشحن', 'تم التسليم'];
  const doneCount = o.status === 'done' ? 4 : o.status === 'cancel' ? 1 : 2;
  const trackHtml = o.status !== 'cancel' ? `
    <div class="od-card tr-full">
      <div class="od-hd">🚚 تتبع الطلب</div>
      <div class="track-wrap">
        ${steps.map((s, i) => `
          <div class="tr-step ${i < doneCount ? 'done' : i === doneCount ? 'active' : ''}">
            <div class="tr-ico">${i < doneCount ? '✓' : '○'}</div>
            <div><div class="tr-lbl">${s}</div></div>
          </div>
        `).join('')}
      </div>
    </div>` : '';
  document.getElementById('ord-detail').innerHTML = `
    <div class="od-card">
      <div class="od-hd">📦 تفاصيل الطلب</div>
      <div class="od-row"><span class="k">رقم الطلب</span><span class="v" style="font-family:monospace">${o.id}</span></div>
      <div class="od-row"><span class="k">التاريخ</span><span class="v">${o.date}</span></div>
      <div class="od-row"><span class="k">الحالة</span><span class="v"><span class="st-badge ${o.status}">${stMap[o.status]}</span></span></div>
      <div class="od-row"><span class="k">المنتج</span><span class="v">${o.prodName}</span></div>
      <div class="od-row"><span class="k">الكمية</span><span class="v">${o.qty} كغ</span></div>
      <div class="od-row"><span class="k">سعر الوحدة</span><span class="v">${o.price} ر/كغ</span></div>
      <div class="od-row"><span class="k">الإجمالي</span><span class="v hl">${o.total} ر</span></div>
    </div>
    <div class="od-card">
      <div class="od-hd">🚚 الشحن والدفع</div>
      <div class="od-row"><span class="k">طريقة التوصيل</span><span class="v">${delMap[o.del]}</span></div>
      <div class="od-row"><span class="k">رسوم الشحن</span><span class="v">${o.delFee === 0 ? 'مجاني' : o.delFee + ' ر'}</span></div>
      <div class="od-row"><span class="k">طريقة الدفع</span><span class="v">${payMap[o.pay]}</span></div>
    </div>
    <div class="od-card">
      <div class="od-hd">📍 عنوان الشحن</div>
      <div class="od-row"><span class="k">المستلم</span><span class="v">${o.addr.name}</span></div>
      <div class="od-row"><span class="k">الجوال</span><span class="v">${o.addr.phone}</span></div>
      <div class="od-row"><span class="k">المدينة</span><span class="v">${o.addr.city}</span></div>
      <div class="od-row"><span class="k">العنوان</span><span class="v">${o.addr.addr}</span></div>
      ${o.notes ? `<div class="od-row"><span class="k">ملاحظات</span><span class="v">${o.notes}</span></div>` : ''}
    </div>
    ${trackHtml}
    <div class="od-card tr-full">
      <div class="od-hd">⚡ الإجراءات</div>
      <div class="od-acts">${orderActions(o) || '<span style="color:var(--mu);font-size:13px">لا توجد إجراءات متاحة</span>'}</div>
    </div>
  `;
  document.getElementById('print-btn').onclick = () => printInvoice(o);
  go('order-detail');
}

function updateOrderStatus(id, status, reason, note) {
  const o = state.orders.find(x => x.id === id);
  if (!o) return;
  o.status = status;
  if (reason) { o.cancelReason = reason; o.cancelNote = note || ''; }
  toast(status === 'done' ? 'تم تحديث الطلب' : 'تم إلغاء الطلب', status === 'done' ? 'lime' : 'red');
  if (state.page === 'orders')       renderOrders();
  if (state.page === 'farmer-dash')  renderFarmerDash();
  if (state.page === 'admin-dash')   renderAdminDash();
}

function openRefund(id) {
  state.refundOrderId = id;
  const o = state.orders.find(x => x.id === id);
  document.getElementById('refund-info').textContent = `الطلب ${id} — إجمالي ${o?.total} ريال`;
  document.getElementById('ref-reason').value = '';
  document.getElementById('ref-detail').value = '';
  showM('m-refund');
}

function submitRefund() {
  if (!document.getElementById('ref-reason').value) { toast('اختر سبب الاسترداد', 'red'); return; }
  closeM('m-refund');
  toast('تم إرسال طلب الاسترداد بنجاح', 'gold');
}

function openCancel(id) {
  state.cancelOrderId = id;
  document.getElementById('can-reason').value = '';
  document.getElementById('can-note').value   = '';
  showM('m-cancel');
}

function confirmCancel() {
  const reason = document.getElementById('can-reason').value;
  if (!reason) { toast('اختر سبب الإلغاء', 'red'); return; }
  updateOrderStatus(state.cancelOrderId, 'cancel', reason, document.getElementById('can-note').value);
  closeM('m-cancel');
}

function printInvoice(o) {
  const delMap = { standard: 'أرامكس — ٣-٥ أيام', express: 'DHL — ١-٢ يوم', pickup: 'استلام من المزرعة' };
  document.getElementById('print-area').innerHTML = `
    <div class="inv-logo">فَلَج — AL-AFLAJ FARMS</div>
    <div style="font-size:12px;color:#555;margin-bottom:16px">فاتورة ضريبية مبسطة</div>
    <table class="inv-table">
      <tr><th>رقم الطلب</th><td>${o.id}</td></tr>
      <tr><th>التاريخ</th><td>${o.date}</td></tr>
      <tr><th>المنتج</th><td>${o.prodName}</td></tr>
      <tr><th>المزرعة</th><td>${o.farm}</td></tr>
      <tr><th>الكمية</th><td>${o.qty} كغ</td></tr>
      <tr><th>سعر الوحدة</th><td>${o.price} ريال</td></tr>
      <tr><th>الشحن</th><td>${delMap[o.del]} — ${o.delFee === 0 ? 'مجاني' : o.delFee + ' ريال'}</td></tr>
      <tr><th class="inv-total">الإجمالي</th><td class="inv-total">${o.total} ريال</td></tr>
    </table>
    <div style="font-size:11px;color:#999;margin-top:20px">شكراً لتسوقك من فَلَج — منصة مزارع الأفلاج</div>
  `;
  window.print();
}

// ═══════════════════════════════════════════════════════════
// MESSAGES / CHAT
// ═══════════════════════════════════════════════════════════

function renderMessages() {
  const el = document.getElementById('convs-wrap');
  if (!el) return;
  const entries = Object.entries(MSGS);
  if (!entries.length) { el.innerHTML = '<p style="color:var(--mu);padding:20px">لا توجد محادثات</p>'; return; }
  el.innerHTML = entries.map(([key, c]) => {
    const last   = c.msgs[c.msgs.length - 1];
    const other  = USERS.find(x => x.id === c.with);
    const nm     = other ? (other.fn + ' ' + (other.ln || '')) : c.withName;
    return `<div class="conv-it" onclick="openChat('${key}')">
      <div class="conv-av">${nm[0]}</div>
      <div style="flex:1;overflow:hidden">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">
          <span class="conv-nm">${nm}</span>
          <span class="conv-tm">${fmtTime(last?.ts)}</span>
        </div>
        <div class="conv-last">${last?.txt || ''}</div>
      </div>
    </div>`;
  }).join('');
}

function startChat(farmerId) {
  if (!state.user) { go('login'); return; }
  const key = [state.user.id, farmerId].sort().join('-');
  if (!MSGS[key]) {
    const farmer = USERS.find(u => u.id === farmerId);
    MSGS[key] = { with: farmerId, withName: farmer ? farmer.fn + ' ' + (farmer.ln || '') : 'مزارع', msgs: [] };
  }
  openChat(key);
}

function openChat(key) {
  state.activeChat = key;
  const c     = MSGS[key];
  const other = USERS.find(u => u.id === c.with);
  const nm    = other ? (other.fn + ' ' + (other.ln || '')) : c.withName;
  document.getElementById('chat-nm').textContent = nm;
  document.getElementById('chat-av').textContent = nm[0];
  renderChatMsgs(key);
  go('chat');
}

function renderChatMsgs(key) {
  const c  = MSGS[key];
  const el = document.getElementById('chat-msgs');
  if (!el) return;
  el.innerHTML = c.msgs.map(m => {
    const isMine = m.from === state.user?.id;
    return `<div class="bubble ${isMine ? 'out' : 'in'}">
      ${m.txt}
      <div class="b-time">${fmtTime(m.ts)}</div>
    </div>`;
  }).join('');
  el.scrollTop = el.scrollHeight;
}

function sendMsg() {
  const key = state.activeChat;
  if (!key || !state.user) return;
  const txt = document.getElementById('msg-txt').value.trim();
  if (!txt) return;
  MSGS[key].msgs.push({ from: state.user.id, txt, ts: Date.now() });
  document.getElementById('msg-txt').value = '';
  renderChatMsgs(key);
  setTimeout(() => {
    MSGS[key].msgs.push({ from: MSGS[key].with, txt: 'شكراً على رسالتك، سأرد عليك قريباً 🌾', ts: Date.now() });
    if (state.activeChat === key) renderChatMsgs(key);
  }, 1500);
}

function autoH(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}

function fmtTime(ts) {
  if (!ts) return '';
  return new Date(ts).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
}

// ═══════════════════════════════════════════════════════════
// GUIDES
// ═══════════════════════════════════════════════════════════

function renderGuides() {
  const el = document.getElementById('guides-grid');
  if (!el) return;
  el.innerHTML = state.guides.map(guideCard).join('');
  document.getElementById('add-guide-btn')?.classList.toggle('hidden', state.user?.role === 'client' || !state.user);
}

function guideCard(g) {
  return `<div class="gc">
    <h4>${g.title}</h4>
    <p>${g.intro}</p>
    <ul>${g.pts.map(p => `<li>${p}</li>`).join('')}</ul>
  </div>`;
}

function saveGuide() {
  const title = document.getElementById('g-title').value.trim();
  const intro = document.getElementById('g-intro').value.trim();
  const pts   = document.getElementById('g-pts').value.trim().split('\n').filter(Boolean);
  if (!title) { toast('أدخل العنوان', 'red'); return; }
  state.guides.push({ id: 'g' + (state.guides.length + 1), title, intro, pts });
  closeM('m-guide');
  renderGuides();
  toast('تم نشر الإرشاد!', 'lime');
}

// ═══════════════════════════════════════════════════════════
// ACCOUNT
// ═══════════════════════════════════════════════════════════

function renderAccount() {
  const el = document.getElementById('acc-content');
  if (!el) return;
  const u = state.user;
  if (!u) { el.innerHTML = '<p style="color:var(--mu);padding:20px">سجل دخولك أولاً</p>'; return; }
  const myOrders = state.orders.filter(o => o.userId === u.id);
  el.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="od-card" style="background:var(--card);border:1px solid var(--bdr);border-radius:var(--r)">
        <div class="od-hd">👤 معلومات الحساب</div>
        <div class="od-row"><span class="k">الاسم</span><span class="v">${u.fn} ${u.ln || ''}</span></div>
        <div class="od-row"><span class="k">البريد</span><span class="v">${u.email}</span></div>
        <div class="od-row"><span class="k">الجوال</span><span class="v">${u.phone || '—'}</span></div>
        <div class="od-row"><span class="k">نوع الحساب</span><span class="v"><span class="badge lime">${roleLabel(u.role)}</span></span></div>
        ${u.farm ? `<div class="od-row"><span class="k">المزرعة</span><span class="v">${u.farm}</span></div>` : ''}
      </div>
      <div class="od-card" style="background:var(--card);border:1px solid var(--bdr);border-radius:var(--r)">
        <div class="od-hd">📦 إحصائياتي</div>
        <div class="od-row"><span class="k">إجمالي الطلبات</span><span class="v hl">${myOrders.length}</span></div>
        <div class="od-row"><span class="k">مكتملة</span><span class="v" style="color:var(--lime)">${myOrders.filter(o => o.status === 'done').length}</span></div>
        <div class="od-row"><span class="k">قيد التنفيذ</span><span class="v" style="color:var(--gold)">${myOrders.filter(o => o.status === 'pending').length}</span></div>
        <div class="od-row"><span class="k">ملغاة</span><span class="v" style="color:#f09070">${myOrders.filter(o => o.status === 'cancel').length}</span></div>
        <div class="od-row"><span class="k">إجمالي المصروف</span><span class="v hl">${myOrders.filter(o => o.status === 'done').reduce((a, o) => a + o.total, 0)} ر</span></div>
      </div>
    </div>
    ${myOrders.length ? `
      <div style="margin-top:18px">
        <div class="sec-head"><h2>آخر الطلبات</h2><a class="sec-a" onclick="go('orders')">كل الطلبات</a></div>
        ${myOrders.slice(0, 3).map(orderCard).join('')}
      </div>` : ''}
  `;
}

// ═══════════════════════════════════════════════════════════
// PRODUCT MODAL
// ═══════════════════════════════════════════════════════════

let photoData = null;

function openAddProduct(id) {
  const p = id ? state.products.find(x => x.id === id) : null;
  document.getElementById('m-prod-title').textContent = p ? 'تعديل المنتج' : 'إضافة منتج';
  document.getElementById('p-eid').value    = p?.id      || '';
  document.getElementById('p-name').value   = p?.name    || '';
  document.getElementById('p-price').value  = p?.price   || '';
  document.getElementById('p-cat').value    = p?.cat     || 'تمور';
  refreshCsel('p-cat');
  document.getElementById('p-stock').value  = p?.stock   || '';
  document.getElementById('p-emoji').value  = p?.emoji   || '';
  document.getElementById('p-origin').value = p?.origin  || '';
  document.getElementById('p-harvest').value= p?.harvest || '';
  document.getElementById('p-desc').value   = p?.desc    || '';
  photoData = p?.img || null;
  const pu    = document.getElementById('photo-up');
  const inner = document.getElementById('photo-inner');
  pu.querySelectorAll('img').forEach(i => i.remove());
  if (p?.img) {
    const img = document.createElement('img');
    img.src   = p.img;
    pu.appendChild(img);
    inner.style.display = 'none';
  } else {
    inner.style.display = 'flex';
  }
  showM('m-product');
}

function prevPhoto(input) {
  const f = input.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = e => {
    photoData = e.target.result;
    const pu  = document.getElementById('photo-up');
    pu.querySelectorAll('img').forEach(i => i.remove());
    const img = document.createElement('img');
    img.src   = photoData;
    pu.appendChild(img);
    document.getElementById('photo-inner').style.display = 'none';
  };
  reader.readAsDataURL(f);
}

function saveProduct() {
  const name  = document.getElementById('p-name').value.trim();
  const price = parseFloat(document.getElementById('p-price').value);
  if (!name || isNaN(price)) { toast('اسم المنتج والسعر إلزاميان', 'red'); return; }
  const eid  = document.getElementById('p-eid').value;
  const data = {
    name, price,
    cat:     document.getElementById('p-cat').value,
    stock:   parseInt(document.getElementById('p-stock').value) || 0,
    emoji:   document.getElementById('p-emoji').value  || '🌿',
    origin:  document.getElementById('p-origin').value.trim(),
    harvest: document.getElementById('p-harvest').value.trim(),
    desc:    document.getElementById('p-desc').value.trim(),
    img:     photoData,
  };
  if (eid) {
    const p = state.products.find(x => x.id === eid);
    if (p) Object.assign(p, data);
    toast('تم تحديث المنتج', 'lime');
  } else {
    state.products.push({ id: 'p' + (state.products.length + 1), farm: state.user?.farm || 'مزرعتي', farmerId: state.user?.id, purchases: 0, rating: 0, ratings: [], ...data });
    toast('تمت إضافة المنتج', 'lime');
  }
  closeM('m-product');
  if (state.page === 'products')    renderProducts();
  if (state.page === 'farmer-dash') renderFarmerDash();
}

// ═══════════════════════════════════════════════════════════
// FARMER DASHBOARD
// ═══════════════════════════════════════════════════════════

function renderFarmerDash() {
  const u  = state.user;
  const el = document.getElementById('farmer-dash');
  if (!el || !u) return;
  const myProds  = state.products.filter(p => p.farmerId === u.id);
  const myOrders = state.orders.filter(o => o.farmerId === u.id);
  const pending  = myOrders.filter(o => o.status === 'pending');
  const revenue  = myOrders.filter(o => o.status === 'done').reduce((a, o) => a + o.total, 0);
  el.innerHTML = `
    <div class="dash-stats">
      <div class="scard g-bdr"><div class="sn">${myProds.length}</div><div class="sl">منتجاتي</div></div>
      <div class="scard gd-bdr"><div class="sn">${pending.length}</div><div class="sl">طلبات جديدة</div></div>
      <div class="scard"><div class="sn">${myOrders.length}</div><div class="sl">إجمالي الطلبات</div></div>
      <div class="scard g-bdr"><div class="sn">${revenue}</div><div class="sl">الإيرادات (ر)</div></div>
    </div>
    ${pending.length ? `
      <div class="pen-sec">
        <h3>⏳ طلبات تحتاج تأكيداً</h3>
        ${pending.map(o => `
          <div class="fp-card">
            <div class="fp-ico">${o.prodEmoji}</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:700">${o.prodName}</div>
              <div style="font-size:11px;color:var(--mu)">${o.addr?.name} • ${o.qty} كغ • ${o.total} ر</div>
            </div>
            <button class="btn-sm g" onclick="updateOrderStatus('${o.id}','done')">✓ تأكيد</button>
            <button class="btn-sm r" onclick="openCancel('${o.id}')">✕</button>
          </div>
        `).join('')}
      </div>` : ''}
    <div class="sec-head"><h2>منتجاتي</h2></div>
    <div class="grid4">
      ${myProds.map(p => `
        <div class="pc" onclick="openAddProduct('${p.id}')">
          <div class="pc-img">${p.img ? `<img src="${p.img}" alt="${p.name}">` : (p.emoji || '🌿')}${p.stock === 0 ? '<div class="out-badge">نفذ</div>' : ''}</div>
          <div class="pc-body">
            <div class="pc-name">${p.name}</div>
            <div class="pc-farm">المخزون: ${p.stock} كغ</div>
            <div class="pc-foot"><span class="pc-price">${p.price} <small>ر</small></span><span class="badge lime">${p.cat}</span></div>
          </div>
        </div>
      `).join('') || '<p style="color:var(--mu)">لا توجد منتجات بعد</p>'}
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// ADMIN DASHBOARD
// ═══════════════════════════════════════════════════════════

function renderAdminDash() {
  const el = document.getElementById('admin-dash');
  if (!el) return;
  const revenue = state.orders.filter(o => o.status === 'done').reduce((a, o) => a + o.total, 0);
  const pending = state.orders.filter(o => o.status === 'pending');
  el.innerHTML = `
    <div class="dash-stats">
      <div class="scard g-bdr"><div class="sn">${USERS.length}</div><div class="sl">المستخدمون</div></div>
      <div class="scard"><div class="sn">${state.products.length}</div><div class="sl">المنتجات</div></div>
      <div class="scard gd-bdr"><div class="sn">${state.orders.length}</div><div class="sl">الطلبات</div></div>
      <div class="scard g-bdr"><div class="sn">${revenue}</div><div class="sl">الإيرادات (ر)</div></div>
    </div>
    ${pending.length ? `
      <div class="pen-sec">
        <h3>⏳ طلبات معلقة (${pending.length})</h3>
        ${pending.slice(0, 5).map(o => `
          <div class="fp-card">
            <div class="fp-ico">${o.prodEmoji}</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:700">${o.prodName}</div>
              <div style="font-size:11px;color:var(--mu)">${o.id} • ${o.total} ر</div>
            </div>
            <button class="btn-sm g" onclick="updateOrderStatus('${o.id}','done')">✓</button>
            <button class="btn-sm r" onclick="updateOrderStatus('${o.id}','cancel')">✕</button>
          </div>
        `).join('')}
      </div>` : ''}
    <div class="sec-head" style="margin-top:4px"><h2>المستخدمون</h2></div>
    <div class="users-table">
      ${USERS.map(u => `
        <div class="u-row">
          <div class="u-av" style="background:${u.role === 'admin' ? '#6a2a6a' : u.role === 'farmer' ? '#2a6a2a' : '#2a4a8a'}">${u.fn[0]}</div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:700">${u.fn} ${u.ln || ''}</div>
            <div style="font-size:11px;color:var(--mu)">${u.email}</div>
          </div>
          <span class="badge ${u.role === 'admin' ? 'red' : u.role === 'farmer' ? 'lime' : 'mu'}">${roleLabel(u.role)}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════
// REPORTS
// ═══════════════════════════════════════════════════════════

function renderReports() {
  const el = document.getElementById('reports-content');
  if (!el) return;
  const done    = state.orders.filter(o => o.status === 'done');
  const revenue = done.reduce((a, o) => a + o.total, 0);
  const catMap  = {};
  state.products.forEach(p => { catMap[p.cat] = (catMap[p.cat] || 0) + p.purchases; });
  const maxCat = Math.max(...Object.values(catMap), 1);
  el.innerHTML = `
    <div class="dash-stats">
      <div class="scard g-bdr"><div class="sn">${revenue}</div><div class="sl">الإيرادات (ر)</div></div>
      <div class="scard"><div class="sn">${done.length}</div><div class="sl">طلبات مكتملة</div></div>
      <div class="scard gd-bdr"><div class="sn">${state.products.reduce((a, p) => a + p.purchases, 0)}</div><div class="sl">إجمالي المبيعات</div></div>
      <div class="scard g-bdr"><div class="sn">${USERS.filter(u => u.role === 'farmer').length}</div><div class="sl">المزارعون</div></div>
    </div>
    <div class="rep-grid">
      <div class="rep-card">
        <h4>📦 المبيعات حسب الفئة</h4>
        ${Object.entries(catMap).map(([cat, n]) => `
          <div class="bar-it">
            <span class="bar-lbl">${cat}</span>
            <div class="bar-bg"><div class="bar-fill" style="width:${Math.round(n / maxCat * 100)}%"></div></div>
            <span class="bar-val">${n}</span>
          </div>`).join('')}
      </div>
      <div class="rep-card">
        <h4>🏆 أكثر المنتجات مبيعاً</h4>
        ${[...state.products].sort((a, b) => b.purchases - a.purchases).slice(0, 5).map((p, i) => `
          <div class="rep-stat">
            <span style="color:var(--mu)">${i + 1}. ${p.name}</span>
            <span style="color:var(--lime);font-weight:700">${p.purchases} مبيعة</span>
          </div>`).join('')}
      </div>
      <div class="rep-card">
        <h4>📊 الطلبات حسب الحالة</h4>
        ${[['قيد التنفيذ','pending','gold'],['مكتملة','done','lime'],['ملغاة','cancel','red']].map(([lbl, st]) => `
          <div class="rep-stat">
            <span style="color:var(--mu)">${lbl}</span>
            <span class="st-badge ${st}">${state.orders.filter(o => o.status === st).length}</span>
          </div>`).join('')}
      </div>
      <div class="rep-card">
        <h4>💳 طرق الدفع</h4>
        ${[['بطاقة','card'],['مدى','mada'],['STC Pay','stc'],['نقد','cod']].map(([lbl, pm]) => `
          <div class="rep-stat">
            <span style="color:var(--mu)">${lbl}</span>
            <span style="font-weight:700">${state.orders.filter(o => o.pay === pm).length}</span>
          </div>`).join('')}
      </div>
    </div>
  `;
}

function printRep() { window.print(); }

// ═══════════════════════════════════════════════════════════
// ADS
// ═══════════════════════════════════════════════════════════

function renderAds() {
  const el = document.getElementById('ads-content');
  if (!el) return;
  el.innerHTML = state.ads.length ? state.ads.map(adCard).join('') : '<p style="color:var(--mu);padding:20px">لا توجد إعلانات</p>';
}

function adCard(a) {
  const now   = Date.now();
  const end   = new Date(a.end).getTime();
  const start = new Date(a.start).getTime();
  let stClass = 'ended', stLbl = 'منتهي';
  if (a.active && now >= start && now <= end) { stClass = 'active';    stLbl = 'نشط'; }
  else if (a.active && now < start)           { stClass = 'scheduled'; stLbl = 'مجدول'; }
  return `<div class="ad-card">
    <div class="ad-top"><div class="ad-txt">${a.txt}</div><span class="ad-st ${stClass}">${stLbl}</span></div>
    <div class="ad-dates">من ${a.start} إلى ${a.end}</div>
    <div class="ad-actions">
      <button class="btn-sm ${a.active ? 'r' : 'g'}" onclick="toggleAd('${a.id}')">${a.active ? 'إيقاف' : 'تفعيل'}</button>
      <button class="btn-sm r" onclick="deleteAd('${a.id}')">حذف</button>
    </div>
  </div>`;
}

function toggleAd(id) {
  const a = state.ads.find(x => x.id === id);
  if (a) { a.active = !a.active; renderAds(); }
}

function deleteAd(id) {
  state.ads = state.ads.filter(x => x.id !== id);
  renderAds();
  toast('تم حذف الإعلان', 'red');
}

function saveAd() {
  const txt   = document.getElementById('ad-txt').value.trim();
  const start = document.getElementById('ad-start').value;
  const end   = document.getElementById('ad-end').value;
  if (!txt || !start || !end) { toast('أدخل جميع الحقول', 'red'); return; }
  state.ads.push({ id: 'a' + (state.ads.length + 1), txt, start, end, active: true });
  closeM('m-ad');
  renderAds();
  toast('تم نشر الإعلان!', 'lime');
}

// ═══════════════════════════════════════════════════════════
// MODALS
// ═══════════════════════════════════════════════════════════

function showM(id)          { document.getElementById(id)?.classList.add('open'); }
function closeM(id)         { document.getElementById(id)?.classList.remove('open'); }
function closeOverlay(el)   { el.classList.remove('open'); }

// ═══════════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════════

let toastTimer;
function toast(msg, type = 'lime') {
  const el = document.getElementById('toast');
  if (!el) return;
  clearTimeout(toastTimer);
  el.textContent = msg;
  el.className   = 'toast ' + type + ' show';
  toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

// ═══════════════════════════════════════════════════════════
// BACKGROUND CANVAS
// ═══════════════════════════════════════════════════════════

function initCanvas() {
  const canvas = document.getElementById('bgc');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, pts = [];
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  function mkPts() {
    pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.5 + .5,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(143,201,58,.55)';
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.lineWidth = 1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 120) {
          ctx.globalAlpha  = (1 - d / 120) * .3;
          ctx.strokeStyle  = 'rgba(143,201,58,.07)';
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  resize(); mkPts(); draw();
  window.addEventListener('resize', () => { resize(); mkPts(); });
}

// ═══════════════════════════════════════════════════════════
// CUSTOM SELECT
// ═══════════════════════════════════════════════════════════

function buildCsel(sel) {
  if (sel.dataset.csel) return;
  sel.dataset.csel = '1';

  const isFsel = sel.classList.contains('f-sel');
  const wrap   = document.createElement('div');
  wrap.className = 'csel' + (isFsel ? ' fsel' : '');
  sel.parentNode.insertBefore(wrap, sel);
  wrap.appendChild(sel);

  const btn  = document.createElement('div');
  btn.className = 'csel-btn';
  const list = document.createElement('div');
  list.className = 'csel-list';
  wrap.insertBefore(btn, sel);
  wrap.appendChild(list);

  function syncBtn() {
    const opt = sel.options[sel.selectedIndex];
    btn.textContent = opt ? opt.text : '';
  }

  function buildItems() {
    list.innerHTML = '';
    Array.from(sel.options).forEach(opt => {
      const item = document.createElement('div');
      item.className = 'csel-item' + (opt.value === sel.value ? ' active' : '');
      item.textContent = opt.text;
      item.onclick = e => {
        e.stopPropagation();
        sel.value = opt.value;
        sel.dispatchEvent(new Event('change'));
        list.querySelectorAll('.csel-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        syncBtn();
        wrap.classList.remove('open');
      };
      list.appendChild(item);
    });
  }

  btn.onclick = e => {
    e.stopPropagation();
    const isOpen = wrap.classList.contains('open');
    document.querySelectorAll('.csel.open').forEach(w => w.classList.remove('open'));
    if (!isOpen) { buildItems(); wrap.classList.add('open'); }
  };

  syncBtn();
}

function initCustomSelects() {
  document.querySelectorAll('select').forEach(buildCsel);
}

function refreshCsel(id) {
  const sel  = document.getElementById(id);
  if (!sel) return;
  const wrap = sel.closest('.csel');
  if (!wrap) return;
  const btn  = wrap.querySelector('.csel-btn');
  const opt  = sel.options[sel.selectedIndex];
  if (btn && opt) btn.textContent = opt.text;
  wrap.querySelectorAll('.csel-item').forEach(item => {
    item.classList.toggle('active', item.textContent === opt?.text);
  });
}

document.addEventListener('click', () => {
  document.querySelectorAll('.csel.open').forEach(w => w.classList.remove('open'));
});

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  initCustomSelects();
  updateNav();
  renderHome();
});
