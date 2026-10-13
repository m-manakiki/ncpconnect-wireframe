/* NCPConnect clickable wireframe — renderer, router, index panel.
   Screens are declared with W.screen(id, def) in leader-a.js, leader-b.js, citizen.js.
   def = { app:'L'|'C', f:'0'..'10'|'C0'..'C7', title, sub, back, nav, foot, right, caps:[], body:[nodes], hdr:'none'|'dark'|'red' }
   A node is a string (paragraph) or [type, props]. */
window.W = (function () {
  const S = {}, ORDER = [];
  const FEAT = {
    '0': 'Auth & Onboarding', '1': 'Members', '2': 'Hierarchy', '3': 'Grievances', '4': 'Tasks',
    '5': 'Chat', '6': 'Announcements', '7': 'Approval Letters', '8': 'Events', '9': 'Settings & System', '10': 'Voter Ops',
    'C0': 'Get Started', 'C1': 'Raise a Grievance', 'C2': 'My Grievances', 'C3': 'My Representatives',
    'C4': 'Schemes', 'C5': 'Events & Updates', 'C6': 'Get Help · SOS', 'C7': 'Profile'
  };
  const FEAT_ORDER = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7'];
  const NAV = {
    L: [['Brief', 'L.brief', '▤'], ['People', 'L.m.dir', '👥'], ['Tasks', 'L.t.my', '✓'], ['Chat', 'L.c.inbox', '💬'], ['More', 'L.more', '⋯']],
    C: [['Home', 'C.home', '⌂'], ['Grievance', 'C.g.cat', '📢'], ['Reps', 'C.r.chain', '🏛'], ['Profile', 'C.p.home', '👤']]
  };
  function screen(id, d) { d.id = id; if (!S[id]) ORDER.push(id); S[id] = d; }
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  let toastT;
  function toast(msg) {
    const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('on');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 1800);
  }
  function go(id) {
    if (!id) return;
    if (id === 'back') { history.back(); return; }
    if (!S[id]) { toast('Not drawn in this wireframe: ' + id); return; }
    closeSheet(); location.hash = '#' + id;
  }
  function wire(e, p) {
    if (p.go) e.addEventListener('click', ev => { ev.stopPropagation(); go(p.go); });
    else if (p.sheet) e.addEventListener('click', ev => { ev.stopPropagation(); openSheet(p.sheet); });
    else if (p.toast) e.addEventListener('click', ev => { ev.stopPropagation(); toast(p.toast); });
    if (p.go || p.sheet || p.toast) e.classList.add('tap');
  }
  function openSheet(sh) {
    const ov = document.getElementById('sheet'); const box = ov.querySelector('.sheet-box'); box.innerHTML = '';
    box.appendChild(el('div', 'grab'));
    if (sh.t) box.appendChild(el('div', 'sheet-t', esc(sh.t)));
    sh.body.forEach(n => box.appendChild(node(n)));
    ov.classList.add('on');
  }
  function closeSheet() { document.getElementById('sheet').classList.remove('on'); }
  function av(txt, tone) { return el('span', 'av ' + (tone || ''), esc(txt || '')); }

  const R = {};
  R.h = p => { const w = el('div', 'hd'); w.appendChild(el('div', 'h1', esc(p.t))); if (p.s) w.appendChild(el('div', 'sub', esc(p.s))); return w; };
  R.p = p => el('p', 'p', esc(p.t));
  R.small = p => el('p', 'p small', esc(p.t));
  R.sec = p => el('div', 'sec', esc(p.t));
  R.hr = () => el('div', 'hr');
  R.note = p => el('div', 'note ' + (p.tone || 'info'), esc(p.t));
  R.banner = p => { const b = el('div', 'banner ' + (p.tone || 'navy'), esc(p.t)); wire(b, p); return b; };
  R.kpi = p => { const w = el('div', 'kpi'); p.items.forEach(i => { const k = el('div', 'k ' + (i.tone || '')); k.appendChild(el('div', 'v', esc(i.v))); k.appendChild(el('div', 'l', esc(i.l))); wire(k, i); w.appendChild(k); }); return w; };
  R.pills = p => { const w = el('div', 'pills'); p.items.forEach(i => { const o = typeof i === 'string' ? { t: i } : i; const s = el('span', 'pill ' + (o.tone || ''), esc(o.t)); wire(s, o); w.appendChild(s); }); return w; };
  R.list = p => {
    const w = el('div', 'list');
    p.items.forEach(i => {
      const r = el('div', 'li ' + (i.tone || ''));
      if (i.av) r.appendChild(av(i.av, i.avTone));
      if (i.i) r.appendChild(el('span', 'ico', i.i));
      const m = el('div', 'li-m'); m.appendChild(el('div', 'li-t', esc(i.t))); if (i.s) m.appendChild(el('div', 'li-s', esc(i.s))); r.appendChild(m);
      const rt = el('div', 'li-r');
      if (i.b) rt.appendChild(el('span', 'badge ' + (i.btone || i.tone || ''), esc(i.b)));
      if (i.right) rt.appendChild(el('span', 'li-rt', esc(i.right)));
      if (i.go || i.sheet) rt.appendChild(el('span', 'chev', '›'));
      r.appendChild(rt); wire(r, i); w.appendChild(r);
    });
    return w;
  };
  R.card = p => {
    const c = el('div', 'card ' + (p.tone || ''));
    if (p.t || p.b) { const hdr = el('div', 'card-h'); if (p.av) hdr.appendChild(av(p.av, p.avTone)); const tt = el('div', 'card-tt'); tt.appendChild(el('div', 'card-t', esc(p.t))); if (p.s) tt.appendChild(el('div', 'card-s', esc(p.s))); hdr.appendChild(tt); if (p.b) hdr.appendChild(el('span', 'badge ' + (p.btone || ''), esc(p.b))); c.appendChild(hdr); }
    (p.body || []).forEach(n => c.appendChild(node(n)));
    wire(c, p); return c;
  };
  R.btn = p => {
    const b = el('button', 'btn ' + (p.kind || 'primary')); b.type = 'button'; b.textContent = p.t;
    if (p.hold) { let t; const start = () => { b.classList.add('holding'); t = setTimeout(() => { b.classList.remove('holding'); go(p.go); }, p.hold); }; const stop = () => { clearTimeout(t); b.classList.remove('holding'); };
      b.addEventListener('pointerdown', start); ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => b.addEventListener(ev, stop)); b.classList.add('tap'); return b; }
    if (!p.go && !p.sheet && !p.toast) p.toast = p.t + ' · wireframe action'; wire(b, p); return b;
  };
  R.row = p => { const w = el('div', 'brow'); p.items.forEach(i => w.appendChild(R.btn(i))); return w; };
  R.link = p => { const a = el('a', 'lnk', esc(p.t)); a.href = '#'; a.addEventListener('click', e => e.preventDefault()); if (!p.go && !p.sheet && !p.toast) p.toast = p.t; wire(a, p); return a; };
  R.input = p => { const w = el('label', 'fld'); if (p.label) w.appendChild(el('span', 'lbl', esc(p.label))); const i = el('input'); i.type = p.type || 'text'; i.value = p.v || ''; i.placeholder = p.ph || ''; i.id = 'f' + Math.random().toString(36).slice(2, 8); w.appendChild(i); if (p.hint) w.appendChild(el('span', 'hint', esc(p.hint))); return w; };
  R.ta = p => { const w = el('label', 'fld'); if (p.label) w.appendChild(el('span', 'lbl', esc(p.label))); const i = el('textarea'); i.value = p.v || ''; i.placeholder = p.ph || ''; i.rows = p.rows || 3; i.id = 'f' + Math.random().toString(36).slice(2, 8); w.appendChild(i); if (p.hint) w.appendChild(el('span', 'hint', esc(p.hint))); return w; };
  R.toggle = p => { const w = el('div', 'tg' + (p.on ? ' on' : '') + (p.locked ? ' locked' : '')); const m = el('div', 'tg-m'); m.appendChild(el('div', 'tg-t', esc(p.label))); if (p.s) m.appendChild(el('div', 'tg-s', esc(p.s))); w.appendChild(m); w.appendChild(el('span', 'sw')); if (p.locked) w.appendChild(el('span', 'lock', '🔒')); w.addEventListener('click', () => { if (p.locked) { toast('Set by Top Leader policy'); return; } w.classList.toggle('on'); if (p.go) go(p.go); }); w.classList.add('tap'); return w; };
  R.check = p => { const w = el('div', 'ck' + (p.on ? ' on' : '')); w.appendChild(el('span', 'box')); const m = el('div', 'li-m'); m.appendChild(el('div', 'tg-t', esc(p.label))); if (p.s) m.appendChild(el('div', 'tg-s', esc(p.s))); w.appendChild(m); if (p.right) w.appendChild(el('span', 'li-rt', esc(p.right))); w.addEventListener('click', () => w.classList.toggle('on')); w.classList.add('tap'); return w; };
  R.radio = p => { const w = el('div', 'radios'); if (p.label) w.appendChild(el('div', 'lbl', esc(p.label))); p.opts.forEach((o, i) => { const oo = typeof o === 'string' ? { t: o } : o; const r = el('div', 'rd' + (i === (p.v || 0) ? ' on' : '')); r.appendChild(el('span', 'dot')); const m = el('div', 'li-m'); m.appendChild(el('div', 'tg-t', esc(oo.t))); if (oo.s) m.appendChild(el('div', 'tg-s', esc(oo.s))); r.appendChild(m); r.addEventListener('click', () => { w.querySelectorAll('.rd').forEach(x => x.classList.remove('on')); r.classList.add('on'); if (oo.go) go(oo.go); }); r.classList.add('tap'); w.appendChild(r); }); return w; };
  R.chips = p => { const w = el('div', 'chips'); const sel = Array.isArray(p.v) ? p.v : [p.v == null ? 0 : p.v]; p.opts.forEach((o, i) => { const oo = typeof o === 'string' ? { t: o } : o; const c = el('span', 'chip' + (sel.includes(i) ? ' on' : '') + (oo.tone ? ' ' + oo.tone : ''), esc(oo.t)); c.addEventListener('click', () => { if (!p.multi) w.querySelectorAll('.chip').forEach(x => x.classList.remove('on')); c.classList.toggle('on', p.multi ? !c.classList.contains('on') : true); if (oo.go) go(oo.go); else if (oo.toast) toast(oo.toast); }); c.classList.add('tap'); w.appendChild(c); }); return w; };
  R.seg = p => { const w = el('div', 'seg'); p.opts.forEach((o, i) => { const oo = typeof o === 'string' ? { t: o } : o; const c = el('span', 'sg' + (i === (p.v || 0) ? ' on' : ''), esc(oo.t)); c.addEventListener('click', () => { w.querySelectorAll('.sg').forEach(x => x.classList.remove('on')); c.classList.add('on'); if (oo.go) go(oo.go); }); c.classList.add('tap'); w.appendChild(c); }); return w; };
  R.tabs = p => {
    const w = el('div', 'tabs'); const bar = el('div', 'tabbar'); const panes = el('div', 'panes'); w.appendChild(bar); w.appendChild(panes);
    p.tabs.forEach((t, i) => { const b = el('span', 'tab' + (i === (p.v || 0) ? ' on' : ''), esc(t.t)); const pane = el('div', 'pane'); pane.hidden = i !== (p.v || 0); (t.body || []).forEach(n => pane.appendChild(node(n)));
      b.addEventListener('click', () => { bar.querySelectorAll('.tab').forEach(x => x.classList.remove('on')); b.classList.add('on'); panes.querySelectorAll(':scope > .pane').forEach(x => x.hidden = true); pane.hidden = false; }); b.classList.add('tap'); bar.appendChild(b); panes.appendChild(pane); });
    return w;
  };
  R.steps = p => { const w = el('div', 'steps'); p.labels.forEach((l, i) => { const s = el('div', 'step' + (i < p.cur ? ' done' : i === p.cur ? ' cur' : '')); s.appendChild(el('span', 'num', i < p.cur ? '✓' : String(i + 1))); s.appendChild(el('span', 'sl', esc(l))); w.appendChild(s); }); return w; };
  R.otp = p => { const n = p.n || 6; const w = el('div', 'otp'); const boxes = []; for (let i = 0; i < n; i++) { const b = el('span', 'ob'); boxes.push(b); w.appendChild(b); } let v = p.v || ''; const paint = () => boxes.forEach((b, i) => { b.textContent = v[i] || ''; b.classList.toggle('on', i === v.length); }); paint();
    const fill = el('button', 'btn ghost sm', 'Auto-fill from SMS'); fill.type = 'button'; fill.addEventListener('click', () => { v = (p.code || '482917').slice(0, n); paint(); setTimeout(() => go(p.go), 350); }); const wrap = el('div'); wrap.appendChild(w); wrap.appendChild(fill); return wrap; };
  R.keypad = p => { const n = p.n || 6; const wrap = el('div', 'kp-wrap'); const dots = el('div', 'dots'); const ds = []; for (let i = 0; i < n; i++) { const d = el('span', 'dot'); ds.push(d); dots.appendChild(d); } wrap.appendChild(dots); const k = el('div', 'kp'); let c = 0;
    '123456789'.split('').concat(['⌫', '0', p.bio ? '☉' : '']).forEach(d => { const b = el('button', 'kk', d); b.type = 'button'; if (!d) b.style.visibility = 'hidden'; b.addEventListener('click', () => { if (d === '⌫') { c = Math.max(0, c - 1); } else if (d === '☉') { c = n; } else c = Math.min(n, c + 1); ds.forEach((x, i) => x.classList.toggle('on', i < c)); if (c === n) setTimeout(() => go(p.go), 250); }); k.appendChild(b); }); wrap.appendChild(k); return wrap; };
  R.stars = p => { const w = el('div', 'stars'); const ss = []; for (let i = 1; i <= 5; i++) { const s = el('span', 'st' + (i <= (p.v || 0) ? ' on' : ''), '★'); s.addEventListener('click', () => { ss.forEach((x, j) => x.classList.toggle('on', j < i)); lab.textContent = i + ' / 5 · ' + ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'][i - 1]; }); ss.push(s); w.appendChild(s); } const lab = el('div', 'sub', p.v ? p.v + ' / 5' : 'Tap to rate'); const wrap = el('div'); wrap.appendChild(w); wrap.appendChild(lab); return wrap; };
  R.bar = p => { const w = el('div', 'barw'); if (p.l) { const lr = el('div', 'bar-l'); lr.appendChild(el('span', '', esc(p.l))); lr.appendChild(el('span', 'bar-v', esc(p.r || p.v + '%'))); w.appendChild(lr); } const b = el('div', 'bar ' + (p.tone || '')); const f = el('div', 'fill'); f.style.width = Math.max(0, Math.min(100, p.v)) + '%'; b.appendChild(f); w.appendChild(b); return w; };
  R.tl = p => { const w = el('div', 'tl'); p.items.forEach(i => { const r = el('div', 'tli ' + (i.st || 'todo')); r.appendChild(el('span', 'tdot')); const m = el('div', 'li-m'); m.appendChild(el('div', 'li-t', esc(i.t))); if (i.s) m.appendChild(el('div', 'li-s', esc(i.s))); r.appendChild(m); if (i.right) r.appendChild(el('span', 'li-rt', esc(i.right))); wire(r, i); w.appendChild(r); }); return w; };
  R.grid = p => { const w = el('div', 'grid c' + (p.cols || 3)); p.items.forEach(i => { const t = el('div', 'tile ' + (i.tone || '') + (i.sel ? ' on' : '')); if (i.i) t.appendChild(el('div', 'ti', i.i)); t.appendChild(el('div', 'tt', esc(i.t))); if (i.s) t.appendChild(el('div', 'ts', esc(i.s))); if (!i.go && !i.sheet && !i.toast) i.toast = i.t; wire(t, i); w.appendChild(t); }); return w; };
  R.ph = p => { const b = el('div', 'phbox ' + (p.kind || '')); b.style.height = (p.h || 120) + 'px'; b.appendChild(el('span', '', esc(p.t || 'image'))); wire(b, p); return b; };
  R.qr = p => { const q = el('div', 'qr'); for (let i = 0; i < 64; i++) { const c = el('span'); if ((i * 7 + 3) % 5 < 2 || i % 9 === 0) c.className = 'b'; q.appendChild(c); } const w = el('div', 'qrw'); w.appendChild(q); if (p.t) w.appendChild(el('div', 'sub mono', esc(p.t))); return w; };
  R.heat = p => { const w = el('div', 'heat c' + (p.cols || 4)); p.cells.forEach(c => { const d = el('div', 'hc ' + (c.tone || (c.v >= 80 ? 'ok' : c.v >= 60 ? 'warn' : 'bad'))); d.appendChild(el('div', 'hv', esc(c.v == null ? 'VAC' : c.v + '%'))); d.appendChild(el('div', 'hl', esc(c.t))); wire(d, c); w.appendChild(d); }); return w; };
  R.chat = p => { const w = el('div', 'chat'); p.msgs.forEach(m => { if (m.sys) { w.appendChild(el('div', 'sysmsg', esc(m.t))); return; } const b = el('div', 'msg' + (m.me ? ' me' : '') + (m.tone ? ' ' + m.tone : '')); if (!m.me && m.who) b.appendChild(el('div', 'who', esc(m.who))); b.appendChild(el('div', 'mt', esc(m.t))); b.appendChild(el('div', 'mtime', esc(m.time || ''))); wire(b, m); w.appendChild(b); }); return w; };
  R.composer = p => { const w = el('div', 'composer'); const i = el('input'); i.placeholder = p.ph || 'Message…'; i.id = 'f' + Math.random().toString(36).slice(2, 8); w.appendChild(el('span', 'ico tap', '📎')); w.appendChild(i); const s = el('button', 'send', '↑'); s.type = 'button'; s.addEventListener('click', () => { if (i.value.trim()) { toast('Sent: ' + i.value.trim()); i.value = ''; } else toast('Type a message first'); }); w.appendChild(s); return w; };
  R.calc = p => { const w = el('div', 'calc'); const disp = el('div', 'cdisp', '0'); w.appendChild(disp); const k = el('div', 'ckeys'); ['AC', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+', '0', '.', '='].forEach(d => { const b = el('button', 'cbtn' + (d === '=' ? ' eq' : /[÷×−+]/.test(d) ? ' op' : '') + (d === '0' ? ' wide' : ''), d); b.type = 'button'; if (d === '=') { let t; b.addEventListener('pointerdown', () => { t = setTimeout(() => go(p.go), 1500); }); ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => b.addEventListener(ev, () => clearTimeout(t))); } else b.addEventListener('click', () => { disp.textContent = d === 'AC' ? '0' : (disp.textContent === '0' ? d : disp.textContent + d); }); k.appendChild(b); }); w.appendChild(k); return w; };
  R.fab = p => { const b = el('button', 'fab', esc(p.t)); b.type = 'button'; wire(b, p); return b; };
  R.spark = p => { const w = el('div', 'spark'); (p.v || []).forEach(v => { const b = el('span'); b.style.height = Math.max(4, v) + '%'; w.appendChild(b); }); if (p.l) { const wrap = el('div'); wrap.appendChild(w); wrap.appendChild(el('div', 'sub', esc(p.l))); return wrap; } return w; };
  R.tree = p => { const w = el('div', 'tree'); p.items.forEach(i => { const r = el('div', 'tn d' + (i.d || 0) + (i.tone ? ' ' + i.tone : '')); r.appendChild(el('span', 'tcar', i.kids === false ? '·' : i.open === false ? '▸' : '▾')); if (i.av) r.appendChild(av(i.av, i.avTone)); const m = el('div', 'li-m'); m.appendChild(el('div', 'li-t', esc(i.t))); if (i.s) m.appendChild(el('div', 'li-s', esc(i.s))); r.appendChild(m); if (i.b) r.appendChild(el('span', 'badge ' + (i.btone || ''), esc(i.b))); wire(r, i); w.appendChild(r); }); return w; };
  R.table = p => { const wrap = el('div', 'tblw'); const t = el('table', 'tbl'); const tr = el('tr'); p.cols.forEach(c => tr.appendChild(el('th', '', esc(c)))); t.appendChild(tr); p.rows.forEach(r => { const row = el('tr'); const cells = Array.isArray(r) ? r : r.c; cells.forEach(c => row.appendChild(el('td', '', esc(c)))); if (!Array.isArray(r)) wire(row, r); t.appendChild(row); }); wrap.appendChild(t); return wrap; };

  function node(n) {
    if (typeof n === 'string') return R.p({ t: n });
    const [type, props] = n; const p = props || {};
    if (!R[type]) return el('div', 'note warn', 'Unknown node: ' + type);
    return R[type](p);
  }

  function render(id) {
    const d = S[id]; const ph = document.getElementById('screen'); ph.innerHTML = '';
    if (!d) { ph.appendChild(el('div', 'empty', 'Screen not found: ' + esc(id))); return; }
    const app = d.app || 'L';
    ph.className = 'screen app-' + app + (d.hdr === 'none' ? ' nohdr' : '');
    // status bar
    const sb = el('div', 'statusbar'); sb.appendChild(el('span', '', '9:41')); sb.appendChild(el('span', '', '▲ ◉ ▮')); ph.appendChild(sb);
    if (d.hdr !== 'none') {
      const hd = el('div', 'hdr ' + (d.hdr || ''));
      const bk = el('button', 'back', d.back === false ? '' : '‹'); bk.type = 'button'; if (d.back === false) bk.style.visibility = 'hidden'; bk.addEventListener('click', () => go(typeof d.back === 'string' ? d.back : 'back')); hd.appendChild(bk);
      const tt = el('div', 'hdr-t'); tt.appendChild(el('div', 'ht', esc(d.title || ''))); if (d.sub) tt.appendChild(el('div', 'hs', esc(d.sub))); hd.appendChild(tt);
      const rt = el('button', 'hright', d.right ? d.right.i : ''); rt.type = 'button'; if (!d.right) rt.style.visibility = 'hidden'; else wire(rt, d.right); hd.appendChild(rt);
      ph.appendChild(hd);
    }
    const body = el('div', 'body'); (d.body || []).forEach(n => body.appendChild(node(n))); ph.appendChild(body);
    if (d.foot) { const f = el('div', 'foot'); d.foot.forEach(n => f.appendChild(node(n))); ph.appendChild(f); }
    if (d.nav) { const nv = el('div', 'nav'); NAV[app].forEach(([t, target, ico]) => { const b = el('button', 'ni' + (d.nav === t ? ' on' : '')); b.type = 'button'; b.appendChild(el('span', 'nico', ico)); b.appendChild(el('span', 'nt', esc(t))); b.addEventListener('click', () => go(target)); nv.appendChild(b); }); ph.appendChild(nv); }
    body.scrollTop = 0;
    document.getElementById('crumb').innerHTML = (app === 'L' ? 'Leader App' : 'Citizen App') + ' · §' + esc(d.f) + ' ' + esc(FEAT[d.f] || '') + ' · <span class="mono">' + esc(id) + '</span>';
    const capsEl = document.getElementById('scaps'); capsEl.innerHTML = '';
    (d.caps || []).forEach(c => { const key = String(c); const cf = key.split('.')[0]; const name = (window.CAPS && window.CAPS[cf] && window.CAPS[cf][key]) || ''; capsEl.appendChild(el('span', 'cap', '§' + esc(key) + (name ? ' ' + esc(name) : ''))); });
    document.querySelectorAll('#index .ix-s.on').forEach(x => x.classList.remove('on'));
    const cur = document.querySelector('#index .ix-s[data-id="' + id + '"]'); if (cur) { cur.classList.add('on'); const grp = cur.closest('details'); if (grp) grp.open = true; }
  }

  function coverage() {
    const covered = {}; ORDER.forEach(id => (S[id].caps || []).forEach(c => { covered[String(c).split('.')[0] + ':' + c] = true; }));
    let total = 0, hit = 0; const perF = {};
    FEAT_ORDER.forEach(f => { const caps = (window.CAPS && window.CAPS[f]) || {}; const keys = Object.keys(caps); let h = 0; keys.forEach(k => { total++; if (covered[f + ':' + k]) { hit++; h++; } }); perF[f] = { n: keys.length, h, keys, covered: keys.map(k => covered[f + ':' + k]) }; });
    return { total, hit, perF };
  }

  function buildIndex() {
    const ix = document.getElementById('index-list'); ix.innerHTML = '';
    const cov = coverage();
    const top = el('div', 'ix-top');
    top.appendChild(el('div', 'ix-h', 'Screens'));
    top.appendChild(el('div', 'ix-sub', ORDER.length + ' screens · ' + cov.hit + ' of ' + cov.total + ' capabilities covered'));
    ix.appendChild(top);
    const start = el('div', 'ix-s'); start.dataset.id = 'start'; start.textContent = 'Start · choose an app'; start.addEventListener('click', () => go('start')); ix.appendChild(start);
    ['L', 'C'].forEach(app => {
      ix.appendChild(el('div', 'ix-app', app === 'L' ? 'Leader App' : 'Citizen App'));
      FEAT_ORDER.filter(f => (app === 'L') === !f.startsWith('C')).forEach(f => {
        const ids = ORDER.filter(id => S[id].f === f && S[id].app === app);
        if (!ids.length) return;
        const det = el('details'); const sm = el('summary'); sm.innerHTML = '<span>§' + esc(f) + ' ' + esc(FEAT[f]) + '</span><span class="cnt">' + ids.length + ' · ' + cov.perF[f].h + '/' + cov.perF[f].n + '</span>'; det.appendChild(sm);
        ids.forEach(id => { const s = el('div', 'ix-s'); s.dataset.id = id; s.textContent = S[id].title || id; s.addEventListener('click', () => go(id)); det.appendChild(s); });
        ix.appendChild(det);
      });
    });
    // coverage tab
    const cv = document.getElementById('coverage'); cv.innerHTML = '';
    cv.appendChild(el('div', 'ix-h', 'Capability coverage'));
    cv.appendChild(el('div', 'ix-sub', 'Every capability from the walkthrough decks, ticked when at least one screen implements it.'));
    FEAT_ORDER.forEach(f => { const pf = cov.perF[f]; const det = el('details'); const sm = el('summary'); sm.innerHTML = '<span>§' + esc(f) + ' ' + esc(FEAT[f]) + '</span><span class="cnt">' + pf.h + '/' + pf.n + '</span>'; det.appendChild(sm);
      pf.keys.forEach((k, i) => { const r = el('div', 'cv-r' + (pf.covered[i] ? ' ok' : ' miss')); r.innerHTML = '<span>' + (pf.covered[i] ? '✓' : '○') + '</span><span>§' + esc(k) + ' · ' + esc(window.CAPS[f][k]) + '</span>'; const first = ORDER.find(id => (S[id].caps || []).map(String).includes(k)); if (first) { r.classList.add('tap'); r.addEventListener('click', () => go(first)); } det.appendChild(r); });
      cv.appendChild(det); });
  }

  function boot() {
    buildIndex();
    const route = () => { const id = location.hash.replace(/^#\/?/, '') || 'start'; render(id); };
    window.addEventListener('hashchange', route); route();
    document.getElementById('sheet').addEventListener('click', e => { if (e.target.id === 'sheet') closeSheet(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); if (e.key === 'ArrowLeft' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) history.back(); });
    document.querySelectorAll('.pt').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('.pt').forEach(x => x.classList.remove('on')); b.classList.add('on'); document.querySelectorAll('.ppane').forEach(x => x.hidden = x.id !== b.dataset.pane); }));
    const tg = document.getElementById('ixtoggle'); if (tg) tg.addEventListener('click', () => document.body.classList.toggle('ix-open'));
  }
  return { screen, go, toast, boot, S, ORDER, FEAT, openSheet, closeSheet };
})();
