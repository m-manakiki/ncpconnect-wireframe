/* Leader App screens · §0 Auth · §1 Members · §2 Hierarchy · §3 Grievances · §4 Tasks */
(function () {
  const s = W.screen;

  /* ---------- Start ---------- */
  s('start', { app: 'L', f: '0', title: 'NCPConnect', hdr: 'none', caps: [], body: [
    ['h', { t: 'NCPConnect', s: 'Clickable wireframe · Maharashtra pilot · two apps, one spine' }],
    ['card', { t: 'Leader App', s: '11 features · party workers, leads, staff', b: '§0–§10', go: 'L.a.splash', body: ['Auth · Members · Hierarchy · Grievances · Tasks · Chat · Announcements · Letters · Events · Settings · Voter Ops'] }],
    ['card', { t: 'Citizen App', s: '8 features · direct-to-citizen', b: '§C0–§C7', tone: 'teal', go: 'C.o.splash', body: ['Get Started · Grievance · My Grievances · Representatives · Schemes · Events · SOS · Profile'] }],
    ['sec', { t: 'Jump straight in' }],
    ['list', { items: [
      { i: '▤', t: 'Leader Brief (signed in as Sakhi Priya)', s: 'Daily home · Booth Volunteer · Wakad B-47', go: 'L.brief' },
      { i: '⌂', t: 'Citizen Home (signed in as Lakshmi)', s: 'CRN NCP-PUN-WAK-08421', go: 'C.home' },
      { i: '👁', t: 'Lead surfaces (Sunita Joshi · Block Lead)', s: 'Dashboards, approvals, moderation', go: 'L.more' },
      { i: '🗳', t: 'Poll-day command center', s: 'MLA view · 168 booths', go: 'L.v.cmd' }
    ] }],
    ['small', { t: 'Use the side panel to browse every screen, or the Coverage tab to see each capability from the mockups and the screen that implements it. ← key goes back.' }]
  ] });

  /* ---------- §0 Auth & Onboarding ---------- */
  s('L.a.splash', { app: 'L', f: '0', title: 'Splash', hdr: 'none', caps: ['0.1'], body: [
    ['ph', { t: 'NCP mark · navy + gold', h: 160, kind: 'brand', go: 'L.a.login' }],
    ['h', { t: 'NCPConnect', s: 'Leader · v1.0.0 · PUNE CANTONMENT' }],
    ['small', { t: 'Tenant-branded splash · auto-transitions in ~1.5 s. Long-hold the mark for version info.' }],
    ['btn', { t: 'Continue', go: 'L.a.login' }],
    ['link', { t: 'Returning user → PIN unlock', go: 'L.a.unlock' }]
  ] });
  s('L.a.login', { app: 'L', f: '0', title: 'Sign in', back: 'L.a.splash', caps: ['0.2'], body: [
    ['h', { t: 'Sign in', s: 'Use the phone number registered with your unit.' }],
    ['input', { label: 'Phone number', v: '+91 98220 47821' }],
    ['check', { label: 'I agree to the Terms & Privacy', on: true }],
    ['btn', { t: 'Send OTP', go: 'L.a.otp' }],
    ['hr'],
    ['link', { t: 'Have an invite code?', go: 'L.a.code' }],
    ['link', { t: 'New to NCP? Find my organisation →', go: 'L.a.findorg' }],
    ['link', { t: 'Invite link / QR landing (paths B & C)', go: 'L.a.invite' }],
    ['note', { t: 'Rate-limited numbers get a 30-minute cool-off with a resend-via-call option.', tone: 'info' }]
  ] });
  s('L.a.otp', { app: 'L', f: '0', title: 'Enter the 6-digit code', caps: ['0.3', '1.2'], body: [
    ['p', { t: 'Sent to +91 98220 47821 via SMS' }],
    ['otp', { n: 6, go: 'L.a.pin', code: '482917' }],
    ['small', { t: 'Resend in 00:23 · Resend via call after 2 failed SMS attempts' }],
    ['btn', { t: 'Verify', go: 'L.a.loading' }],
    ['link', { t: 'Not getting the code? Get help from your inviting Lead', go: 'L.c.dm' }]
  ] });
  s('L.a.loading', { app: 'L', f: '0', title: 'Verifying…', caps: ['0.3'], body: [
    ['p', { t: 'Resolving your invite token + placing you in the right ward.' }],
    ['tl', { items: [{ t: 'Phone verified', s: '0.8 s', st: 'done' }, { t: 'Token resolved · Anil Patil', s: '0.4 s', st: 'done' }, { t: 'Placing you in Wakad · Booth 47…', s: 'in progress', st: 'cur' }, { t: 'Notifying Anil Patil', s: 'typically < 2 s', st: 'todo' }] }],
    ['btn', { t: 'Continue to PIN setup', go: 'L.a.pin' }]
  ] });
  s('L.a.code', { app: 'L', f: '0', title: 'Enter your invite code', caps: ['0.15'], body: [
    ['p', { t: 'Your inviting Lead gave you a 6-letter code. No 0/O or 1/I.' }],
    ['otp', { n: 6, code: 'NPW47K', go: 'L.a.login' }],
    ['card', { t: 'Invite recognised', s: 'Anil Patil invited you as Booth Volunteer · Wakad · Booth 47', b: 'single-use', tone: 'ok', body: ['Code valid until 24 May 2026'] }],
    ['btn', { t: 'Continue with phone + OTP', go: 'L.a.otp' }],
    ['link', { t: "Code doesn't work? Contact your Lead", go: 'L.c.dm' }]
  ] });
  s('L.a.findorg', { app: 'L', f: '0', title: 'Find my organisation', caps: ['0.17'], body: [
    ['p', { t: "We'll route you to the nearest Lead by ward." }],
    ['input', { label: 'PIN code or constituency', v: '411 057', hint: 'Supports English and Marathi (Wakad / वाकड)' }],
    ['card', { t: 'Match found · Wakad · Ward 47', s: 'Pune Cantonment Vidhan Sabha', tone: 'ok', body: [['list', { items: [{ av: 'AP', t: 'Anil Patil', s: 'Ward Lead · 142 members in sub-tree · responds < 4 h', go: 'L.m.profile' }] }]] }],
    ['input', { label: 'Your phone number', v: '+91 98920 11433' }],
    ['note', { t: "You'll wait for approval. Requests auto-expire after 7 days.", tone: 'warn' }],
    ['btn', { t: 'Send my request', go: 'L.a.pending' }]
  ] });
  s('L.a.invite', { app: 'L', f: '0', title: "You've been invited", caps: ['0.14'], body: [
    ['card', { av: 'AP', t: 'Anil Patil', s: 'District Lead · Pune Rural', b: 'NAGAR SEVAK', btone: 'gold' }],
    ['h', { t: 'Booth Volunteer · Wakad · Booth 47', s: 'is the role you are being invited to' }],
    ['note', { t: 'Single-use link · valid until 24 May 2026, 11:59 PM IST · Token NCP-INV-Q7M4-9821-XR · audit-logged', tone: 'gold' }],
    ['btn', { t: 'Continue with phone + OTP', go: 'L.a.login' }],
    ['link', { t: 'Wrong invite? Decline and contact Anil', toast: 'Pre-composed message to Anil opened' }],
    ['hr'],
    ['sec', { t: 'Entry moments' }],
    ['list', { items: [{ i: '💬', t: 'Path B · tap the link in WhatsApp', s: 'Opens NCPConnect with role pre-filled', go: 'L.a.whatsapp' }, { i: '⊞', t: 'Path C · scan the printed QR', s: 'Training camp poster · backup code beneath', go: 'L.a.qrscan' }] }]
  ] });
  s('L.a.whatsapp', { app: 'L', f: '0', title: 'Anil Patil (Ward Lead)', sub: 'WhatsApp · last seen 10:21', caps: ['0.14'], body: [
    ['chat', { msgs: [{ who: 'Anil', t: 'Namaste Sakhi! Welcome aboard. I’d like to invite you to join NCPConnect as a Booth Volunteer for Wakad · Booth 47.', time: '10:42 AM' }, { who: 'Anil', t: 'NCPConnect Invite · ncp.in/i/Q7M4-9821 · Tap to open · single-use', time: '10:42 AM ✓✓', tone: 'gold', go: 'L.a.invite' }] }],
    ['small', { t: 'If the app is not installed, the store flow resumes the invite after install. Feature phones get the 6-character code instead.' }]
  ] });
  s('L.a.qrscan', { app: 'L', f: '0', title: 'Scan invite QR', hdr: 'dark', caps: ['0.14'], body: [
    ['qr', { t: 'Wakad Training Camp · 24 May 2026 · Backup code NPW4-7K' }],
    ['note', { t: 'QR recognised · opening invite…', tone: 'ok' }],
    ['btn', { t: 'Open invite', go: 'L.a.invite' }],
    ['link', { t: 'Scanner failing? Type the backup code', go: 'L.a.code' }]
  ] });
  s('L.a.pin', { app: 'L', f: '0', title: 'Create a 6-digit PIN', sub: 'Step 1 of 5', caps: ['0.4'], body: [
    ['p', { t: "You'll use this every time you open the app. Avoid 123456, 000000, or your birth-year." }],
    ['keypad', { n: 6, go: 'L.a.pin2' }]
  ] });
  s('L.a.pin2', { app: 'L', f: '0', title: 'Confirm your PIN', sub: 'Step 2 of 5', caps: ['0.4'], body: [
    ['keypad', { n: 6, go: 'L.a.perms' }],
    ['note', { t: 'Lockout policy · 5 wrong PINs in a row → 30-minute lock + forced OTP re-auth. Your data is never wiped.', tone: 'info' }],
    ['toggle', { label: 'Use Touch ID / Face ID', s: 'Faster sign-in. PIN stays as fallback.', on: true }],
    ['btn', { t: 'Set PIN & continue', go: 'L.a.perms' }]
  ] });
  s('L.a.perms', { app: 'L', f: '0', title: 'A few permissions', sub: 'Step 3 of 5', caps: ['0.6'], body: [
    ['p', { t: 'We ask plainly. You can change any of these later in Settings.' }],
    ['toggle', { label: 'Notifications', s: 'So a Lead can ping you when a ticket needs action — never marketing.', on: true }],
    ['toggle', { label: 'Camera', s: 'Profile photo, ID scan, evidence on tickets & door-to-door visits.', on: true }],
    ['toggle', { label: 'Location (while using)', s: 'Ward-aware ticket capture and door-to-door GPS evidence. Never background.', on: false }],
    ['toggle', { label: 'Microphone', s: 'Voice notes inside grievances and chat. Optional.', on: false }],
    ['btn', { t: 'Continue', go: 'L.a.tour' }]
  ] });
  s('L.a.tour', { app: 'L', f: '0', title: 'Welcome tour', sub: 'Step 4 of 5 · swipe the cards', right: { i: 'Skip', go: 'L.a.profile' }, caps: ['0.7'], body: [
    ['tabs', { tabs: [
      { t: '1 · Brief', body: [['ph', { t: 'Brief preview · ticket card · announcement', h: 150 }], ['h', { t: 'Your daily Brief', s: 'Open the app and you see exactly what needs your attention today — tickets due, tasks to do, announcements from your Lead.' }]] },
      { t: '2 · People', body: [['ph', { t: 'Org tree preview · KR · AP · SJ · RK', h: 150 }], ['h', { t: 'See the whole party', s: 'From your Booth President all the way up to your MLA — every Lead is one tap away. Phone stays private unless connected.' }]] },
      { t: '3 · Tasks', body: [['ph', { t: 'Ticket T-4892 · URGENT · SLA bar', h: 150 }], ['h', { t: 'Tasks & tickets', s: 'When a citizen raises a grievance or a Lead assigns a task, it lands here with everything you need to act.' }]] }
    ] }],
    ['btn', { t: 'Next → Set up profile', go: 'L.a.profile', kind: 'gold' }]
  ] });
  s('L.a.profile', { app: 'L', f: '0', title: 'Set up your profile', sub: 'Step 5 of 5', caps: ['0.8'], body: [
    ['ph', { t: '+ Add a photo (camera · gallery · monogram)', h: 90, kind: 'round', toast: 'Photo picker' }],
    ['input', { label: 'Full name', v: 'Sakhi Priya' }],
    ['input', { label: 'Party role', v: 'Booth Volunteer · Wakad · Booth 47', hint: 'From invite · locked' }],
    ['chips', { opts: ['मराठी', 'हिंदी', 'English'], v: 0 }],
    ['note', { t: 'Your photo and name are visible to every member & citizen in the tenant (Tier 1). Phone stays private (Tier 2).', tone: 'info' }],
    ['btn', { t: 'Save & continue', go: 'L.a.sig' }],
    ['link', { t: 'Ground workers skip signature → first Brief', go: 'L.a.brief0' }]
  ] });
  s('L.a.sig', { app: 'L', f: '0', title: 'Sign once', sub: 'Lead & Top Leader only', caps: ['0.13'], body: [
    ['p', { t: 'Used on every approval letter you issue. You can re-capture from Settings → Security.' }],
    ['card', { t: 'Binds to assignment', s: 'District Lead · Pune Rural · term 2025-04 → 2028-03 · primary', tone: 'gold' }],
    ['ph', { t: 'Draw your signature with your finger', h: 140, kind: 'sig', toast: 'Signature stroke captured' }],
    ['row', { items: [{ t: '↺ Redraw', kind: 'secondary', toast: 'Pad cleared' }, { t: 'Pen weight', kind: 'secondary', toast: 'thin · medium · thick' }] }],
    ['btn', { t: 'Save signature', go: 'L.a.brief0' }],
    ['small', { t: 'Hashed + signed under your active assignment. Cannot be exported as an image.' }]
  ] });
  s('L.a.brief0', { app: 'L', f: '0', title: 'Brief', sub: 'Friday, 22 May · Good morning, Sakhi', back: false, nav: 'Brief', caps: ['0.9'], body: [
    ['banner', { t: 'Welcome to NCPConnect · You’re in. Now let’s get set up. 3 quick steps · 2 minutes', tone: 'gold' }],
    ['list', { items: [{ i: '1', t: 'Meet your line of sight', s: 'Open the org tree — see who’s above you and your booth team.', go: 'L.h.place' }, { i: '2', t: 'Add your first member', s: 'Bring one teammate in via quick-add or share an invite link.', go: 'L.m.add' }, { i: '3', t: 'Try your first grievance', s: 'See how tickets flow into your queue.', go: 'L.g.queue' }] }],
    ['link', { t: 'Go to the live Brief', go: 'L.brief' }]
  ] });
  s('L.a.unlock', { app: 'L', f: '0', title: 'Welcome back', hdr: 'none', caps: ['0.5'], body: [
    ['card', { av: 'SP', t: 'Sakhi Priya', s: 'Booth Volunteer · Wakad · Booth 47' }],
    ['keypad', { n: 6, go: 'L.brief', bio: true }],
    ['link', { t: 'Forgot PIN?', go: 'L.a.forgot' }],
    ['link', { t: 'Long-press avatar → switch organisation', go: 'L.a.multiorg' }],
    ['link', { t: 'Simulate 5 wrong attempts → lockout', go: 'L.a.lockout' }],
    ['link', { t: 'Simulate 30-day inactivity → re-auth', go: 'L.a.expired' }]
  ] });
  s('L.a.lockout', { app: 'L', f: '0', title: 'Locked for 30 minutes', hdr: 'red', caps: ['0.4'], body: [
    ['h', { t: '29 : 41', s: '5 wrong PIN attempts in a row. Your account and data are safe.' }],
    ['btn', { t: 'Recover via OTP', go: 'L.a.forgot' }],
    ['note', { t: "If you didn't try to sign in, tell your Lead immediately.", tone: 'danger' }],
    ['link', { t: 'Message my Lead', go: 'L.c.dm' }]
  ] });
  s('L.a.forgot', { app: 'L', f: '0', title: 'Reset your PIN', caps: ['0.10'], body: [
    ['steps', { labels: ['Verify phone (OTP)', 'New PIN', 'Sign back in'], cur: 0 }],
    ['p', { t: '+91 98920 11433 — sent · auto-fill ready' }],
    ['otp', { n: 6, go: 'L.a.pin', code: '728219' }],
    ['note', { t: 'Audit-logged · PIN resets are visible to your Lead in your activity log — by design.', tone: 'info' }],
    ['btn', { t: 'Verify & continue', go: 'L.a.pin' }]
  ] });
  s('L.a.expired', { app: 'L', f: '0', title: 'Time to sign in again', caps: ['0.11'], body: [
    ['p', { t: 'Your session expired after 30 days of inactivity. A quick PIN + OTP is all we need.' }],
    ['card', { t: 'Last signed in', s: '22 March 2026, 4:18 PM IST · Pixel 7a · Pune Rural · IP 49.36.•.•', body: [['link', { t: 'Not you? Report unauthorised access →', go: 'L.s.security' }]] }],
    ['steps', { labels: ['PIN', 'OTP'], cur: 0 }],
    ['keypad', { n: 6, go: 'L.a.otp' }]
  ] });
  s('L.a.multiorg', { app: 'L', f: '0', title: 'Choose an organisation', caps: ['0.12'], body: [
    ['p', { t: 'Your phone is registered in two NCPConnect tenants.' }],
    ['list', { items: [{ av: 'MH', t: 'NCP Maharashtra', s: 'District Lead · Pune Rural', b: 'PRIMARY · ACTIVE', btone: 'ok', go: 'L.brief' }, { av: 'GA', t: 'NCP Goa', s: 'State Spokesperson · last opened 18 Mar 2026', go: 'L.brief' }] }],
    ['note', { t: 'You chose one shared PIN when you first joined a second org. Switch to per-org PINs in Settings → Security.', tone: 'info' }],
    ['card', { t: 'You also hold delegations', s: 'Acting as MLA Kiran Rao on his outbox when in Maharashtra · auto-suspends in Goa', go: 'L.m.mydel' }],
    ['btn', { t: 'Open NCP Maharashtra', go: 'L.brief' }]
  ] });
  s('L.a.pending', { app: 'L', f: '0', title: "You're in the queue", caps: ['0.17', '1.3'], body: [
    ['p', { t: 'Anil Patil will review your request shortly. We’ll notify you the moment your account is active.' }],
    ['card', { t: 'Your request', s: 'Booth Volunteer · Wakad · Booth 47 · submitted 22 May 2026, 9:18 AM' }],
    ['list', { items: [{ av: 'AP', t: 'Reviewing Lead · Anil Patil', s: 'Ward Lead · typically responds < 4 h', go: 'L.m.profile' }] }],
    ['tl', { items: [{ t: 'Submitted', s: '9:18 AM today', st: 'done' }, { t: 'Anil notified', s: '9:18 AM — push delivered', st: 'done' }, { t: 'Approved / reassigned', s: 'Auto-expires 29 May 2026 if no action', st: 'cur' }] }],
    ['row', { items: [{ t: 'Message Anil', kind: 'secondary', go: 'L.c.dm' }, { t: 'Simulate approval →', go: 'L.a.pin' }] }]
  ] });
  s('L.a.assist', { app: 'L', f: '0', title: 'Hand the phone over', sub: 'Worker-assisted · session 3:42', hdr: 'gold', caps: ['0.16'], body: [
    ['p', { t: 'Mrs Kulkarni will enter her OTP and set her own PIN. Your session is paused. Don’t put away the phone.' }],
    ['card', { t: 'You’re adding · Lakshmi Kulkarni', s: '+91 98223 14572 · 64 yrs · senior member · Booth Volunteer · Wakad · Booth 47 · added by Sakhi Priya' }],
    ['h', { t: 'कुलकर्णी मॅडम — तुमच्या फोनवर आलेला OTP टाका', s: 'Mrs Kulkarni — enter the OTP sent to your phone' }],
    ['otp', { n: 6, code: '528817', go: 'L.a.pin' }],
    ['note', { t: 'Privacy guarantee · Sakhi cannot see Mrs Kulkarni’s PIN. After OTP, the worker session ends and Mrs Kulkarni sets her own PIN privately.', tone: 'ok' }],
    ['link', { t: 'Abandon this onboarding', toast: 'Half-finished record wiped from device + server queue' }]
  ] });
  s('L.a.gen', { app: 'L', f: '0', title: 'Invite a new member', sub: 'One-time · single-use · expires in 7 days', caps: ['0.14'], body: [
    ['seg', { opts: ['Link', 'QR', 'Code'], v: 0 }],
    ['input', { label: 'Role for this joinee', v: 'Booth Volunteer ▾', hint: 'Scoped to roles you can authorise' }],
    ['input', { label: 'Unit', v: 'Wakad · Booth 47 ▾', hint: 'Pre-filtered to your sub-tree' }],
    ['input', { label: 'Valid until', v: '29 May 2026' }],
    ['card', { t: 'Preview · WhatsApp', s: 'Anil Patil — Today, 10:42 AM', body: ['Namaste! I’d like to invite you to join NCPConnect as a Booth Volunteer for Wakad · Booth 47. ncp.in/i/Q7M4-9821-XR · Single-use · expires 29 May 2026'] }],
    ['btn', { t: 'Generate & share via WhatsApp', go: 'L.a.genready' }],
    ['small', { t: 'Quota 50 / month · used 14. MCC freeze downgrades roles to neutral.' }]
  ] });
  s('L.a.genready', { app: 'L', f: '0', title: 'Invite ready', sub: 'Booth Volunteer · Wakad · Booth 47 · valid 7 days', caps: ['0.14'], body: [
    ['qr', { t: 'NCP-INV-Q7M4-9821-XR · single-use · valid until 29 May 2026' }],
    ['sec', { t: 'Share invite via' }],
    ['grid', { cols: 4, items: [{ i: '💬', t: 'WhatsApp', toast: 'Share sheet · WhatsApp' }, { i: '✉', t: 'SMS', toast: 'Share sheet · SMS' }, { i: '⎘', t: 'Copy link', toast: 'Link copied' }, { i: '🖨', t: 'Print PDF', toast: 'A4 poster with backup code' }] }],
    ['link', { t: 'Manage all my invites · 14 issued · 6 unused', go: 'L.m.invites' }]
  ] });
  s('L.a.inbox', { app: 'L', f: '0', title: 'Pending approvals', sub: '4 awaiting your action · oldest 2 d ago', caps: ['0.18', '1.3'], body: [
    ['chips', { opts: ['All 4', 'Self-signup', 'Referrals', 'Older 3 d+'], v: 0 }],
    ['card', { av: 'LB', t: 'Lakshmi Bhonsle', s: 'wants to join as Booth Volunteer · Wakad · Booth 48 · self-signup', b: '2 D AGO', btone: 'warn', body: [['row', { items: [{ t: 'Approve', go: 'L.a.approved' }, { t: 'Reassign', kind: 'secondary', go: 'L.a.reassign' }, { t: 'Reject', kind: 'danger', sheet: { t: 'Why are you rejecting?', body: [['p', { t: 'Sandeep Kale will see the reason. Choose carefully.' }], ['radio', { opts: ['Not in our ward — wrong sub-tree', 'Duplicate — already a member elsewhere', 'Cannot verify identity', { t: 'Anti-defection / disciplinary hold', s: 'SENS · next-level Lead auto-notified' }, 'Other — type below'] }], ['ta', { ph: 'e.g., timing — we’ll re-add in next drive' }], ['toggle', { label: 'Show the reason to the joinee (transparency)', on: true }], ['btn', { t: 'Reject & notify', kind: 'danger', go: 'L.a.inbox' }]] } }] }]] }],
    ['card', { av: 'SK', t: 'Sandeep Kale', s: 'referred by Ravi Kumar · Volunteer · Wakad · Booth 47 · referral chain', body: [['row', { items: [{ t: 'Approve', go: 'L.a.approved' }, { t: 'Reassign', kind: 'secondary', go: 'L.a.reassign' }, { t: 'Reject', kind: 'danger', toast: 'Reason picker' }] }]] }],
    ['card', { av: 'VR', t: 'Vendor Ramesh', s: 'worker-assisted by Sakhi Priya · Wakad · Booth 47 · low-literacy joinee', body: [['row', { items: [{ t: 'Approve', go: 'L.a.approved' }, { t: 'Reassign', kind: 'secondary', go: 'L.a.reassign' }, { t: 'Reject', kind: 'danger', toast: 'Reason picker' }] }]] }],
    ['list', { items: [{ av: 'PD', t: 'Priya Deshmukh', s: 'Volunteer · Wakad · 1 d ago', go: 'L.m.profile' }] }],
    ['btn', { t: 'Approve all 4 from Wakad', kind: 'secondary', go: 'L.a.inbox0' }],
    ['small', { t: 'Auto-expires > 7 d · reassignment within sub-tree only · MCC freeze requires dual approval' }]
  ] });
  s('L.a.approved', { app: 'L', f: '0', title: 'Lakshmi is in.', caps: ['0.18'], body: [
    ['card', { av: 'LB', t: 'Lakshmi Bhonsle', s: 'Booth Volunteer · Wakad B48', tone: 'ok' }],
    ['p', { t: 'She’s now Booth Volunteer for Wakad · Booth 48 and will receive her welcome push in a moment.' }],
    ['sec', { t: 'What just happened' }],
    ['list', { items: [{ t: 'Person + Assignment written to spine' }, { t: 'Notification sent · Lakshmi unlocked her PIN setup' }, { t: 'Audit row: AP approved at 10:46 AM · token T-AP-9821' }] }],
    ['row', { items: [{ t: 'View profile', kind: 'secondary', go: 'L.m.profile' }, { t: 'Next pending →', go: 'L.a.inbox' }] }]
  ] });
  s('L.a.reassign', { app: 'L', f: '0', title: 'Reassign Vendor Ramesh', sub: 'Pick a Lead in your sub-tree', caps: ['0.18'], body: [
    ['input', { ph: 'Search by name, ward, or designation' }],
    ['card', { t: 'Currently assigned to', s: 'Anil Patil · Ward 47 · 42 in queue · oldest 4 d' }],
    ['sec', { t: 'Your sub-tree' }],
    ['list', { items: [{ av: 'SJ', t: 'Sunita Joshi', s: 'Block Lead · Haveli · 8 in queue · capacity OK · usually < 3 h', toast: 'Selected Sunita' }, { av: 'RK', t: 'Ravi Kumar', s: 'Booth President · Wakad · 31 in queue · near capacity', toast: 'Selected Ravi' }, { av: 'PD', t: 'Priya Deshmukh', s: 'National Spokesperson · out of scope for onboarding', tone: 'muted', toast: 'Disabled: shown for transparency, not selection' }, { av: 'VJ', t: 'Vikas Joshi', s: 'Regional Coordinator · 3 in queue · usually 2 h', toast: 'Selected Vikas' }] }],
    ['note', { t: 'Only Leads at or below your level are shown. Vendor Ramesh will be notified of the change.', tone: 'info' }],
    ['btn', { t: 'Reassign to Sunita', go: 'L.a.inbox' }]
  ] });
  s('L.a.inbox0', { app: 'L', f: '0', title: 'Pending approvals', sub: 'Nothing pending right now', caps: ['0.18'], body: [
    ['ph', { t: 'Inbox zero · envelope with gold check', h: 120 }],
    ['h', { t: 'Inbox zero', s: 'You’ve handled every pending joinee. When the next one arrives, you’ll be notified.' }],
    ['kpi', { items: [{ v: '14', l: 'approved' }, { v: '3', l: 'reassigned' }, { v: '1', l: 'rejected' }] }],
    ['small', { t: 'avg response 2.4 h · +18 % growth in your sub-tree week-over-week' }],
    ['btn', { t: 'Share an invite link', go: 'L.a.gen' }]
  ] });

  /* ---------- Hubs ---------- */
  s('L.brief', { app: 'L', f: '0', title: 'Brief', sub: 'Friday, 22 May · Sakhi Priya · Booth Vol · Wakad B-47', back: false, nav: 'Brief', right: { i: '🔔', go: 'L.n.inbox' }, caps: ['1.11'], body: [
    ['card', { t: 'Your team', s: '142 members in sub-tree · +22 this quarter · +18 % YoY', go: 'L.m.dir', body: [['kpi', { items: [{ v: '142', l: 'members', go: 'L.m.dir' }, { v: '4', l: 'pending', tone: 'warn', go: 'L.a.inbox' }, { v: '87', l: 'citizens · 58 %', tone: 'gold', go: 'L.m.citizens' }] }]] }],
    ['sec', { t: 'Needs you today' }],
    ['list', { items: [{ i: '📢', t: 'T-5103 · Broken water tank · breached 2h', s: 'Lakshmi B. · Wakad B-47 · via Anil (Nagar Sevak)', b: 'SLA', btone: 'danger', go: 'L.g.ticket' }, { i: '✓', t: 'Q2 outreach report · due 2h', s: 'Mahila Aghadi · checklist 3/5', go: 'L.t.detail' }, { i: '🔔', t: 'Constituency strategy call · 6 PM', s: 'URGENT · acknowledge required', b: 'ACK', btone: 'danger', go: 'L.n.urgent' }, { i: '💬', t: 'Mahila · Wakad VS · @you mentioned', s: 'Anita: welcome new members joining today', go: 'L.c.wing' }] }],
    ['card', { t: 'Shout-out worth sending', s: 'Sakhi Priya hit 4 active referrals · Member-of-the-Week candidate', tone: 'gold', go: 'L.m.growth' }],
    ['sec', { t: 'Also in People today' }],
    ['list', { items: [{ av: 'LB', t: 'Lakshmi Bhonsle joined', s: 'via quick-add by Sakhi · 10:46 AM', go: 'L.m.profile' }, { av: 'RK', t: 'Ravi marked on-leave through Aug', s: '23 items reassigned · Sakhi took most', go: 'L.m.leave' }] }]
  ] });
  s('L.more', { app: 'L', f: '9', title: 'More', back: false, nav: 'More', caps: [], body: [
    ['card', { av: 'SP', t: 'Sakhi Priya', s: 'Booth Vol · Wakad B-47 · + Mahila Aghadi · + Acting BP B-48', go: 'L.m.profile' }],
    ['grid', { cols: 3, items: [{ i: '📢', t: 'Grievances', go: 'L.g.queue' }, { i: '📣', t: 'Announcements', go: 'L.n.inbox' }, { i: '📜', t: 'Letters', go: 'L.l.wallet' }, { i: '🎪', t: 'Events', go: 'L.e.list' }, { i: '🌳', t: 'Hierarchy', go: 'L.h.place' }, { i: '🗳', t: 'Voter ops', go: 'L.v.booth' }, { i: '🏆', t: 'Recognition', go: 'L.t.recog' }, { i: '👥', t: 'Citizens', go: 'L.m.citizens' }, { i: '⚙', t: 'Settings', go: 'L.s.home' }] }],
    ['sec', { t: 'Lead & Top surfaces (Sunita Joshi · Block Lead · OSD)' }],
    ['list', { items: [{ i: '📥', t: 'Pending approvals', s: '4 awaiting · §0.18', go: 'L.a.inbox' }, { i: '📊', t: 'Grievance sub-tree dashboard', s: 'Block Haveli · 187 open', go: 'L.g.dash' }, { i: '🎯', t: 'Task progress dashboard', s: 'Q2 outreach · 64 % submitted', go: 'L.t.progress' }, { i: '👁', t: 'Chat moderation & audit', s: '7 flagged · hash chain OK', go: 'L.c.mod' }, { i: '📈', t: 'Growth dashboard', s: '142 members · +22 this quarter', go: 'L.m.growth' }, { i: '🛠', t: 'Admin · master data & org config', s: 'Top Leader · desktop-primary', go: 'L.s.admin' }, { i: '🗳', t: 'Poll-day command center', s: 'MLA · 168 booths · live', go: 'L.v.cmd' }, { i: '⚙', t: 'My delegations · acting as MLA Kiran Rao', s: 'D-4892 · §1.33', go: 'L.m.mydel' }] }]
  ] });

  /* ---------- §1 Members ---------- */
  s('L.m.dir', { app: 'L', f: '1', title: 'People', sub: '142 in your sub-tree · 18 Lead+ · 124 Ground', back: false, nav: 'People', right: { i: '+', go: 'L.m.add' }, caps: ['1.4'], body: [
    ['input', { ph: 'Search name · phone · designation' }],
    ['chips', { opts: ['All 142', 'Wakad B47', 'Booth Vol.', 'Nagar Sevak', 'On-leave', 'Referrer'], v: 0, multi: true }],
    ['list', { items: [
      { av: 'AP', t: 'Anil Patil', s: 'District Lead · Pune Rural', b: 'NAGAR SEVAK', btone: 'gold', go: 'L.m.profile' },
      { av: 'SJ', t: 'Sunita Joshi', s: 'Block Lead · Haveli', b: 'ZILLA PARISHAD', btone: 'gold', go: 'L.m.profile' },
      { av: 'SP', t: 'Sakhi Priya', s: 'Booth Volunteer · Wakad · B47', b: 'REFERRER OF 4', go: 'L.m.scorecard' },
      { av: 'RK', t: 'Ravi Kumar', s: 'Booth President · Wakad', b: 'ON-LEAVE', btone: 'warn', go: 'L.m.leave' },
      { av: 'SA', t: 'Sakhi Anita', s: 'Booth Volunteer · Wakad · B48', b: 'MAHILA AGHADI', btone: 'purple', go: 'L.m.profile' },
      { t: '137 more · scroll to see', tone: 'muted' }
    ] }],
    ['sec', { t: 'Members tools' }],
    ['list', { items: [{ i: '📥', t: 'Pending approvals (4)', go: 'L.a.inbox' }, { i: '📈', t: 'Growth dashboard', go: 'L.m.growth' }, { i: '🔗', t: 'Issued invites · 6 unused', go: 'L.m.invites' }, { i: '👥', t: 'Citizen connections', go: 'L.m.cinbox' }, { i: '🧑‍💼', t: 'Staff & delegations', go: 'L.m.staff' }, { i: '⬆', t: 'Bulk CSV import (< 50 rows on mobile)', go: 'L.m.csv' }] }]
  ] });
  s('L.m.add', { app: 'L', f: '1', title: 'Add a member', sub: 'Quick add · path 1 of 8', caps: ['1.1', '1.2'], body: [
    ['chips', { opts: [{ t: 'Quick' }, { t: 'Scan ID', go: 'L.m.scan' }, { t: 'Door-to-door', go: 'L.m.d2d' }, { t: 'Referral', go: 'L.m.referral' }, { t: 'Invite', go: 'L.a.gen' }, { t: 'Worker-assisted', go: 'L.a.assist' }, { t: 'Promote citizen', go: 'L.m.promote' }, { t: 'Bulk CSV', go: 'L.m.csv' }], v: 0 }],
    ['input', { label: 'Full name *', v: 'Sandeep Kale' }],
    ['input', { label: 'Phone *', v: '+91 98919 22045', hint: '✓ unique · live duplicate check' }],
    ['input', { label: 'Party role *', v: 'Booth Volunteer ▾' }],
    ['input', { label: 'Ward *', v: 'Wakad · B47 ▾', hint: 'Use my ward' }],
    ['link', { t: '+ External designations · Nagar Sevak · Co-op board…', go: 'L.m.deslib' }],
    ['link', { t: 'See the duplicate guard (§1.8)', go: 'L.m.dup' }],
    ['small', { t: 'Added by Anil Patil · audit-logged · counts toward your growth' }],
    ['row', { items: [{ t: 'Save & send OTP', go: 'L.a.otp' }, { t: 'Phone already exists?', kind: 'secondary', sheet: { t: 'This phone is already in use', body: [['card', { av: 'SK', t: 'Sandeep Kale', s: 'Booth Volunteer · Wakad · B47 · on-leave since 12 Apr 2026', b: 'PARTIAL MATCH', btone: 'warn' }], ['btn', { t: 'Reactivate Sandeep instead', go: 'L.m.profile' }], ['btn', { t: 'Add anyway as a new member', kind: 'secondary', toast: 'Second confirmation required' }], ['small', { t: 'Merging preserves all referrals + history' }]] } }] }]
  ] });
  s('L.m.dup', { app: 'L', f: '1', title: 'Duplicate prevention', caps: ['1.8'], body: [
    ['card', { av: 'SK', t: 'Sandeep Kale', s: 'Booth Volunteer · Wakad · B47 · Status: on-leave since 12 Apr 2026', b: 'PARTIAL MATCH', btone: 'warn' }],
    ['btn', { t: 'Reactivate Sandeep instead', go: 'L.m.profile' }],
    ['btn', { t: 'Add anyway as a new member', kind: 'secondary', toast: 'Requires second confirmation + ID cross-check' }],
    ['small', { t: 'Match against a citizen account routes to Promote. 3+ duplicate attempts in 1 hour flags the growth dashboard.' }]
  ] });
  s('L.m.scan', { app: 'L', f: '1', title: 'Scan ID document', hdr: 'dark', caps: ['1.15'], body: [
    ['seg', { opts: ['Aadhaar', 'EPIC', 'DL'], v: 0 }],
    ['ph', { t: 'Camera reticle · आधार card · auto-fits', h: 150, kind: 'cam', toast: 'Rescanning' }],
    ['sec', { t: 'Captured · confirm each' }],
    ['check', { label: 'Name: Sandeep Kale', on: true }], ['check', { label: 'DOB: 14 Jun 1989', on: true }], ['check', { label: 'Aadhaar ref: ••2045 (hash stored)', on: true }], ['check', { label: 'Address: Wakad → Ward 47 · auto-mapped', on: true }],
    ['note', { t: 'Full ID never stored — only last 4 + checksum.', tone: 'ok' }],
    ['row', { items: [{ t: '↻ Rescan', kind: 'secondary', toast: 'Rescanning' }, { t: 'Continue', go: 'L.m.add' }] }]
  ] });
  s('L.m.referral', { app: 'L', f: '1', title: "I'll vouch for…", sub: 'Referral · path 6 · open to all members', caps: ['1.16'], body: [
    ['note', { t: 'Fill name + phone. Goes to Pending under your Lead. You’re credited if they stay 90+ days.', tone: 'info' }],
    ['input', { label: 'Their name *', v: 'Vendor Ramesh' }],
    ['input', { label: 'Phone *', v: '+91 98223 11099' }],
    ['chips', { opts: ['Neighbour', 'Vendor', 'Family', 'Worker', 'Other'], v: 1 }],
    ['ta', { label: 'Note for your Lead (optional)', v: 'Runs the vegetable shop next to Booth 47. Helped during the 2024 voter drive. Reliable.' }],
    ['list', { items: [{ av: 'AP', t: 'Will be reviewed by Anil Patil', s: 'Ward Lead', go: 'L.m.profile' }] }],
    ['btn', { t: 'Send referral', go: 'L.a.inbox' }]
  ] });
  s('L.m.d2d', { app: 'L', f: '1', title: 'Door-to-door · Wakad B47', sub: 'Route: Galli 3 → 12 houses left', caps: ['1.17'], body: [
    ['bar', { v: 40, l: 'Households', r: '8 / 20' }],
    ['ph', { t: 'Route map · added ● remaining ● current ●', h: 110, kind: 'map', toast: 'Jump to household' }],
    ['card', { t: 'Current household · 14 Sangam Galli, Wakad', s: 'GPS captured · 73.7634, 18.5969 · ±4 m', body: [['list', { items: [{ av: 'LB', t: 'Lakshmi Bhonsle · 45F', s: 'interested' }, { av: 'SB', t: 'Husband Sandeep · 50M', s: 'interested' }] }], ['link', { t: '+ Add another resident', toast: 'Resident row added' }], ['row', { items: [{ t: '+ Photo', kind: 'secondary', toast: 'Camera' }, { t: 'Save 2 + next', go: 'L.m.d2d' }] }]] }],
    ['small', { t: 'Offline ready · 14 entries queued · syncs on wifi · Not interested keeps GPS, creates no Person' }]
  ] });
  s('L.m.promote', { app: 'L', f: '1', title: 'Promote to member', sub: 'Path 8 · CRN + grievance history preserved', caps: ['1.18'], body: [
    ['card', { av: 'LB', t: 'Lakshmi Bhonsle', s: 'Citizen · Wakad · Ward 47 · NCP-PUN-WAK-08421 · 7 grievances · 3 schemes · since Aug 2024' }],
    ['sec', { t: 'What carries over' }],
    ['list', { items: [{ i: '✓', t: 'CRN — NCP-PUN-WAK-08421' }, { i: '✓', t: 'All 7 grievances · audit + SLA' }, { i: '✓', t: '3 scheme applications' }, { i: '✓', t: 'Event RSVPs + attendance' }, { i: '✓', t: 'Direct-connection bindings (become member-side)' }, { i: '✓', t: 'Profile photo · DOB · address (consent re-confirmed)' }] }],
    ['input', { label: 'New party role *', v: 'Booth Volunteer ▾' }],
    ['link', { t: '+ External designations (optional)', go: 'L.m.deslib' }],
    ['note', { t: 'Consent · Lakshmi confirmed she wants to join · 22 May 09:14', tone: 'ok' }],
    ['btn', { t: 'Promote to Booth Volunteer', go: 'L.m.profile' }]
  ] });
  s('L.m.csv', { app: 'L', f: '1', title: 'Bulk import members', sub: 'Upload CSV · validate · resolve · commit', caps: ['1.9'], body: [
    ['steps', { labels: ['Upload', 'Preview & resolve', 'Commit'], cur: 1 }],
    ['kpi', { items: [{ v: '847', l: 'rows in file' }, { v: '792', l: 'ready', tone: 'ok' }, { v: '47', l: 'need resolution', tone: 'warn' }, { v: '8', l: 'hard errors', tone: 'danger' }] }],
    ['table', { cols: ['Row', 'Name', 'Role · Unit', 'Status'], rows: [['001', 'Anil Patil', 'Dist Lead · Pune Rural', 'VALID'], ['002', 'Sunita Joshi', 'Block Lead · Haveli', 'VALID'], { c: ['003', 'Sakhi Priya', 'Booth Vol · Wakad B47', 'DUPLICATE · MERGE'], sheet: { t: 'Row 003 · duplicate', body: [['p', { t: 'Phone matches existing member Sakhi Priya.' }], ['btn', { t: 'Merge into existing', go: 'L.m.csv' }], ['btn', { t: 'Skip row', kind: 'secondary', go: 'L.m.csv' }]] } }, ['004', 'Ravi Kumar', 'Booth Pres · Wakad', 'PARTIAL · CONFIRM'], ['005', 'Vikas Joshi', 'Regional Coord · ??', '9-DIGIT PHONE']] }],
    ['small', { t: '842 more rows · full migrations run on desktop (§1.9).' }],
    ['row', { items: [{ t: 'Step through', kind: 'secondary', toast: 'Row-by-row resolver' }, { t: 'Bulk merge all', toast: '47 duplicates merged' }] }],
    ['btn', { t: 'Commit 792 rows', go: 'L.m.dir' }]
  ] });
  s('L.m.profile', { app: 'L', f: '1', title: 'Anil Patil', right: { i: 'Edit', go: 'L.m.edit' }, caps: ['1.5'], body: [
    ['card', { av: 'AP', t: 'Anil Patil', s: 'District Lead · Pune Rural · since 2024' }],
    ['pills', { items: [{ t: 'NAGAR SEVAK', tone: 'gold' }, { t: 'CO-OP CHAIR', tone: 'gold' }, { t: '+ 1' }] }],
    ['row', { items: [{ t: '📞 Call', kind: 'secondary', toast: 'Platform-masked call' }, { t: '💬 Message', kind: 'secondary', go: 'L.c.dm' }, { t: '+ Connect', kind: 'secondary', go: 'L.m.cinbox' }] }],
    ['kpi', { items: [{ v: '142', l: 'in sub-tree · +18 %/mo', go: 'L.m.dir' }, { v: '87', l: 'direct citizens · 58 %', go: 'L.m.citizens' }, { v: '98 %', l: 'SLA on-time', go: 'L.m.scorecard' }] }],
    ['tabs', { tabs: [
      { t: 'Overview', body: [['sec', { t: 'Recent activity' }], ['list', { items: [{ t: 'Approved Lakshmi Bhonsle', s: '22 May · 10:46 AM', go: 'L.a.approved' }, { t: 'Issued letter L-4321 to Wakad PWD', s: '21 May · 4:18 PM', go: 'L.l.wallet' }, { t: 'Reassigned 3 tickets to Sunita', s: '20 May · 9:02 AM', go: 'L.g.reassign' }] }], ['small', { t: 'Phone visible: you’re in line-of-sight (Tier 2)' }]] },
      { t: 'Activity', body: [['list', { items: [{ t: 'Letters issued · 42 this month', go: 'L.l.audit' }, { t: 'Announcements · 12 sent', go: 'L.n.list' }, { t: 'Designation changes · 1', go: 'L.m.timeline' }] }]] },
      { t: 'Designations', body: [['list', { items: [{ i: 'E', t: 'Nagar Sevak · Wakad Ward 7 · PMC', s: '2022 – present · proof on file' }, { i: 'E', t: 'Co-op Bank Chairman', s: '2022 – present' }] }], ['link', { t: 'Full designation timeline →', go: 'L.m.timeline' }]] },
      { t: 'Referrals (8)', body: [['link', { t: 'Open referral chain →', go: 'L.m.refchain' }]] }
    ] }],
    ['sec', { t: 'Lead actions' }],
    ['list', { items: [{ i: '⏸', t: 'Mark on-leave / deactivate', go: 'L.m.leave' }, { i: '⬆', t: 'Promote / demote', go: 'L.h.promote' }, { i: '🏷', t: 'Attach external designation', go: 'L.h.attach' }, { i: '🎯', t: 'Skill & specialty tags', go: 'L.h.skills' }, { i: '↔', t: 'Reassign / move to another parent', go: 'L.h.reassign' }, { i: '📊', t: 'Scorecard', go: 'L.m.scorecard' }] }]
  ] });
  s('L.m.edit', { app: 'L', f: '1', title: 'Edit your profile', sub: 'Gold fields need Lead approval', right: { i: 'Save', go: 'L.m.profile' }, caps: ['1.6'], body: [
    ['ph', { t: 'AP · Change photo', h: 90, kind: 'round', toast: 'Photo picker · moderation applies in MCC' }],
    ['input', { label: 'Name', v: 'Anil Patil' }],
    ['input', { label: 'Phone · not editable here', v: '+91 98220 47821', hint: 'Change via Settings → Security (old + new OTP)' }],
    ['input', { label: 'Party role · §2 only', v: 'District Lead · Pune Rural' }],
    ['list', { items: [{ i: '~', t: 'Nagar Sevak · Wakad Ward 7', s: '2022 – present · ✎ edit requires Lead approval', b: 'QUEUED', btone: 'gold', go: 'L.h.attach' }] }],
    ['chips', { opts: ['मराठी', 'हिंदी', 'English'], v: 0 }],
    ['small', { t: 'All changes are audit-logged and appear in the designation timeline.' }],
    ['btn', { t: 'Save', go: 'L.m.profile' }]
  ] });
  s('L.m.timeline', { app: 'L', f: '1', title: 'Designation timeline', sub: 'Anil Patil · every party role + external designation', caps: ['1.19', '2.15'], body: [
    ['chips', { opts: ['All · 9', 'Party roles · 5', 'External · 4', 'Pending', 'Ended'], v: 0 }],
    ['tl', { items: [
      { t: 'District Lead · Pune Rural', s: '22 Apr 2024 → now · promoted from Block Lead · primary · term until Mar 2028', st: 'done' },
      { t: 'Nagar Sevak · Wakad Ward 7 · PMC', s: '15 Mar 2022 → Jan 2027 · active · proof: PMC gazette', st: 'done', right: 'E' },
      { t: 'Co-op Bank Chairman', s: '8 Jan 2022 → now · 3-year term · proof: appointment letter', st: 'done', right: 'E' },
      { t: 'Block Lead · Haveli', s: '3 Jul 2020 → Apr 2024 · ended (promoted)', st: 'todo' },
      { t: 'Nagar Sevak · Wakad Ward 7', s: '12 Feb 2017 → Feb 2022 · ended (re-elected)', st: 'todo', right: 'E' },
      { t: '★ Joined the party', s: '22 March 2019 · via referral · approved same day', st: 'todo' }
    ] }],
    ['btn', { t: 'Export · PDF · for compliance', kind: 'secondary', toast: 'Notarised PDF generated' }]
  ] });
  s('L.m.scorecard', { app: 'L', f: '1', title: 'Scorecard · Sakhi Priya', sub: 'Last 90 days · Booth Volunteer · Wakad B47', caps: ['1.12'], body: [
    ['kpi', { items: [{ v: '94', l: '/ 100 · ↑ 7 vs last quarter', tone: 'ok' }, { v: 'MOTW', l: 'Member of the week · 12 May', tone: 'gold' }] }],
    ['bar', { v: 100, l: 'Tickets resolved on-time · 14 of 14', r: '28 pts' }], ['bar', { v: 92, l: 'Tasks completed on time · 22 of 24', r: '26 pts' }], ['bar', { v: 80, l: 'Members referred (90d active) · 4', r: '20 pts' }], ['bar', { v: 89, l: 'Events attended · 8 of 9', r: '18 pts' }], ['bar', { v: 95, l: 'Chat responsiveness · avg 4 min', r: '8 pts' }],
    ['note', { t: 'Rank · 3rd of 124 Booth Volunteers in Wakad', tone: 'gold' }],
    ['link', { t: 'Per-assignment split (Booth Vol vs Mahila) →', go: 'L.t.scorecard' }],
    ['btn', { t: 'Send Sakhi a recognition note', toast: 'Recognition note posted · sub-tree visible' }]
  ] });
  s('L.m.invites', { app: 'L', f: '1', title: 'Issued invites', sub: '6 unused · all single-use · audit-logged', caps: ['1.14'], body: [
    ['chips', { opts: ['All 14', 'Unused (6)', 'Consumed (7)', 'Revoked (1)'], v: 0 }],
    ['card', { t: 'NCP-INV-Q7M4-9821-XR', s: 'Booth Volunteer · Wakad · B47 · issued 18 May · valid until 29 May', b: 'UNUSED · 4 D', body: [['row', { items: [{ t: 'Re-share', kind: 'secondary', go: 'L.a.genready' }, { t: 'Revoke', kind: 'danger', sheet: { t: 'Revoke invite', body: [['ta', { label: 'Reason (optional · stored in audit)', ph: 'shared by mistake' }], ['btn', { t: 'Revoke · permanent', kind: 'danger', go: 'L.m.invites' }]] } }] }]] }],
    ['card', { t: 'NCP-INV-PXVT-3398-K2', s: 'Booth Volunteer · for Sandeep · valid until 27 May', b: 'UNUSED · 2 D', body: [['row', { items: [{ t: 'Re-share', kind: 'secondary', go: 'L.a.genready' }, { t: 'Revoke', kind: 'danger', toast: 'Reason sheet' }] }]] }],
    ['list', { items: [{ t: 'NCP-INV-DFR8-1142-A9', s: 'CONSUMED · Now: Sakhi Priya · 14 Mar', b: 'CONSUMED', btone: 'ok', go: 'L.m.profile' }, { t: 'NCP-INV-RT9K-5577-Q1', s: 'Revoked 19 May · reason: shared by mistake', b: 'REVOKED', btone: 'danger' }] }],
    ['btn', { t: 'Revoke all 6 unused', kind: 'danger', toast: 'Bulk revoke · one reason applies to all' }],
    ['small', { t: 'Revocation is permanent. Printed QRs become useless instantly.' }]
  ] });
  s('L.m.leave', { app: 'L', f: '1', title: 'Change status', sub: 'Ravi Kumar · Booth President · Wakad', caps: ['1.7'], body: [
    ['seg', { opts: ['Active', 'On-leave', 'Deactivated'], v: 1 }],
    ['input', { label: 'Effective', v: '22 May 2026 · until 30 Aug ▾' }],
    ['chips', { opts: ['Medical', 'Personal', 'Travel', 'Other'], v: 0 }],
    ['sec', { t: 'What happens when you confirm' }],
    ['list', { items: [{ t: '8 open tickets auto-routed', s: 'pick handlers next' }, { t: '12 active tasks reassigned' }, { t: '3 chat-admin roles handed to next-in-line' }, { t: 'Direct connections (24) remain bound · DM pauses' }, { t: 'Visible in directory with “on-leave” pill' }, { t: 'Auto-returns active on 30 Aug · or manual' }] }],
    ['note', { t: 'Record preserved. Scorecard frozen at current value. No data loss.', tone: 'ok' }],
    ['btn', { t: 'Set on-leave → hand off 23 items', go: 'L.m.bulk' }]
  ] });
  s('L.m.bulk', { app: 'L', f: '1', title: 'Hand off 23 open items', sub: 'Ravi goes on-leave 22 May — 30 Aug', caps: ['1.13'], body: [
    ['seg', { opts: ['Pick handlers', 'Auto-route up'], v: 0 }],
    ['card', { t: 'Open tickets · 8', s: 'Reassign to Sakhi Priya · Wakad B47 ▾ · 3 urgent · 5 normal', body: [['note', { t: 'Estimated capacity impact on Sakhi: +12 %', tone: 'warn' }]] }],
    ['card', { t: 'Active tasks · 12', s: 'Mixed · choose per task ▾ · 3 archive · 8 to Sakhi · 1 escalated to Anil', go: 'L.t.bulk' }],
    ['card', { t: 'Chat-admin roles · 3', s: 'Next-in-line auto-pick ▾ · Booth 47 chat → Sakhi · Ward 47 → you' }],
    ['card', { t: 'Direct citizen connections · 24', s: 'Pause + delegate to Sakhi · citizens notified · auto-restored on return' }],
    ['btn', { t: 'Confirm & set on-leave', go: 'L.m.dir' }],
    ['small', { t: 'One atomic audit batch · safe rollback if any write fails' }]
  ] });
  s('L.m.growth', { app: 'L', f: '1', title: 'Growth dashboard', sub: 'Last 90 days · your sub-tree (142 members)', caps: ['1.10', '1.16'], body: [
    ['chips', { opts: ['7 d', '30 d', '90 d', '1 y'], v: 2 }],
    ['kpi', { items: [{ v: '142', l: 'total · +22 this quarter' }, { v: '8.4', l: 'avg referral depth' }, { v: '36', l: 'also Nagar Sevak · 25 %', tone: 'gold' }] }],
    ['spark', { v: [20, 25, 22, 30, 28, 35, 80, 90, 60, 45, 40, 48], l: 'Daily adds · 90 d · gold spike = April drive' }],
    ['bar', { v: 80, l: 'Invite link (path 2)', r: '8' }], ['bar', { v: 60, l: 'Referral (path 6)', r: '6' }], ['bar', { v: 50, l: 'Door-to-door (path 7)', r: '5' }], ['bar', { v: 30, l: 'Quick add (path 1)', r: '3' }],
    ['card', { av: 'SP', t: 'Spotlight · top referrer · Sakhi Priya', s: '4 referrals active 90+ d · 18 % of your sub-tree growth', tone: 'gold', body: [['btn', { t: 'Send a recognition note →', kind: 'secondary', toast: 'Shout-out posted' }]] }],
    ['link', { t: 'Referral chain explorer →', go: 'L.m.refchain' }],
    ['small', { t: 'Top Leader desktop version adds region heatmap + designation overlay (8,420 members · Ambegaon −4 %).' }]
  ] });
  s('L.m.refchain', { app: 'L', f: '1', title: 'Referral chain · Anil Patil', sub: '8 referrals · 7 still active 90+ d', caps: ['1.16'], body: [
    ['tree', { items: [{ d: 0, av: 'AP', t: 'Anil Patil', s: 'root (you)' }, { d: 1, av: 'SP', t: 'Sakhi Priya', s: '4 sub-refs · active', go: 'L.m.scorecard' }, { d: 2, av: 'SA', t: 'Sakhi Anita', s: '2 sub-refs · active', kids: false, go: 'L.m.profile' }, { d: 2, av: 'RK', t: 'Ravi Kumar', s: 'on-leave', kids: false, b: 'ON-LEAVE', btone: 'warn', go: 'L.m.leave' }, { d: 1, av: 'VR', t: 'Vendor Ramesh', s: 'pending approval', kids: false, go: 'L.a.inbox' }] }],
    ['kpi', { items: [{ v: '14', l: 'total (all depths)' }, { v: '11', l: 'active 90+ d', tone: 'ok' }, { v: '3', l: 'max depth' }, { v: '+340', l: 'recognition pts', tone: 'gold' }] }],
    ['small', { t: 'Pinch-zoom for deeper chains · long-press a node for the original referral message' }]
  ] });
  s('L.m.deslib', { app: 'L', f: '1', title: 'Add external designation', sub: 'Pick from the org catalog — never free text', caps: ['1.20'], body: [
    ['input', { ph: 'Search · “nagar sevak”, “co-op”, “zilla”…' }],
    ['chips', { opts: ['All 42', 'Govt · elected', 'Co-op board', 'NGO', 'Honorary'], v: 0 }],
    ['list', { items: [{ av: 'N', t: 'Nagar Sevak', s: 'Municipal Corporation · 5-year elected term · 36 hold this · public', right: '+', go: 'L.h.attach' }, { av: 'Z', t: 'Zilla Parishad Member', s: 'Zilla Parishad · 5-year · 14 hold this · public', right: '+', go: 'L.h.attach' }, { av: 'C', t: 'Co-op Bank Chairman', s: 'Co-op board · 3-year · 8 hold this · org-only', right: '+', go: 'L.h.attach' }, { av: 'G', t: 'Gram Panchayat Sarpanch', s: 'GP · 5-year · 22 hold this · public', right: '+', go: 'L.h.attach' }] }],
    ['note', { t: 'Proof required · attach a gazette, appointment letter, or certificate at the next step.', tone: 'warn' }],
    ['link', { t: 'Not in catalog? Suggest a new designation → Top Leader', toast: 'Suggestion sent to Top Leader' }]
  ] });
  s('L.m.cinbox', { app: 'L', f: '1', title: 'Citizen connection requests', sub: '6 pending · oldest 1 d ago', caps: ['1.21'], body: [
    ['bar', { v: 58, l: 'Your direct citizen capacity', r: '87 / 150 · OK' }],
    ['chips', { opts: ['All 6', 'General', 'Grievance', 'Scheme', 'Intro'], v: 0 }],
    ['list', { items: [
      { av: 'LB', t: 'Lakshmi Bhonsle · 1 d ago', s: 'NCP-PUN-WAK-08421 · GRIEVANCE · “Water tank broken — third complaint, nothing done.”', go: 'L.m.caccept' },
      { av: 'SK', t: 'Sandeep Kale · 8 h ago', s: 'NCP-PUN-WAK-09122 · SCHEME · “Need help applying for PM-Kisan.” · 1 prior letter', go: 'L.m.caccept' },
      { av: 'VR', t: 'Vendor Ramesh · 3 h ago', s: 'NCP-PUN-WAK-11874 · GENERAL · “My shop is near B47. Want to connect.”', go: 'L.m.caccept' },
      { t: '3 more pending · show all', tone: 'muted', go: 'L.m.capacity' }
    ] }],
    ['sec', { t: 'Connection tools' }],
    ['list', { items: [{ i: '👥', t: 'My direct citizens (87)', go: 'L.m.citizens' }, { i: '⚠', t: 'See the 95 % capacity state', go: 'L.m.capacity' }, { i: '🛡', t: 'Triage queue (on behalf of MLA)', go: 'L.m.triage' }, { i: '📨', t: 'Reach out to a citizen (proactive)', go: 'L.m.outreach' }, { i: '⚙', t: 'Connection policy (Top Leader)', go: 'L.m.policy' }] }]
  ] });
  s('L.m.caccept', { app: 'L', f: '1', title: 'Lakshmi Bhonsle', sub: 'NCP-PUN-WAK-08421 · GRIEVANCE', caps: ['1.22'], body: [
    ['card', { av: 'LB', t: '“Water tank broken at Booth 47 corner — third complaint via the municipal office, nothing done. Need direct help.”', s: '— Lakshmi · no prior interaction with you' }],
    ['btn', { t: 'Accept & I’ll handle', go: 'L.m.dm', kind: 'primary' }],
    ['small', { t: '+1 of 150 · counts toward your capacity' }],
    ['btn', { t: 'Accept & delegate to a sub-tree worker', kind: 'secondary', sheet: { t: 'Delegate to', body: [['p', { t: 'One level only · stays attributed to you · doesn’t fill your capacity' }], ['list', { items: [{ av: 'SP', t: 'Sakhi Priya', s: 'Booth Vol · Wakad B47 · capacity 42 %', go: 'L.m.citizens' }, { av: 'SA', t: 'Sakhi Anita', s: 'Booth Vol · Wakad B48 · Mahila', go: 'L.m.citizens' }] }]] } }],
    ['btn', { t: 'Reject with reason', kind: 'danger', sheet: { t: 'Reject · Lakshmi will be told', body: [['radio', { opts: ['Out of my scope', 'Duplicate request', 'Please go through your Sakhi first', 'Other'] }], ['toggle', { label: 'Show reason to the citizen', on: true }], ['btn', { t: 'Reject & notify', kind: 'danger', go: 'L.m.cinbox' }]] } }],
    ['small', { t: 'Long-press citizen avatar → full profile preview (visibility tier honoured)' }]
  ] });
  s('L.m.citizens', { app: 'L', f: '1', title: 'My direct citizens', sub: '87 connected · 12 via delegations from peers', caps: ['1.23'], body: [
    ['bar', { v: 58, l: 'Capacity', r: '87 / 150 · 58 %' }],
    ['input', { ph: 'Search by name · CRN · phone' }],
    ['seg', { opts: ['Mine direct (75)', 'Delegated to me (12)'], v: 0 }],
    ['list', { items: [{ av: 'LB', t: 'Lakshmi Bhonsle', s: 'NCP-PUN-WAK-08421 · Wakad B47 · last DM 2 h ago', b: 'ACTIVE · 8 D', btone: 'ok', go: 'L.m.dm' }, { av: 'SK', t: 'Sandeep Kale', s: 'NCP-PUN-WAK-09122 · 3 d ago', b: 'ACTIVE · 6 MO', btone: 'ok', go: 'L.m.dm' }, { av: 'MK', t: 'Mrs Kulkarni', s: 'NCP-PUN-WAK-07712 · 60+ · 1 w ago', b: 'DELEGATED BY SUNITA', btone: 'purple', go: 'L.m.revoke' }, { av: 'VR', t: 'Vendor Ramesh', s: 'NCP-PUN-WAK-11874 · 12 d ago', b: 'DM PAUSED', btone: 'warn', go: 'L.m.dm' }, { t: '71 more citizens · sorted by last interaction', tone: 'muted' }] }],
    ['small', { t: 'Long-press a row → end connection · open DM' }],
    ['row', { items: [{ t: 'Pull back a delegation', kind: 'secondary', go: 'L.m.revoke' }, { t: 'End a connection', kind: 'secondary', go: 'L.m.end' }] }]
  ] });
  s('L.m.dm', { app: 'L', f: '1', title: 'Lakshmi Bhonsle', sub: 'NCP-PUN-WAK-08421 · connected 8 d · DIRECT CONNECTION', right: { i: '⋯', sheet: { t: 'Connection', body: [['list', { items: [{ t: 'View profile', go: 'L.m.caccept' }, { t: 'View audit', go: 'L.s.audit' }, { t: 'End connection', go: 'L.m.end' }, { t: 'Report behaviour', toast: 'Compliance review requested' }] }]] } }, caps: ['1.24'], body: [
    ['banner', { t: '→ Promote this DM to a formal grievance ticket (§3)', tone: 'gold', go: 'L.g.raise' }],
    ['chat', { msgs: [{ who: 'Lakshmi · yesterday', t: 'Sir, water tank broken again. Sent photo to municipal office but no response. Help please.', time: '4:18 PM' }, { me: true, t: 'I’ll send Sakhi to take a look tomorrow morning. — Anil', time: '4:42 PM ✓✓' }, { who: 'Lakshmi · today', t: 'Sakhi came at 9 AM. She filed a grievance ticket. Thank you, sir 🙏', time: '10:12 AM' }, { sys: true, t: 'GRIEVANCE FILED · T-5103 · Water tank · Wakad B47 · assigned to Sakhi Priya · In progress' }] }],
    ['link', { t: 'Open ticket T-5103 →', go: 'L.g.ticket' }],
    ['composer', { ph: 'Reply to Lakshmi…' }]
  ] });
  s('L.m.revoke', { app: 'L', f: '1', title: 'Pull back a delegation', sub: 'Lakshmi Bhonsle · delegated to Sakhi Priya', caps: ['1.25'], body: [
    ['tl', { items: [{ t: '14 May · Lakshmi requested you', st: 'done' }, { t: '14 May · You accepted & delegated to Sakhi', st: 'done' }, { t: '21 May · Sakhi resolved water-tank case', st: 'done' }, { t: 'Now · pull back or keep delegated', st: 'cur' }] }],
    ['radio', { opts: [{ t: 'Pull back · I’ll handle directly', s: '+1 of 150 capacity · Sakhi is notified' }, { t: 'Reassign to a different sub-tree worker', s: 'Stays attributed to you · choose target next' }, { t: 'Sakhi voluntarily hands back', s: 'Sakhi initiates from her side · awaits your accept' }] }],
    ['ta', { label: 'Reason (logged)', v: 'Lakshmi escalated · wants to speak with me' }],
    ['btn', { t: 'Pull back from Sakhi', go: 'L.m.citizens' }],
    ['small', { t: '24 h cool-off before delegating to a different worker' }]
  ] });
  s('L.m.end', { app: 'L', f: '1', title: 'End connection with Lakshmi', sub: 'She’ll be notified · history stays · 30-day cool-off', caps: ['1.26'], body: [
    ['chips', { opts: ['Issue resolved', 'Wrong sub-tree', 'No reply', 'Abusive', 'Other'], v: 0 }],
    ['toggle', { label: 'Show Lakshmi the reason (“issue resolved”)', on: true }],
    ['note', { t: 'Follow-up suggestion for Lakshmi · route future requests through her primary worker (Sakhi)', tone: 'info' }],
    ['small', { t: '“Abusive” auto-suppresses transparency and escalates to Compliance review of the DM history.' }],
    ['row', { items: [{ t: 'Cancel', kind: 'secondary', go: 'back' }, { t: 'End connection', kind: 'danger', go: 'L.m.citizens' }] }]
  ] });
  s('L.m.triage', { app: 'L', f: '1', title: "MLA Kiran Rao's inbox", sub: 'Triage · acting as Sunita (OSD) · 42 requests this week', hdr: 'gold', caps: ['1.28'], body: [
    ['kpi', { items: [{ v: '12', l: 'recommended', tone: 'ok' }, { v: '7', l: 'forward as-is' }, { v: '23', l: 'not recommended', tone: 'danger' }] }],
    ['card', { av: 'LB', t: 'Lakshmi Bhonsle · GRIEVANCE', s: 'NCP-PUN-WAK-08421 · Wakad B47 · “Water issue not resolved for months. Need MLA Sir’s help.” · prior connection: Anil Patil · resolved' }],
    ['seg', { opts: ['Recommend', 'Forward as-is', 'Not recommend'], v: 0 }],
    ['ta', { label: 'Your note to MLA (audit-logged)', v: 'Already tried with Anil twice. Wakad MLA-office should send PWD escalation request. Recommend accept & delegate back to Anil with note.' }],
    ['note', { t: 'Final decision remains with MLA. I cannot accept on his behalf. All my recs are audit-logged.', tone: 'warn' }],
    ['btn', { t: 'Send to MLA Kiran Rao', go: 'L.m.cinbox' }]
  ] });
  s('L.m.outreach', { app: 'L', f: '1', title: 'Reach out to a citizen', sub: 'Rare · VIP outreach & proactive support', caps: ['1.29'], body: [
    ['input', { label: 'Search by CRN · phone · name', v: 'NCP-PUN-WAK-11874', hint: '✓ found' }],
    ['card', { av: 'VR', t: 'Vendor Ramesh', s: 'Wakad · B47 · vegetable shop · 12 yr resident · 2 prior grievances resolved · no active connection' }],
    ['chips', { opts: ['Introduction', 'VIP outreach', 'Scheme info'], v: 0 }],
    ['ta', { label: 'Your message to Vendor Ramesh', v: 'Namaskar Ramesh ji, I wanted to personally connect after the two issues you raised last year. The PMC will be visiting Wakad next week — happy to introduce. — Anil', rows: 4 }],
    ['note', { t: 'Ramesh can accept or decline. Audit-logged like citizen-initiated requests. Counts toward capacity only on acceptance.', tone: 'info' }],
    ['btn', { t: 'Send invite to Ramesh', go: 'L.m.cinbox' }]
  ] });
  s('L.m.capacity', { app: 'L', f: '1', title: 'Citizen connection requests', sub: 'CAPACITY 142 / 150 · 95 % — delegate preferred', hdr: 'red', caps: ['1.21', '1.27'], body: [
    ['bar', { v: 95, l: 'Near cap · new accepts will degrade SLA', r: '142 / 150', tone: 'danger' }],
    ['card', { av: 'PD', t: 'Priya Damle · JUST IN', s: 'NCP-PUN-AUN-04412 · Aundh · 10 km away · “Want to discuss municipal-park lighting…”', body: [['card', { av: 'SJ', t: 'Suggested delegate · Sunita Joshi', s: 'Block Lead · Haveli · closer geographically · capacity 42 %', tone: 'ok' }], ['row', { items: [{ t: 'Delegate to Sunita', go: 'L.m.cinbox' }, { t: 'Accept anyway · SLA may slip', kind: 'secondary', toast: 'Accepted · SLA risk logged' }] }]] }],
    ['card', { t: 'Or · free up capacity', s: '12 connections inactive 90+ days · citizens notified · history preserved', body: [['btn', { t: 'End 12 stale connections in one tap', kind: 'danger', toast: '12 stale connections ended' }]] }],
    ['small', { t: 'Auto-suggest-delegate threshold set in connection policy (§1.27)' }]
  ] });
  s('L.m.policy', { app: 'L', f: '1', title: 'Connection policy', sub: 'TOP LEADER ONLY · mobile preview', caps: ['1.27', '9.19'], body: [
    ['sec', { t: 'Per-role caps' }],
    ['list', { items: [{ t: 'Ground · Booth Volunteer', s: 'opt-in · no delegate', right: '50' }, { t: 'Ward Lead · Booth President', s: 'delegate yes', right: '150' }, { t: 'Block Lead · District Lead', s: 'expected to delegate more', right: '300' }, { t: 'MLA / MP · Top Leader', s: 'triage queue required (§1.28)', right: '500' }] }],
    ['sec', { t: 'Citizen-side throttles' }],
    ['list', { items: [{ t: 'Max active connections per citizen', right: '5' }, { t: 'Max requests per citizen / week', right: '3' }, { t: 'Re-request cool-off after end / reject', right: '30 d' }, { t: 'Suggest-delegate kicks in at', right: '95 %' }] }],
    ['sec', { t: 'Triage assignments' }],
    ['list', { items: [{ t: 'MLA Kiran Rao → Sunita Joshi (OSD)', s: 'since Apr 2025 · 142 triage decisions', go: 'L.m.triage' }, { t: 'MLA Anita Rao → Rakesh Sharma', s: 'since Mar 2025 · 38 decisions' }, { t: '+ Add triage assignment', go: 'L.m.issuedel' }] }],
    ['note', { t: 'Who can be a target · all Lead+ by default. Ground volunteers opt in per individual (2 opted in). Disciplinary members excluded.', tone: 'info' }],
    ['btn', { t: 'Save & apply tenant-wide', toast: 'Policy saved · affected Leads notified' }]
  ] });
  s('L.m.staff', { app: 'L', f: '1', title: 'Staff directory', sub: '18 staff · 22 active delegations', right: { i: '+', go: 'L.m.addstaff' }, caps: ['1.31'], body: [
    ['chips', { opts: ['All 18', 'OSD', 'IT', 'Content', 'Sales', 'War-room'], v: 0 }],
    ['list', { items: [{ av: 'SJ', t: 'Sunita Joshi', s: 'OSD · acts for MLA Kiran Rao · District Pres Patil · 14 actions this week', b: '2 ACTIVE', btone: 'ok', go: 'L.m.delaudit' }, { av: 'RK', t: 'Rakesh Kale', s: 'IT Helpdesk · 87 password resets this month', b: 'TENANT-WIDE', go: 'L.m.issuedel' }, { av: 'AD', t: 'Aditi Sharma', s: 'Content · drafts for Top Leader · 8 announcements', b: '1 ACTIVE', btone: 'ok', go: 'L.m.issuedel' }, { av: 'VJ', t: 'Vikas Joshi', s: 'War-room · Pune Cantonment · 22–28 Mar', b: 'TIME-BOUND', btone: 'warn' }, { av: 'PR', t: 'Pradeep Rao', s: 'Finance · left Mar 2026 · cool-off until 1 May', b: 'OFF-BOARDED', btone: 'muted', go: 'L.m.offboard' }] }],
    ['list', { items: [{ i: '➕', t: 'Add a staff member', go: 'L.m.addstaff' }, { i: '🔑', t: 'Issue a delegation', go: 'L.m.issuedel' }, { i: '📋', t: 'Delegation audit · D-4892', go: 'L.m.delaudit' }] }]
  ] });
  s('L.m.addstaff', { app: 'L', f: '1', title: 'Add a staff member', sub: 'Non-member operator · TOP LEADER ONLY', caps: ['1.30'], body: [
    ['input', { label: 'Full name *', v: 'Sunita Joshi' }], ['input', { label: 'Phone *', v: '+91 98223 14572' }],
    ['input', { label: 'Staff role * (separate catalog)', v: 'Personal Aide / OSD ▾' }],
    ['note', { t: 'Operates on behalf of one or more principals · compose drafts · pre-screen incoming · no party assignment · no sub-tree authority', tone: 'info' }],
    ['seg', { opts: ['Bound to principal(s)', 'Tenant-wide (IT · Org Admin)'], v: 0 }],
    ['small', { t: 'Sunita will receive an OTP-only sign-in invite (no PIN for staff). Finance/Compliance roles may require background-check attestation.' }],
    ['btn', { t: 'Add & invite', go: 'L.m.issuedel' }]
  ] });
  s('L.m.issuedel', { app: 'L', f: '1', title: 'Issue a delegation', sub: 'Aide: Sunita Joshi (OSD) · Principal: MLA Kiran Rao', caps: ['1.32'], body: [
    ['input', { label: 'Term', v: '1 Apr 2025 → 31 Mar 2027', hint: "Matches Kiran's current MLA term" }],
    ['input', { label: 'Scope', v: 'Pune Cantonment Vidhan Sabha ▾' }],
    ['sec', { t: 'Permissions · drawn from MLA capability set' }],
    ['toggle', { label: 'Compose announcements', s: 'Drafts go for principal approval before send', on: true }],
    ['toggle', { label: 'Issue routine letters', s: 'Auto-signs under MLA’s signature', on: true }],
    ['toggle', { label: 'Triage connection requests (§1.28)', s: 'Recommend only · principal decides', on: true }],
    ['toggle', { label: 'Sign rally permits', s: 'Principal-only · cannot be delegated', on: false, locked: true }],
    ['toggle', { label: 'Configure tenant settings', s: 'Top Leader (Org Admin) only', on: false, locked: true }],
    ['note', { t: 'Delegation entity D-4892 · aide × principal × scope × permissions × term · revocable · auto-expires at term end', tone: 'gold' }],
    ['btn', { t: 'Issue delegation D-4892', go: 'L.m.mydel' }]
  ] });
  s('L.m.mydel', { app: 'L', f: '1', title: 'My delegations', sub: 'Sunita Joshi · OSD · 2 active', hdr: 'gold', caps: ['1.33'], body: [
    ['banner', { t: 'CURRENTLY ACTING AS · MLA Kiran Rao · D-4892 · tap to switch', tone: 'gold', sheet: { t: 'Act as', body: [['list', { items: [{ av: 'KR', t: 'MLA Kiran Rao', s: 'D-4892 · Pune Cantonment', go: 'L.m.mydel' }, { av: 'DP', t: 'District Pres Patil', s: 'D-5102 · Pune Rural', go: 'L.m.mydel' }, { av: 'SJ', t: 'Myself · Block Lead Haveli', go: 'L.brief' }] }]] } }],
    ['card', { av: 'KR', t: 'MLA Kiran Rao', s: 'D-4892 · Pune Cantonment · 1 Apr 2025 → 31 Mar 2027', b: 'ACTIVE', btone: 'ok', go: 'L.m.delaudit', body: [['pills', { items: [{ t: '✓ Announcements', tone: 'ok' }, { t: '✓ Letters', tone: 'ok' }, { t: '✓ Triage', tone: 'ok' }, { t: '✗ Rally permits', tone: 'danger' }, { t: '✗ Tenant config', tone: 'danger' }] }], ['small', { t: '14 actions this week · all dual-attributed' }]] }],
    ['card', { av: 'DP', t: 'District Pres Patil', s: 'D-5102 · Pune Rural · 1 May 2025 → 30 Apr 2027 · Announcements (drafts only)', b: 'ACTIVE', btone: 'ok', body: [['small', { t: '3 actions this week' }]] }],
    ['note', { t: 'Every action you take → Public: signed by MLA Kiran Rao · Audit: composed by Sunita Joshi (OSD) under D-4892. Sanctioned delegation, not impersonation.', tone: 'info' }],
    ['btn', { t: 'Hand back a delegation', kind: 'secondary', toast: 'Principal asked to accept the relinquishment' }]
  ] });
  s('L.m.delaudit', { app: 'L', f: '1', title: 'Delegation audit · D-4892', sub: 'Sunita Joshi acting for MLA Kiran Rao · Apr 25 — Mar 27', right: { i: '⤓', toast: 'CSV exported · audit-logged' }, caps: ['1.34'], body: [
    ['kpi', { items: [{ v: '42', l: 'announcements' }, { v: '18', l: 'letters' }, { v: '3', l: 'triage recs' }, { v: '61', l: 'total actions' }] }],
    ['chips', { opts: ['All', 'Announcements', 'Letters', 'Triage'], v: 0 }],
    ['list', { items: [{ t: 'L-4321 · Letter · PWD escalation · Wakad', s: '21 May 4:18 PM · Public: signed by MLA Kiran Rao · Audit: composed by Sunita (OSD) · principal pre-approved', go: 'L.l.wallet' }, { t: 'A-2207 · Announcement · Republic Day prog', s: '20 May 11:02 AM · 2,400 recipients · Kiran reviewed 4 min before send', go: 'L.n.analytics' }, { t: 'TR-1102 · Triage rec on Lakshmi B.', s: '22 May 9:31 AM · Recommended accept · principal accepted (no override)', go: 'L.m.triage' }] }],
    ['note', { t: 'Used by Compliance during internal-elections review, anti-defection probes, ECI filings. Exportable as immutable PDF.', tone: 'info' }]
  ] });
  s('L.m.offboard', { app: 'L', f: '1', title: 'Off-board Pradeep Rao', sub: 'Finance Operator · active since Jul 2024', hdr: 'red', caps: ['1.35'], body: [
    ['note', { t: 'Permanent-soft action · all delegations end · all access revoked · audit history preserved forever.', tone: 'danger' }],
    ['list', { items: [{ t: 'End 1 active delegation (D-7711 · Top Leader · finance)' }, { t: 'Revoke OTP sign-in capability' }, { t: 'Re-route 4 pending vendor payment approvals' }, { t: 'Lock account read-only for 30 days' }, { t: 'Audit log of all 138 past actions stays accessible' }] }],
    ['chips', { opts: ['Left org', 'Role ended', 'For cause'], v: 0 }],
    ['input', { label: 'Transfer pending work to', v: 'Finance Backup · Manisha S. ▾' }],
    ['input', { label: 'Type OFF-BOARD to confirm', ph: 'OFF-BOARD' }],
    ['row', { items: [{ t: 'Cancel', kind: 'secondary', go: 'back' }, { t: 'Off-board', kind: 'danger', go: 'L.m.staff' }] }],
    ['small', { t: '30-day cool-off before re-adding · “for cause” routes through Compliance' }]
  ] });

  /* ---------- §2 Hierarchy ---------- */
  s('L.h.place', { app: 'L', f: '2', title: 'My place in org', sub: 'Sakhi Priya · Wakad Booth 47', caps: ['2.5'], body: [
    ['sec', { t: 'My chain up' }],
    ['list', { items: [{ av: 'PD', t: 'Priya Deshmukh', s: 'National Spokesperson · Mumbai', b: 'TOP', go: 'L.m.profile' }, { av: 'AP', t: 'Anil Patil', s: 'District Lead · Pune Rural', b: 'LEAD', go: 'L.m.profile' }, { av: 'SJ', t: 'Sunita Joshi', s: 'Block Lead · Haveli', b: 'LEAD', go: 'L.m.profile' }, { av: 'RK', t: 'Ravi Kumar', s: 'Booth President · Wakad B-47 · I report directly to him', b: 'DIRECT', btone: 'gold', go: 'L.m.profile' }, { av: 'SP', t: 'You — Sakhi Priya', s: 'Booth Volunteer · Wakad B-47 · since 22 Mar 2024 · primary', tone: 'me' }] }],
    ['card', { t: 'Who reports to me', s: 'Nobody — I’m the leaf node · my citizens connect with me directly · 14 active', go: 'L.m.citizens' }],
    ['card', { t: 'My other assignments', s: 'Mahila Aghadi · Wakad block · secondary · since Aug 2025', go: 'L.g.context' }],
    ['row', { items: [{ t: 'View full org chart →', go: 'L.h.chart' }, { t: 'My reportees (Lead view)', kind: 'secondary', go: 'L.h.reportees' }] }]
  ] });
  s('L.h.reportees', { app: 'L', f: '2', title: 'My reportees', sub: 'Block Lead Haveli · 6 direct · 142 sub-tree', caps: ['2.6'], body: [
    ['kpi', { items: [{ v: '142', l: 'members' }, { v: '3', l: 'vacant slots', tone: 'danger', go: 'L.h.vacant' }, { v: '94 %', l: 'active', tone: 'ok' }] }],
    ['chips', { opts: ['Direct', 'Sub-tree', 'Vacant only', 'By role ▾'], v: 0 }],
    ['list', { items: [{ av: 'RK', t: 'Ravi Kumar', s: 'Booth President · Wakad B-47 · 18 sub-tree · 0 vacant', b: 'ACTIVE', btone: 'ok', go: 'L.m.profile' }, { av: 'SP', t: 'Sakhi Priya', s: 'Booth Volunteer · Wakad B-47 · + Mahila Aghadi (secondary)', b: 'ACTIVE', btone: 'ok', go: 'L.m.profile' }, { av: 'VJ', t: 'Vikas Joshi', s: 'Booth President · Wakad B-48 · acting: Sakhi Anita', b: 'ON-LEAVE', btone: 'warn', go: 'L.m.leave' }, { av: '?', t: 'VACANT slot', s: 'Booth President · Wakad B-49 · escalates → Sunita (you) · 12 days', b: 'FILL NOW', btone: 'danger', go: 'L.m.add' }, { av: 'SA', t: 'Sakhi Anita', s: 'Booth Volunteer · Wakad B-48 · acting BP until Vikas returns', b: 'ACTING', btone: 'gold', go: 'L.m.profile' }, { av: 'M', t: 'Manisha Pawar', s: 'Mahila Aghadi · Block Convenor · parallel hierarchy — wing', b: 'ACTIVE', btone: 'purple', go: 'L.m.profile' }] }],
    ['btn', { t: 'Fill vacant slot →', go: 'L.m.add' }]
  ] });
  s('L.h.chart', { app: 'L', f: '2', title: 'Org chart · Haveli', right: { i: '⌕', toast: 'Fuzzy search · member / ward / role' }, caps: ['2.4'], body: [
    ['chips', { opts: ['Party role', '+ External overlay', '+ Wings', 'Vacancies'], v: [0], multi: true }],
    ['input', { label: 'As-of date (time-travel)', v: 'Today · 22 May 2026', hint: 'Drag back to see the spine as it stood on any date', go: 'L.s.timetravel' }],
    ['tree', { items: [{ d: 0, av: 'AP', t: 'Anil Patil', s: 'District Lead', go: 'L.m.profile' }, { d: 1, av: 'SJ', t: 'Sunita J. · Block · Haveli', s: '142 members · 12 wards · 3 vacant', go: 'L.h.reportees' }, { d: 2, av: 'RK', t: 'Ravi K. · Wakad B-47', s: '18 sub-tree', open: false, go: 'L.m.profile' }, { d: 2, av: 'VJ', t: 'Vikas J. · Wakad B-48', s: 'on-leave · acting Anita', open: false, b: 'ACTING', btone: 'gold' }, { d: 2, av: '?', t: 'VACANT · Wakad B-49', s: 'escalates to Sunita', kids: false, b: 'VACANT', btone: 'danger', go: 'L.h.vacant' }, { d: 2, av: 'M', t: 'Mahila Aghadi · Block', s: 'Manisha Pawar · 12 sub-tree · wing', tone: 'purple', open: false }, { d: 1, av: 'VK', t: 'Block · Khed', s: '42 members', open: false }, { d: 1, av: '?', t: 'VACANT · Block · Maval', s: 'scoped to Sunita until filled', kids: false, b: 'VACANT', btone: 'danger' }] }],
    ['card', { t: 'Block Haveli', s: '142 members · 12 wards · 3 vacant slots', body: [['list', { items: [{ t: 'Block Lead · Sunita Joshi' }, { t: 'Treasurer · Madhav Rao' }, { t: 'Mahila Convenor · Manisha Pawar' }, { t: 'Yuva Convenor · VACANT', tone: 'danger' }] }], ['small', { t: 'External office holders (3) · 2 Nagar Sevaks · 1 ZP Member' }], ['row', { items: [{ t: 'Public-office overlay', kind: 'secondary', go: 'L.h.overlay' }, { t: 'Reassign / move', kind: 'secondary', go: 'L.h.reassign' }] }]] }]
  ] });
  s('L.h.chain', { app: 'L', f: '2', title: 'Chain of sight', sub: 'Ticket T-5103 · Water · Wakad', caps: ['2.11'], body: [
    ['card', { t: 'Broken water tank · Wakad B-47', s: 'SLA: 18h left · raised by Lakshmi B.', b: 'ACTIVE', btone: 'warn', go: 'L.g.ticket' }],
    ['sec', { t: 'Every level sees this' }],
    ['list', { items: [{ av: 'PD', t: 'Priya D. · National Spokesperson', s: 'aware · ticket below threshold', tone: 'muted' }, { av: 'AP', t: 'Anil Patil · District Lead', s: 'aware via summary · no action', tone: 'muted' }, { av: 'SJ', t: 'Sunita Joshi · Block Lead', s: 'monitoring · SLA-watch dashboard', go: 'L.g.dash' }, { av: 'RK', t: 'Ravi Kumar · Booth President', s: 'delegated to Sakhi Priya · + Nagar Sevak W-7 (boost)', b: 'DELEGATED', btone: 'gold' }, { av: 'SP', t: 'Sakhi Priya · Booth Volunteer', s: 'HANDLING NOW · 4h ago last update · acting under: Booth Volunteer (primary)', b: 'HANDLING', btone: 'ok', tone: 'me', go: 'L.g.context' }] }],
    ['card', { av: 'LB', t: 'Citizen origin · Lakshmi Bhonsle', s: 'NCP-PUN-WAK-08421 · ward 47', go: 'L.m.dm' }],
    ['small', { t: 'Status changes propagate up automatically. Vacancy → red ghost-row; confidential category → chain truncated.' }]
  ] });
  s('L.h.attach', { app: 'L', f: '2', title: 'Attach designation', sub: 'For: Anil Patil · audit-logged', caps: ['2.13'], body: [
    ['card', { av: 'AP', t: 'Anil Patil', s: 'District Lead · Pune Rural · primary · existing: 2 designations' }],
    ['input', { label: 'Pick from catalog *', v: 'Nagar Sevak · CIVIC', hint: 'No free-text · only catalog values (§2.12)', go: 'L.m.deslib' }],
    ['input', { label: 'Issuer', v: 'PCMC · Ward 7 ▾' }],
    ['input', { label: 'Jurisdiction', v: 'PCMC Ward 7 → Geo W-7 ✓ matched' }],
    ['input', { label: 'Term', v: '01 Feb 2022 → 31 Jan 2027' }],
    ['ph', { t: 'Proof (required) · tap to capture gazette / letter · stored encrypted', h: 80, kind: 'cam', toast: 'Camera + crop' }],
    ['seg', { opts: ['Public · default', 'Org-only'], v: 0 }],
    ['btn', { t: 'Attach & audit-log', go: 'L.m.timeline' }]
  ] });
  s('L.h.vacant', { app: 'L', f: '2', title: 'Mark slot vacant', sub: 'Wakad Booth B-49 · Booth President', caps: ['2.9'], body: [
    ['card', { av: 'RJ', t: 'Current holder · Rakesh Jadhav', s: 'Booth President · Wakad B-49 · since 2022 · 14 sub-tree · 4 active tickets' }],
    ['chips', { opts: ['Resigned', 'Term-end', 'Deceased', 'Expelled', 'Other'], v: 0 }],
    ['input', { label: 'Effective from', v: '21 May 2026' }],
    ['card', { t: 'Escalation policy · §2.17 preview', s: 'While vacant, work routes to → Sunita Joshi (Block Lead · 1 level up) · acting authority · audit-marked', go: 'L.h.routing' }],
    ['note', { t: 'Impact · 4 tickets re-routed · 7 tasks re-assigned · 14 sub-tree members notified · audit row created. “Deceased” and “Expelled” need Top-Leader co-sign.', tone: 'warn' }],
    ['row', { items: [{ t: 'Cancel', kind: 'secondary', go: 'back' }, { t: 'Mark vacant', kind: 'danger', go: 'L.h.reportees' }] }]
  ] });
  s('L.h.reassign', { app: 'L', f: '2', title: 'Reassignment request', sub: 'Inbound · requires your acceptance', caps: ['2.7'], body: [
    ['card', { t: 'Requested by Vikas Joshi · Regional Coord.', s: '5 min ago · audit-id REA-2026-0518-4421 · “Sakhi Anita is moving from Wakad B-48 to your B-47 sub-tree.”' }],
    ['card', { av: 'SA', t: 'Sakhi Anita', s: 'Booth Volunteer · since Aug 2023 · 12 active citizens · 96 % SLA · 4.6 CSAT', b: 'A+', btone: 'ok', go: 'L.m.profile' }],
    ['list', { items: [{ t: 'FROM · Vikas Joshi · Booth Pres B-48', s: 'left 21 May' }, { t: 'TO (YOU) · Ravi Kumar · Booth Pres B-47', s: 'acceptance pending' }] }],
    ['note', { t: 'On accept · her 12 citizen connections move with her · 3 tickets reassigned · Sunita Joshi notified', tone: 'info' }],
    ['row', { items: [{ t: 'Decline + reason', kind: 'secondary', sheet: { t: 'Decline', body: [['ta', { label: 'Note to Vikas', ph: 'Why?' }], ['btn', { t: 'Send decline', kind: 'danger', go: 'L.h.reportees' }]] } }, { t: 'Accept', go: 'L.h.reportees' }] }]
  ] });
  s('L.h.find', { app: 'L', f: '2', title: 'Find by designation', sub: 'Cross-cuts hierarchy · scoped to Pune Rural', caps: ['2.14'], body: [
    ['input', { v: '“Nagar Sevak”', ph: 'Search catalog' }],
    ['chips', { opts: ['Civic · 12', 'Co-op · 5', 'NGO · 9', 'Active ▾'], v: 0 }],
    ['small', { t: '12 members · 12 Nagar Sevak terms · 2 ending soon' }],
    ['list', { items: [{ av: 'AP', t: 'Anil Patil', s: 'Nagar Sevak · PCMC W-7 · also District Lead · 2022 → 2027', go: 'L.m.profile' }, { av: 'SJ', t: 'Sunita Joshi', s: 'Nagar Sevak · PMC W-23 · also Block Lead · ZP Member', b: 'ENDING IN 84d', btone: 'warn', go: 'L.m.profile' }, { av: 'MR', t: 'Mahesh Rane', s: 'Nagar Sevak · PMC W-15 · also Booth President', go: 'L.m.profile' }, { av: 'PD', t: 'Pooja Deshmukh', s: 'Nagar Sevak · PCMC W-12 · + Mahila Aghadi Wakad Convenor', go: 'L.m.profile' }, { av: 'SK', t: 'Sandeep Kale', s: 'Nagar Sevak · PMC W-8 · also Co-op Bank Director', b: 'ENDING IN 28d', btone: 'warn', go: 'L.m.profile' }] }],
    ['row', { items: [{ t: 'Export CSV', kind: 'secondary', toast: 'CSV exported' }, { t: 'Send to §6 audience', go: 'L.n.compose' }] }]
  ] });
  s('L.h.overlay', { app: 'L', f: '2', title: 'Overlay · Public office', sub: 'Colour pins on the org chart by issuer', caps: ['2.16'], body: [
    ['pills', { items: [{ t: 'Govt · 22', tone: 'gold' }, { t: 'Co-op · 8', tone: 'teal' }, { t: 'NGO / honorary · 15', tone: 'purple' }] }],
    ['tree', { items: [{ d: 0, av: 'AP', t: 'Anil Patil · District Lead', s: '● Nagar Sevak PCMC W-7', b: 'GOVT', btone: 'gold', go: 'L.m.timeline' }, { d: 1, av: 'SJ', t: 'Sunita J. · Block Haveli', s: '● Nagar Sevak · ● ZP Member', b: 'GOVT', btone: 'gold' }, { d: 1, av: 'VK', t: 'Block · Khed', s: '42 members', open: false }, { d: 1, av: '?', t: 'VACANT · Block Maval', s: 'no pins', kids: false, b: 'VACANT', btone: 'danger' }, { d: 2, av: 'MR', t: 'Mahesh R. · BP W-15', s: '● Nagar Sevak PMC', kids: false, b: 'GOVT', btone: 'gold' }, { d: 2, av: 'SK', t: 'Sandeep K. · BP W-8', s: '● Co-op Bank Director', kids: false, b: 'CO-OP', btone: 'teal' }] }],
    ['card', { t: 'Tapped · Anil Patil · GOVT pin', s: 'Nagar Sevak · PCMC W-7 · term 2022-Feb → 2027-Jan · 8 months remain · drives §3.23 civic routing', tone: 'gold', go: 'L.m.timeline' }],
    ['kpi', { items: [{ v: '45', l: 'office-holders' }, { v: '6', l: 'terms ending in 90d', tone: 'warn' }, { v: '32 %', l: 'of sub-tree' }] }],
    ['link', { t: 'Open full overlay on desktop (Screening Committee view)', go: 'L.s.admin' }]
  ] });
  s('L.h.promote', { app: 'L', f: '2', title: 'Promote · Sakhi Priya', sub: 'Booth Volunteer → Booth President', caps: ['2.8'], body: [
    ['card', { av: 'SP', t: 'Sakhi Priya', s: 'Booth Volunteer · Wakad B-47 · since 2024 · A+ scorecard · 96 % SLA · 4.8 CSAT · MOTW ×3', go: 'L.m.scorecard' }],
    ['list', { items: [{ t: 'FROM · Booth Vol.', s: 'level: Booth' }, { t: 'TO · Booth Pres.', s: '+ letterhead authority' }] }],
    ['input', { label: 'Effective from · term', v: '25 May 2026 · 3 years (default)' }],
    ['note', { t: 'Multi-assignment · Sakhi will hold 2 active assignments: Booth President (new primary) · Mahila Aghadi Convenor (secondary)', tone: 'info' }],
    ['note', { t: 'Old role opens up · Wakad B-47 Booth Volunteer slot becomes vacant. Fill it via §2.9 after promotion?', tone: 'warn' }],
    ['small', { t: 'Cool-off · no further role-change for Sakhi for 30 days. Demote requires Top-Leader co-sign.' }],
    ['row', { items: [{ t: 'Cancel', kind: 'secondary', go: 'back' }, { t: 'Promote & notify', go: 'L.m.profile' }] }]
  ] });
  s('L.h.skills', { app: 'L', f: '2', title: 'Skills · Sakhi Priya', sub: 'Used by §3 routing & §4 task targeting', caps: ['2.10'], body: [
    ['sec', { t: 'Languages · drives multilingual routing' }], ['chips', { opts: ['Marathi', 'English', 'Hindi', 'Kannada', 'Other'], v: [0, 1], multi: true }],
    ['sec', { t: 'Sensitivity tags · influences wing-aware routing' }], ['chips', { opts: ['Mahila-safe', 'Senior care', 'Disability', 'Youth'], v: [0], multi: true }],
    ['sec', { t: 'Civic specialties · designation-jurisdiction matching' }], ['chips', { opts: ['Water', 'Sanitation', 'Lighting', 'Garbage', 'Roads'], v: [], multi: true }],
    ['small', { t: 'Self-tags visible to sub-tree · Lead-assigned tags shown with “by Lead” badge' }],
    ['card', { t: 'Routing impact (live)', s: 'Eligible for: 6 ticket categories · 4 task types · Preferred for: women-safety in Wakad sub-ward', tone: 'ok' }],
    ['btn', { t: 'Save · re-compute routes', go: 'L.m.profile' }]
  ] });
  s('L.h.structure', { app: 'L', f: '2', title: 'Org structure', sub: 'Admin · desktop-primary · mobile compact view', caps: ['2.1'], body: [
    ['note', { t: 'Template: Geographic + IT cell · 7 levels · 1 wing · 2 drafts awaiting Top-Leader co-sign', tone: 'info' }],
    ['list', { items: [{ i: 'L1', t: 'Country', s: 'plural: Countries · abbrev: CO · 1', right: 'EDIT' }, { i: 'L2', t: 'State', s: 'cardinality 1..N', right: 'EDIT' }, { i: 'L3', t: 'District', s: 'default span 1 ≈ 8 Blocks', right: 'EDIT' }, { i: 'L4', t: 'Cluster (DRAFT)', s: 'skip-routable: yes · awaiting co-sign', b: 'SIGN-OFF', btone: 'warn' }, { i: 'L5', t: 'Block', s: 'default span 1 ≈ 10 Wards' }, { i: 'L6', t: 'Ward', s: 'crosswalk: PCMC / PMC' }, { i: 'L7', t: 'Booth', s: 'leaf · volunteers' }] }],
    ['row', { items: [{ t: '+ Add level', kind: 'secondary', toast: 'Level added as draft' }, { t: 'Add wing / cell / ad-hoc', kind: 'secondary', go: 'L.h.adhoc' }] }],
    ['list', { items: [{ i: '▦', t: 'Structure templates', go: 'L.h.templates' }, { i: '📖', t: 'Party-role catalog', go: 'L.h.roles' }, { i: '🏷', t: 'External-designation catalog', go: 'L.h.descat' }, { i: '⇄', t: 'Routing rules', go: 'L.h.routing' }, { i: '🗺', t: 'Vacancy heatmap', go: 'L.h.heat' }] }],
    ['small', { t: 'Schema changes are denied during active MCC mode.' }]
  ] });
  s('L.h.templates', { app: 'L', f: '2', title: 'Pick a starting structure', sub: 'First-run wizard · tailor after picking', caps: ['2.2'], body: [
    ['card', { t: 'Geographic', s: '7 levels · Country → … → Booth → Volunteer · 14 roles · 3 wings · routing by ward + designation', b: 'RECOMMENDED', btone: 'ok', body: [['btn', { t: 'Use Geographic', go: 'L.h.structure' }]] }],
    ['card', { t: 'Functional', s: '5 levels · Top → Working-Comm → Cell → Sub-cell → Volunteer · 9 roles · no wings · routing by skill', body: [['btn', { t: 'Use Functional', kind: 'secondary', go: 'L.h.structure' }]] }],
    ['card', { t: 'Hybrid', s: 'Geographic spine + parallel functional committees at State + National · 18 roles · 5 wings', body: [['btn', { t: 'Use Hybrid', kind: 'secondary', go: 'L.h.structure' }]] }],
    ['link', { t: 'Start from scratch · or import from CSV', toast: 'Parsed-tree preview before commit' }]
  ] });
  s('L.h.roles', { app: 'L', f: '2', title: 'Party-role catalog', sub: '18 roles across 7 levels · 4 in draft', right: { i: '+', toast: 'New role · draft' }, caps: ['2.3', '9.16'], body: [
    ['chips', { opts: ['All levels', 'District', 'Block', 'Ward', 'Booth', 'Wings · 5'], v: 0 }],
    ['table', { cols: ['Role', 'Level', 'Card.', 'Term', 'Letterhead', 'Co-sign', 'People'], rows: [{ c: ['National Lead', 'L1', '1', '5y', 'YES', 'YES', '1'], toast: 'Role editor' }, { c: ['State Lead', 'L2', '1', '3y', 'YES', 'YES', '3'], toast: 'Role editor' }, { c: ['District Lead', 'L3', '1', '3y', 'YES', 'PARENT', '34'], toast: 'Role editor' }, { c: ['Block Lead', 'L4', '1', '2y', 'UPON', 'NO', '312'], toast: 'Role editor' }, { c: ['Ward Convenor', 'L5', '1', '2y', 'NO', 'NO', '2,860'], toast: 'Role editor' }, { c: ['Booth President', 'L6', '1', '2y', 'NO', 'NO', '19,800'], toast: 'Role editor' }, { c: ['Mahila · Block Convenor', 'L4 wing', '1', '2y', 'NO', 'WING', '312'], toast: 'Role editor' }, { c: ['Treasurer (DRAFT)', 'L4 fn', '1', '2y', 'NO', 'YES', '—'], toast: 'Draft' }] }],
    ['small', { t: 'Cardinality + term edits apply to new assignments only (§9.16). Disabling a role-in-use requires reassigning holders first.' }]
  ] });
  s('L.h.descat', { app: 'L', f: '2', title: 'External-designation library', sub: '38 rows · 4 categories · last ECI sync 30 Apr', right: { i: '+', toast: 'Add designation wizard' }, caps: ['2.12'], body: [
    ['chips', { opts: ['Civic · 14', 'Co-op · 9', 'NGO / Trust · 11', 'Honorary · 4'], v: 0 }],
    ['table', { cols: ['Designation', 'Issuer', 'Jurisdiction', 'Term', 'Vis.', 'Holders', 'Proof'], rows: [{ c: ['Nagar Sevak', 'PCMC · PMC', '→ ward (auto)', '5y', 'PUBLIC', '22', 'REQ'], toast: 'Row detail' }, { c: ['ZP Member', 'Zilla Parishad', '→ ZP circle', '5y', 'PUBLIC', '18', 'REQ'], toast: 'Row detail' }, { c: ['MLA', 'MH Vidhan Sabha', '→ VS constituency', '5y', 'PUBLIC', '8', 'REQ'], toast: 'Row detail' }, { c: ['Co-op Bank Chairman', 'District banks', '→ district (manual)', '3y', 'ORG', '3', 'OPT'], toast: 'Row detail' }, { c: ['School Trust Member', 'MH Trusts Reg.', '→ none', '3y', 'ORG', '11', 'OPT'], toast: 'Row detail' }, { c: ['Honorary Patron', 'Party-conferred', '→ none', 'life', 'PUBLIC', '2', 'N/A'], toast: 'Row detail' }] }],
    ['small', { t: 'Renaming a high-traffic designation cascades to every holder’s profile with confirmation.' }]
  ] });
  s('L.h.routing', { app: 'L', f: '2', title: 'Routing rules', sub: '22 categories · 8 wing routes · 5 designation boosts', caps: ['2.17', '9.18'], body: [
    ['list', { items: [{ t: 'Civic · Water', s: 'desig-boost · ward-scoped', b: 'OPEN', btone: 'ok' }, { t: 'Civic · Sanitation', s: 'desig-boost · ward-scoped' }, { t: 'Women-safety', s: 'wing-first · Mahila Aghadi', btone: 'purple', b: 'WING' }, { t: 'Yuva · College', s: 'wing-first · Yuva Aghadi' }, { t: 'EPIC / Voter list', s: 'ad-hoc · Election Team' }, { t: 'Disciplinary', s: 'confidential · committee-only', b: 'CONF', btone: 'danger' }] }],
    ['card', { t: 'Civic · Water', s: 'last 30d: 412 tickets · 89 % within SLA · 3 escalated', body: [
      ['list', { items: [{ i: '1', t: 'Scope', s: 'ticket geo-pin → ward → eligible assignees at Booth + Ward levels' }, { i: '2', t: 'Eligible roles (in order)', s: 'Booth Vol · Booth Pres · Ward Conv · Block Lead' }, { i: '3', t: 'Designation boost +20', s: 'Nagar Sevak ✓ · PCMC Engineer ✓' }, { i: '4', t: 'Escalation policy', s: 'On breach climb one level · skip vacant + notify · after 2 hops alert Top Leader' }] }],
      ['row', { items: [{ t: 'Preview against last 100 tickets', kind: 'secondary', toast: 'Replay: 7 tickets would route differently' }, { t: 'Save rule', toast: 'Rule saved · audit row with diff' }] }]] }],
    ['small', { t: 'Confidential categories need Top-Leader + Compliance dual sign-off. MCC pauses political-designation boosts.' }]
  ] });
  s('L.h.heat', { app: 'L', f: '2', title: 'Vacancy heatmap · Maharashtra', sub: 'Cells coloured by % positions vacant', caps: ['2.9'], body: [
    ['heat', { cols: 3, cells: [{ t: 'Mumbai', v: 2, tone: 'ok' }, { t: 'Thane', v: 3, tone: 'ok' }, { t: 'Pune Rural', v: 8, tone: 'warn', go: 'L.h.reportees' }, { t: 'Pune City', v: 4, tone: 'ok' }, { t: 'Solapur', v: 14, tone: 'bad', toast: 'Solapur · 22 ghost-slots · oldest open 142 days' }, { t: 'Satara', v: 7, tone: 'warn' }, { t: 'Kolhapur', v: 11, tone: 'bad' }, { t: 'Nashik', v: 4, tone: 'ok' }, { t: 'Jalgaon', v: 15, tone: 'bad' }, { t: 'Aurangabad', v: 9, tone: 'warn' }, { t: 'Latur', v: 12, tone: 'bad' }, { t: 'Osmanabad', v: 13, tone: 'bad' }] }],
    ['small', { t: 'Tap a cell to list its vacant slots and how long they’ve been open.' }]
  ] });
  s('L.h.adhoc', { app: 'L', f: '2', title: 'New ad-hoc unit', sub: '3-step wizard · audit-row on commit', caps: ['2.1'], body: [
    ['chips', { opts: ['Screening', 'Disciplinary', 'EDT', 'Manifesto', 'Membership', 'Padyatra', 'Crisis'], v: 0 }],
    ['input', { label: 'Name', v: '2027-Screening-Cantonment' }], ['input', { label: 'Parent', v: 'Pune Cantonment VS ▾' }], ['input', { label: 'Term', v: '2026-06 → 2027-01' }],
    ['toggle', { label: 'Confidential', s: 'Hidden from org chart for non-members', on: true }], ['toggle', { label: 'Auto-dissolve at term end', on: true }],
    ['note', { t: 'Routing override · Screening tickets → this unit only. Members are read-only outside the committee.', tone: 'info' }],
    ['btn', { t: 'Next: pick members →', go: 'L.m.dir' }]
  ] });

  /* ---------- §3 Grievances ---------- */
  s('L.g.queue', { app: 'L', f: '3', title: 'My grievances', sub: 'Sakhi Priya · Booth Vol · Wakad B-47', right: { i: '+', go: 'L.g.raise' }, caps: ['3.6', '3.9', '3.3', '3.1'], body: [
    ['banner', { t: 'HANDLING AS · Booth Volunteer · Wakad B-47 (primary) ▾', tone: 'gold', go: 'L.g.context' }],
    ['kpi', { items: [{ v: '14', l: 'open' }, { v: '2', l: 'SLA breach', tone: 'danger' }, { v: '92 %', l: 'CSAT 30d', tone: 'ok' }] }],
    ['chips', { opts: ['Open', 'Resolved', 'Category ▾', 'Sort: SLA'], v: 0 }],
    ['list', { items: [
      { t: 'T-5103 · Broken water tank · Lakshmi B.', s: 'Wakad B-47 · raised 38h ago · 1 photo · voice · via Anil Patil (Nagar Sevak) → delegated', b: 'BREACHED 2h', btone: 'danger', go: 'L.g.ticket' },
      { t: 'T-5118 · Streetlight out · Mrs Kulkarni (60+)', s: 'Wakad Ward 47 · Lane 3 · women-safety boost → wing-routable', b: 'DUE IN 30m', btone: 'warn', go: 'L.g.ticket' },
      { t: 'T-5202 · Garbage uncollected · Vendor Ramesh', s: 'Wakad B-47 · 3 days · multiple residents · via WhatsApp', b: 'SLA 6h', go: 'L.g.ticket' },
      { t: 'T-5240 · Ladki Bahin status · Sandeep K.', s: 'CRN NCP-PUN-WAK-08421 · scheme query · via missed call', b: 'SLA 22h', go: 'L.g.ticket' },
      { t: '+ 10 more · 4 due today · 1 confidential routed elsewhere', tone: 'muted', go: 'L.g.conf' }
    ] }],
    ['btn', { t: '+ Raise on behalf of a citizen', kind: 'secondary', go: 'L.g.raise' }],
    ['sec', { t: 'Lead & Top views' }],
    ['list', { items: [{ i: '📊', t: 'Sub-tree dashboard (Block Lead)', go: 'L.g.dash' }, { i: '⬆', t: 'Escalations inbox', go: 'L.g.esc' }, { i: '👑', t: 'MLA view · what needs me', go: 'L.g.top' }] }]
  ] });
  s('L.g.ticket', { app: 'L', f: '3', title: 'T-5103', sub: 'CIVIC · WATER · BREACHED 2h', right: { i: '⋯', sheet: { t: 'Ticket actions', body: [['list', { items: [{ t: 'Reassign (Lead)', go: 'L.g.reassign' }, { t: 'Escalate', go: 'L.g.esc' }, { t: 'Chain of sight', go: 'L.h.chain' }, { t: 'Message citizen', go: 'L.m.dm' }, { t: 'Audit replay (as-of-date)', go: 'L.g.replay' }] }]] } }, caps: ['3.7', '3.8', '3.9', '3.18', '3.5'], body: [
    ['h', { t: 'Broken water tank', s: 'Lakshmi Bhonsle · CRN NCP-PUN-WAK-08421 · Wakad Ward 47 · Lane 7 · raised 38h ago' }],
    ['pills', { items: [{ t: '📷 photo' }, { t: '🎙 voice 0:24' }, { t: '📍 geo-pin' }, { t: 'EN translation' }] }],
    ['card', { t: 'Routing path', s: '§2.17 desig-boost → Anil Patil (Nagar Sevak) → delegated to you (Sakhi · Booth Vol) · §3.11', tone: 'gold', go: 'L.h.routing' }],
    ['tl', { items: [{ t: 'Received', s: '38h ago', st: 'done' }, { t: 'Routed → Anil → you', s: '38h · auto', st: 'done' }, { t: 'Acknowledged', s: '36h ago', st: 'done' }, { t: 'In Progress (now)', s: 'SLA breached 2h', st: 'red' }, { t: 'Resolved', st: 'todo' }, { t: 'Closed (after CSAT)', st: 'todo' }] }],
    ['tabs', { tabs: [{ t: 'Internal · 3', body: [['chat', { msgs: [{ who: 'Sakhi · 12h ago', t: 'visited 2 PM. PCMC vendor required, raised with Anil dada.' }, { who: 'Anil · 8h ago', t: 'spoke to PCMC water dept · vendor tomorrow 11 AM' }] }]] }, { t: 'Citizen-facing · 2', body: [['chat', { msgs: [{ me: true, t: 'Visiting tomorrow 11 AM with PCMC vendor.', time: 'echoed to Lakshmi’s tracker' }] }]] }] }],
    ['row', { items: [{ t: '+ Note', kind: 'secondary', sheet: { t: 'Add note', body: [['seg', { opts: ['Internal', 'Citizen-facing'], v: 0 }], ['ta', { ph: 'Type or dictate in Marathi…' }], ['pills', { items: ['🎤 voice', '📎 photo', '📍 geo-pin'] }], ['btn', { t: 'Post note', go: 'L.g.ticket' }]] } }, { t: 'Mark Resolved', go: 'L.g.resolve' }] }]
  ] });
  s('L.g.context', { app: 'L', f: '3', title: 'Handling as', sub: 'Audit attribution follows this choice', caps: ['3.22', '3.26'], body: [
    ['note', { t: 'Switching mid-ticket forks the audit row. Past actions stay attributed to the old context.', tone: 'warn' }],
    ['radio', { opts: [{ t: 'Booth Volunteer · Wakad B-47 · primary', s: 'main party · geographic line · since 22 Mar 2024 · CURRENT', go: 'L.g.queue' }, { t: 'Mahila Aghadi · Wakad block · wing · secondary', s: 'eligible for women-safety routing only · 6 wing tickets', go: 'L.g.queue' }, { t: 'Acting Booth President · B-48', s: 'acting until Vikas returns · 14 days · 2 handover tickets · §3.26', go: 'L.g.queue' }] }],
    ['row', { items: [{ t: 'Cancel', kind: 'secondary', go: 'back' }, { t: 'Confirm switch', go: 'L.g.queue' }] }]
  ] });
  s('L.g.raise', { app: 'L', f: '3', title: 'Raise on behalf', sub: 'door-to-door · walk-in · phone-call', caps: ['3.2', '3.18', '3.4', '3.19'], body: [
    ['list', { items: [{ av: 'MK', t: 'Mrs Kulkarni (60+)', s: 'CRN NCP-PUN-WAK-09214 · Lane 3 · no smartphone · OTP via worker', go: 'C.o.assist' }] }],
    ['chips', { opts: ['Safety', 'Civic', 'Scheme', 'Water', 'More ▾'], v: 0 }],
    ['small', { t: 'SLA: 6h response · 24h resolve · wing-routable' }],
    ['ta', { label: 'Description', v: 'Streetlight out Lane 3 since 4 days. Mrs Kulkarni walks home from temple at dusk — unsafe. Pole no. PCMC-W47-L3-PL-12.', hint: 'tap mic to dictate in Marathi' }],
    ['grid', { cols: 4, items: [{ i: '📷', t: 'photo', toast: 'Camera' }, { i: '🎙', t: 'voice 0:47', toast: 'Playing' }, { i: '📍', t: 'geo-pin', toast: '18.59°N 73.78°E' }, { i: '+', t: 'add', toast: 'Attach doc' }] }],
    ['card', { t: 'Will route to · Sakhi Priya (Mahila Aghadi)', s: 'women-safety boost · §3.19 · 4h SLA', tone: 'purple' }],
    ['btn', { t: 'Raise ticket on Mrs Kulkarni’s behalf', go: 'L.g.queue' }]
  ] });
  s('L.g.reassign', { app: 'L', f: '3', title: 'Reassign ticket', sub: 'Sunita Joshi · Block Lead · Haveli', caps: ['3.11', '3.20', '3.23'], body: [
    ['card', { av: 'SP', t: 'Currently · Sakhi Priya', s: 'Booth Vol · Wakad B-47 · SLA breached 2h · capacity full · 14 open' }],
    ['sec', { t: 'Eligible within my sub-tree · ranked by capacity + SLA + desig-match' }],
    ['list', { items: [{ av: 'RK', t: 'Ravi Kumar', s: 'Booth Pres · Wakad B-47 · 3 open · 98 % SLA · desig-match: ZP Member adj-ward', b: 'BEST', btone: 'ok', toast: 'Selected Ravi' }, { av: 'AP', t: 'Anil Patil', s: 'District Lead · also Nagar Sevak W-7 · 8 open · 91 % SLA · busy', toast: 'Selected Anil' }, { av: 'SA', t: 'Sakhi Anita', s: 'Booth Vol · Wakad B-48 · Acting BP · 2 open · 100 % SLA', b: 'ACTING', btone: 'gold', toast: 'Selected Anita' }] }],
    ['ta', { label: 'Handover note (required)', v: 'Sakhi has been at this 38h. Ravi, please close the loop with PCMC today. Anil’s contact at PCMC: 020-2725-XXXX.' }],
    ['toggle', { label: 'Acceptance required · decline returns ticket to Sakhi', on: true }],
    ['btn', { t: 'Reassign to Ravi Kumar →', go: 'L.g.dash' }],
    ['small', { t: '“Reassign + escalate” combo appears when SLA is >6h breached. Cross-sub-tree needs receiving Lead approval.' }]
  ] });
  s('L.g.esc', { app: 'L', f: '3', title: 'Escalated to you', sub: 'Sunita Joshi · Block Lead · Haveli · 3 new', caps: ['3.10', '3.26', '3.13'], body: [
    ['card', { t: 'T-5103 · Broken water tank · Lakshmi B.', s: 'Wakad B-47 · raised 50h ago · breached 14h · climbed Sakhi → Ravi → you · 2 hops', b: 'AUTO-ESCALATED', btone: 'danger', body: [['tl', { items: [{ t: 'Sakhi P. · Booth Vol', s: '38h · breached', st: 'red' }, { t: 'Ravi K. · Booth Pres', s: '8h · breached', st: 'red' }, { t: 'YOU · Block Lead Haveli', s: 'now · 1h', st: 'cur' }] }], ['small', { t: '§3.26 · normally climbs to Anil → skipped (on-leave); Vikas Acting → skipped (acting too)' }], ['row', { items: [{ t: 'Take it on', go: 'L.g.ticket' }, { t: 'Climb again', kind: 'secondary', sheet: { t: 'Climb to your Lead', body: [['ta', { label: 'Reason', ph: 'PCMC unresponsive · needs district-level call' }], ['btn', { t: 'Escalate to Anil Patil', go: 'L.g.top' }]] } }] }]] }],
    ['card', { t: 'T-5210 · Senior worker dispute · IPS officer', s: 'Khed · raised 14h · auto VIP-tagged · routed straight to you · skipped Ground tier', b: 'VIP FLAG', btone: 'gold', go: 'L.g.ticket' }],
    ['card', { t: 'Sensitive · women-safety category', s: 'Aundh · escalated by Sakhi Anita · Mahila Aghadi chain · handover note attached', b: 'WING', btone: 'purple', go: 'L.g.ticket' }]
  ] });
  s('L.g.resolve', { app: 'L', f: '3', title: 'Mark resolved', sub: 'T-5103 · Broken water tank', caps: ['3.7', '3.15', '3.18', '3.22'], body: [
    ['ta', { label: 'Resolution', v: 'PCMC vendor replaced tank at 11 AM', hint: '38h elapsed · within SLA · attributed: Booth Vol' }],
    ['sec', { t: 'Proof attachments · required' }],
    ['grid', { cols: 3, items: [{ i: '📷', t: 'before', s: '11:08 GPS ✓', toast: 'Photo 1' }, { i: '📷', t: 'after', s: '12:32 GPS ✓', toast: 'Photo 2' }, { i: '📄', t: 'PCMC receipt', s: 'PCMC-2026-W47-0421', toast: 'Receipt' }] }],
    ['ta', { label: 'Closing note to citizen · §3.8', v: 'Lakshmi tai, tank replaced this morning. PCMC receipt attached for your records. Call if anything else. — Sakhi', hint: 'auto-translates to Marathi · preview ↗' }],
    ['card', { t: 'CSAT preview · citizen-side', s: 'How was Sakhi’s handling? · T-5103 · 38h', body: [['stars', { v: 0 }]] }],
    ['note', { t: 'Audit row · resolution attributed to Sakhi as Booth Volunteer (primary) · not Mahila Aghadi', tone: 'gold', go: 'L.g.context' }],
    ['btn', { t: 'Close ticket + send CSAT', go: 'L.g.queue' }]
  ] });
  s('L.g.top', { app: 'L', f: '3', title: 'What needs me', sub: 'MLA Kiran Rao · Pune Cantonment VS', caps: ['3.13'], body: [
    ['kpi', { items: [{ v: '7', l: 'escalated to me', tone: 'danger' }, { v: '3', l: 'VIP-tagged', tone: 'gold' }] }],
    ['banner', { t: 'CONFIDENTIAL — DIGEST ONLY · 2 Disciplinary tickets active · open in §3.25 console', tone: 'danger', go: 'L.g.conf' }],
    ['card', { t: 'T-5301 · Property dispute · police-adjacent', s: 'VIP · DSP wife · sensitive · Aundh · raised 6h · routed to you direct · PII redacted in this view', b: 'VIP', btone: 'gold', go: 'L.g.ticket', body: [['small', { t: 'Open detail requires biometric re-auth · deferral > 24h needs a typed reason' }]] }],
    ['card', { t: 'T-5103 · Broken water tank · Lakshmi B.', s: 'Wakad B-47 · 64h · Sakhi → Ravi → Sunita → you · PCMC unresponsive · needs your call', b: '3-HOP', btone: 'danger', go: 'L.g.ticket' }],
    ['card', { t: 'T-5298 · Yuva college fee protest', s: 'Pune City · wing-aware · Yuva Aghadi escalation · political pressure flagged · review by EOD', b: 'WING', btone: 'purple', go: 'L.g.ticket' }],
    ['note', { t: 'What’s not shown · 412 routine tickets handled at Ground level · 38 resolved at Block · 6 in flight at Block', tone: 'info' }],
    ['link', { t: 'See sub-tree dashboard ›', go: 'L.g.dash' }]
  ] });
  s('L.g.dash', { app: 'L', f: '3', title: 'Block Haveli · grievance dashboard', sub: 'Sunita Joshi · 142 members · 38 wards · last 30 days', right: { i: '⤓', toast: 'Export CSV / PDF' }, caps: ['3.12', '3.17'], body: [
    ['kpi', { items: [{ v: '187', l: 'open · +12 vs 7d' }, { v: '14', l: 'SLA breached · 7.5 %', tone: 'danger' }, { v: '28', l: 'aging > 24h', tone: 'warn' }, { v: '4.3 ★', l: 'CSAT 30d', tone: 'ok' }] }],
    ['sec', { t: 'Needs supervisor action · 14 breached + 6 escalated' }],
    ['list', { items: [{ t: 'T-5103 · Broken water tank · Lakshmi B.', s: 'Wakad B-47 · Sakhi (Booth Vol) · breached 14h · 3-hop', b: 'REASSIGN', btone: 'danger', go: 'L.g.reassign' }, { t: 'T-5210 · Senior worker dispute · IPS officer', s: 'Khed B-12 · VIP-flagged · routed direct to MLA', b: 'VIP DEFER', btone: 'gold', go: 'L.g.top' }, { t: 'T-5118 · Streetlight out · Mrs Kulkarni', s: 'Wakad W-47 · women-safety · wing-routed · 30m left', b: 'WING', btone: 'purple', go: 'L.g.ticket' }, { t: 'T-5240 · Garbage uncollected · 12 residents', s: 'Aundh W-23 · duplicate-merge candidate', b: 'MERGE', go: 'L.g.bulk' }] }],
    ['sec', { t: 'By category · last 30d' }],
    ['bar', { v: 100, l: 'Civic · Water', r: '142' }], ['bar', { v: 79, l: 'Civic · Sanitation', r: '112' }], ['bar', { v: 48, l: 'Women-safety', r: '68' }], ['bar', { v: 38, l: 'Yuva · College', r: '54' }],
    ['sec', { t: 'Handler stack-rank · close-rate × CSAT' }],
    ['list', { items: [{ av: '1', t: 'Anita Sakhi', s: '96 % · 4.7 ★', go: 'L.m.scorecard' }, { av: '2', t: 'Ravi Kumar', s: '94 % · 4.5 ★', go: 'L.m.scorecard' }, { av: '3', t: 'Manisha P.', s: '92 % · 4.6 ★' }, { av: '4', t: 'Sakhi Priya', s: '88 % · 4.3 ★', go: 'L.m.scorecard' }, { av: '5', t: 'Vikas J. · acting', s: '78 %' }] }],
    ['list', { items: [{ i: '⧉', t: 'Bulk close · 3 duplicate clusters', go: 'L.g.bulk' }, { i: '🕒', t: 'As-of-date ticket replay', go: 'L.g.replay' }, { i: '📐', t: 'Designation-jurisdiction routing audit', go: 'L.g.routeaudit' }] }]
  ] });
  s('L.g.bulk', { app: 'L', f: '3', title: 'Bulk close', sub: '3 duplicate clusters · category × ward × 48h window', caps: ['3.17'], body: [
    ['list', { items: [{ t: 'Cluster A · 14 tickets', s: 'Streetlight out · Wakad W-47 · PCMC vendor swept area today', b: 'SELECTED', btone: 'ok' }, { t: 'Cluster B · 22 tickets', s: 'Potholes · Aundh Lane 12 · viral WhatsApp · merge into 1 master', toast: 'Cluster B selected' }, { t: 'Cluster C · 6 tickets', s: 'Water supply 4h cut · Khed Block · utility-scheduled', toast: 'Cluster C selected' }] }],
    ['card', { t: 'Cluster A preview · 14 tickets', s: 'Wakad W-47 streetlight outages · 22–25 May 2026', body: [['list', { items: [{ t: 'T-5118 · Mrs Kulkarni · L3', s: '14h ago · safety' }, { t: 'T-5142 · Vendor Ramesh · L8', s: '11h · civic' }, { t: 'T-5156 · Anita J. · L3', s: '9h · civic' }, { t: 'T-5189 · Anonymous · L7', s: '7h · civic' }, { t: '+ 10 more · expand', tone: 'muted' }] }]] }],
    ['ta', { label: 'Closing note · echoed to all 14 citizens', v: 'PCMC ran a vendor sweep through Wakad W-47 today, 22-May 2026, 10 AM – 4 PM. Receipts attached individually. — Sunita Joshi, Block Lead' }],
    ['note', { t: 'Each ticket keeps its own audit row · attributed to original handler · CSAT collected individually', tone: 'info' }],
    ['row', { items: [{ t: 'Merge into master', kind: 'secondary', toast: 'Master ticket created' }, { t: 'Close all 14 · send CSAT', go: 'L.g.dash' }] }]
  ] });
  s('L.g.replay', { app: 'L', f: '3', title: 'Ticket replay · T-4892', sub: 'audit-mode · Borewell dispute · Khed B-12 · 2024', caps: ['3.24'], body: [
    ['seg', { opts: ['14 Mar 2024 (raised)', '18 Mar 14:32', '22 Mar (closed)'], v: 1 }],
    ['card', { t: 'Ticket state on 18-Mar-2024 · 14:32 IST', body: [['list', { items: [{ t: 'Status', right: 'Acknowledged (first visit)' }, { t: 'Category', right: 'Civic · Water (legacy code)' }, { t: 'SLA state', right: 'on track · 16h elapsed' }, { t: 'Notes', right: '2 internal · 1 citizen' }] }]] }],
    ['card', { t: 'Handler · context at this point', s: 'Vikas Joshi (then Booth Vol) · acting as Booth Vol · Khed B-12 (primary) · wing: none', tone: 'gold', body: [['small', { t: 'Vikas was later promoted to Booth Pres (Jun 2024). Resolution attributed to Booth Vol at this date.' }]] }],
    ['sec', { t: 'Audit chain · 7 rows · hash-linked' }],
    ['tl', { items: [{ t: '14-Mar 09:12 · raised · Mahesh Patil · Citizen App', st: 'done' }, { t: '14-Mar 09:13 · routed · §2.17 → Vikas Joshi · score 84', st: 'done' }, { t: '18-Mar 14:32 · acknowledged + visit · GPS ✓', st: 'cur' }, { t: '22-Mar 11:08 · resolved · proof + receipt PCMC-2024-K12-0089', st: 'todo' }, { t: '22-Mar 15:42 · CSAT 5★', st: 'todo' }] }],
    ['row', { items: [{ t: 'Compare two dates', kind: 'secondary', toast: 'Split view' }, { t: 'Export notarised PDF', toast: 'PDF with hash chain generated' }] }]
  ] });
  s('L.g.conf', { app: 'L', f: '3', title: 'Disciplinary committee', sub: '🔒 confidential queue · re-auth every 30 min · 4m left', hdr: 'red', caps: ['3.25', '3.21'], body: [
    ['kpi', { items: [{ v: '2', l: 'active cases' }, { v: '1', l: 'under review' }, { v: '7', l: 'resolved · 90d' }, { v: '3', l: 'audit exports · year' }] }],
    ['card', { t: 'DC-2026-0014 · Financial misconduct allegation', s: 'Block-level treasurer · raised 8d · 2 documents · 1 voice testimony · routed direct to committee', b: 'SENSITIVE · L4', btone: 'danger', body: [['btn', { t: 'Open case ›', kind: 'secondary', toast: 'Redaction-by-default · reveal toggles audit-logged' }]] }],
    ['card', { t: 'DC-2026-0015 · Harassment complaint', s: 'Ward-level worker · raised 3d · women-safety overlap · wing-routed first, escalated up', b: 'UNDER REVIEW', btone: 'warn', body: [['btn', { t: 'Open case ›', kind: 'secondary', toast: 'Committee note stream' }]] }],
    ['note', { t: 'Invisibility rules · sub-tree Leads see only a digest count. CSAT not collected from citizen. Resolution requires 2-of-3 committee co-sign. Export needs 2-of-3 co-sign.', tone: 'danger' }],
    ['small', { t: 'During election cycles, voter-list / EPIC categories route to the Election In-Charge ad-hoc unit instead (§3.21).' }]
  ] });
  s('L.g.routeaudit', { app: 'L', f: '3', title: 'Designation-jurisdiction match', sub: 'last 90 days · Pune Rural · 22 active Nagar Sevaks', caps: ['3.23', '3.19'], body: [
    ['kpi', { items: [{ v: '1,842', l: 'civic tickets · 90d' }, { v: '71.4 %', l: 'routed to incumbent', tone: 'ok' }, { v: '+0.6 ★', l: 'CSAT delta vs fallback', tone: 'gold' }] }],
    ['table', { cols: ['Designation', 'Category', 'Tickets', 'Match', 'CSAT', 'Status'], rows: [['Nagar Sevak · PCMC', 'Water · Sanitation', '842', '88 %', '4.5', 'HEALTHY'], ['Nagar Sevak · PMC', 'Water · Lighting', '428', '82 %', '4.3', 'HEALTHY'], ['ZP Member · Haveli', 'ZP-scope rural', '186', '76 %', '4.2', 'HEALTHY'], { c: ['Panchayat Samiti', 'block-level rural', '142', '58 %', '3.9', 'REVIEW'], toast: '3 of 9 PS members on long leave' }, ['Mahila Aghadi · wing', 'Women-safety', '98', '91 %', '4.7', 'HEALTHY'], ['Yuva Aghadi · wing', 'College / youth', '76', '84 %', '4.4', 'HEALTHY']] }],
    ['note', { t: 'Review flag · Panchayat Samiti 58 % below 70 % threshold. Recommend: amend §2.17 to allow boost-skip with reason for this designation.', tone: 'warn', go: 'L.h.routing' }]
  ] });

  /* ---------- §4 Tasks ---------- */
  s('L.t.my', { app: 'L', f: '4', title: 'My tasks', sub: 'Sakhi Priya · Booth Vol · Wakad B-47', back: false, nav: 'Tasks', right: { i: '+', go: 'L.t.new' }, caps: ['4.6', '4.4', '4.22'], body: [
    ['banner', { t: 'RECEIVING AS · Booth Vol + Mahila Aghadi · both queues ▾', tone: 'gold', go: 'L.g.context' }],
    ['seg', { opts: ['Today · 6', 'Upcoming · 11', 'Overdue · 2'], v: 0 }],
    ['list', { items: [
      { t: 'T-9214 · Q2 outreach report · Mahila Aghadi', s: 'Sunita J. · 247 recipients · checklist 3/5 · 1 blocker pending · photo+GPS', b: 'DUE 2h', btone: 'danger', go: 'L.t.detail' },
      { t: 'T-9220 · Booth banner installation · Lane 7', s: 'Ravi K. · 12 booths · geo-fenced 200m · recurring weekly · BOOTH', b: 'DUE 6h', btone: 'warn', go: 'L.t.detail' },
      { t: 'T-9233 · Door-to-door · senior citizens', s: '22 households · Ladki Bahin eligibility check · SURVEY · 5 Q’s', b: 'DUE 18h', go: 'L.t.d2d' },
      { t: 'T-9240 · Daily ward check-in · voice note', s: 'recurring · daily · 6 PM cut-off · 2-min report', b: 'DUE 22h', go: 'L.t.detail' },
      { t: 'Pune City task · additional coverage (§4.22)', s: 'Mahila · badged “additional coverage” · credits Mahila scorecard', b: 'ADDN', btone: 'purple', go: 'L.t.scorecard' }
    ] }],
    ['card', { t: '486 points this week', s: 'rank 3 of 47 in Wakad VS · keep going!', tone: 'gold', go: 'L.t.recog' }],
    ['sec', { t: 'Lead surfaces' }],
    ['list', { items: [{ i: '✎', t: 'Compose a task', go: 'L.t.new' }, { i: '📊', t: 'Progress dashboard', go: 'L.t.progress' }, { i: '🏁', t: 'Membership Drive 2026 · unit console', go: 'L.t.unit' }] }]
  ] });
  s('L.t.detail', { app: 'L', f: '4', title: 'T-9214', sub: 'DUE 2h · MAHILA AGHADI', right: { i: '⋯', sheet: { t: 'Task', body: [['list', { items: [{ t: 'Mark in-progress', toast: 'In progress' }, { t: 'Report blocker', toast: 'Blocker thread opened' }, { t: 'Snooze 1h', toast: 'Snoozed' }, { t: 'Decline (with reason)', toast: 'Reason picker' }] }]] } }, caps: ['4.7', '4.10', '4.4'], body: [
    ['h', { t: 'Q2 outreach report · Mahila Aghadi', s: 'Sunita Joshi · Block Lead Haveli · 22-May 6 PM cutoff' }],
    ['card', { t: 'Audience predicate', s: 'role=Block Pres · wing=Mahila · scope=Maharashtra · 247 recipients', tone: 'gold', sheet: { t: '247 recipients', body: [['p', { t: '12 acting · 8 on leave · 3 confidential-skipped' }], ['btn', { t: 'View list', go: 'L.t.target' }]] } }],
    ['sec', { t: 'Checklist · 3 of 5 done' }],
    ['check', { label: 'Visit Mrs Patil (W-47 · Lane 3)', on: true, right: '12:14 PM' }], ['check', { label: 'Visit Mrs Joshi (W-47 · Lane 5)', on: true, right: '1:08 PM' }], ['check', { label: 'Visit Mrs Kulkarni (60+ · Lane 9)', on: true, right: '2:32 PM' }], ['check', { label: 'Visit Mrs Bhonsle (W-47 · Lane 7)', on: false, right: 'pending' }], ['check', { label: 'Group photo · 3+ members visible', on: false, right: 'blocker ↓' }],
    ['card', { t: 'Blocker · 1 note', s: 'Sakhi · 32 min ago', tone: 'warn', body: ['“Two members travelling. Can I capture photo with 4 members on Saturday instead?”', ['link', { t: '+ Add note', toast: 'Lead-visible thread' }]] }],
    ['small', { t: 'Recurring tasks show the schedule + last 4 occurrences here.' }],
    ['btn', { t: 'Submit proof →', go: 'L.t.proof' }]
  ] });
  s('L.t.proof', { app: 'L', f: '4', title: 'Submit proof', sub: '2/3 · camera · dark UI for daylight', hdr: 'dark', caps: ['4.7', '4.13', '4.3'], body: [
    ['ph', { t: 'Viewfinder · dashed gold frame · 4 faces detected ✓', h: 220, kind: 'cam', toast: 'Shutter · EXIF + GPS embedded' }],
    ['note', { t: 'GPS · within fence · ±6m ✓ · 4 faces detected ✓', tone: 'ok' }],
    ['card', { t: 'Proof required', s: 'Photo · 3+ members visible · auto-detected · GPS ≤ 50m from Wakad B-47 centre', body: [['small', { t: 'Wakad B-47 · 200m fence · you are 6m off centre · request Lead override if outside' }]] }],
    ['row', { items: [{ t: '↻ Retry', kind: 'secondary', toast: 'Retake' }, { t: '◐ Flip', kind: 'secondary', toast: 'Lens flipped' }, { t: 'Submit', go: 'L.t.my' }] }]
  ] });
  s('L.t.new', { app: 'L', f: '4', title: 'New task', sub: 'draft · Sunita Joshi · Block Lead Haveli', caps: ['4.1', '4.2', '4.3', '4.12'], body: [
    ['input', { label: 'Title', v: 'Q2 outreach report · Mahila Aghadi' }],
    ['ta', { label: 'Description', ph: 'Supports {{ward}} {{wing}} {{role}} merge fields' }],
    ['input', { label: 'Due', v: '28 May · 6 PM · firm cutoff' }],
    ['list', { items: [{ t: 'Recurrence · One-shot', s: 'tap to make recurring →', go: 'L.t.templates' }] }],
    ['sec', { t: 'Proof required · §4.3' }],
    ['chips', { opts: ['Photo + GPS', 'Voice 2 min', 'Form · survey', 'Tick · checklist'], v: 0 }],
    ['card', { t: 'Audience · §4.16 target builder', s: 'Block Pres × Maharashtra × Mahila Aghadi · 247 recipients · 12 acting · 8 on leave skipped', tone: 'gold', go: 'L.t.target' }],
    ['toggle', { label: 'Geo-fence', on: false }], ['toggle', { label: 'Door-to-door mode', on: false }], ['toggle', { label: 'Auto-archive 14 days after due', on: true }],
    ['row', { items: [{ t: 'Save as template', kind: 'secondary', go: 'L.t.templates' }, { t: 'Send to 247 →', go: 'L.t.progress' }] }],
    ['small', { t: 'Predicates > 1,000 confirm with a sample; > 5,000 need Top-Leader approval. Political-designation predicates hold during MCC.' }]
  ] });
  s('L.t.target', { app: 'L', f: '4', title: 'Target builder', sub: 'Audience predicate · resolves live', caps: ['4.16', '4.17', '4.18', '4.19', '4.20', '4.22'], body: [
    ['sec', { t: 'Role' }], ['chips', { opts: ['Block President', '+ District Coord', '+ Vice Pres'], v: [0], multi: true }],
    ['sec', { t: 'Scope' }], ['chips', { opts: ['Maharashtra', '+ Goa', '+ Karnataka (§4.22)'], v: [0], multi: true }],
    ['sec', { t: 'Wing · §4.17' }], ['chips', { opts: ['Mahila', 'Yuva', 'Farmers', 'IT'], v: [0], multi: true }],
    ['sec', { t: 'External designation · §4.18 (off)' }], ['chips', { opts: ['+ all sitting MLAs', '+ Nagar Sevaks'], v: [], multi: true }],
    ['sec', { t: 'Ad-hoc unit · §4.20' }], ['chips', { opts: ['+ Membership Drive 2026'], v: [], multi: true }],
    ['card', { t: 'Resolves to · 247 active recipients', s: 'across 35 districts · 9 cells', tone: 'navy', body: [['pills', { items: [{ t: '+12 Acting fill-ins (§4.19)', tone: 'gold' }, { t: '−8 on leave · auto-skipped' }, { t: '+22 additional coverage (§4.22)', tone: 'purple' }] }]] }],
    ['sec', { t: 'Sample · 5 of 247' }],
    ['list', { items: [{ av: 'A', t: 'Anita Joshi · Khed Block · Mahila' }, { av: 'P', t: 'Priya Deshmukh · Haveli · Mahila', b: 'ACTING', btone: 'gold' }, { av: 'M', t: 'Manisha Pawar · Maval Block' }, { av: 'V', t: 'Vaishali Rane · Pen Block · Konkan', b: '+ COVERAGE', btone: 'purple' }] }],
    ['row', { items: [{ t: 'View list → 247', kind: 'secondary', toast: 'Scrollable list · filter by district' }, { t: 'Use this audience → 247', go: 'L.t.new' }] }]
  ] });
  s('L.t.templates', { app: 'L', f: '4', title: 'Templates & recurrence', caps: ['4.5', '4.4', '4.23'], body: [
    ['tabs', { tabs: [
      { t: 'Templates · 12', body: [['input', { ph: 'Search templates… (outreach, banner, …)' }], ['list', { items: [{ i: '⭐', t: 'Quarterly outreach report', s: 'role=Block Pres · wing-aware · photo+GPS · used 6× · 89 % on-time', go: 'L.t.new' }, { i: '📣', t: 'Booth banner installation', s: 'role=Booth Vol · Wakad VS · geo-fenced · campaign-cycle linked', go: 'L.t.new' }, { i: '🏁', t: 'Membership drive · target sheet', s: 'unit=membership-drive-2026 · form 10 Q · daily · auto-pause on dissolve', go: 'L.t.unit' }, { i: '🎙', t: 'Daily ward voice check-in', s: 'role=Ward Convenor · daily 6 PM · voice 2 min', go: 'L.t.new' }] }]] },
      { t: 'Recurrence', body: [['chips', { opts: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Custom cron'], v: 3 }], ['card', { t: 'Recurrence preview · §4.4 + §4.23', s: 'Quarterly · tied to FY cycle · next: 28 Jun · 28 Sep · 28 Dec · 28 Mar 2027', body: [['note', { t: 'Auto-pauses if Mahila wing dissolves · resumes on revival', tone: 'info' }]] }]] }
    ] }],
    ['btn', { t: 'Use template → load composer', go: 'L.t.new' }]
  ] });
  s('L.t.progress', { app: 'L', f: '4', title: 'Q2 outreach report', sub: 'T-9214 · 247 recipients · due in 2h 14m', caps: ['4.8', '4.12', '4.18'], body: [
    ['kpi', { items: [{ v: '158', l: 'submitted', tone: 'ok' }, { v: '62', l: 'pending' }, { v: '22', l: 'at risk', tone: 'warn' }, { v: '5', l: 'rejected', tone: 'danger' }] }],
    ['bar', { v: 64, l: 'Completion · on track to close 89 % by deadline · last Q2: 91 %', r: '64 %' }],
    ['chips', { opts: ['All', 'At risk · 22', 'Blocker · 4', 'District ▾'], v: 0 }],
    ['list', { items: [{ av: 'A', t: 'Anita Joshi · Khed Block', s: 'pending · 0 of 5 · 1 blocker · on leave 22–24 May · acting Vaishali R. covers', b: 'AT RISK', btone: 'warn', go: 'L.t.bulk' }, { av: 'P', t: 'Priya Deshmukh · Haveli (Acting)', s: 'in progress · 3 of 5 · photo pending · tasked as Block Pres (acting) §4.19', b: 'ACTING', btone: 'gold', go: 'L.t.detail' }, { av: 'M', t: 'Manisha Pawar · Maval Block', s: 'submitted · proof verified · 11:42 AM · GPS in fence', b: 'DONE', btone: 'ok' }, { av: 'S', t: 'Sushma Kale · Mulshi Block', s: 'submitted · early · 8:18 AM', b: 'DONE', btone: 'ok' }, { t: '+ 243 more · tap to expand', tone: 'muted' }] }],
    ['sec', { t: 'Designation drill · §4.18' }],
    ['pills', { items: [{ t: 'MLAs · 88 % done', tone: 'gold' }, { t: 'Nagar Sevaks · 71 %' }, { t: 'ZP Members · 64 %' }] }],
    ['row', { items: [{ t: 'Nudge', kind: 'secondary', sheet: { t: 'Nudge laggards', body: [['radio', { opts: ['Polite reminder', 'Deadline approaching', 'Blocker?'] }], ['btn', { t: 'Send push + chat-DM to 22', go: 'L.t.progress' }]] } }, { t: 'Bulk reassign', kind: 'secondary', go: 'L.t.bulk' }, { t: 'Extend +24h', sheet: { t: 'Extend deadline', body: [['radio', { opts: ['Vendor delay', 'MCC pause', 'Wing dissolution', 'Other'] }], ['btn', { t: 'Extend · audit-logged', go: 'L.t.progress' }]] } }] }]
  ] });
  s('L.t.bulk', { app: 'L', f: '4', title: 'Bulk reassign', sub: 'Anita Joshi · Khed Block · ON LEAVE 22–24 MAY', caps: ['4.9', '4.19'], body: [
    ['note', { t: '§4.19 acting-aware · Acting cover already set: Vaishali R. — recurring tasks auto-route.', tone: 'gold' }],
    ['list', { items: [{ t: 'Q2 outreach report', s: 'due 28 May · 0 of 5 done → reassign to Vaishali R. (Acting)', b: 'REASSIGN', btone: 'ok' }, { t: 'Booth banner installation', s: 'due 25 May · geo-fenced → reassign to Vaishali R.', b: 'REASSIGN', btone: 'ok' }, { t: 'Daily ward voice check-in', s: 'recurring · daily 6 PM → pause for 3 days (Anita returns 25 May)', b: 'PAUSE', btone: 'warn' }] }],
    ['ta', { label: 'Handover note for Vaishali', ph: 'Voice input + auto-translate to Acting’s language' }],
    ['note', { t: 'Scorecard attribution · §4.21 · completion credits Vaishali (Acting Block Pres), not Anita.', tone: 'purple' }],
    ['row', { items: [{ t: 'Cancel', kind: 'secondary', go: 'back' }, { t: 'Reassign · 3 tasks', go: 'L.t.progress' }] }]
  ] });
  s('L.t.recog', { app: 'L', f: '4', title: 'Recognition', sub: 'Sakhi Priya · 486 points this week · rank 3 of 47', caps: ['4.11', '4.21'], body: [
    ['card', { av: 'MP', t: 'Worker of the Week · Wakad VS · Manisha Pawar', s: 'Maval Block · Mahila Aghadi · 12 tasks on time · 100 % proof verified · +200 bonus', tone: 'gold', go: 'L.m.scorecard' }],
    ['sec', { t: 'Your points · by assignment · §4.21' }],
    ['card', { t: 'Booth Volunteer · Wakad B-47 · PRIMARY', s: '8 tasks completed · 1 voice check-in pending', b: '316 pts', btone: 'ok' }],
    ['card', { t: 'Mahila Aghadi · Wakad VS · SECONDARY', s: '3 outreach reports · 1 group photo pending', b: '170 pts', btone: 'purple' }],
    ['sec', { t: 'Sub-tree leaderboard · Wakad VS · 47 workers' }],
    ['list', { items: [{ av: '1', t: 'Manisha Pawar · Maval', right: '612' }, { av: '2', t: 'Vikas Joshi · Regional Coord', right: '524' }, { av: '3', t: 'You · Sakhi Priya', right: '486', tone: 'me' }, { av: '4', t: 'Anita Patil · Aundh', right: '468' }] }],
    ['note', { t: 'Honest scorecard · Mahila outreach credits the Mahila scorecard — not Booth-Vol. Internal-election review uses the right column.', tone: 'info' }],
    ['link', { t: 'Lifetime per-assignment scorecard →', go: 'L.t.scorecard' }]
  ] });
  s('L.t.d2d', { app: 'L', f: '4', title: 'Door-to-door · senior survey', sub: 'T-9233 · 22 households · Ladki Bahin eligibility', caps: ['4.14', '4.15'], body: [
    ['bar', { v: 64, l: 'Wakad B-47 · Lane 3 → Lane 7 · 1.2 km route', r: '14/22' }],
    ['ph', { t: 'Route map · done ● current ● next ○', h: 100, kind: 'map', toast: 'Jump to stop' }],
    ['card', { t: 'Next · stop 4 of 22 · Mrs Kulkarni · 60+', s: 'Lane 7 · House 42 · 0.4 km away · 8-min walk', body: [['btn', { t: 'Navigate →', kind: 'secondary', toast: 'Opens system map' }]] }],
    ['sec', { t: 'Survey · 5 questions · §4.15' }],
    ['radio', { label: 'Q1 · Age', opts: ['Under 60', '60+'], v: 1 }],
    ['chips', { opts: ['< ₹1L', '₹1–2.5L', '₹2.5–5L', '> ₹5L'], v: 1 }],
    ['chips', { opts: ['Ladki Bahin', 'Annapurna', 'PM Awas', 'None known'], v: [0], multi: true }],
    ['card', { t: 'Live aggregate · Lead view', s: '14/22 done · 11 eligible · 3 not registered · 0 declined', tone: 'navy' }],
    ['row', { items: [{ t: 'Household refused / no one home', kind: 'secondary', toast: 'Marked · audit-logged · counts as visited' }, { t: 'Save & next stop', go: 'L.t.d2d' }] }]
  ] });
  s('L.t.unit', { app: 'L', f: '4', title: 'Membership Drive 2026', sub: 'Ad-hoc unit · 168 booths · convenor Anil Patil · 47 days left', right: { i: '+', go: 'L.t.new' }, caps: ['4.20', '4.23'], body: [
    ['kpi', { items: [{ v: '12', l: 'active tasks' }, { v: '5', l: 'recurring · cycle-tied' }, { v: '3,847', l: 'new members' }, { v: '68 %', l: 'of 5,652 goal', tone: 'ok' }] }],
    ['list', { items: [{ t: 'T-9304 · Daily new-member tally · 168 booths', s: 'recurring daily · since 12 Oct 2025 · form 10 Q · 92 % on time', b: 'UNIT', btone: 'gold', go: 'L.t.detail' }, { t: 'T-9319 · Weekly booth leaderboard prep', s: 'recurring weekly · cycle 35 of 52 · Sundays 9 AM', b: 'UNIT', btone: 'gold' }, { t: 'T-9358 · Mid-drive review meeting · upload minutes', s: 'one-shot · due 25 May · District Convenors', b: 'UNIT', btone: 'gold' }, { t: '+ 9 more · 3 recurring · 6 one-shot', tone: 'muted' }] }],
    ['tl', { items: [{ t: 'Unit created · 12 Oct 2025', s: '5 recurring tasks attached · auto-pause clause', st: 'done' }, { t: 'NOW · 22 May 2026 · day 222', s: '68 % target · 12 tasks active', st: 'cur' }, { t: 'Cycle close · 31 Dec 2026', s: 'in-flight occurrences cancelled', st: 'todo' }, { t: 'Auto-archive · 31 Jan 2027', s: 'read-only; audit retained', st: 'todo' }] }],
    ['btn', { t: 'Unit lifecycle · pause / extend / dissolve', kind: 'secondary', sheet: { t: 'Unit lifecycle', body: [['radio', { opts: [{ t: 'Pause', s: '5 recurring tasks pause · resume on revival' }, { t: 'Extend end-date', s: 'recurring extend automatically' }, { t: 'Dissolve now', s: 'in-flight cancelled · chat archives' }] }], ['btn', { t: 'Apply · audit row', go: 'L.t.unit' }]] } }],
    ['small', { t: '§4.23 invariant: tasks cannot outlive their host unit.' }]
  ] });
  s('L.t.scorecard', { app: 'L', f: '4', title: 'Scorecard · Sakhi Priya', sub: '3 active assignments · view as of 22 May 2026', right: { i: '⤓', toast: 'Slate PDF for internal-elections committee' }, caps: ['4.21', '4.22'], body: [
    ['input', { label: 'View as of', v: '22 May 2026 (today)', hint: 'Drag the date back · ended assignments dim', go: 'L.s.timetravel' }],
    ['card', { t: 'Booth Volunteer · Wakad B-47', s: 'PRIMARY · since Nov 2024 · 142 tasks · 91 % on time · proof-verified 94 % · blocker-recovery 82 %', b: '1,847 pts', btone: 'ok' }],
    ['card', { t: 'Mahila Aghadi · Wakad VS', s: 'SECONDARY · since Feb 2026 · 38 tasks · 87 % on time · outreach reach 77 %', b: '412 pts', btone: 'purple' }],
    ['card', { t: 'Membership Drive 2026 (ad-hoc)', s: 'UNIT-SCOPED · Oct 25 → Dec 26 · 22 daily tallies · 84 new members · freezes when unit closes', b: '208 pts', btone: 'gold' }],
    ['note', { t: '§4.22 scope-set coverage · Sakhi also receives Pune City Mahila tasks (12) badged “additional coverage” during Anita’s leave → all to Mahila scorecard. Badge drops when Anita returns.', tone: 'purple' }]
  ] });
})();
