/* Leader App screens · §5 Chat · §6 Announcements · §7 Letters · §8 Events · §9 Settings · §10 Voter Ops */
(function () {
  const s = W.screen;

  /* ---------- §5 Chat ---------- */
  s('L.c.inbox', { app: 'L', f: '5', title: 'Chats', sub: 'Sakhi Priya · 5 assignments · 14 groups', back: false, nav: 'Chat', right: { i: '+', sheet: { t: 'Compose', body: [['list', { items: [{ i: '👤', t: 'Direct message (line of sight)', go: 'L.c.dm' }, { i: '👥', t: 'Create a custom group · §5.3', go: 'L.c.newgroup' }, { i: '📣', t: 'Designation broadcast · §5.25', go: 'L.c.broadcast' }] }]] } }, caps: ['5.19', '5.7', '5.9', '5.2'], body: [
    ['banner', { t: 'RECEIVING ACROSS · Booth Vol · Mahila · Drive · 2 more ▾', tone: 'gold', go: 'L.c.resolver' }],
    ['input', { ph: '⌕ search across all conversations · from:Anita · type:voice · has:photo' }],
    ['sec', { t: 'Pinned · primary assignment' }],
    ['list', { items: [{ av: 'B', t: 'Booth Vols · Wakad B-47', s: 'Ravi: tomorrow’s banner installation at 7 AM · 📌 4 pinned', b: '3', btone: 'danger', right: '2 min', go: 'L.c.group' }] }],
    ['sec', { t: 'Mahila Aghadi · secondary' }],
    ['list', { items: [{ av: 'M', t: 'Mahila · Wakad VS', s: 'Anita: welcome new members joining today · 18 members · @you', b: 'WING · PRIVATE', btone: 'purple', right: '14 min', go: 'L.c.wing' }] }],
    ['sec', { t: 'Ad-hoc units' }],
    ['list', { items: [{ av: 'D', t: 'Membership Drive 2026', s: 'Anil: 84 new members logged today · 96 % · archives 31 Dec', b: '47d LEFT', btone: 'gold', right: '1 h', go: 'L.c.adhoc' }] }],
    ['sec', { t: 'Direct messages · line of sight' }],
    ['list', { items: [{ av: 'R', t: 'Ravi Kumar', s: 'Will visit Lane 7 → ✓✓ · Booth Pres Wakad', right: '3 h', go: 'L.c.dm' }, { av: 'L', t: 'Lakshmi B. (citizen)', s: 'tank fix tomorrow 11 AM → convert to ticket?', b: 'CONNECTED', btone: 'ok', go: 'L.c.citizen' }] }],
    ['list', { items: [{ t: '⊟ 8 more groups · Booth Pres-Wakad · MH State · Yuva-Pune · 5 archived', s: 'long-press a row → mute · archive · pin · notification prefs', tone: 'muted', sheet: { t: 'Chat options', body: [['list', { items: [{ t: 'Mute', toast: 'Muted · personal only' }, { t: 'Archive', toast: 'Archived · accessible via collapse' }, { t: 'Pin to top', toast: 'Pinned' }, { t: 'Notification preferences', go: 'L.c.prefs' }] }]] } }] }],
    ['sec', { t: 'Lead surfaces' }],
    ['list', { items: [{ i: '👁', t: 'Observe a sub-tree group', go: 'L.c.observe' }, { i: '🛡', t: 'Moderation & audit console', go: 'L.c.mod' }, { i: '🧭', t: 'Membership resolver (admin)', go: 'L.c.resolver' }] }]
  ] });
  s('L.c.group', { app: 'L', f: '5', title: 'Booth Vols · Wakad B-47', sub: '18 members · auto-group · §5.2', right: { i: 'ⓘ', sheet: { t: 'Group info', body: [['p', { t: 'Derived from the spine, not human-curated. Membership auto-syncs to the org chart.' }], ['list', { items: [{ t: 'Members by assignment · 18', go: 'L.c.resolver' }, { t: 'Pinned · 4', toast: 'Pinned list' }, { t: 'Notification preferences', go: 'L.c.prefs' }] }]] } }, caps: ['5.2', '5.4', '5.5', '5.8', '5.10', '5.6'], body: [
    ['banner', { t: '📌 Q2 outreach report doc · 4 pins ▾', tone: 'goldlite', toast: 'Pinned message list' }],
    ['chat', { msgs: [{ who: 'Ravi Kumar · Booth Pres', t: 'Tomorrow banner installation at 7 AM · Lane 7. @Sakhi please confirm.', time: '7:14 AM' }, { who: 'Ravi Kumar', t: '🎤 voice note · 0:14 · transcribed inline · 1× 1.5× 2×', time: '7:15 AM', toast: 'Playing voice note' }, { sys: true, t: 'Anita is typing…' }, { me: true, t: 'Confirmed Ravi dada. Will reach 6:50 with helpers.', time: '7:16 AM · ✓✓ 14 of 18 read', sheet: { t: 'Message', body: [['list', { items: [{ t: 'Reply', toast: 'Quoting' }, { t: 'Quote', toast: 'Quoting' }, { t: 'Forward (intra-org only)', toast: 'Forwarding restricted to NCPConnect members' }, { t: 'React 👍', toast: 'Reacted' }, { t: 'Pin', toast: 'Pinned · visible to new joinees' }, { t: 'Delete with reason (Lead+)', go: 'L.c.delete' }] }]] } }, { me: true, t: '📷 Lane 7 site recce just now', time: '7:18 AM · ✓✓ 12 of 18 read', toast: 'Per-recipient read list' }] }],
    ['composer', { ph: 'Message… · 📎 photo · doc · location · contact · 🎤 hold to record' }]
  ] });
  s('L.c.wing', { app: 'L', f: '5', title: 'Mahila Aghadi · Wakad VS', sub: '18 members · wing-private · §5.20', caps: ['5.20', '5.21', '5.19'], body: [
    ['note', { t: 'PRIVATE TO MAHILA AGHADI WING · Main Party Block Leads cannot read this group. Cross-wing topics → create joint-committee chat.', tone: 'purple' }],
    ['chat', { msgs: [{ who: 'Anita Joshi · Block Pres Mahila', t: 'Welcome new joinees today — Nilima, Vandana, Rohini. Pinning Q2 outreach SOP ↓', time: '10:14' }, { sys: true, t: '⊕ Nilima Bhosale joined · auto · §5.19 · tap for audit row' }, { who: 'Priya Deshmukh · ADDITIONAL COVERAGE', t: 'Hi all — covering Wakad VS from National Spokes scope. §5.21 badge clarifies my role.', time: '10:22', tone: 'purple' }, { me: true, t: 'Welcome Priya didi 🌸 Q2 SOP doc was helpful.', time: '10:24 · ✓✓ 16 of 18 read' }] }],
    ['card', { t: 'Members · by assignment', s: '14 primary · 4 additional', go: 'L.c.resolver' }],
    ['btn', { t: '+ Create joint-committee chat with Main Party Wakad', kind: 'gold', toast: 'Wing-leadership approval requested · auto-archives on close' }],
    ['composer', { ph: 'Message Mahila Wakad VS…' }]
  ] });
  s('L.c.observe', { app: 'L', f: '5', title: 'Booth Vols · Wakad B-47', sub: 'Sunita Joshi · Block Lead Haveli', caps: ['5.11', '5.12', '5.15'], body: [
    ['banner', { t: '👁 YOU ARE OBSERVING · READ-ONLY · members can see this banner · §5.11 · tap to exit', tone: 'teal', go: 'L.c.inbox' }],
    ['chat', { msgs: [{ who: 'Ravi · Booth Pres', t: 'Banner at 7 AM. Anyone has spare zip-ties? Mine ran out.', time: '7:14 AM' }, { who: 'Sakhi', t: 'Will bring extras — 50 pieces.', time: '7:16 AM' }, { who: 'Vikas', t: 'Forwarded WhatsApp meme about rival party leader. ⚠ flagged by §5.15 AI moderation', time: '7:21 AM', tone: 'danger', sheet: { t: 'Lead actions', body: [['list', { items: [{ t: 'Whisper to author', toast: 'Whisper composer below' }, { t: 'Delete with reason', go: 'L.c.delete' }, { t: 'Pin for action', toast: 'Pinned' }] }]] } }] }],
    ['card', { t: 'WHISPER · §5.12 · visible only to Vikas', s: 'To: Vikas Joshi · Regional Coordinator · in this group as Booth Vol', tone: 'gold', body: [['ta', { v: 'Vikas — please delete that forward. No rival memes in official channels.' }], ['small', { t: 'Audit-logged · author appeal window 24h · whisper first, delete-with-reason only if no remediation' }], ['row', { items: [{ t: 'Delete with reason', kind: 'danger', go: 'L.c.delete' }, { t: 'Send whisper →', toast: 'Whisper sent · only Vikas sees it' }] }]] }]
  ] });
  s('L.c.delete', { app: 'L', f: '5', title: 'Delete with reason', sub: '§5.13 · author notified · 24h appeal window', caps: ['5.13'], body: [
    ['card', { t: 'Message to remove', s: 'Vikas · 7:21 AM · “Forwarded WhatsApp meme about rival party leader.”' }],
    ['sec', { t: 'Tier 1 · light (nudge)' }], ['radio', { opts: ['Off-topic for this group', 'Duplicate of pinned content'], v: -1 }],
    ['sec', { t: 'Tier 2 · standard (policy)' }], ['radio', { opts: ['Rival-party content · against §9 policy', 'Forwarded chain content (auto-flag)'], v: 0 }],
    ['sec', { t: 'Tier 3 · severe (legal / DPDP / MCC)' }], ['radio', { opts: ['MCC violation · auto-escalates to Compliance', 'PII leak / DPDP breach'], v: -1 }],
    ['ta', { label: 'Context for the author + audit row', ph: 'Required for Tier 2 / 3' }],
    ['row', { items: [{ t: 'Cancel', kind: 'secondary', go: 'back' }, { t: 'Delete & notify', kind: 'danger', go: 'L.c.appeal' }] }],
    ['small', { t: 'The message is replaced with “removed by Sunita · Tier 2 · appeal opens 24h”, never silently disappeared.' }]
  ] });
  s('L.c.appeal', { app: 'L', f: '5', title: 'Message removed', sub: 'Your post was removed by Sunita Joshi', caps: ['5.14'], body: [
    ['banner', { t: '23h 32m LEFT TO APPEAL · auto-confirmed if no appeal · §5.14', tone: 'warn' }],
    ['card', { t: 'Your removed message', s: 'in Booth Vols · Wakad B-47 · 7:21 AM', body: ['“Forwarded WhatsApp meme about rival party leader.”'] }],
    ['card', { t: 'Reason cited · TIER 2 · STANDARD POLICY', s: 'Rival-party content · against §9 policy', body: ['“No rival memes in official channels. Please restrict campaign humour to personal accounts.”'] }],
    ['btn', { t: 'Accept & close · I understand', kind: 'secondary', go: 'L.c.inbox', toast: 'Remediated · no audit penalty' }],
    ['card', { t: 'Appeal to Ravi Kumar', s: 'One level up · Booth Pres Wakad · not Sunita · impartial review', body: [['ta', { label: 'Appeal note (required)', v: 'It was a meme from the group chat I’m in — didn’t realise it would land here. I’ll be careful. Please reconsider category.' }], ['btn', { t: 'Submit appeal → Ravi', go: 'L.c.inbox' }]] }],
    ['small', { t: 'Tier 3 appeals get 72h and go to Compliance.' }]
  ] });
  s('L.c.adhoc', { app: 'L', f: '5', title: 'Membership Drive 2026', sub: '168 booths · ad-hoc unit · §5.22', caps: ['5.22', '5.4'], body: [
    ['banner', { t: 'UNIT LIFECYCLE · 47 DAYS LEFT · Oct 2025 → 31 Dec 2026 · chat archives 1 Jan 2027', tone: 'gold', go: 'L.t.unit' }],
    ['banner', { t: '📌 Drive tally template + 168 booth list', tone: 'goldlite', toast: 'Pinned items' }],
    ['chat', { msgs: [{ who: 'Anil Patil · CONVENOR', t: 'Day 222 tally: 84 new logs. Cumulative: 3,847 · 68% of 5,652 goal. Keep going! 🌟', time: '6:42 PM' }, { sys: true, t: '⚙ Daily-tally task T-9304 fired · §4.23 · tap to open', go: 'L.t.detail' }, { me: true, t: 'Wakad B-47: 11 today. 2 women, 5 first-time voters.', time: '6:48 PM · ✓✓ 156 of 168 read', sheet: { t: 'Message', body: [['list', { items: [{ t: 'Convert to Task · §4.1', go: 'L.t.new' }, { t: 'Pin to unit', toast: 'Pinned' }, { t: 'Forward to drive Lead', toast: 'Forwarded intra-org' }] }]] } }, { who: 'Vikas · Regional Coord', t: '📍 Aundh Camp — 18 logged · sharing live location · 6 PM camp', time: '6:52 PM', toast: 'Map with live dot' }] }],
    ['note', { t: 'Archive protocol · when the unit dissolves: chat → read-only · transcripts preserved · members notified', tone: 'info' }],
    ['composer', { ph: 'Message drive team…' }]
  ] });
  s('L.c.citizen', { app: 'L', f: '5', title: 'Lakshmi Bhonsle', sub: 'citizen connection · Wakad B-47 · §1.24', caps: ['5.1', '1.24'], body: [
    ['note', { t: 'CONNECTED CITIZEN · DM allowed · moderation applies · ends with connection', tone: 'ok' }],
    ['chat', { msgs: [{ who: 'Lakshmi · yesterday', t: 'Namaste Sakhi tai. Tank issue in our building still pending — 3 days now.', time: '11:14 AM' }, { me: true, t: 'Namaste Lakshmi tai. Let me check with Anil dada today.', time: '11:16 AM ✓✓' }, { who: 'Lakshmi · today', t: 'Tank fully empty now. Today we have no water at all. 🙏', time: '10:08 AM' }] }],
    ['card', { t: 'Convert to §3 ticket?', s: 'AI detected grievance-shape language over > 1 day', tone: 'gold', body: ['SLA tracking will start · routes to Anil (Nagar Sevak) per §2.17 · this DM becomes the audit trail. Lakshmi will be notified.', ['row', { items: [{ t: 'Keep as DM', kind: 'secondary', toast: 'Kept as DM' }, { t: 'Convert → T-5103', go: 'L.g.raise' }] }]] }],
    ['composer', { ph: 'Message Lakshmi…' }]
  ] });
  s('L.c.dm', { app: 'L', f: '5', title: 'Ravi Kumar', sub: 'DM · Booth Pres Wakad · line of sight', caps: ['5.1', '5.5'], body: [
    ['chat', { msgs: [{ who: 'Ravi', t: 'Can you cover Lane 7 banner at 7 AM?', time: '6:40 AM' }, { me: true, t: 'Yes dada. Will visit Lane 7.', time: '6:42 AM · ✓✓ read' }, { who: 'Ravi', t: '👍', time: '6:43 AM' }] }],
    ['small', { t: 'DMs default to line-of-sight (sub-tree + reporting chain). Org policy at §9 can widen or narrow.' }],
    ['composer', { ph: 'Message Ravi…' }]
  ] });
  s('L.c.newgroup', { app: 'L', f: '5', title: 'New custom group', sub: 'Lead-only · for judgement-call groups, not hierarchy', caps: ['5.3'], body: [
    ['input', { label: 'Group name', v: 'Rally day runners · 1 June' }],
    ['input', { ph: 'Add members (line of sight)' }],
    ['list', { items: [{ av: 'SP', t: 'Sakhi Priya', b: 'ADDED', btone: 'ok' }, { av: 'SA', t: 'Sakhi Anita', b: 'ADDED', btone: 'ok' }, { av: 'RK', t: 'Ravi Kumar', b: '+ add', toast: 'Added' }] }],
    ['note', { t: 'Hierarchy groups are never created by hand — the spine creates them (§5.2). Use this only for ad-hoc / informal groups.', tone: 'info' }],
    ['btn', { t: 'Create group', go: 'L.c.inbox' }]
  ] });
  s('L.c.prefs', { app: 'L', f: '5', title: 'Notifications · this chat', sub: 'Booth Vols · Wakad B-47 · §5.18', caps: ['5.18'], body: [
    ['radio', { opts: [{ t: 'All messages' }, { t: '@mentions only' }, { t: 'Muted', s: 'personal · others unaffected' }], v: 0 }],
    ['toggle', { label: 'Override quiet hours for this chat', s: 'Urgent + ack-required always ring', on: false }],
    ['btn', { t: 'Save', go: 'back' }]
  ] });
  s('L.c.mod', { app: 'L', f: '5', title: 'Moderation & audit', sub: 'org · last 7 days · 24 flagged · 17 resolved · 7 pending', right: { i: '⤓', toast: 'PDF + CSV export · audit-logged' }, caps: ['5.15', '5.16', '5.17'], body: [
    ['kpi', { items: [{ v: '7', l: 'flagged · pending', tone: 'warn' }, { v: '142', l: 'deletions · 7d' }, { v: '12', l: 'appeals · 4 upheld' }, { v: '96 %', l: 'AI precision · 30d', tone: 'ok' }] }],
    ['banner', { t: 'AUDIT INTEGRITY · hash-chain unbroken · last verify 9:30 AM · 247,891 rows · tap to verify', tone: 'ok', toast: 'Full chain check running… OK' }],
    ['tabs', { tabs: [
      { t: 'AI queue · 7', body: [['list', { items: [{ t: 'MCC VIOLATION · 0.98 conf', s: 'Yuva · Pune · Vikram J. voice transcript “…opinion poll suggests we’re 4 points ahead in Khed…” · RPA §126 risk', b: 'T3', btone: 'danger', sheet: { t: 'Review', body: [['row', { items: [{ t: 'Hold 24h', kind: 'secondary', toast: 'Held · invisible to others' }, { t: 'Delete T3', kind: 'danger', go: 'L.c.delete' }, { t: 'Not a violation', kind: 'secondary', toast: 'Override logged · classifier learns' }] }]] } }, { t: 'PII LEAK · 0.91 conf', s: 'District Cmt · Manoj S. · text with Aadhaar last-4 · DPDP review', b: 'T2', btone: 'warn', toast: 'Review sheet' }, { t: 'RIVAL-PARTY CONTENT · 0.84', s: 'Booth Vols Wakad · Vikas J. · already actioned via whisper by Sunita', b: 'T2', toast: 'Review sheet' }, { t: '+ 4 more · below 0.80 conf', s: 'spam · duplicate-forward · off-topic', tone: 'muted' }] }]] },
      { t: 'Deletions · 142', body: [['tl', { items: [{ t: 'T3 · MCC · D.Lead Khed', s: '22 May 9:32 · author appealed · upheld', st: 'red' }, { t: 'T2 · Sunita → Vikas', s: '22 May 7:24 · whisper-first · resolved', st: 'done' }, { t: 'T2 · PII · Compliance reviewed', s: '22 May 6:08 · auto-redact · author re-edited', st: 'done' }, { t: 'Appeal upheld · reversed T2', s: 'message restored · Lead notified', st: 'done' }] }]] },
      { t: 'Observe log', body: [['list', { items: [{ t: 'Sunita observed Booth Vols · Wakad B-47', s: '7:20–7:31 AM · banner shown to 18 members' }, { t: 'Top Leader observed District Cmt', s: '21 May · 4 min' }] }]] },
      { t: 'Screenshots', body: [['list', { items: [{ t: 'Screenshot · Mahila · Wakad VS', s: 'Vandana R. · 10:30 AM · server-logged · §5.16' }, { t: 'Screenshot · Booth Vols · B-47', s: 'Vikas J. · 7:22 AM' }] }], ['small', { t: 'Logging informs; it doesn’t block.' }]] }
    ] }],
    ['small', { t: 'SHA-256 chained · weekly notarised export · DPDP retained 5y' }]
  ] });
  s('L.c.broadcast', { app: 'L', f: '5', title: 'All our Nagar Sevaks · MH', sub: 'designation broadcast · 132 recipients · one-way · §5.25', caps: ['5.25', '5.18'], body: [
    ['card', { t: 'Predicate', s: 'desig = Nagar Sevak (sitting) · scope = Maharashtra → 132 active', tone: 'gold', go: 'L.n.resolver', body: [['pills', { items: [{ t: 'excludes 4 term-ended' }, { t: '2 on-leave w/o Acting' }, { t: '1 forgery-flagged', tone: 'danger' }] }]] }],
    ['input', { label: 'Template', v: 'Ward report template · Q2 reminder' }],
    ['ta', { label: 'Body', v: 'Namaskar. Q2 ward report is due 28 May. Please use the attached template (PCMC + PMC variants) and submit to your Block Lead. Top 10 wards by civic-action throughput will be recognised at the next Pune Division meet. — Kiran dada', rows: 5 }],
    ['pills', { items: ['📎 Q2-ward-template.xlsx', '📎 sample-filled-PMC.pdf'] }],
    ['chips', { opts: ['In-app', 'Push', 'SMS', 'WhatsApp'], v: [0, 1], multi: true }],
    ['note', { t: 'Broadcast is one-way · a reply opens a DM to Kiran, never floods the channel. Term-end events auto-drop recipients.', tone: 'info' }],
    ['row', { items: [{ t: 'Save draft', kind: 'secondary', toast: 'Draft saved · versioned' }, { t: 'Schedule', kind: 'secondary', go: 'L.n.list' }, { t: 'Broadcast to 132 →', go: 'L.c.inbox' }] }]
  ] });
  s('L.c.resolver', { app: 'L', f: '5', title: 'Membership resolver', sub: 'Sakhi Priya · 5 assignments · 14 auto-groups · admin view', caps: ['5.19', '5.24', '5.21', '5.23'], body: [
    ['sec', { t: 'Active assignments · §2.5' }],
    ['list', { items: [{ t: 'Booth Volunteer · Wakad B-47', s: 'Main Party · primary · since Nov 2024 → 3 auto-groups · 1 ad-hoc', b: 'PRIMARY', btone: 'ok' }, { t: 'Mahila Aghadi · Wakad VS', s: 'Wing · secondary · since Feb 2026 → 4 auto-groups (private)', b: 'WING', btone: 'purple' }, { t: 'Membership Drive 2026', s: 'Ad-hoc · Oct 25 → Dec 26 → 1 unit chat', b: 'AD-HOC', btone: 'gold' }, { t: 'Mahila Block Pres · Wakad (acting)', s: 'cover for Anita Joshi · 15–22 May → swapped into 2 groups · §5.24 · reverts 23 May 6:00', b: 'ACTING · 1d', btone: 'warn' }, { t: 'EDT · Wakad B-47', s: 'activates poll-day · in-flight readiness', b: 'EDT' }] }],
    ['sec', { t: 'Derived membership · §5.19 + §5.24 · resolver v3.2' }],
    ['list', { items: [{ av: 'B', t: 'Booth Vols · Wakad B-47', s: 'primary', b: 'PINNED', go: 'L.c.group' }, { av: 'M', t: 'Mahila · Wakad VS', s: 'wing · private', go: 'L.c.wing' }, { av: 'A', t: 'Mahila Block Pres · Wakad', s: 'acting · 1d left', b: 'SWAP', btone: 'warn' }, { av: 'D', t: 'Membership Drive 2026', s: 'ad-hoc · 47d', go: 'L.c.adhoc' }, { av: 'P', t: 'Mahila · Pune City (additional)', s: 'additional · §5.21', b: 'ADDN', btone: 'purple' }, { t: '+ 6 more · 2 archived · 1 confidential (hidden from this view · §5.23)', tone: 'muted' }] }],
    ['input', { label: 'As-of date', v: '22 May 2026', hint: 'Replay who was in which group on any past date', go: 'L.s.timetravel' }],
    ['btn', { t: 'Export slate ↗', kind: 'secondary', toast: 'Hash-chained PDF with predicate snapshots' }]
  ] });

  /* ---------- §6 Announcements ---------- */
  s('L.n.inbox', { app: 'L', f: '6', title: 'Announcements', sub: 'Anil Patil · District Lead Pune Rural', right: { i: '+', go: 'L.n.compose' }, caps: ['6.7', '6.3', '6.18', '6.14'], body: [
    ['kpi', { items: [{ v: '7', l: 'unread' }, { v: '2', l: 'urgent · ack pending', tone: 'danger' }, { v: '3', l: 'for Nagar Sevaks', tone: 'gold' }] }],
    ['chips', { opts: ['All', 'Unread · 7', 'Urgent · 2', 'By role ▾'], v: 0 }],
    ['card', { t: 'URGENT · ACK REQUIRED · Constituency strategy call · 6 PM today', s: 'from MLA Kiran Rao · 1 of 184 · §6.8', tone: 'danger', go: 'L.n.urgent', body: [['btn', { t: 'Acknowledge', go: 'L.n.urgent' }]] }],
    ['sec', { t: 'Today · 22 May' }],
    ['list', { items: [{ t: 'PMC: new ward-grant procedure · FY 25-26', s: 'All Nagar Sevaks · PMC + PCMC · 87 reached · 12 acked · 7:20 AM', b: 'DESIGNATION', btone: 'gold', go: 'L.n.translate' }, { t: 'Mahila Aghadi · Q2 outreach plan', s: 'cross-shared via wing-overlap · 11:14 AM', b: 'WING', btone: 'purple', go: 'L.n.translate' }, { t: 'Rally 1 June · Aundh ground · 5 PM', s: 'Calendar · RSVP · permit L-7392 attached · §6.14', b: 'EVENT · RSVP', btone: 'teal', go: 'L.e.volunteer' }] }],
    ['sec', { t: 'Yesterday' }],
    ['list', { items: [{ t: 'Auto report · district scorecard week 21', s: 'PDF attached · §6.15 · 22h ago', b: 'NORMAL', go: 'L.n.report' }] }],
    ['sec', { t: 'Sender tools' }],
    ['list', { items: [{ i: '✎', t: 'Compose (desktop composer · mobile view)', go: 'L.n.compose' }, { i: '📊', t: 'Delivery analytics · my sends', go: 'L.n.analytics' }, { i: '🗓', t: 'Sent · scheduled · recurring', go: 'L.n.list' }] }]
  ] });
  s('L.n.urgent', { app: 'L', f: '6', title: 'Constituency strategy call', sub: 'URGENT · re-surfaces every 4 hours until acked', hdr: 'red', caps: ['6.8', '6.4', '6.25', '6.16'], body: [
    ['card', { av: 'K', t: 'MLA Kiran Rao', s: 'Pune Cantonment VS · MLA Office · composed by Sunita (OSD) under D-4892 · §1.34', avTone: 'gold', go: 'L.m.delaudit' }],
    ['p', { t: 'Calling all District Leads, Block Leads, and active Ward Leads in Pune Cantonment VS for a strategy call ahead of the 1 June rally. Agenda enclosed. Mandatory attendance — please ack to confirm. 6 PM today · join via app + Zoom backup link.' }],
    ['card', { t: 'Audience · §6.16 predicate', s: 'role ≥ Block Lead · scope: Pune Cantonment VS · main+mahila+yuva · status active · 184 recipients', sheet: { t: 'Audience', body: [['p', { t: '184 live · 2 vacancies surfaced · 6 acting fill-ins counted' }], ['btn', { t: 'Open resolver', go: 'L.n.resolver' }]] } }],
    ['list', { items: [{ i: '📄', t: 'Rally-strategy-1June.pdf', s: '2.4 MB · 18 pages', toast: 'In-app PDF viewer' }, { i: '🎥', t: 'Backup Zoom · zoom.us/j/9842…', s: 'opens if app-call fails', toast: 'Link' }] }],
    ['pills', { items: [{ t: '✓ in-app push', tone: 'ok' }, { t: '✓ WhatsApp', tone: 'ok' }, { t: '– SMS' }, { t: '– email' }, { t: 'Q&A disabled' }] }],
    ['check', { label: 'I have read and will attend.', on: false }],
    ['btn', { t: '✓ Acknowledge', go: 'L.n.inbox', toast: 'Acknowledged · pushed to composer in <200ms' }],
    ['link', { t: 'Snooze (re-surfaces in 4h)', toast: 'Snoozed' }]
  ] });
  s('L.n.translate', { app: 'L', f: '6', title: 'वाकड वॉर्ड कमिटी — आठवड्याची बैठक', sub: 'from District Lead Anil · auto-translated EN → MR', caps: ['6.13', '6.12'], body: [
    ['seg', { opts: ['मराठी', 'English'], v: 0 }],
    ['p', { t: 'शनिवार, २४ मे रोजी संध्याकाळी ६ वाजता वाकड वॉर्ड कार्यालयात आठवड्याची आढावा बैठक. सर्व बूथ कार्यकर्त्यांनी हजर राहावे. अजेंडा : Q2 अहवाल · नवीन सदस्य · रॅली तयारी · सखी कार्यक्रम अद्ययावत.' }],
    ['note', { t: 'AUTO-TRANSLATED · tap “English” above to view original · confidence < 70 % lines get an amber pill', tone: 'gold' }],
    ['small', { t: 'Audience · Booth Vols · Wakad Ward 47 · 18 reached' }],
    ['sec', { t: 'Q&A · 3 comments · §6.12' }],
    ['chat', { msgs: [{ who: 'Sakhi Priya · 1h', t: 'हजर राहीन. अजेंडामध्ये सखी कार्यक्रम २ चा उल्लेख आहे का? → shown to composer in EN' }, { who: 'Anil Patil · author · 45m', t: 'हो, सखी-२ अजेंड्यात समाविष्ट आहे. (composer wrote EN, you see MR)', tone: 'gold' }, { who: 'Ravi Kumar · 20m', t: '२४ तारखेला बूथ ४८ मध्ये कार्यक्रम, २५ ला येऊ शकेन का?' }] }],
    ['composer', { ph: 'तुमचा प्रतिसाद … (auto-translates both ways)' }]
  ] });
  s('L.n.analytics', { app: 'L', f: '6', title: 'Delivery · “Q2 outreach”', sub: 'sent 22 May 7:20 AM · 184 recipients · 3h elapsed', caps: ['6.9', '6.10', '6.22', '6.21'], body: [
    ['kpi', { items: [{ v: '84 %', l: 'acknowledged', tone: 'ok' }, { v: '29', l: 'holdouts', tone: 'warn' }, { v: '2', l: 'vacant slots', tone: 'danger' }] }],
    ['bar', { v: 100, l: 'Sent', r: '184' }], ['bar', { v: 97, l: 'Delivered', r: '178' }], ['bar', { v: 90, l: 'Opened', r: '165' }], ['bar', { v: 84, l: 'Acked', r: '155' }],
    ['sec', { t: 'By Block · §6.22 · tap to drill' }],
    ['heat', { cols: 4, cells: [{ t: 'Haveli', v: 95 }, { t: 'Mulshi', v: 91 }, { t: 'Maval', v: 88 }, { t: 'Junnar', v: 72 }, { t: 'Khed', v: 62, toast: 'Khed holdouts listed below' }, { t: 'Ambegaon', v: null, tone: 'vac', toast: 'Vacant Block Lead slot · fill via §1.18' }, { t: 'Bhor', v: 96 }, { t: 'Indapur', v: 89 }] }],
    ['sec', { t: 'Holdouts · Khed Block · tap to nudge' }],
    ['list', { items: [{ av: 'P', t: 'Pradeep S. · Block Lead Khed', s: 'delivered · not opened · last seen 18h ago', b: 'NUDGE', go: 'L.c.dm' }, { av: 'M', t: 'Meera P. · Ward Lead Khed-3', s: 'opened · not acked · 2h since open', b: 'NUDGE', go: 'L.c.dm' }, { av: 'R', t: 'Rohit J. · Ward Lead Khed-7', s: 'on leave · auto-routed to Acting Asha', b: 'ACTING', btone: 'gold' }, { t: '+ 8 more in Khed', tone: 'muted' }] }],
    ['pills', { items: [{ t: 'Main 92 %' }, { t: 'Mahila 80 %', tone: 'purple' }, { t: 'Yuva 70 %' }, { t: 'Nagar Sevaks 100 %', tone: 'gold' }] }],
    ['row', { items: [{ t: 'Nudge holdouts', kind: 'secondary', toast: 'Re-pushed to 29 · 4h cool-off before 2nd nudge' }, { t: 'Recall ↶', kind: 'danger', go: 'L.n.recall' }, { t: 'CSV', kind: 'secondary', toast: 'Per-recipient CSV · audit-logged' }] }]
  ] });
  s('L.n.recall', { app: 'L', f: '6', title: 'Recall “Q2 outreach”', sub: '§6.11 · withdraws from all 184 inboxes — audit kept', hdr: 'red', caps: ['6.11'], body: [
    ['steps', { labels: ['Reason', 'Review', 'PIN confirm'], cur: 0 }],
    ['kpi', { items: [{ v: '155', l: 'already acked' }, { v: '29', l: 'not yet acked' }] }],
    ['radio', { opts: ['Factual error in body', 'Wrong audience targeted', 'Premature — embargo broken', 'Compliance / MCC issue raised', 'Other (specify)'], v: 0 }],
    ['ta', { label: 'Notes · optional', v: 'Time was 6 PM not 7 PM as written. Replacement going out at 11:50.' }],
    ['toggle', { label: 'Send corrected announcement after recall', s: 'opens composer with body + audience pre-filled', on: true }],
    ['btn', { t: 'Next → Review', sheet: { t: 'Step 2 · Review impact', body: [['p', { t: 'Per-Block ack at recall time · 3 recipients already acted on the wrong time · channel-by-channel withdraw status' }], ['btn', { t: 'Step 3 · Confirm with PIN', go: 'L.a.unlock' }]] } }],
    ['small', { t: 'Cannot recall if > 90 % acked AND > 24h elapsed — send a correction instead. > 2 recalls/30d notifies your Lead.' }]
  ] });
  s('L.n.report', { app: 'L', f: '6', title: 'District scorecard · week 21', sub: 'AUTO REPORT · §6.15 · Pune Rural · 18–22 May 2026', caps: ['6.15', '6.5'], body: [
    ['kpi', { items: [{ v: '+184', l: 'new members', tone: 'ok', go: 'L.m.growth' }, { v: '412', l: 'grievances closed', go: 'L.g.dash' }, { v: '3.2d', l: 'avg resolution' }] }],
    ['spark', { v: [40, 55, 60, 72, 68, 30, 20], l: 'Daily grievance throughput · M–S' }],
    ['sec', { t: 'Block leaderboard · week 21' }],
    ['list', { items: [{ av: '1', t: 'Haveli', right: '92.4' }, { av: '2', t: 'Mulshi', right: '88.1' }, { av: '3', t: 'Bhor', right: '85.6' }, { av: '8', t: 'Khed', right: '52.3', tone: 'danger' }] }],
    ['list', { items: [{ i: '📄', t: 'Full week-21 report · 38 pages', s: 'share intra-org · email · save', toast: 'PDF viewer' }, { i: '🗓', t: 'Next scheduled · monthly summary · 1 June 7 AM · auto', go: 'L.n.list' }] }],
    ['small', { t: 'Read at 11:14 AM · auto-acked (no ack required) · rendered “as of Friday 23:59”' }]
  ] });
  s('L.n.compose', { app: 'L', f: '6', title: 'New announcement', sub: 'Acting as MLA Kiran Rao · D-4892 · §1.33', hdr: 'gold', caps: ['6.1', '6.2', '6.3', '6.4', '6.6', '6.16', '6.17', '6.19', '6.20', '6.21', '6.25', '6.26'], body: [
    ['sec', { t: 'Audience predicate · §6.16' }],
    ['list', { items: [{ t: 'ROLE · ≥ Block Lead (incl. Ward + Booth Pres)', right: '✎', toast: 'Type-ahead over role catalog' }, { t: 'SCOPE · Pune Cantonment VS', s: '+ additional (§6.19 scope-set)', right: '✎', toast: 'Geography tree' }, { t: 'WING · Main + Mahila + Yuva', s: '§6.17 cross', right: '✎', toast: 'Wing picker' }, { t: 'DESIGNATION · any', s: '§6.18 overlay', right: '✎', go: 'L.n.desig' }, { t: 'STATUS · active · acting-fill counts', right: '✎' }, { t: '+ Add dimension', s: 'term-end window · last-active days · ad-hoc unit', toast: 'Dimension picker' }] }],
    ['pills', { items: [{ t: 'Saved: All District Presidents · MH', toast: 'Predicate loaded' }, { t: 'All Mahila Block-level', toast: 'Predicate loaded' }, { t: 'All our Nagar Sevaks · PMC', toast: 'Predicate loaded' }] }],
    ['card', { t: '184 members match this predicate', s: 'District Leads 2 · Block Leads 28 · Ward Leads (Main) 68 · Mahila 42 · Yuva 38 · + 6 acting fill-in', tone: 'navy', go: 'L.n.resolver' }],
    ['note', { t: 'VACANCIES · §6.21 · 2 slots vacant in scope · Ambegaon Block Lead · Khed-7 Ward Lead', tone: 'warn' }],
    ['note', { t: 'MCC GATE · §6.26 · No MCC in effect · template allowed · no political-promise terms detected', tone: 'ok', go: 'L.s.mcc' }],
    ['input', { label: 'Template · §6.6', v: 'Constituency weekly update ▾' }],
    ['chips', { opts: ['Normal', 'Important', 'Urgent · ack required'], v: 2 }],
    ['input', { label: 'Subject', v: 'Constituency strategy call · 6 PM today' }],
    ['ta', { label: 'Body · rich', v: 'Calling all District Leads, Block Leads, and active Ward Leads in Pune Cantonment VS for a strategy call ahead of the 1 June rally. Agenda enclosed. Mandatory attendance — please ack to confirm.', rows: 4 }],
    ['pills', { items: ['📎 Rally-strategy-1June.pdf', '📎 Backup Zoom link', '+ attach'] }],
    ['sec', { t: 'Channels · §6.4' }], ['chips', { opts: ['push', 'WhatsApp', 'SMS', 'email', 'failover'], v: [0, 1, 4], multi: true }],
    ['small', { t: 'Fan-out preview · push 184 · WhatsApp 178 · SMS fallback 0 est · ₹0.62 · snapshot at send-time (§6.20)' }],
    ['row', { items: [{ t: 'Save draft', kind: 'secondary', toast: 'Draft saved' }, { t: 'Schedule', kind: 'secondary', go: 'L.n.list' }, { t: '↑ Send', go: 'L.n.analytics' }] }]
  ] });
  s('L.n.desig', { app: 'L', f: '6', title: 'Designation broadcast', sub: 'All our Nagar Sevaks · PMC + PCMC · §6.18', caps: ['6.18', '6.12'], body: [
    ['card', { t: 'Target · term active · status active', s: 'auto-includes new appointments · live count: 87 recipients · 3 with term ending in 6 months', tone: 'gold', go: 'L.h.find' }],
    ['chips', { opts: ['Normal', 'Important', 'Urgent'], v: 0 }],
    ['input', { label: 'Subject', v: 'PMC: new ward-grant procedure · FY 25-26 circular' }],
    ['ta', { label: 'Body', v: 'PMC has revised the ward-grant procedure effective 1 June 2026. Key changes: utility-bill linkage, online utilization filing within 30 days, third-party audit for grants above ₹5 lakh. Full circular attached.', rows: 4 }],
    ['toggle', { label: 'Q&A enabled', on: true }], ['toggle', { label: 'Auto-translate to MR', on: true }],
    ['row', { items: [{ t: 'Save draft', kind: 'secondary', toast: 'Saved' }, { t: '📅 Schedule', kind: 'secondary', go: 'L.n.list' }, { t: '↑ Send to 87', go: 'L.n.inbox' }] }]
  ] });
  s('L.n.list', { app: 'L', f: '6', title: 'Sent · scheduled · recurring', sub: 'MLA Kiran Rao + delegated aides', caps: ['6.5', '6.6', '6.20', '6.26'], body: [
    ['chips', { opts: ['Sent · 142', 'Scheduled · 4', 'Recurring · 2', 'Templates', 'Drafts · 6'], v: 1 }],
    ['list', { items: [{ t: 'Rally tomorrow at Aundh Ground · 5 PM', s: 'scheduled · 31 May 6 PM IST · audience snapshot at send-time · est. 412 · §6.20', b: 'RALLY 1 JUN', btone: 'teal', go: 'L.n.compose' }, { t: 'District weekly scorecard · auto', s: 'weekly · Mon 7 AM · next 25 May · predicate snapshot at each send · ~184', b: 'RECURRING', sheet: { t: 'Recurring', body: [['btn', { t: 'Pause future fires', kind: 'secondary', toast: 'Paused' }], ['btn', { t: 'Edit schedule', go: 'L.n.compose' }]] } }, { t: 'Constituency monthly summary · PDF', s: 'monthly · 1st 7 AM · next 1 Jun · 38-page auto report · 410 recipients · §6.15', b: 'RECURRING', go: 'L.n.report' }, { t: 'New scheme: housing aid Q3', s: 'would have fired 25 May 7 AM · scheme-launch template blocked during MCC window', b: 'PAUSED · MCC', btone: 'danger', sheet: { t: 'MCC-paused item', body: [['p', { t: 'Reschedule for post-MCC (22 June) or edit to a non-political variant.' }], ['row', { items: [{ t: 'Reschedule', go: 'L.n.list' }, { t: 'Edit body', kind: 'secondary', go: 'L.n.compose' }] }]] } }] }],
    ['sec', { t: 'Templates · §6.6 · per-template throttle' }],
    ['pills', { items: ['Rally · 4/day', 'Meeting', 'Election SOP', 'Festival', 'Condolence · 1/day', '+ 6 org-custom'] }]
  ] });
  s('L.n.resolver', { app: 'L', f: '6', title: 'Audience resolver', sub: 'live evaluation · evaluator v4.2 · as-of-date supported', caps: ['6.23', '6.24', '6.19', '6.21', '6.20'], body: [
    ['card', { t: 'Predicate', s: 'role IN (President, VP, Chair) AND scope IN $division(“Pune”) · cross-tree cut §6.24 · AND (primary OR additional) · audience = DCmt-confidential', tone: 'gold', body: [['small', { t: '→ 47 recipients · 2 vacancies · eval 142ms · audit id A-9421-eval-7711' }]] }],
    ['input', { label: 'As-of date', v: 'Today', hint: 'Who would have received this on 12 Mar 2024?', go: 'L.s.timetravel' }],
    ['list', { items: [{ av: 'A', t: 'Anil Patil · District President', s: 'Pune Rural · Main · role+scope match' }, { av: 'N', t: 'Nita Patel · Mahila Aghadi District Pres', s: 'Pune Rural · Mahila · role+scope match' }, { av: 'V', t: 'Vikas Joshi · Regional Coordinator', s: 'Pune City · Main · additional · §6.19', b: 'ADDN', btone: 'purple' }, { av: 'A', t: 'Asha P. (acting) · covers Rohit · §5.24', s: 'Pune Rural · acting · counts', b: 'ACTING', btone: 'gold' }, { av: '⊘', t: 'VACANT · Ambegaon Block Pres', s: 'counted as gap · §6.21', b: 'GAP', btone: 'danger', go: 'L.m.add' }, { av: '⊘', t: 'VACANT · Mahila Yuva-Cell Conv.', s: 'Pune City · vacant 17d', b: 'GAP', btone: 'danger' }, { t: '+ 42 more · 45 active · 2 acting · 0 leave-blocked', tone: 'muted' }] }],
    ['note', { t: 'CONFIDENTIAL GATING · §6.23 · only Disciplinary Committee members visible to evaluator + audit; non-members get 403 with an audit row.', tone: 'danger' }],
    ['btn', { t: 'Save predicate', kind: 'secondary', toast: 'Saved · share scope: principal' }]
  ] });

  /* ---------- §7 Letters ---------- */
  s('L.l.wallet', { app: 'L', f: '7', title: 'My letters', sub: 'Ravi Kumar · Booth President · Wakad B-47', right: { i: '+', go: 'L.l.request' }, caps: ['7.6', '7.12', '7.8', '7.13'], body: [
    ['kpi', { items: [{ v: '5', l: 'valid now', tone: 'ok' }, { v: '1', l: 'expires in 3d', tone: 'warn' }, { v: '8', l: 'expired · archive' }] }],
    ['input', { ph: '⌕ Search letters · vendor · purpose · L-ID' }],
    ['chips', { opts: ['Valid', 'Expired', 'By type ▾', 'Sort: new'], v: 0 }],
    ['card', { t: 'VENDOR AUTHORIZATION · L-7411 · co-signed', s: 'Bharat Banners Pvt Ltd · Rally banners · 1 June Aundh ground · ₹ 6.2 L · Sunita Joshi + Anil Patil · scope Pune Rural · until 5 June · scanned 2×', b: 'VALID 14d', btone: 'ok', go: 'L.l.display' }],
    ['card', { t: 'RALLY PERMIT · L-7392', s: 'Internal · Aundh ground 1 June rally · Sunita Joshi · single sig · scope Haveli Block · ☁ offline-cached · 4 scans', b: 'VALID 9d', btone: 'ok', go: 'L.l.display' }],
    ['card', { t: 'CAMPAIGN AUTH · L-7301', s: 'D2D enrollment drive · Wakad+Aundh · tap to re-issue · §7.13 pre-fills body', b: 'EXPIRES 3d', btone: 'warn', sheet: { t: 'L-7301 · expiring', body: [['btn', { t: 'Request re-issue with new dates', go: 'L.l.request' }], ['btn', { t: 'Copy verify link', kind: 'secondary', toast: 'Link copied' }]] } }],
    ['list', { items: [{ t: '⊟ Archived · 8 expired · 0 revoked', s: 'remain searchable for audit', tone: 'muted', toast: 'Archive expanded' }] }],
    ['sec', { t: 'Lead & Top surfaces' }],
    ['list', { items: [{ i: '✍', t: 'Issue queue (Sunita · Block Lead)', go: 'L.l.issue' }, { i: '✓', t: 'Co-sign queue (Anil · District Lead)', go: 'L.l.cosign' }, { i: '📋', t: 'Issuance audit & anomalies', go: 'L.l.audit' }, { i: '🧩', t: 'Template editor', go: 'L.l.templates' }, { i: '⧉', t: 'Bulk issue · 32 D2D authorisations', go: 'L.l.bulk' }] }]
  ] });
  s('L.l.display', { app: 'L', f: '7', title: 'L-7411', sub: 'Brightness max · hold steady for vendor scan', hdr: 'dark', caps: ['7.7', '7.9', '7.16', '7.18', '7.21', '7.23', '7.4'], body: [
    ['card', { t: 'NCP — Nationalist Congress Party', s: 'Pune Rural District Committee · Block Office Haveli · letterhead per §7.18 assignment context', b: 'VALID · 14 DAYS', btone: 'ok' }],
    ['qr', { t: 'verify.ncpconnect.in/L-7411 · scan to verify · §7.9' }],
    ['p', { t: 'Vendor authorization · Bharat Banners Pvt Ltd is authorised to provide rally banner services for the 1 June 2026 Aundh ground rally on behalf of NCP Pune Rural District. Authorised amount: ₹ 6,20,000.' }],
    ['list', { items: [{ av: 'SJ', t: 'SUNITA JOSHI', s: 'Block Lead Haveli · signed 11:22 AM' }, { av: 'AP', t: 'ANIL PATIL (CO-SIGN)', s: 'District Lead Pune Rural · also Nagar Sevak W-7 PMC · §7.23' }] }],
    ['small', { t: 'NCP · L-7411 · server-signed watermark · SHA-256 8d4f…c712 · §7.16' }],
    ['row', { items: [{ t: 'PDF page mode', kind: 'secondary', toast: 'Full A4 letter view' }, { t: 'Copy verify link', kind: 'secondary', toast: 'Link copied (URL only)' }, { t: 'Vendor’s view →', go: 'L.l.verify' }] }]
  ] });
  s('L.l.request', { app: 'L', f: '7', title: 'Request a letter', sub: 'Ravi Kumar · Booth President · Wakad B-47', caps: ['7.2', '7.20', '7.21', '7.1'], body: [
    ['steps', { labels: ['Template', 'Details', 'Send'], cur: 1 }],
    ['card', { t: 'Template chosen · Vendor authorization', s: 'co-sign auto-required if amount > ₹ 5 L · §7.21', right: 'edit', sheet: { t: 'Templates', body: [['list', { items: [{ t: 'Rally permit', go: 'L.l.request' }, { t: 'Event approval', go: 'L.l.request' }, { t: 'Vendor authorization', go: 'L.l.request' }, { t: 'Campaign authorization', go: 'L.l.request' }, { t: 'Custom', go: 'L.l.request' }] }]] } }],
    ['input', { label: 'Recipient vendor', v: 'Bharat Banners Pvt Ltd', hint: 'GSTIN auto-fetch in progress …' }],
    ['ta', { label: 'Purpose', v: 'Rally banners + LED screens for 1 June Aundh ground rally · setup 31 May, removal 2 June. Per quotation B-2412 dated 18 May.' }],
    ['input', { label: 'Amount (₹)', v: '6,20,000', hint: '> ₹ 5 L · co-sign required' }],
    ['input', { label: 'Valid until', v: '5 Jun 2026', hint: '14 days from issue' }],
    ['card', { t: 'Request routing · §7.20 → Sunita Joshi · Block Lead Haveli', s: 'vendor in Wakad B-47 (your scope) · usual approver · historical SLA: 22 min', tone: 'navy' }],
    ['pills', { items: ['📄 B-2412 quote · 0.4 MB', '+ Add file'] }],
    ['row', { items: [{ t: 'Save draft', kind: 'secondary', toast: 'Draft in wallet' }, { t: '↑ Send to Sunita', go: 'L.l.issue' }] }],
    ['small', { t: 'Blacklisted vendors block submit. MCC-restricted templates block at submit. If Sunita is on leave → routes to Acting (§7.22).' }]
  ] });
  s('L.l.issue', { app: 'L', f: '7', title: 'L-7411 (draft)', sub: 'Vendor authorization · Bharat Banners · ₹ 6.2 L · requested by Ravi · 4 min ago', caps: ['7.18', '7.20', '7.21', '7.3', '7.19', '7.25', '7.23', '7.22'], body: [
    ['sec', { t: 'Sign as · §7.18 assignment context' }],
    ['radio', { opts: [{ t: 'Block Lead Haveli (primary)', s: 'letterhead: Block Office Haveli · authority: Haveli sub-tree' }, { t: 'Mahila Aghadi · Block Cmt Member', s: 'wing letterhead · §7.19 · §7.25 wing co-sign rules' }], v: 0 }],
    ['note', { t: 'SCOPE CHECK · §7.20 · ✓ Wakad B-47 in Haveli sub-tree · your authority', tone: 'ok' }],
    ['note', { t: 'CO-SIGN REQUIRED · §7.21 · Amount > ₹ 5 L → Anil Patil · District Lead Pune Rural · notified · historical SLA 14 min. If Anil is on leave → Acting Asha cosigns with attribution (§7.22).', tone: 'danger' }],
    ['toggle', { label: 'Include external designations on letter', s: '§7.23 · “also Nagar Sevak W-7 PMC” adds civic weight when the vendor verifies', on: true }],
    ['list', { items: [{ i: '📄', t: 'PDF preview · §7.4', s: 'letterhead + body + QR + 2 sigs', go: 'L.l.display' }, { i: '✍', t: 'Stored signature ready · §7.3', s: 'captured 12 Aug 2024 · re-capture in §9.4', go: 'L.s.security' }] }],
    ['row', { items: [{ t: 'Reject', kind: 'danger', sheet: { t: 'Reject request', body: [['radio', { opts: ['Insufficient detail', 'Wrong template', 'MCC concern', 'Out of scope', 'Fraud suspected'] }], ['btn', { t: 'Reject & notify Ravi', kind: 'danger', go: 'L.l.wallet' }]] } }, { t: 'Sign & send to co-signer', go: 'L.l.cosign' }] }]
  ] });
  s('L.l.cosign', { app: 'L', f: '7', title: 'Co-sign queue', sub: 'Anil Patil · District Lead · also Nagar Sevak W-7 PMC', caps: ['7.15', '7.21', '7.23', '7.17'], body: [
    ['kpi', { items: [{ v: '3', l: 'pending' }, { v: '1', l: 'SLA breach risk', tone: 'warn' }, { v: '98 %', l: 'on-time cosign', tone: 'ok' }] }],
    ['card', { t: 'L-7411 · Bharat Banners · ₹ 6,20,000', s: 'Rally banners · 1 June Aundh ground · issued by Sunita Joshi 18 min ago · stored sig applied · 98 % accuracy · 0 prior revokes', b: 'SLA 1h 24m', btone: 'warn', body: [
      ['list', { items: [{ i: '✓', t: 'Bharat Banners · GSTIN 27ABC… · not on blacklist · 4 prior letters' }, { i: '✓', t: 'Wakad B-47 in your district scope · §7.20' }, { i: '✓', t: 'Within volume cap · 1 of 4 vendor sigs today · §7.17' }] }],
      ['toggle', { label: 'Include Nagar Sevak designation on cosign', s: '§7.23 · vendor sees “also Nagar Sevak W-7 PMC”', on: true }],
      ['link', { t: 'Review PDF as the vendor will see it ›', go: 'L.l.display' }],
      ['row', { items: [{ t: 'Reject', kind: 'danger', toast: 'Reason captured · issuer notified' }, { t: 'Query', kind: 'secondary', go: 'L.c.dm' }, { t: '✓ Co-sign', go: 'L.l.wallet' }] }]] }],
    ['list', { items: [{ t: 'Next · L-7418 · Padyatra permit · Mulshi', s: 'Block Lead Vaibhav · ₹ 1.2 L · 38 min', go: 'L.l.cosign' }] }]
  ] });
  s('L.l.revoke', { app: 'L', f: '7', title: 'Revoke letter · L-7411', sub: '§7.11 · invalidates in the world — past scans preserved', hdr: 'red', caps: ['7.11', '7.10', '7.13'], body: [
    ['kpi', { items: [{ v: '6', l: 'prior verify scans' }, { v: 'future', l: 'scans → REVOKED page', tone: 'danger' }] }],
    ['radio', { opts: ['Vendor cancelled · re-issue with new vendor', 'Amount or scope changed materially', 'Suspected misuse / fraud · escalates to Compliance', 'Compliance / ECI / MCC concern', 'Other (specify)'], v: 0 }],
    ['ta', { label: 'Notes · optional', v: 'Vendor delivery date slipped 5 days · using Marathi Mandap instead. Re-issuing L-7421.' }],
    ['toggle', { label: 'Re-issue after revoke (§7.13)', s: 'opens composer with body + scope pre-filled · new vendor blank', on: true }],
    ['note', { t: 'Vendor scanned 5 minutes ago — likely in a live transaction. Call them first?', tone: 'warn' }],
    ['row', { items: [{ t: 'Cancel', kind: 'secondary', go: 'back' }, { t: 'Revoke · PIN required', kind: 'danger', go: 'L.a.unlock' }] }]
  ] });
  s('L.l.verify', { app: 'L', f: '7', title: 'verify.ncpconnect.in/L-7411', sub: 'PUBLIC · vendor-side · no app · no login', hdr: 'dark', caps: ['7.9', '7.16', '7.26', '7.10'], body: [
    ['banner', { t: '✓ VALID · authorisation confirmed · tamper-check passed · server-signed · last verified 3s ago', tone: 'ok' }],
    ['card', { t: 'NCP — Nationalist Congress Party', s: 'Pune Rural District Committee · Block Office Haveli · issued under assignment: Block Lead Haveli', body: [
      ['list', { items: [{ t: 'Purpose', right: 'Vendor authorization' }, { t: 'Authorised amount', right: '₹ 6,20,000' }, { t: 'Valid', right: '22 May → 5 Jun · 12 days left' }, { t: 'Scope of authority', right: 'Pune Rural · Wakad B-47 ✓' }] }],
      ['list', { items: [{ av: 'SJ', t: 'SUNITA JOSHI · Block Lead Haveli', s: 'signed 22 May 11:22 AM' }, { av: 'AP', t: 'ANIL PATIL (CO-SIGN) · District President', s: 'also Nagar Sevak Ward 7, PMC · ↗ verify on PMC directory · §7.26', go: 'L.m.profile' }] }],
      ['small', { t: 'Server-signed PDF SHA-256: 8d4f…c712 · NCPConnect-CA · valid until 2031 · Download original PDF · 78 KB' }]] }],
    ['sec', { t: 'Recent verify scans · §7.10' }],
    ['list', { items: [{ t: '22 May 11:42 AM', s: 'Wakad · iOS · vendor' }, { t: '22 May 2:18 PM', s: 'Wakad · Android · same' }, { t: '23 May 10:05 AM', s: 'Pune · iOS · printer' }, { t: '+ 3 more · all within scope · no anomalies', tone: 'muted' }] }],
    ['btn', { t: 'Report misuse · anonymous', kind: 'danger', sheet: { t: 'Report misuse', body: [['ta', { ph: 'What looks wrong?' }], ['btn', { t: 'Send to Compliance', kind: 'danger', go: 'L.l.verify' }]] } }],
    ['link', { t: 'See the REVOKED / EXPIRED variant', toast: 'Band turns red/amber · PDF download disabled on revoke' }]
  ] });
  s('L.l.audit', { app: 'L', f: '7', title: 'Letters · audit & forensic', sub: 'org-wide · last 30 days · 142 issued · 1,847 verify scans', right: { i: '⤓', toast: 'Notarised PDF + CSV bundle' }, caps: ['7.14', '7.10', '7.17'], body: [
    ['kpi', { items: [{ v: '142', l: 'issued · 30d' }, { v: '8', l: 'revoked · 5.6 %', tone: 'warn' }, { v: '3', l: 'anomalies open', tone: 'danger' }, { v: '99.7 %', l: 'tamper-check pass', tone: 'ok' }] }],
    ['sec', { t: 'Anomaly queue · §7.14 misuse detection' }],
    ['card', { t: 'GEO-MISMATCH · L-7211 · 17 min ago', s: 'Rally permit scanned 8× across 4 cities in 3d · scope only allows Pune · issuer Vaibhav K (Block Lead Mulshi) · auto-paused', tone: 'danger', sheet: { t: 'L-7211 scan log', body: [['list', { items: [{ t: 'Pune · 17 May', s: '2 scans' }, { t: 'Mumbai · 18 May', s: '3 scans · outside scope' }, { t: 'Nashik · 19 May', s: '2 scans' }, { t: 'Aurangabad · 19 May', s: '1 scan' }] }], ['row', { items: [{ t: 'Revoke + re-issue', kind: 'danger', go: 'L.l.revoke' }, { t: 'Dismiss with reason', kind: 'secondary', toast: 'False-positive logged' }] }]] } }],
    ['card', { t: 'VELOCITY SPIKE · L-7188 + 6 more · 3h ago', s: '7 vendor letters by 1 Lead in 4 hours · approaching daily cap of 8 · §7.17 · Pradeep S (Block Lead Khed)', tone: 'warn', toast: 'Review for legitimacy' }],
    ['card', { t: 'DESIG FORGERY · L-7099 · 2d ago', s: 'Cosigner’s Nagar Sevak term ended 1 May · letter issued 4 May · §7.26 · footer hidden retroactively', tone: 'warn', toast: 'Compliance review' }],
    ['sec', { t: 'Per-issuer health · 30d' }],
    ['list', { items: [{ av: 'S', t: 'Sunita Joshi · Block Lead Haveli', s: '28 issued · 0 revoke', right: '99 %' }, { av: 'A', t: 'Anil Patil · District Lead', s: '42 issued · 1 revoke', right: '97 %' }, { av: 'V', t: 'Vaibhav K · Block Lead Mulshi · paused', s: '14 issued · 3 revoke', right: '62 %', tone: 'danger' }, { av: 'N', t: 'Nita Patel · Mahila Aghadi Dist Pres', s: '18 issued · 0 revoke', right: '100 %' }] }],
    ['sec', { t: 'Per-template volume · §7.17 caps' }],
    ['bar', { v: 62, l: 'Vendor authorization', r: '62 / 100' }], ['bar', { v: 47, l: 'Rally permit', r: '38 / 80' }], ['bar', { v: 90, l: 'Campaign authorization', r: '36 / 40', tone: 'warn' }], ['bar', { v: 12, l: 'Event approval', r: '6 / 50' }]
  ] });
  s('L.l.templates', { app: 'L', f: '7', title: 'Template editor', sub: 'Vendor authorization · v4 · live · 142 letters under v4', caps: ['7.1', '7.15', '7.17', '7.19', '7.24', '7.25', '9.21'], body: [
    ['chips', { opts: ['Vendor auth · v4', 'Rally permit · v3', 'Event approval · v2', 'Campaign auth · v3', 'D2D enrollment · v2', 'Padyatra · v1'], v: 0 }],
    ['sec', { t: 'Wing variants · §7.19 · ad-hoc units · §7.24' }],
    ['pills', { items: [{ t: 'Mahila vendor auth', tone: 'purple' }, { t: 'Yuva campaign', tone: 'purple' }, { t: 'Manifesto Cmt', tone: 'gold' }, { t: 'Screening Cmt', tone: 'gold' }, { t: 'Election Cell 2026', tone: 'gold' }, '+ New template'] }],
    ['ta', { label: 'Body template · {{merge fields}}', v: '{{recipient_name}} is authorised to provide {{service_description}} for {{purpose}} on behalf of {{issuer_unit}}. Authorised amount: ₹ {{amount}} ({{amount_words}} only). Valid {{valid_from}} to {{valid_until}}. Authority of issuer: {{issuer_role}} of {{issuer_scope}}. {{external_designation_footer if §7.23 enabled}}', rows: 6 }],
    ['pills', { items: ['recipient_name', 'service_desc', 'amount', 'valid_until', '+ add field'] }],
    ['toggle', { label: 'Require GSTIN attach', on: true }], ['toggle', { label: 'Designation footer · §7.23', on: true }], ['toggle', { label: 'MCC-restricted · §7.26 / §9.14', on: false }],
    ['sec', { t: 'Co-sign rules · §7.15 + §7.21' }],
    ['list', { items: [{ t: 'Amount > ₹ 5 L · one level up', s: 'Block Lead → District Lead · District Lead → State Lead' }, { t: 'Scope mismatch · auto-cosigner', s: 'add Lead whose scope covers recipient' }, { t: 'Wing letters > District · §7.25', s: 'cosign by Main party District President' }, { t: '+ add threshold', toast: 'e.g. > ₹10 L → two cosigners' }] }],
    ['sec', { t: 'Volume caps · §7.17' }],
    ['list', { items: [{ t: '8 per day per Lead', s: 'cool-off 6h' }, { t: '100 per template per org · 30d', right: '62 used' }, { t: '5L vendor without cosign · 1/yr', right: '0 used' }] }],
    ['sec', { t: 'Version history · §9.21' }],
    ['tl', { items: [{ t: 'v4 · live · since 12 Apr 2026', st: 'cur' }, { t: 'v3 · added Q&A toggle · 2 Mar', st: 'done' }, { t: 'v2 · cosign threshold 5L · 1 Jan', st: 'done' }, { t: 'v1 · initial · 20 Nov 2025', st: 'done' }] }],
    ['row', { items: [{ t: 'Preview PDF with sample data', kind: 'secondary', go: 'L.l.display' }, { t: 'Save v5 draft', toast: 'v5 saved · applies to new issuances only' }] }]
  ] });
  s('L.l.bulk', { app: 'L', f: '7', title: 'Bulk issue · D2D authorization', sub: 'template v2 · 32 recipients · 1 cosign chain · est. 1m 12s', caps: ['7.5', '7.4', '7.21', '7.16'], body: [
    ['card', { t: 'Predicate · §2.17', s: 'Booth Vols + Sakhis · Wakad + Aundh · active', tone: 'gold', go: 'L.t.target' }],
    ['list', { items: [{ av: 'SP', t: 'Sakhi Priya · Wakad B-47', b: '✓', btone: 'ok' }, { av: 'SA', t: 'Sakhi Anita · Wakad B-48', b: '✓', btone: 'ok' }, { av: 'RK', t: 'Ravi Kumar · Wakad B-47 · Booth Pres', b: '✓', btone: 'ok' }, { av: 'MT', t: 'Manoj T · Aundh B-15 · on leave', s: '→ Acting Asha', b: '✓', btone: 'ok' }, { t: '+ 26 more · all matching predicate · scope-cleared', tone: 'muted' }] }],
    ['note', { t: 'Excluded · 2 · Rohit J (long-leave, no Acting) · Pradeep S (auto-paused · anomaly)', tone: 'warn' }],
    ['ta', { label: 'Shared body · one template instance', v: '{{recipient_name}} is authorised to conduct door-to-door enrollment activities in {{ward}} for NCP Pune Rural District during 22 May to 5 June 2026. Issued under Block Lead authority · scope: Haveli', rows: 4 }],
    ['note', { t: 'CO-SIGN BATCH · §7.21 · > 20 recipients → 1 cosign by Anil Patil covers all 32 · batch hash signed once · PDFs derive from batch signature (§7.16)', tone: 'info' }],
    ['grid', { cols: 3, items: [{ i: '📄', t: 'L-7501 · Sakhi Priya', s: 'Wakad W-47 ✓', go: 'L.l.display' }, { i: '📄', t: 'L-7502 · Sakhi Anita', s: 'Wakad W-48 ✓', go: 'L.l.display' }, { i: '📄', t: 'L-7503 · Ravi Kumar', s: 'Booth 47 ✓', go: 'L.l.display' }] }],
    ['row', { items: [{ t: 'Save batch', kind: 'secondary', toast: 'Batch saved' }, { t: 'Issue 32 →', go: 'L.l.cosign' }] }]
  ] });

  /* ---------- §8 Events ---------- */
  s('L.e.list', { app: 'L', f: '8', title: 'Events', sub: 'Pune Rural · upcoming + live + past', right: { i: '+', go: 'L.e.create' }, caps: ['8.19', '8.20', '8.2'], body: [
    ['card', { t: 'Aundh Ground Rally · 1 June · 5 PM', s: 'MLA Kiran Rao · Pune Cantonment VS · score 78/100 · 412 RSVP of 500', b: 'IN 10 DAYS', btone: 'teal', go: 'L.e.volunteer' }],
    ['card', { t: 'Mahila health camp · 28 May', s: 'Wakad ward office · Mahila Aghadi Wakad Block · wing roster · §8.24', b: 'WING', btone: 'purple', go: 'L.e.volunteer' }],
    ['card', { t: 'Mahila + Yuva training camp · 12 June', s: 'joint ad-hoc unit · shared roster · both wing chains see it · §8.30', b: 'JOINT', btone: 'purple', go: 'L.e.create' }],
    ['sec', { t: 'Multi-event · Pune Rural Q2 · §8.19' }],
    ['list', { items: [{ t: 'Water sanitation rally · 12 May', s: 'score 91 · 3,200 attendees · ROI report', go: 'L.e.roi' }, { t: 'Kothrud padyatra · 1 May', s: 'score 88 · multi-leg · 2 days', go: 'L.e.roi' }, { t: 'Historical analytics · §8.20', s: 'seasonal patterns · role-mix effectiveness · vendor reliability', toast: 'Desktop analytics' }] }],
    ['sec', { t: 'Templates · §8.2' }],
    ['pills', { items: ['Rally', 'Padyatra', 'Meeting', 'Camp', 'Fundraiser'] }],
    ['list', { items: [{ i: '🎛', t: 'Day-of control room (live demo)', go: 'L.e.control' }, { i: '📋', t: 'Outreach & logistics · T-9', go: 'L.e.outreach' }] }]
  ] });
  s('L.e.volunteer', { app: 'L', f: '8', title: 'Aundh Ground Rally', sub: 'RALLY · 1 JUNE · 5 PM · MLA Kiran Rao', caps: ['8.3', '8.21', '8.22', '8.11'], body: [
    ['card', { t: 'Aundh Stadium · 1.2 km from your booth', s: 'in 10 days · RSVP ✓ YES · confirmed 19 May · §6.14 link', tone: 'navy' }],
    ['card', { t: 'Your role · §8.21 spine pull', s: 'Crowd Team · Lane 7 marshal · report to Ravi Kumar (Booth Pres Wakad · §8.22 suggested) · 14 of 38 Crowd Team confirmed', tone: 'gold', go: 'L.m.profile' }],
    ['sec', { t: 'Your day · 1 June' }],
    ['tl', { items: [{ t: '3:30 PM · Geo-check-in opens · §8.11', st: 'todo', go: 'L.e.checkin' }, { t: '4:00 PM · Crowd team brief · Lane 7', st: 'todo' }, { t: '5:00 PM · Doors open', st: 'todo' }, { t: '6:00 PM · MLA Kiran Rao speech', st: 'todo' }, { t: '8:00 PM · Event close · clear lane 7', st: 'todo' }] }],
    ['sec', { t: 'Pre-event todos · 2 of 3' }],
    ['check', { label: 'Watch crowd-marshal training video (8m)', on: true }], ['check', { label: 'Confirm uniform pickup (Block office)', on: true }], ['check', { label: 'Submit your emergency contact', on: false, right: 'due 28 May' }],
    ['row', { items: [{ t: '📍 Directions', kind: 'secondary', toast: 'Maps · offline-cached' }, { t: 'Check-in (opens 3:30 PM)', go: 'L.e.checkin' }] }]
  ] });
  s('L.e.checkin', { app: 'L', f: '8', title: 'Day-of check-in', sub: 'Aundh ground rally · 1 June · 3:54 PM · LIVE', caps: ['8.11', '8.12'], body: [
    ['ph', { t: 'Geo-fence 200m · Aundh Stadium · YOU · 22m inside', h: 130, kind: 'map', toast: 'Report wrong location' }],
    ['note', { t: 'READY TO CHECK IN · inside the 200m geo-fence · GPS accuracy ±5m', tone: 'ok' }],
    ['kpi', { items: [{ v: '142', l: 'volunteers in venue · 12s ago' }, { v: '38 / 200', l: 'crowd team checked in' }] }],
    ['ph', { t: '📷 Take selfie for proof · photo + GPS + timestamp', h: 90, kind: 'cam', toast: 'Selfie captured' }],
    ['btn', { t: '✓ Check me in to Lane 7', go: 'L.e.issue', toast: 'Checked in · counter +1' }],
    ['small', { t: 'Outside fence → check-in disabled. Low GPS → cell-tower fallback or Crowd Lead manual check-in.' }]
  ] });
  s('L.e.issue', { app: 'L', f: '8', title: 'Report an issue', sub: 'Aundh rally · 5:42 PM · auto-paged to right team · LIVE', caps: ['8.13', '8.7'], body: [
    ['grid', { cols: 3, items: [{ i: '🎤', t: 'AV · sound', s: '→ AV vendor', sel: true, toast: 'AV selected' }, { i: '🩹', t: 'Medical', s: '→ Med Lead', toast: 'Medical selected' }, { i: '👥', t: 'Crowd', s: '→ Crowd Lead', toast: 'Crowd selected' }, { i: '🚨', t: 'Security', s: '→ Sec Lead', toast: 'Security selected' }, { i: '🪑', t: 'Logistics', s: '→ Log Lead', toast: 'Logistics selected' }, { i: '⚠', t: 'Other', s: '→ Org', toast: 'Organiser' }] }],
    ['card', { t: 'Auto-page · §8.7 vendor list → Suresh M · Sound & Light Pune', s: 'on-site contact · WhatsApp + call ready · fallback to Stage Lead', tone: 'danger' }],
    ['ta', { label: 'Describe briefly', v: 'Stage mic cutting out every 3-4 mins. MLA on stage in 20 min. Speaker R2 on the right side seems dead.' }],
    ['grid', { cols: 4, items: [{ i: '📷', t: 'Photo', toast: 'Camera' }, { i: '🎙', t: 'Voice', toast: 'Recording' }, { i: '📍', t: 'Loc', toast: 'GPS embedded' }, { i: '📹', t: 'Video', toast: 'Video' }] }],
    ['chips', { opts: ['Low', 'Medium', 'URGENT'], v: 2 }],
    ['btn', { t: '↑ Send · pages Suresh now', go: 'L.e.mobilecr', toast: 'Paged Suresh · 8s' }],
    ['small', { t: 'Duplicate within 30s → “merge with existing?” · > 5 issues in 10 min → soft cool-off' }]
  ] });
  s('L.e.mobilecr', { app: 'L', f: '8', title: 'Aundh rally · live', sub: 'Sunita Joshi · event organiser · 5:42 PM', hdr: 'red', caps: ['8.15', '8.12', '8.13'], body: [
    ['card', { t: '87 / 100 · GREEN · ON TRACK', s: 'EVENT SCORE · LIVE PHASE · +3 vs 30 min ago', tone: 'ok', sheet: { t: 'Score trajectory', body: [['spark', { v: [60, 70, 78, 80, 84, 87], l: 'pre-event 78 → live 87' }]] } }],
    ['bar', { v: 92, l: 'Logistics · checklist 19 of 20', r: '92' }], ['bar', { v: 94, l: 'Volunteers · 187 of 200 checked in', r: '94' }], ['bar', { v: 76, l: 'Outreach RSVPs · 412 / 500', r: '76', tone: 'warn' }], ['bar', { v: 88, l: 'Budget · ₹3.2L of ₹6L', r: '88' }], ['bar', { v: 100, l: 'Permits · all 4 acquired · §7', r: '100' }],
    ['card', { t: '4,820 attendees · 30s ago', s: '+ 240 in last 10 min · §8.12', tone: 'navy' }],
    ['sec', { t: 'Open issues · §8.13 · tap to triage' }],
    ['list', { items: [{ t: 'Mic R2 cutting out · paged Suresh', s: '2m', b: 'URGENT', btone: 'danger', go: 'L.g.ticket' }, { t: 'Elderly · giddiness · gate 2 first-aid', s: '6m', b: 'MED', btone: 'warn' }, { t: 'Bottleneck lane 5 · 200+ waiting', s: '9m', b: 'CROWD' }] }],
    ['row', { items: [{ t: 'Control room ↗', kind: 'secondary', go: 'L.e.control' }, { t: '+ Update brief', go: 'L.n.compose' }] }]
  ] });
  s('L.e.create', { app: 'L', f: '8', title: 'New event · Aundh ground rally', sub: 'template: Rally · scope: Pune Cantonment VS · 9 days lead-time', caps: ['8.1', '8.2', '8.3', '8.21', '8.22', '8.26', '8.27', '8.29', '8.25', '8.23', '8.24', '8.30'], body: [
    ['tl', { items: [{ t: 'PRE · Basics & team', s: 'done', st: 'done' }, { t: 'Logistics & budget', s: '17/20', st: 'cur', go: 'L.e.outreach' }, { t: 'Permits & vendors', s: '3/3', st: 'done', go: 'L.l.wallet' }, { t: 'Outreach plan', s: 'in progress', st: 'cur', go: 'L.e.outreach' }, { t: 'Risk register', s: '3 risks', st: 'cur', go: 'L.e.outreach' }, { t: 'DURING · control room', st: 'todo', go: 'L.e.control' }, { t: 'POST · ROI 6h after close', st: 'todo', go: 'L.e.roi' }] }],
    ['kpi', { items: [{ v: '78', l: '/ 100 · pre score · amber', tone: 'warn' }] }],
    ['input', { label: 'Event name', v: 'Aundh ground rally · MLA Kiran Rao' }], ['input', { label: 'Date & time', v: '1 Jun 2026 · 5:00 PM IST · 3h' }],
    ['sec', { t: 'Teams & leads · §8.3 + §8.22 suggested' }],
    ['grid', { cols: 2, items: [{ i: '🎤', t: 'STAGE · Anil P', s: 'Dist Lead suggested · 12 vols ✓', go: 'L.m.profile' }, { i: '👥', t: 'CROWD · Ravi K', s: 'Booth Pres · 38 vols ✓', go: 'L.m.profile' }, { i: '🩹', t: 'MEDICAL · VACANT', s: 'no Health Cell coord · §8.29', tone: 'danger', sheet: { t: 'Fill Medical Lead', body: [['list', { items: [{ av: 'AA', t: 'Acting Asha', s: 'Mahila · first-aid tag', go: 'L.e.create' }, { av: 'DK', t: 'Dr Kale · Medical Cell', s: 'Pune City · additional scope', go: 'L.e.create' }] }]] } }, { i: '🚨', t: 'SECURITY · Vikas J', s: 'sec-tag + ex-cop · 24 vols ✓', go: 'L.m.profile' }] }],
    ['note', { t: 'MCC GATE · §8.26 · ✓ No MCC in effect · rally template allowed · scheme-launch elements absent', tone: 'ok', go: 'L.s.mcc' }],
    ['note', { t: 'VACANCY WARNING · §8.29 · Medical Team Lead slot is vacant — fill before launch', tone: 'danger' }],
    ['card', { t: 'Spine pool · §8.21 · 412 eligible volunteers in scope', s: '200 invited · 78 RSVP YES so far · scope-set (§8.23) coverage active · wing filter available (§8.24) · joint-event roster (§8.30)', go: 'L.t.target' }],
    ['card', { t: 'Venue heatmap · §8.27 · Aundh Stadium', s: '✓ inside member-density peak · ✓ 1.2 km avg travel · ✓ parking ≥ 200 cars', toast: 'Alternatives ranked by density + access' }],
    ['card', { t: 'Designation invites · §8.25', s: 'All Nagar Sevaks · PMC · 12 auto-invited · 4 RSVP · All ZP Members · 4 auto-invited · 3 RSVP', go: 'L.h.find' }],
    ['row', { items: [{ t: 'Save draft', kind: 'secondary', toast: 'Draft saved' }, { t: 'Launch event →', go: 'L.e.outreach' }] }]
  ] });
  s('L.e.outreach', { app: 'L', f: '8', title: 'Outreach & logistics · T-9', sub: '412 RSVP of 500 · checklist 17/20 · budget 92 % · 3 risks', caps: ['8.8', '8.9', '8.4', '8.5', '8.6', '8.10'], body: [
    ['spark', { v: [10, 22, 38, 55, 68, 82], l: 'RSVP burndown · §8.9 · 412 of 500 (82 %) · projection trending to 500' }],
    ['pills', { items: ['D2D · 142', '§6 push · 168', 'WhatsApp · 74', 'QR poster · 28'] }],
    ['btn', { t: '+ Nudge non-RSVPs (88)', kind: 'secondary', toast: 'Batch §6 push sent' }],
    ['sec', { t: 'Checklist · §8.4 · 17 of 20' }],
    ['check', { label: 'Aundh ground permit secured (PMC) · L-7392', on: true }], ['check', { label: 'Bharat Banners signed (₹6.2L) · L-7411', on: true }], ['check', { label: 'Stage Sound & Light · Suresh M', on: true }], ['check', { label: 'Medical Lead — VACANT slot · §8.29', on: false }], ['check', { label: 'Drinking water vendor finalisation', on: false }], ['check', { label: 'Police permission letter (D-3 hard deadline)', on: false }],
    ['sec', { t: 'Budget · §8.5 · ₹5.52L of ₹6.00L' }],
    ['bar', { v: 100, l: 'Venue rent' }], ['bar', { v: 93, l: 'Banners + AV' }], ['bar', { v: 89, l: 'Volunteer kit' }], ['bar', { v: 25, l: 'Water + refresh', tone: 'warn' }],
    ['sec', { t: 'Risk register · §8.10' }],
    ['list', { items: [{ t: 'Police permission delayed past D-3', s: 'owner: Sunita · mitigation: escalate via §5 DM', b: 'HIGH', btone: 'danger', toast: 'Mitigation plan' }, { t: 'Weather: rain forecast D-1 evening', s: 'IMD · tarpaulin vendor suggested', b: 'MED', btone: 'warn' }, { t: 'Opposition counter-event same day', s: '§10.14 log · alt-venue / time-shift', b: 'MED', btone: 'warn' }] }],
    ['sec', { t: 'Permits & vendors · §8.6 + §8.7' }],
    ['list', { items: [{ i: '📜', t: 'Rally permit L-7392 · vendor auth L-7411 · L-7421', go: 'L.l.wallet' }, { i: '🏢', t: 'Vendors · Suresh M (AV) · Bharat Banners · water (pending)', toast: 'Vendor list drives §8.13 auto-page' }] }]
  ] });
  s('L.e.control', { app: 'L', f: '8', title: 'Control room · LIVE', sub: 'E-2891 · 5:48 PM · desktop/TV surface · mobile compact', hdr: 'red', right: { i: '⛶', toast: 'TV fullscreen mode' }, caps: ['8.15', '8.12', '8.13', '8.14', '8.11'], body: [
    ['card', { t: '4,820 attendees · updated 8s ago', s: '+ 240 in last 10 min · target 5,000 by 6 PM', tone: 'navy', sheet: { t: 'Attendance by gate', body: [['bar', { v: 80, l: 'Gate 1', r: '1,920' }], ['bar', { v: 60, l: 'Gate 2', r: '1,440' }], ['bar', { v: 95, l: 'Gate 3 · bottleneck', r: '1,460', tone: 'warn' }]] } }],
    ['card', { t: 'Volunteers · 187 / 200 · 94 % checked in', s: 'Stage 12/12 · Crowd 36/38 · Medical 8/14 · Security 24/26 · Other 107/110', toast: '13 unchecked-in names + last-known location' }],
    ['sec', { t: 'Issue queue · §8.13 · 3 open' }],
    ['list', { items: [{ t: 'Mic R2 cutting out · stage', s: 'paged Suresh M (AV) · ETA 8 min', b: 'URGENT · 2m', btone: 'danger' }, { t: 'Elderly giddiness · gate 2', s: 'Medical Lead on-site · in progress', b: 'MED · 6m', btone: 'warn' }, { t: 'Bottleneck lane 5 · 200+ wait', s: '2 vols deployed · easing', b: 'CROWD · 9m' }] }],
    ['ph', { t: 'Venue map · geo-fence · volunteer dots by team · issue pins', h: 110, kind: 'map', toast: 'Dot → volunteer profile · DM via §5' }],
    ['sec', { t: 'Media gallery · §8.14 · 18 new' }],
    ['grid', { cols: 4, items: [{ i: '📷', t: 'Gate 1', toast: 'EXIF + uploader · promote to coverage' }, { i: '📷', t: 'Stage', toast: 'Promote' }, { i: '📹', t: 'Lane 5', toast: 'Promote' }, { i: '📷', t: '+12', toast: 'Gallery' }] }],
    ['sec', { t: 'Team lead status' }],
    ['list', { items: [{ av: 'A', t: 'Anil P · Stage', s: 'on-site · 12/12 ✓', b: 'OK', btone: 'ok' }, { av: 'R', t: 'Ravi K · Crowd', s: 'on-site · 36/38', b: 'OK', btone: 'ok' }, { av: 'M', t: 'Acting Asha · Med', s: 'on-site · 8/14 · §8.22', b: 'OK', btone: 'ok' }, { av: 'V', t: 'Vikas J · Security', s: 'on-site · 24/26', b: 'OK', btone: 'ok' }] }],
    ['btn', { t: '+ Brief all 200 volunteers', go: 'L.n.compose' }]
  ] });
  s('L.e.roi', { app: 'L', f: '8', title: 'Post-event ROI · §8.16', sub: 'auto-generated 2:00 AM 2 Jun · Aundh Rally · 1 June', right: { i: '⤓', toast: 'Polished PDF for MLA office / press' }, caps: ['8.16', '8.17', '8.18', '8.19', '8.28'], body: [
    ['kpi', { items: [{ v: '5,840', l: 'peak · +29 % vs 4,500', tone: 'ok' }, { v: '197/200', l: 'vols checked in' }, { v: '₹4.82L', l: 'of ₹6.00L · 19.7 % under' }, { v: '7', l: 'issues · all resolved · avg 9 min' }, { v: '94', l: '/ 100 final · +7', tone: 'gold' }] }],
    ['spark', { v: [30, 55, 75, 100, 80, 50, 20], l: 'Attendance arc · 5 PM → 8 PM · peak 5,840 at 6 PM speech' }],
    ['sec', { t: 'Media coverage · §8.17' }],
    ['list', { items: [{ t: 'Sakal Times', b: 'positive', btone: 'ok', toast: 'Open article' }, { t: 'Lokmat Marathi', b: 'positive', btone: 'ok' }, { t: 'Pune Mirror', b: 'neutral' }, { t: 'ABP Majha · 4-min segment', b: 'positive', btone: 'ok' }, { t: '+ 38 social posts tagged', tone: 'muted' }] }],
    ['sec', { t: 'Lessons learned · §8.18 · team-lead entries' }],
    ['list', { items: [{ i: '+', t: 'KEEP · Auto-paged AV vendor saved >15 min outage', tone: 'ok' }, { i: '+', t: 'KEEP · Geo-fence check-in eliminated manual roster', tone: 'ok' }, { i: '~', t: 'CHANGE · Lane 5 bottleneck — open earlier next time', tone: 'warn' }, { i: '~', t: 'CHANGE · Medical Lead vacancy hurt — fill earlier', tone: 'warn' }] }],
    ['btn', { t: 'Pin lessons into Rally template playbook', kind: 'secondary', toast: 'Pinned · next organiser starts a step ahead' }],
    ['note', { t: 'Event ad-hoc unit closes D+7 · chat read-only · media + attendance log preserved · §8.28', tone: 'info' }],
    ['link', { t: '§8.19 multi-event · 3 rallies in Pune Rural Q2 · view ↗', go: 'L.e.list' }]
  ] });

  /* ---------- §9 Settings & System ---------- */
  s('L.s.home', { app: 'L', f: '9', title: 'Settings', sub: 'Sunita Joshi · Block Lead Haveli · also OSD to MLA Kiran Rao', caps: ['9.1', '9.5', '9.6'], body: [
    ['card', { av: 'S', t: 'Sunita Joshi', s: 'Block Lead Haveli · primary · + Mahila Aghadi Block Cmt · + OSD to MLA Kiran Rao · D-4892', go: 'L.m.profile' }],
    ['sec', { t: 'Self-care' }],
    ['list', { items: [{ i: '✎', t: 'Edit profile · §9.2', s: 'photo · contact · language · stored signature', go: 'L.s.profile' }, { i: '🔔', t: 'Notifications · §9.3', s: 'push · SMS · WhatsApp · email · quiet hours', go: 'L.s.notif' }, { i: '🔒', t: 'Security · §9.4', s: 'PIN · auto-lock · 4 active sessions', b: '4 active', go: 'L.s.security' }, { i: '🆘', t: 'Help & SOS · §9.5', s: 'FAQ · tutorials · emergency hotline · bug report', go: 'L.s.help' }, { i: 'ℹ', t: 'About · v4.2.1 · §9.6', go: 'L.s.about' }] }],
    ['sec', { t: 'Admin · Block Lead + OSD access' }],
    ['list', { items: [{ i: '⚙', t: 'My Delegations · §1.33', s: '“Acting as MLA Kiran Rao” · D-4892 active', go: 'L.m.mydel' }, { i: '📊', t: 'Sub-tree audit log', s: 'own sub-tree only · §9.8 read-only', go: 'L.s.audit' }, { i: '🛠', t: 'Top Leader admin console', s: 'master data · MCC · time-travel · org config', go: 'L.s.admin' }] }],
    ['btn', { t: 'Sign out · all 4 sessions', kind: 'danger', go: 'L.a.unlock' }]
  ] });
  s('L.s.profile', { app: 'L', f: '9', title: 'Edit profile', sub: '§9.2', right: { i: 'Save', go: 'L.s.home' }, caps: ['9.2'], body: [
    ['ph', { t: 'Change photo', h: 90, kind: 'round', toast: 'Photo picker' }],
    ['input', { label: 'Name', v: 'Sunita Joshi' }], ['input', { label: 'Contact email', v: 'sunita@example.in' }],
    ['chips', { opts: ['मराठी', 'हिंदी', 'English'], v: 0 }],
    ['list', { items: [{ i: '✍', t: 'Stored signature', s: 'captured 12 Aug 2024 · used in 28 letters · re-capture', go: 'L.s.security' }, { i: '🕒', t: 'Designation timeline · §1.19', go: 'L.m.timeline' }] }],
    ['btn', { t: 'Save', go: 'L.s.home' }]
  ] });
  s('L.s.notif', { app: 'L', f: '9', title: 'Notifications', sub: 'how the platform reaches you · §9.3', caps: ['9.3'], body: [
    ['sec', { t: 'Channels · master toggles' }],
    ['toggle', { label: 'In-app push', s: 'recommended for all features', on: true }], ['toggle', { label: 'WhatsApp', s: 'urgent + selected categories', on: true }], ['toggle', { label: 'SMS', s: 'fallback when push + WhatsApp fail', on: true }], ['toggle', { label: 'Email', s: 'reports + weekly digests only', on: false }],
    ['card', { t: 'Quiet hours · non-urgent only · ACTIVE 10:30 PM → 6:30 AM', s: 'Urgent + ack-required still ring · override per-chat available · §5.18', toast: 'Time picker · day-of-week · holiday calendar' }],
    ['sec', { t: 'Per-feature filters' }],
    ['list', { items: [{ t: '§3 Grievance · sub-tree', right: 'All ▾', toast: 'all sub-tree / breach only / my queue' }, { t: '§4 Tasks', right: 'All ▾' }, { t: '§5 Chat', right: 'Mentions only ▾' }, { t: '§6 Announcements', right: 'All ▾' }, { t: 'Audit alerts (Lead+)', right: 'Locked 🔒', toast: 'Set by Top Leader policy' }] }],
    ['btn', { t: 'Save preferences', go: 'L.s.home' }]
  ] });
  s('L.s.security', { app: 'L', f: '9', title: 'Security', sub: 'PIN · auto-lock · sessions · signature · §9.4', caps: ['9.4', '0.13'], body: [
    ['list', { items: [{ t: '6-digit PIN', s: 'last changed 22 Mar 2026 · lockout: 5 fails → 30 min', right: 'Change', go: 'L.a.forgot' }] }],
    ['toggle', { label: 'Face / Fingerprint unlock', s: 'Face ID enabled · also for §7 cosign', on: true }],
    ['input', { label: 'Auto-lock after', v: '2 min ▾', hint: 'org default 5 min · bounded by policy' }],
    ['sec', { t: 'Active sessions · 4 · tap to revoke' }],
    ['list', { items: [{ t: 'THIS DEVICE · iPhone 15 · Mumbai · now', s: 'last action 4s ago · cellular + Wi-Fi', tone: 'me' }, { t: 'MacBook · home · 4h ago', s: 'Chrome 126 · Pune Cantonment · last: §9.10 geography dry-run', right: 'Revoke', toast: 'Session revoked' }, { t: 'iPad · office · 1d ago', s: 'Safari 17.5 · Pune City', right: 'Revoke', toast: 'Session revoked' }, { t: '⚠ Unknown Android · 12d ago', s: 'Nashik · active during your Pune meeting · flagged by §F.1 anomaly', b: 'REVIEW', btone: 'danger', sheet: { t: 'Unknown session', body: [['row', { items: [{ t: 'Revoke now', kind: 'danger', go: 'L.s.security' }, { t: 'Escalate to Compliance', kind: 'secondary', toast: 'Compliance alerted' }, { t: 'Change PIN', kind: 'secondary', go: 'L.a.forgot' }] }]] } }] }],
    ['card', { t: 'Stored signature · §0.13', s: 'Captured 12 Aug 2024 · used in §7 letters · 28 issued', body: [['btn', { t: 'Re-capture', kind: 'secondary', go: 'L.a.sig' }]] }],
    ['btn', { t: 'Sign out · all other sessions', kind: 'danger', toast: '3 sessions revoked' }]
  ] });
  s('L.s.help', { app: 'L', f: '9', title: 'Help & SOS', sub: '§9.5', caps: ['9.5'], body: [
    ['list', { items: [{ i: '❓', t: 'FAQ', toast: 'FAQ' }, { i: '🎬', t: 'Video tutorials', toast: 'Tutorials' }, { i: '☎', t: 'Emergency hotline · security-cell members', s: '020-XXXX-0100 (shown as text)', toast: 'Number shown' }, { i: '🐞', t: 'Report a bug', sheet: { t: 'Report a bug', body: [['ta', { ph: 'What happened?' }], ['btn', { t: 'Send to IT helpdesk', go: 'L.s.home' }]] } }, { i: '🔁', t: 'Replay onboarding tour', go: 'L.a.tour' }] }]
  ] });
  s('L.s.about', { app: 'L', f: '9', title: 'About', caps: ['9.6'], body: [
    ['list', { items: [{ t: 'Version', right: '4.2.1 · build 1120' }, { t: 'Last sync', right: '2 min ago' }, { t: 'Policy versions in effect', right: 'role catalog v2026.04' }, { t: 'Terms · Privacy · DPDP notice', toast: 'Legal' }, { t: 'Open-source licences', toast: 'Licences' }] }]
  ] });
  s('L.s.audit', { app: 'L', f: '9', title: 'Audit log', sub: 'sub-tree · read-only · §9.8 · hash-chained', right: { i: '⤓', toast: 'Notarised export' }, caps: ['9.8', '9.9'], body: [
    ['banner', { t: 'Hash chain intact · SHA-256 · weekly notarised · tap to verify', tone: 'ok', toast: 'Verify: OK · 247,891 rows' }],
    ['input', { ph: '⌕ Search · person · ticket · letter · event · date' }],
    ['tl', { items: [{ t: '22 May 11:48 · §6 announcement A-9421 sent', s: 'public: MLA Kiran · audit: Sunita (OSD) · D-4892', st: 'done' }, { t: '22 May 10:46 · §0.18 approved Lakshmi Bhonsle', s: 'Anil Patil · token T-AP-9821', st: 'done' }, { t: '22 May 09:12 · §9.10 geography dry-run', s: 'Sunita · 122 assignments would move', st: 'done' }, { t: '21 May 16:18 · §7 letter L-4321 issued', s: 'signed under MLA signature · composed by Sunita', st: 'done' }] }],
    ['card', { t: 'Data export / GDPR · §9.9', s: 'Per-citizen export or deletion · DPDP 30-day SLA · notarised bundle', body: [['btn', { t: 'New data-subject request', kind: 'secondary', sheet: { t: 'Data-subject request', body: [['input', { label: 'CRN or member id', ph: 'NCP-PUN-WAK-…' }], ['radio', { opts: ['Export bundle', 'Delete (structural records retained per §9.15)'] }], ['btn', { t: 'Open request · 30-day clock starts', go: 'L.s.audit' }]] } }]] }]
  ] });
  s('L.s.admin', { app: 'L', f: '9', title: 'Admin console', sub: 'Top Leader · desktop-primary · mobile compact views', caps: ['9.7', '9.20', '9.24', '9.28', '9.29', '9.30'], body: [
    ['input', { ph: '⌕ Tenant-wide search · Person · Unit · Assignment · Letter · Ticket · Event · §9.30' }],
    ['sec', { t: 'Master data · the 5 layers' }],
    ['list', { items: [{ i: '🗺', t: 'Master-data workbench · §9.27', s: 'geography · constituency · units · roles · assignments', go: 'L.s.workbench' }, { i: '🗓', t: 'Election calendar & MCC · §9.14', s: '1 MCC window active · 38d left', b: 'MCC', btone: 'danger', go: 'L.s.mcc' }, { i: '🕒', t: 'Time-travel · §9.17', s: 'org chart as of any past date', go: 'L.s.timetravel' }, { i: '🏛', t: 'Org configuration · §9.12 · §9.22 · §9.23 · §9.25 · §9.26', s: 'wings · staff roles · delegation policy · visibility', go: 'L.s.orgconfig' }, { i: '🌳', t: 'Org structure · role catalog · routing', go: 'L.h.structure' }] }],
    ['sec', { t: 'Tenant · §9.7' }],
    ['list', { items: [{ t: 'Plan · billing · storage', s: 'Pune pilot · 12,840 assignments · 64 % of storage', toast: 'Tenant config' }, { t: 'API access · data isolation', s: 'per-state residency · §F.10', toast: 'API keys' }, { t: 'Multi-tenant switch · §9.20', s: 'NCP Maharashtra ▾ · NCP Goa', go: 'L.a.multiorg' }, { t: 'Form-factor panel · §9.24', s: 'Finance Operator desktop-only · war-room TV enabled', toast: 'Per staff-role × device matrix' }, { t: 'Multi-window layout · §9.28', s: 'desktop only · drag-drop reassign · keyboard shortcuts', toast: 'Desktop only' }, { t: 'War-room preview · §9.29', s: 'how dashboards render on TV', go: 'L.v.cmd' }] }],
    ['list', { items: [{ i: '📋', t: 'Org-wide audit log · §9.8', go: 'L.s.audit' }, { i: '⚙', t: 'Connection policy · §9.19 (mirror of §1.27)', go: 'L.m.policy' }, { i: '⇄', t: 'Routing rules · §9.18 (mirror of §2.17)', go: 'L.h.routing' }] }]
  ] });
  s('L.s.workbench', { app: 'L', f: '9', title: 'Master-data workbench', sub: 'Geography · Pune Division · current v2025.11.12 · staged v2026.05.08', caps: ['9.27', '9.10', '9.11', '9.21', '9.13', '9.16'], body: [
    ['chips', { opts: ['L1 Geography · 24,712', 'L2 Constituency · 4,892', 'L3 Units · 1,247', 'L4 Roles · 42', 'L5 Assignments · 12,840'], v: 0 }],
    ['row', { items: [{ t: 'Import CSV', kind: 'secondary', toast: 'LGD / ECI feed parsed · diff staged' }, { t: 'Dry-run', kind: 'secondary', toast: 'Dry-run 18s · impact updated' }] }],
    ['table', { cols: ['LGD code', 'Ward', 'Voters', 'Status'], rows: [['PNR-WAK-44', 'Wakad-44 (Datta Nagar)', '8,124', 'unchanged'], { c: ['PNR-WAK-47', 'Wakad-09 (was Wakad-47)', '7,892', 'renamed'], toast: 'Rename preserved on historical records · §9.21' }, { c: ['PNR-WAK-48', 'Wakad-48 (Datta)', '10,412', 'split into 2'], toast: 'Split → 48A + 48B' }, ['PNR-WAK-48A', 'Wakad-48A (Datta N)', '5,210', 'NEW'], ['PNR-WAK-48B', 'Wakad-48B (Datta S)', '5,202', 'NEW'], { c: ['PNR-WAK-50', 'Wakad-50 (merged 50+51)', '9,328', 'merged'], toast: 'Affects 3 active assignments' }, ['PNR-WAK-55', 'Wakad-55 (Punawale)', '7,612', 'unchanged']] }],
    ['note', { t: 'Inline validation · 2 warnings · 0 errors · Wakad-50 merger affects 3 active assignments (manual reassign) · 1 vendor letter references old PNR-WAK-48 (auto-rewrite on commit?)', tone: 'warn' }],
    ['kpi', { items: [{ v: '122', l: 'assignments will move' }, { v: '18', l: 'ward renames' }, { v: '4', l: 'new wards' }, { v: '2', l: 'wards retired' }] }],
    ['card', { t: 'Downstream ripple', s: '§3 routing rules 142 · §6 audiences 28 · §7 letters 1 · §8 venue heatmap · §10 voter list re-bucket', tone: 'info' }],
    ['card', { t: 'Quota / reservation rules · §9.13', s: 'District Cmt ≥ 33 % women · ≥ 15 % SC/ST · validated on every assignment change', toast: 'Quota editor' }],
    ['btn', { t: 'Commit → PIN + type COMMIT-V20260508', sheet: { t: 'Commit staged version', body: [['input', { label: 'Type confirmation', ph: 'COMMIT-V20260508' }], ['small', { t: '24h revert window · audit row preserves both directions · blocked during MCC freeze for some layers' }], ['btn', { t: 'Commit v2026.05.08', go: 'L.s.audit' }]] } }]
  ] });
  s('L.s.mcc', { app: 'L', f: '9', title: 'Election calendar & MCC', sub: '3 cycles tracked · 1 MCC window active · auto-ECI sync', right: { i: '⟳', toast: 'ECI feed synced · 0 new cycles' }, caps: ['9.14', '9.15'], body: [
    ['tl', { items: [{ t: 'PMC local body · poll 30 Jun', s: 'MCC · ACTIVE · 38d left', st: 'red', toast: 'Cycle detail' }, { t: 'Pune ZP elections · poll 15 Oct', s: 'MCC pre-freeze T-30d', st: 'cur' }, { t: 'MH Vidhan Sabha · poll 12 Apr 27', s: 'planning · T-180d', st: 'todo' }] }],
    ['card', { t: 'Active MCC · PMC local body · 38d left', s: 'Scope · PMC + PCMC · 24 wards · 8 Lok Sabha segments touched', tone: 'danger', body: [
      ['sec', { t: 'Restricted templates' }],
      ['pills', { items: [{ t: '§6 scheme-launch', tone: 'danger' }, { t: '§6 foundation-stone', tone: 'danger' }, { t: '§7 scheme-grant letters', tone: 'danger' }, { t: '§8 govt-event variants', tone: 'danger' }, { t: '§10.13 vote-intent sealed', tone: 'danger' }, { t: '§1.7 expel rate-limited', tone: 'warn' }] }],
      ['small', { t: 'Allowed with audit bump · routine grievance + task + chat + non-political announcements · audit frequency real-time' }],
      ['btn', { t: 'Request MCC override (dual-sign)', kind: 'secondary', toast: 'Top Leader + Compliance dual-sign required' }]] }],
    ['sec', { t: 'Audit retention policy · §9.15' }],
    ['list', { items: [{ t: 'Assignment changes (§2)', right: 'FOREVER' }, { t: 'Letter issuance + revoke (§7)', right: 'FOREVER' }, { t: 'Chat deletions (§5.17)', right: '5y DPDP' }, { t: 'Grievance closures (§3)', right: '7y · org' }, { t: 'Event lifecycle (§8)', right: '5y DPDP' }, { t: 'Login + session events', right: '90d · org', toast: 'Cannot go below regulatory minimum' }] }],
    ['btn', { t: 'DPDP ↑ export · notarised bundle', kind: 'secondary', toast: 'PDF + CSV with hash-chain verification' }]
  ] });
  s('L.s.timetravel', { app: 'L', f: '9', title: 'Time-travel', sub: 'org chart as of 12 March 2024 · internal-election baseline', right: { i: '⤓', toast: 'Reconstructed-chart PDF + hash-chain cert' }, caps: ['9.17', '9.21', '9.8'], body: [
    ['input', { label: 'Date slider · drag or type', v: '12 Mar 2024', hint: '2022 ──●──────── now' }],
    ['tree', { items: [{ d: 0, av: 'AP', t: 'Anil Patil · District Pres', s: 'Pune Rural' }, { d: 1, av: 'SJ', t: 'Block · Haveli · Sunita J', s: 'since 22', kids: false }, { d: 1, av: 'VK', t: 'Block · Mulshi · Vaibhav K', s: 'since 23', kids: false }, { d: 1, av: '?', t: 'Block · Khed · VACANT', s: 'since 12 Feb 24', kids: false, b: 'VACANT', btone: 'danger' }, { d: 1, av: 'PR', t: 'Block · Junnar · Acting Pradeep', s: '§5.24', kids: false, b: 'ACTING', btone: 'gold' }, { d: 1, av: 'NP', t: 'Mahila Aghadi Dist · Nita P', s: 'since 23', kids: false, tone: 'purple' }, { d: 1, av: 'YM', t: 'Yuva Aghadi Dist · Yogesh M', s: 'role then named “Yuva Pres” · §9.21', kids: false, tone: 'purple' }] }],
    ['sec', { t: 'Deltas vs today' }],
    ['list', { items: [{ t: 'Khed Block vacancy now filled', s: 'Pradeep S · 14 Apr 24' }, { t: 'Junnar Acting now substantive' }, { t: '“Yuva Pres” → “Yuva District Pres”', s: 'renamed 18 Aug 24 · historical letters preserve original wording · §9.21' }, { t: '+2 District VPs added · Mar 2025 amendment' }] }],
    ['kpi', { items: [{ v: '12,124', l: 'assignments as-of' }, { v: '12,840', l: 'today · +716' }] }],
    ['note', { t: 'VERIFY · hash-chain intact · SHA-256 9c4e…8b1d · weekly notarised · quota check as-of date: 4 of 13 women = 30.8 % (below 33 %)', tone: 'ok' }],
    ['btn', { t: 'Side-by-side two dates (desktop)', kind: 'secondary', toast: 'Desktop multi-window' }]
  ] });
  s('L.s.orgconfig', { app: 'L', f: '9', title: 'Org configuration', sub: 'NCP Maharashtra · 6 wings active · 8 staff role types · 142 delegations', caps: ['9.12', '9.22', '9.23', '9.25', '9.26'], body: [
    ['sec', { t: 'Wings & cells · §9.12 · 6 of 8 on' }],
    ['toggle', { label: 'Mahila Aghadi', on: true }], ['toggle', { label: 'Yuva Aghadi', on: true }], ['toggle', { label: 'Farmers Cell', on: true }], ['toggle', { label: 'IT Cell', on: true }], ['toggle', { label: 'Legal Cell', on: true }], ['toggle', { label: 'Minority Cell', on: true }], ['toggle', { label: 'SC/ST Cell', on: false }], ['toggle', { label: 'Senior Citizens Cell (new ✦)', s: 'enabling spawns parallel hierarchy primitives', on: false }],
    ['sec', { t: 'Staff role catalog · §9.22' }],
    ['list', { items: [{ t: 'Org Admin', right: '3 active', toast: 'Role detail' }, { t: 'IT Helpdesk', right: '6' }, { t: 'OSD / Personal Aide', right: '42' }, { t: 'Content Creator', right: '8' }, { t: 'War-Room Operator', right: '4' }, { t: 'Finance Operator', right: '2' }, { t: 'Compliance Officer', right: '2' }, { t: '+ Add new staff role', toast: 'New staff role' }] }],
    ['sec', { t: 'Delegation policy · §9.23 · MLA-aide template' }],
    ['toggle', { label: 'Compose announcements (§6)', on: true }], ['toggle', { label: 'Issue routine letters (§7 standard)', on: true }], ['toggle', { label: 'Sign rally permits (§7 high-sens)', on: false }], ['toggle', { label: 'Configure tenant settings (§9.7)', on: false }], ['toggle', { label: 'Approve direct citizen connections (§1.22)', s: 'ADVISORY · recommend, not decide', on: false, locked: true }], ['toggle', { label: 'Compose during MCC window', s: 'RESTRICTED', on: false, locked: true }],
    ['sec', { t: 'Visibility tiers · §9.25' }],
    ['list', { items: [{ t: 'Tier 1 · Public · name, photo, role, designations', right: 'all members' }, { t: 'Tier 2 · Contact · phone, email, office hours', right: 'line-of-sight', toast: 'Top Leader phone can move to Tier 3' }, { t: 'Tier 3 · Operational · tickets, tasks, chat', right: 'own sub-tree' }, { t: 'Tier 4 · Edit · profile/role changes', right: 'sub-tree leads' }] }],
    ['sec', { t: 'Audit-honesty · §9.26' }],
    ['radio', { opts: [{ t: 'Public: principal only (“from MLA Kiran”) · Audit: principal + aide', s: 'DPDP + party-constitution compliant default' }, { t: 'Public: principal + aide pill' }, { t: 'Full both-actor everywhere' }], v: 0 }],
    ['btn', { t: 'Save org configuration', toast: 'Saved · cache invalidation 5–15 min' }]
  ] });

  /* ---------- §10 Voter Ops ---------- */
  s('L.v.booth', { app: 'L', f: '10', title: 'My booth voters', sub: 'Sakhi Priya · Wakad B-47 · 942 voters · 412 households', caps: ['10.1', '10.3', '10.8', '10.20', '10.7'], body: [
    ['card', { t: 'Your coverage · §10.7 · 68 % reached · 642 of 942', s: '300 to go · 14 days to election · +22 today', tone: 'navy', body: [['bar', { v: 68 }]] }],
    ['chips', { opts: ['All 412', 'Uncovered 138', 'Segment ▾', 'Map'], v: 0 }],
    ['input', { ph: '⌕ search · EPIC · name · house no' }],
    ['card', { t: 'HH 47 · BHONSLE · 4 voters', s: '2 of 4 reached', b: 'PRIORITY', btone: 'gold', body: [['list', { items: [{ t: 'Lakshmi Bhonsle · 42 · F', s: '✓ visited 2d', go: 'L.v.voter' }, { t: 'Ramesh Bhonsle · 45 · M', s: '✓ committed', go: 'L.v.voter' }, { t: '+ 2 more · uncontacted →', tone: 'muted', toast: 'Expanded' }] }]] }],
    ['card', { t: 'HH 52 · KULKARNI · needs ride · §10.6', s: 'Mrs Kulkarni · 73 · F · senior · visited 18 May · will vote · poll-day pickup pre-arranged', tone: 'danger', go: 'L.v.ride' }],
    ['card', { t: 'HH 58 · DESHMUKH · 3 voters · 0 reached', s: 'Priya Deshmukh · 28 · F · YUVA · §10.20 wing-driven · never visited', b: 'YUVA', btone: 'purple', sheet: { t: 'Mark outreach · §10.3', body: [['chips', { opts: ['Called', 'Visited', 'Committed', 'No-answer'], v: 1 }], ['ta', { ph: 'Optional note · photo of voter ID for §10.4 verify' }], ['btn', { t: 'Save · attributed to Booth Vol (§10.22)', go: 'L.v.booth' }]] } }],
    ['card', { t: 'HH 62 · JADHAV · 2 voters · NO-ANSWER', s: 'visited 14 · 16 · 19 May · 3 attempts · escalate to Booth Pres?', b: '3×', btone: 'warn', toast: 'Escalated to Ravi Kumar' }],
    ['small', { t: '+ 408 more households · 138 uncontacted · 12 need ride' }],
    ['btn', { t: 'Start D2D run · §4.14 mode', go: 'L.t.d2d' }],
    ['sec', { t: 'Poll-day & Lead surfaces' }],
    ['list', { items: [{ i: '🗳', t: 'Slip delivery (EDT Runner)', go: 'L.v.slips' }, { i: '📊', t: 'Coverage analytics (Lead)', go: 'L.v.coverage' }, { i: '⚠', t: 'EPIC anomalies', go: 'L.v.epic' }, { i: '🏁', t: 'EDT spawn console (Election I/C)', go: 'L.v.edt' }, { i: '📺', t: 'Poll-day command center (MLA)', go: 'L.v.cmd' }] }]
  ] });
  s('L.v.voter', { app: 'L', f: '10', title: 'Lakshmi Bhonsle', sub: '42 · F · Wakad B-47 · HH 47', caps: ['10.2', '10.4', '10.13', '10.22'], body: [
    ['card', { t: 'EPIC · ABC1234567', s: 'also has CRN NCP-PUN-WAK-08421 · §C0 cross-link', tone: 'navy' }],
    ['card', { t: 'Outreach status · §10.3 · ✓ Visited · Committed to vote · 20 May', s: 'attribution: Sakhi Priya · Booth Vol · §10.22 · changes to EDT Runner on poll day', tone: 'ok' }],
    ['sec', { t: 'Family · HH 47 Bhonsle · §10.2' }],
    ['list', { items: [{ t: 'Ramesh Bhonsle · 45 · M · husband', b: 'committed', btone: 'ok' }, { t: 'Anjali Bhonsle · 22 · F · daughter', b: 'YUVA · uncontacted', btone: 'purple' }, { t: 'Sandeep Bhonsle · 20 · M · son', b: 'YUVA · uncontacted', btone: 'purple' }] }],
    ['sec', { t: 'Outreach history' }],
    ['tl', { items: [{ t: '20 May · Visited · committed · Sakhi Priya', st: 'done' }, { t: '12 May · Called · positive · Sakhi Priya', st: 'done' }, { t: 'Mar 24 · Visited (last election) · voted', st: 'done' }] }],
    ['banner', { t: '🔒 VOTE-INTENT SCORE · §10.13 · sealed during MCC window (T-23 days) · enforced by §9.14 · resumes post-result · audit-bumped reads', tone: 'danger', go: 'L.s.mcc' }],
    ['grid', { cols: 3, items: [{ i: '📞', t: 'Call', s: 'platform-masked', toast: 'NCP-platform number dialled' }, { i: '✎', t: 'Mark visit', toast: 'Status sheet' }, { i: '⚠', t: 'EPIC issue', s: '→ §10.4', go: 'L.v.epic' }] }],
    ['btn', { t: 'Arrange poll-day ride · §10.6', kind: 'gold', go: 'L.v.ride' }]
  ] });
  s('L.v.slips', { app: 'L', f: '10', title: 'Slip delivery', sub: 'POLL DAY · Sakhi Priya · EDT Runner · §10.22', hdr: 'gold', caps: ['10.5', '10.11', '10.22'], body: [
    ['banner', { t: 'HANDLING AS · EDT Runner · Wakad B-47 · ad-hoc unit ▾', tone: 'gold', sheet: { t: 'Handler context', body: [['radio', { opts: ['EDT Runner (primary today)', 'Booth Vol (everyday)'], v: 0 }], ['small', { t: 'Switching re-attributes new deliveries' }], ['btn', { t: 'Confirm', go: 'L.v.slips' }]] } }],
    ['card', { t: '187 / 312 · 60 % by 12:18 PM', s: 'avg 3.4 min/slip · ETA 4:08 PM · §10.5', tone: 'navy', body: [['bar', { v: 60 }]] }],
    ['sec', { t: 'Next 3 households · optimised route' }],
    ['list', { items: [{ t: 'HH 52 · KULKARNI · 80m · 1 slip + 1 ride', s: 'Mrs Kulkarni (73) · senior · pickup 2:30 PM · driver Suresh M arriving 2:25', b: 'RIDE', btone: 'danger', go: 'L.v.ride' }, { t: 'HH 58 · DESHMUKH · 120m · 3 slips', s: 'Priya · Anjali · Sandeep · all YUVA · 2 of 3 committed', go: 'L.v.voter' }, { t: 'HH 64 · MORE · 175m · 2 slips', s: 'Suresh + Manjusha · committed · voted last 2 elections' }] }],
    ['card', { t: 'Live turnout · your booth · §10.11 · 52 %', s: '490 of 942 voted · +84 in last hour · ETA 78 % by close · 12:18 PM', go: 'L.v.cmd' }],
    ['card', { t: 'Current · HH 47 BHONSLE · 2 slips', body: [['row', { items: [{ t: '📷 + selfie', kind: 'secondary', toast: 'Photo at door · EXIF GPS' }, { t: '✓ Mark delivered', go: 'L.v.slips', toast: 'Delivered · synced to command center' }] }]] }],
    ['small', { t: 'Offline-cached · syncs on reconnect · voters already voted (per live feed) dim automatically' }]
  ] });
  s('L.v.ride', { app: 'L', f: '10', title: 'Ride dispatch', sub: 'Mrs Kulkarni · HH 52 · §10.6 + C6 SOS infra', caps: ['10.6', '10.27'], body: [
    ['card', { av: 'K', t: 'Mrs Kulkarni · 73', s: 'HH 47 Lane 3 · senior · pre-arranged ride · EPIC ABC1234890 · CRN NCP-PUN-WAK-08423' }],
    ['ph', { t: '🏠 PICKUP → 🚗 600m · 4 min → 📮 BOOTH 47', h: 90, kind: 'map', toast: 'Live driver tracking' }],
    ['card', { av: 'S', t: 'Suresh M · EDT Hospitality', s: 'white Innova · MH-12-AB-4892 · ETA 2:25 PM · pickup 2:30 · drop 2:38', tone: 'ok' }],
    ['tl', { items: [{ t: 'Ride requested by Sakhi', s: '2:08 PM', st: 'done' }, { t: 'Suresh accepted · en route', s: '2:14 PM', st: 'done' }, { t: 'Pickup imminent · 2:25 PM', s: 'now · tap to mark picked up with selfie', st: 'cur', toast: 'Marked picked up' }, { t: 'Vote cast + return home', st: 'todo' }] }],
    ['note', { t: '§10.27 POLL-DAY ESCALATION ARMED · if driver doesn’t pick up by 2:35 PM → auto-escalate to Election I/C · backup driver from EDT pool', tone: 'danger' }],
    ['row', { items: [{ t: '📞 Call Suresh', kind: 'secondary', toast: 'Platform-masked call' }, { t: 'Cancel · re-pool', kind: 'danger', sheet: { t: 'Cancel ride', body: [['radio', { opts: ['Family pickup', 'Voter changed mind', 'Other'] }], ['btn', { t: 'Cancel & re-pool Suresh', kind: 'danger', go: 'L.v.slips' }]] } }] }],
    ['small', { t: 'Wheelchair flag at request → only equipped vehicles eligible. Multi-voter households → one van trip.' }]
  ] });
  s('L.v.cmd', { app: 'L', f: '10', title: 'Poll-day command · Pune Cantonment VS', sub: '30 Jun 26 · 142,000 voters · 168 booths · 1,142 EDT members · LIVE', hdr: 'red', right: { i: '⛶', toast: 'War-room TV mode' }, caps: ['10.16', '10.11', '10.14', '10.23', '10.15', '10.17', '10.24', '10.12', '10.13'], body: [
    ['chips', { opts: ['Pune Cantonment VS', 'Maval LS (aggregate)', 'Other VS ▾'], v: 0 }],
    ['card', { t: '52.4 % · 74,408 of 142,000 · 3:18 PM', s: '+ 6,420 in last hour · ETA 74 % by 6 PM close · 60s refresh · §10.11', tone: 'navy' }],
    ['sec', { t: '168-booth heatmap · turnout · 3 red · 2 amber · 163 green' }],
    ['heat', { cols: 4, cells: [{ t: 'B-04 Haveli', v: 68 }, { t: 'B-12 Bhor', v: 64 }, { t: 'B-47 Wakad', v: 61, go: 'L.v.slips' }, { t: 'B-19', v: 58 }, { t: 'B-23', v: 55 }, { t: 'B-71', v: 47, tone: 'warn' }, { t: 'B-87 Khed', v: 22, tone: 'bad', toast: 'Rain · low coverage' }, { t: 'B-32 Khed', v: 14, tone: 'bad', toast: 'Drill B-32 · agent present · weather' }] }],
    ['sec', { t: 'Alert stream · 7' }],
    ['list', { items: [{ t: 'B-32 LOW · 14 % turnout · check', b: 'LOW', btone: 'danger', toast: 'Drill B-32' }, { t: 'B-87 LOW · 22 % · weather rain', b: 'LOW', btone: 'danger' }, { t: 'RIDE QUEUE · 3 pending > 5 min', b: '§10.27', btone: 'warn', go: 'L.v.ride' }, { t: 'OPP §10.14 · rival D2D B-44 active', b: 'OPP', btone: 'purple', sheet: { t: 'Opposition activity log · §10.14', body: [['list', { items: [{ t: '1:18 PM · rival party D2D · B-44', s: 'logged by EDT Coordinator · EDT briefed via §6' }, { t: '11:40 AM · poster near B-19 gate', s: 'photo attached' }] }], ['btn', { t: 'Log new activity', go: 'L.v.cmd' }]] } }, { t: 'EPIC §10.4 · 2 dup found B-19', b: 'EPIC', go: 'L.v.epic' }] }],
    ['sec', { t: 'Per-block · §10.24 by assignment unit' }],
    ['bar', { v: 58, l: 'Haveli (28 booths)', r: '58 %' }], ['bar', { v: 54, l: 'Mulshi (24)', r: '54 %' }], ['bar', { v: 42, l: 'Khed (24)', r: '42 %', tone: 'warn' }], ['bar', { v: 57, l: 'Bhor (22)', r: '57 %' }],
    ['sec', { t: 'Booth-vs-booth · §10.17 · top 3 + bottom 2' }],
    ['list', { items: [{ av: '1', t: 'B-04 · Haveli-W4', right: '68 %' }, { av: '2', t: 'B-12 · Bhor-A2', right: '64 %' }, { av: '3', t: 'B-47 · Wakad B-47', right: '61 %' }, { av: '167', t: 'B-87 · Khed-W2', right: '22 %', tone: 'danger' }, { av: '168', t: 'B-32 · Khed-W7', right: '14 %', tone: 'danger' }] }],
    ['banner', { t: '🔒 VOTE-INTENT · §10.13 · SEALED · unseals post-result · §9.14 MCC enforced', tone: 'danger' }],
    ['grid', { cols: 2, items: [{ i: '📣', t: '+ Brief Khed EDTs', s: '§6 push to 24 chat groups', go: 'L.n.compose' }, { i: '🚗', t: 'Backup drivers · 3', s: 'EDT Hospitality pool', go: 'L.v.ride' }, { i: '💬', t: 'Open EDT chat · §5', go: 'L.c.adhoc' }, { i: '⬆', t: 'Escalate to Election I/C', toast: 'Election I/C paged' }] }]
  ] });
  s('L.v.coverage', { app: 'L', f: '10', title: 'Voter coverage analytics', sub: 'Pune Cantonment VS · T-14 days · 142,000 voters · 168 booths', caps: ['10.7', '10.8', '10.9', '10.15', '10.24', '10.26', '10.20'], body: [
    ['chips', { opts: ['Segment ▾', 'Block ▾', 'Booth ▾'], v: 0 }],
    ['kpi', { items: [{ v: '74 %', l: 'D2D coverage · target 92 %' }, { v: '37k', l: 'uncovered · 14d left', tone: 'warn' }, { v: '8', l: 'red booths < 50 %', tone: 'danger' }, { v: '38 %', l: 'Yuva touched', tone: 'warn' }, { v: '3', l: 'EDT vacancies · §10.26', tone: 'danger', go: 'L.v.edt' }] }],
    ['heat', { cols: 3, cells: [{ t: 'B-47 Wakad', v: 91 }, { t: 'B-48', v: 88 }, { t: 'B-52', v: 84 }, { t: 'B-55 Punawale · new', v: 42, tone: 'warn', toast: 'New ward post-delimitation · baseline 0' }, { t: 'B-87 Khed-W2', v: 22, tone: 'bad' }, { t: 'B-62', v: 71, tone: 'warn' }] }],
    ['sec', { t: 'Coverage by segment · §10.8 + §10.20' }],
    ['bar', { v: 86, l: 'Women (18+) · Mahila Sakhis', r: '86 %' }], ['bar', { v: 38, l: 'Youth (18-29) · Yuva gap', r: '38 %', tone: 'warn' }], ['bar', { v: 92, l: 'Senior (60+)', r: '92 %' }], ['bar', { v: 74, l: 'Reserved (SC/ST) · SC-cell', r: '74 %' }],
    ['sec', { t: 'Under-covered booths · < 50 % · 8 of 168' }],
    ['list', { items: [{ t: 'B-87 KHED-W2 · 22 %', s: 'Vol short · Yuva gap', b: 'nudge ↗', toast: '§6 push to Sakhis with gap-list' }, { t: 'B-32 KHED-W7 · 14 %', s: 'Booth Pres vacant · §10.26', b: 'fill slot ↗', btone: 'danger', go: 'L.m.add' }, { t: 'B-55 WAKAD-PUNAWALE · 42 %', s: 'new ward · D2D pending', b: 'D2D ↗', go: 'L.t.d2d' }, { t: 'B-104 MULSHI-PIRANGUT · 48 %', s: 'low household density · rural', b: 'D2D ↗', go: 'L.t.d2d' }] }],
    ['btn', { t: '↑ Nudge gaps', kind: 'secondary', toast: 'Personalised gap-lists sent' }]
  ] });
  s('L.v.epic', { app: 'L', f: '10', title: 'EPIC anomalies', sub: 'Pune Cantonment VS · 142 open of 312 lifetime · §10.21 routing', right: { i: '+', sheet: { t: 'Report EPIC anomaly · §10.4', body: [['chips', { opts: ['Duplicate', 'Dead', 'Missing', 'Wrong-booth'], v: 0 }], ['input', { label: 'EPIC', ph: 'ABC1234567' }], ['ta', { ph: 'Details · attach photo evidence' }], ['small', { t: 'Routes to Election I/C during cycle · Booth Pres otherwise' }], ['btn', { t: 'Submit', go: 'L.v.epic' }]] } }, caps: ['10.4', '10.10', '10.18', '10.21'], body: [
    ['kpi', { items: [{ v: '62', l: 'duplicate' }, { v: '38', l: 'dead · awaiting cert' }, { v: '28', l: 'missing' }, { v: '14', l: 'wrong-booth' }, { v: '170', l: 'resolved · 30d', tone: 'ok' }] }],
    ['list', { items: [
      { t: 'DUPLICATE · EPIC ABC123 + ABC9876 · B-19 · 2h', s: 'Vinod Pawar · listed in 2 booths (B-19 + B-44) · reported by Sakhi Anita · routed to Election I/C', b: 'DUP', btone: 'warn', sheet: { t: 'Anomaly actions', body: [['row', { items: [{ t: 'Resolve', go: 'L.v.epic' }, { t: 'Escalate to ERO', kind: 'secondary', toast: 'ERO notified' }, { t: 'False-positive', kind: 'secondary', toast: 'Trains detector' }, { t: 'Bulk-merge', kind: 'secondary', toast: 'Merged' }] }]] } },
      { t: 'DEAD · EPIC ABC4456 · B-47 · 6h', s: 'Mr Gokhale · 81 · death cert pending family · reported by Sakhi Priya', b: 'DEAD' },
      { t: 'MISSING · no EPIC on roll · B-22 · 1d', s: '3 households · Form 6 filed but not reflected · 12 voters · escalate to ERO?', b: 'MISS', btone: 'danger' },
      { t: 'WRONG-BOOTH · EPIC ABC7723 · B-55 · 2d', s: 'Reena Kale · moved Aundh→Wakad · Form 8 filed · flag at both booths', b: 'MOVED' },
      { t: '+ 138 more · severity sort · category filter', tone: 'muted' }
    ] }],
    ['card', { t: 'ECI sync status · §10.18', s: 'Last sync 8 May · 4 days ago · diff: 412 added · 287 removed · 28 ward-changed · next 22 May 6 AM · weekly during cycle', body: [['row', { items: [{ t: '↓ ECI feed · sync now', kind: 'secondary', toast: 'Fresh feed downloaded · diff computed' }, { t: '+ Bulk file', kind: 'secondary', toast: 'CSV/PDF → per-row anomalies' }] }]] }],
    ['note', { t: 'Routing · §10.21 · during cycle → Election I/C VS · otherwise → Booth President · bulk pattern (5+ in 1 booth) → Compliance + ERO', tone: 'info', go: 'L.h.routing' }]
  ] });
  s('L.v.edt', { app: 'L', f: '10', title: 'Election-Day Team spawn', sub: 'Pune Cantonment VS · 168 EDTs · T-45 · MCC begins', caps: ['10.19', '10.25', '10.26', '10.22'], body: [
    ['kpi', { items: [{ v: '158', l: 'EDTs ready · BC continuity', tone: 'ok' }, { v: '7', l: 'need overrides', tone: 'warn' }, { v: '3', l: 'vacant BC · §10.26', tone: 'danger' }, { v: '1,142', l: 'EDT members projected' }] }],
    ['sec', { t: 'EDT role slots per booth · 6' }],
    ['list', { items: [{ i: '1', t: 'Booth Coordinator', s: 'default: Booth President (§10.25 continuity)' }, { i: '2', t: 'Booth Agent (inside)', s: 'Booth Cmt member with election experience' }, { i: '3', t: 'Polling Agent', s: 'official party representative inside polling station' }, { i: '4', t: 'Counter Agent', s: 'post-poll counting station representative' }, { i: '5', t: 'Runner (slip + ride)', s: 'Sakhis from Booth Cmt · §10.5 + §10.6' }, { i: '6', t: 'Hospitality (ride driver)', s: 'ride dispatch · senior welfare · C6 SOS infra' }] }],
    ['sec', { t: 'Vacancy alerts · §10.26 · 3 booths · fill before spawn' }],
    ['list', { items: [{ t: 'B-32 KHED-W7 · Booth President vacant 14d', s: 'Acting needed or escalate to Block Lead', b: 'Fill slot →', btone: 'danger', go: 'L.m.add' }, { t: 'B-87 KHED-W2 · under-strength · 4 of 6 roles', s: 'Polling Agent + Counter Agent empty', b: 'Assign →', btone: 'warn', go: 'L.t.target' }, { t: 'B-55 WAKAD PUNAWALE · new post-delimitation', s: 'no historical Booth Cmt · spawn fresh from ward pool', b: 'Build →', go: 'L.m.dir' }] }],
    ['card', { t: 'Sample BC → EDT continuity · Wakad B-47', body: [['list', { items: [{ av: 'RK', t: 'Ravi Kumar · Booth Pres BC → Booth Coordinator EDT' }, { av: 'SP', t: 'Sakhi Priya · Booth Vol BC → Runner EDT' }, { av: 'SA', t: 'Sakhi Anita · Booth Vol BC → Runner EDT' }, { av: 'MJ', t: 'Override · Mr Joshi (sec experience) → Polling Agent EDT', b: 'OVERRIDE', btone: 'gold' }] }]] }],
    ['row', { items: [{ t: 'Preview ↗', kind: 'secondary', toast: 'Full 168-EDT roster table' }, { t: 'Dry-run', kind: 'secondary', toast: 'Simulated · ripple to §5 / §4 / §7 letterheads' }, { t: 'Spawn 168 →', sheet: { t: 'Spawn 168 EDTs', body: [['small', { t: '168 ad-hoc units (§2.7) · 168 chat groups (§5.22) · 1,142 members notified · attribution swaps to EDT (§10.22) · archive D+7' }], ['input', { label: 'Type SPAWN-168 to confirm', ph: 'SPAWN-168' }], ['btn', { t: 'Spawn · PIN re-auth', go: 'L.a.unlock' }]] } }] }]
  ] });
})();
