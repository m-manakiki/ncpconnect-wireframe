/* Citizen App screens · §C0 Get Started · §C1 Raise · §C2 My Grievances · §C3 Reps · §C4 Schemes · §C5 Events · §C6 SOS · §C7 Profile */
(function () {
  const s = W.screen;

  /* ---------- §C0 Get Started ---------- */
  s('C.o.splash', { app: 'C', f: 'C0', title: 'NCPConnect', hdr: 'none', caps: ['C0.1'], body: [
    ['chips', { opts: ['मराठी', 'हिंदी', 'English'], v: 0 }],
    ['ph', { t: 'N · NCPConnect', h: 110, kind: 'brand' }],
    ['h', { t: 'तुमचा आवाज · तुमच्या वार्डात', s: 'Your voice · in your ward' }],
    ['card', { t: 'तुमचा मतदारसंघ · पुणे छावणी विधानसभा', s: 'auto-detected from your location · tap to change', tone: 'gold', sheet: { t: 'Change constituency', body: [['input', { ph: 'Type-ahead · full Maharashtra list' }], ['btn', { t: 'Use Pune Cantonment', go: 'C.o.splash' }]] } }],
    ['list', { items: [{ i: '📢', t: 'तक्रार नोंदवा · आढावा घ्या', s: 'File complaints, track them' }, { i: '🏛', t: 'तुमचे लोकप्रतिनिधी पहा', s: 'See your representatives' }, { i: '📋', t: 'योजना · आरोग्य · सहाय्य', s: 'Schemes · health · help' }] }],
    ['btn', { t: 'सुरू करा · Get started', go: 'C.o.phone' }],
    ['link', { t: 'Already have an account → Home', go: 'C.home' }]
  ] });
  s('C.o.phone', { app: 'C', f: 'C0', title: 'तुमचा फोन नंबर', sub: 'OTP पाठवण्यासाठी · तुमचा एकमेव पासवर्ड हाच', caps: ['C0.2', 'C0.7', 'C0.9'], body: [
    ['steps', { labels: ['सुरुवात', 'फोन', 'वॉर्ड', 'तयार'], cur: 1 }],
    ['input', { label: 'Phone number', v: '+91 98223 45678' }],
    ['note', { t: '🔒 खाजगी आणि सुरक्षित · तुमचा नंबर तुमच्या पक्षाच्या डेटाबेसमध्येच राहील · कोणत्याही जाहिरातदाराला दिला जाणार नाही', tone: 'ok' }],
    ['btn', { t: 'OTP पाठवा · Send OTP', go: 'C.o.otp' }],
    ['sec', { t: 'किंवा · other ways in' }],
    ['list', { items: [{ i: '⊞', t: 'QR स्कॅन करा · §C0.7', s: 'ward office posters · health camps · pre-fills ward', go: 'C.o.qr' }, { i: '☎', t: 'मिस-कॉल लावा · §C0.9', s: '020-XXXX-1234 · ring + drop · SMS deep-link arrives', sheet: { t: 'Missed-call onboarding', body: [['h', { t: '020-XXXX-1234', s: 'Dial · the call drops · an SMS link arrives · tap it to open the app pre-onboarded' }], ['btn', { t: 'Simulate SMS link → continue', go: 'C.o.ward' }]] } }, { i: '⇄', t: 'मला आधीच CRN आहे · §C0.10', s: 'restore from old phone · migrate device', go: 'C.o.migrate' }] }],
    ['small', { t: 'कोणताही पिन नाही · कोणतीही बायोमेट्रिक नाही · फक्त OTP · OTP throttle 3 sends / 10 min' }]
  ] });
  s('C.o.otp', { app: 'C', f: 'C0', title: 'OTP टाका', sub: '+91 98223 45678 · valid 5 min', caps: ['C0.2'], body: [
    ['otp', { n: 6, code: '419284', go: 'C.o.ward' }],
    ['small', { t: 'Resend in 0:24 · number already on file? → quietly routes to migrate (§C0.10)' }],
    ['btn', { t: 'Verify & continue', go: 'C.o.ward' }]
  ] });
  s('C.o.qr', { app: 'C', f: 'C0', title: 'QR स्कॅन करा', hdr: 'dark', caps: ['C0.7'], body: [
    ['qr', { t: 'Ward office poster · Wakad Ward 47 · verify.ncpconnect.in domain only' }],
    ['note', { t: 'QR recognised · ward + constituency pre-filled', tone: 'ok' }],
    ['btn', { t: 'Continue with phone OTP', go: 'C.o.phone' }],
    ['small', { t: 'Non-whitelisted domains are blocked (fake-poster defence · F.3).' }]
  ] });
  s('C.o.ward', { app: 'C', f: 'C0', title: 'तुमचा वॉर्ड', sub: 'शोधण्यासाठी EPIC व्हेरिफाय करा · किंवा थेट निवडा', caps: ['C0.3', 'C0.4'], body: [
    ['steps', { labels: ['सुरुवात', 'फोन', 'वॉर्ड', 'तयार'], cur: 2 }],
    ['card', { t: 'EPIC व्हेरिफाय करा · शिफारस', s: 'वॉर्ड आपोआप शोधला जाईल · योजना अनलॉक होतील · §C0.3 optional', tone: 'gold', body: [['input', { label: 'EPIC', v: 'ABC1234567', hint: '3 letters + 7 digits' }], ['btn', { t: 'तपासा · Check', kind: 'secondary', toast: '✓ Lakshmi Bhonsle · वॉर्ड 47 · वाकड · सापडले' }], ['note', { t: '✓ Lakshmi Bhonsle · वॉर्ड 47 · वाकड · सापडले', tone: 'ok' }]] }],
    ['sec', { t: 'किंवा · थेट वॉर्ड निवडा · §C0.4' }],
    ['input', { ph: '⌕ वार्ड शोधा · search ward · Marathi / English fuzzy' }],
    ['radio', { opts: [{ t: 'वाकड वॉर्ड 47', s: '📍 तुमच्या जवळ · nearest' }, { t: 'वाकड वॉर्ड 48 (शेजारी)' }, { t: 'वाकड वॉर्ड 52 (शेजारी)' }, { t: 'वाकड वॉर्ड 55 (पुणावळे)' }], v: 0 }],
    ['row', { items: [{ t: 'वगळा · Skip', kind: 'secondary', go: 'C.o.crn' }, { t: 'पुढे · Continue', go: 'C.o.crn' }] }],
    ['small', { t: 'EPIC नंतर §C7 प्रोफाइलमध्ये जोडता येईल · EPIC outside this constituency → offer to switch tenant' }]
  ] });
  s('C.o.crn', { app: 'C', f: 'C0', title: 'तुमचे स्वागत आहे, लक्ष्मी', sub: 'Welcome, Lakshmi', hdr: 'teal', caps: ['C0.6'], body: [
    ['steps', { labels: ['सुरुवात', 'फोन', 'वॉर्ड', 'तयार'], cur: 4 }],
    ['card', { t: 'NCP-PUN-WAK-08421', s: 'तुमचा नागरिक संदर्भ क्रमांक · CRN · हा क्रमांक आजीवन तुमचा आहे · कुठेही वापरा', tone: 'navy', body: [['grid', { cols: 3, items: [{ i: '📋', t: 'कॉपी', toast: 'CRN copied' }, { i: '📲', t: 'शेअर', toast: 'Share sheet · WhatsApp · SMS' }, { i: '📷', t: 'QR', toast: 'QR saved to gallery' }] }]] }],
    ['sec', { t: 'तुमची सखी · default primary worker · §1.21 binding' }],
    ['list', { items: [{ av: 'P', t: 'सखी प्रिया', s: 'Booth Volunteer · वाकड वॉर्ड 47 · तक्रारी, योजना, मदत — पहिला संपर्क · §C3 मध्ये बदलू शकता', go: 'C.r.profile' }] }],
    ['btn', { t: 'घरी जा · Go to home', go: 'C.home' }],
    ['small', { t: 'हा CRN तुमच्या SMS मध्ये पाठवला आहे · Sakhi vacant → default contact: Block Lead' }]
  ] });
  s('C.home', { app: 'C', f: 'C0', title: 'नमस्कार, लक्ष्मी 🙏', sub: 'NCPConnect · पुणे छावणी · कशी मदत करू शकतो?', back: false, nav: 'Home', hdr: 'teal', caps: ['C0.5'], body: [
    ['card', { t: 'तुमचा CRN · NCP-PUN-WAK-08421', s: '📋 tap to copy · long-press for QR', toast: 'CRN copied' }],
    ['grid', { cols: 3, items: [{ i: '📢', t: 'तक्रार नोंदवा', s: '§C1', tone: 'danger', go: 'C.g.cat' }, { i: '🏛', t: 'माझे प्रतिनिधी', s: '§C3', tone: 'navy', go: 'C.r.chain' }, { i: '📋', t: 'योजना', s: '§C4', tone: 'ok', go: 'C.s.list' }] }],
    ['card', { t: 'तुमची सुरू तक्रार · 1 · T-5103 · IN PROGRESS', s: 'पाण्याच्या टाकीची दुरुस्ती · सखी प्रिया हाताळत आहे · ETA उद्या · २ दिवस', tone: 'warn', go: 'C.my.timeline' }],
    ['grid', { cols: 3, items: [{ i: '📥', t: 'माझ्या तक्रारी', s: '§C2 · 1 सुरू', go: 'C.my.list' }, { i: '📅', t: 'कार्यक्रम', s: '§C5 · 2 नवीन', go: 'C.e.feed' }, { i: '🆘', t: 'मदत · SOS', s: '§C6', tone: 'danger', go: 'C.h.home' }] }],
    ['card', { t: 'अंदोह मैदान रॅली · 1 जून', s: 'MLA किरण राव · संध्या 5 वा · RSVP खुले', tone: 'teal', go: 'C.e.detail' }],
    ['small', { t: 'Pull-to-refresh re-fetches status. Primary tiles are cached for offline launch; CRN always visible from local storage.' }]
  ] });
  s('C.o.migrate', { app: 'C', f: 'C0', title: 'नवीन फोनवर पुनर्स्थापित करा', sub: 'तुमचा CRN फॉलो होईल · संपूर्ण इतिहास परत मिळेल', caps: ['C0.10', 'C0.8'], body: [
    ['note', { t: '✓ सर्व पूर्वीच्या तक्रारी (§C2) · ✓ योजना अर्ज (§C4) · ✓ रीप कनेक्शन्स आणि RSVP इतिहास', tone: 'ok' }],
    ['card', { t: 'पद्धत 1 · जुना फोन सक्रिय असेल तर', s: 'जुन्या नंबरवर OTP मागवा · सर्वात सोपी पद्धत · 30 सेकंदात', body: [['input', { label: 'Old number', v: '+91 98223 45678' }], ['btn', { t: 'Send OTP to old number', kind: 'secondary', go: 'C.o.otp' }]] }],
    ['card', { t: 'पद्धत 2 · जुना फोन बंद / हरवला तर', s: 'CRN + जन्मतारीख वापरा', body: [['input', { label: 'CRN', v: 'NCP-PUN-WAK-08421' }], ['input', { label: 'जन्मतारीख', v: '14 / 08 / 1984' }], ['btn', { t: '+ नवीन फोनवर OTP', kind: 'secondary', go: 'C.o.otp' }]] }],
    ['card', { t: 'कस्टोडियल CRN ट्रान्सफर · §C0.8', s: 'कुटुंबाने तुमच्यासाठी सीआरएन काढला होता का? → तुमच्या नावावर ट्रान्सफर करा · सखी मदत करेल', toast: 'Requires Sakhi confirmation' }],
    ['btn', { t: 'पुनर्स्थापित करा · Restore', go: 'C.home' }],
    ['small', { t: 'हे फॉर्म §9.8 ऑडिटमध्ये नोंदवले जाते · DOB wrong 3× → 30-min cool-off · suspicious geo → Compliance review' }]
  ] });
  s('C.o.assist', { app: 'C', f: 'C0', title: 'नागरिक जोडा · Add a citizen', sub: 'LEADER APP · सखी प्रिया · Booth Vol · वाकड B-47 · §C0.8', hdr: 'gold', caps: ['C0.8'], body: [
    ['steps', { labels: ['नाव', 'वॉर्ड', 'फोन + OTP'], cur: 2 }],
    ['card', { av: 'K', t: 'श्रीमती कुलकर्णी', s: 'वय 73 · महिला · वाकड वॉर्ड 47 · घर 52 · लेन 3 · senior tag · सखीने भरले: नाव · वय · वॉर्ड · पत्ता' }],
    ['banner', { t: 'आता त्यांच्या हातात द्या · HAND PHONE NOW · OTP त्यांच्याच फोनवर जाईल · सखीच्या नव्हे', tone: 'gold' }],
    ['note', { t: '⚠ PIN आणि सेटिंग्ज सखी कधीही टाकू शकत नाही', tone: 'warn' }],
    ['input', { label: 'त्यांचा फोन नंबर', v: '+91 98765 43210' }],
    ['btn', { t: 'OTP पाठवा · त्यांच्या फोनवर', go: 'C.o.crn' }],
    ['card', { t: 'फोन नाही? कस्टोडियल CRN', s: 'कुटुंबाच्या / सखीच्या नावावर बनवा · नंतर §C0.10 मधून ट्रान्सफर · audit-bumped · reminder at 30d', tone: 'purple', toast: 'Custodial CRN flow' }],
    ['small', { t: 'सहाय्य ऑडिट · §1.34 + §10.22 · सखी प्रिया · 22 May 2:45 PM · optional doorstep photo with consent' }]
  ] });

  /* ---------- §C1 Raise a Grievance ---------- */
  s('C.g.cat', { app: 'C', f: 'C1', title: 'तुमची तक्रार कशाची आहे?', sub: '12 श्रेणींपैकी एक निवडा · 90 सेकंदात', back: 'C.home', nav: 'Grievance', caps: ['C1.1', 'C1.6'], body: [
    ['steps', { labels: ['श्रेणी', 'तपशील', 'रूट', 'पाठवा'], cur: 0 }],
    ['banner', { t: '🔒 अनामिक तक्रार · §C1.6 · महिला सुरक्षा · छळ · संवेदनशील विषय', tone: 'purple', go: 'C.g.anon' }],
    ['grid', { cols: 4, items: [{ i: '💧', t: 'पाणी', s: 'Water', go: 'C.g.capture' }, { i: '🗑', t: 'कचरा', s: 'Garbage', go: 'C.g.capture' }, { i: '💡', t: 'वीज', s: 'Electricity', go: 'C.g.capture' }, { i: '🛣', t: 'रस्ता', s: 'Road', go: 'C.g.capture' }, { i: '🎓', t: 'शाळा', s: 'School', go: 'C.g.capture' }, { i: '🏥', t: 'आरोग्य', s: 'Health', go: 'C.g.capture' }, { i: '🌾', t: 'रेशन', s: 'Ration', go: 'C.g.capture' }, { i: '👴', t: 'पेन्शन', s: 'Pension', go: 'C.g.capture' }, { i: '🚓', t: 'सुरक्षा', s: 'Safety', go: 'C.g.capture' }, { i: '💼', t: 'नोकरी', s: 'Job', go: 'C.g.capture' }, { i: '🏛', t: 'नागरी', s: 'Civic', go: 'C.g.capture' }, { i: '⚠', t: 'इतर', s: 'Other', go: 'C.g.capture' }] }],
    ['small', { t: 'उदाहरण · “पाण्याची टाकी फुटली” → पाणी श्रेणी · long-press a tile for examples' }],
    ['card', { t: 'तुमच्या वार्डात आज', s: 'पाणी · 14 · सर्वाधिक · रेशन · 8 · रस्ता · 6', go: 'C.my.list' }]
  ] });
  s('C.g.capture', { app: 'C', f: 'C1', title: 'फोटो आणि ऑडिओ काढा', sub: '💧 पाणी · समस्येचा पुरावा द्या · GPS आपोआप', caps: ['C1.2', 'C1.3'], body: [
    ['steps', { labels: ['श्रेणी', 'तपशील', 'रूट', 'पाठवा'], cur: 1 }],
    ['ph', { t: '📷 तुटलेली पाण्याची टाकी · वाकड लेन 7 · 📍 18.5912, 73.7717 · ±4m · ✓ EXIF', h: 130, kind: 'cam', toast: 'पुन्हा · Retake' }],
    ['card', { t: '🎙 रेकॉर्ड · 0:08 / 0:30', s: 'मराठीत बोला · आम्ही EN मध्ये भाषांतर करू · waveform live', toast: 'Recording stopped' }],
    ['note', { t: '📍 स्थान आपोआप जोडले · वाकड · वार्ड 47 · लेन 7 · घर 47 जवळ · tap to override', tone: 'ok' }],
    ['card', { t: 'वर्णन · §C1.3 ऑटो-ट्रान्स्क्राइब', body: ['“लेन 7 मधली पाण्याची टाकी 2 दिवसांपासून तुटली आहे. 8 घरांना पाणी नाही.”', ['small', { t: '→ “Water tank in Lane 7 broken since 2 days. 8 households without water.”' }]] }],
    ['row', { items: [{ t: 'Skip photo / voice', kind: 'secondary', toast: 'At least one of photo / voice + location required' }, { t: 'पुढे · Next →', go: 'C.g.route' }] }],
    ['small', { t: 'Offline: captured locally · uploads on restore · tracking-ID issued on sync' }]
  ] });
  s('C.g.route', { app: 'C', f: 'C1', title: 'कोणाकडे पाठवायची?', sub: 'तुमची तक्रार खाली दिलेल्यांपैकी एकाकडे जाईल', caps: ['C1.7', 'C1.9', 'C3.14'], body: [
    ['steps', { labels: ['श्रेणी', 'तपशील', 'रूट', 'पाठवा'], cur: 2 }],
    ['sec', { t: '⚡ शिफारस · §C1.9 designation-smart' }],
    ['card', { av: 'A', t: 'अनिल पाटील', s: 'नगरसेवक · वार्ड 47 · PMC (पाण्यासाठी अधिकारी) · + जिल्हा अध्यक्ष NCP · दुसरी भूमिका · §C1.7 · पाण्याचा अधिकार + पक्ष दबाव दोन्ही', tone: 'gold', sheet: { t: 'कोणत्या भूमिकेत? · §C1.7', body: [['radio', { opts: [{ t: 'नगरसेवक म्हणून', s: 'civic authority · PMC water' }, { t: 'जिल्हा अध्यक्ष म्हणून', s: 'party scope' }] }], ['btn', { t: 'अनिल पाटील यांना पाठवा', go: 'C.g.preview' }]] } }],
    ['sec', { t: 'तुमची प्राथमिक सखी · डीफॉल्ट' }],
    ['card', { av: 'P', t: 'सखी प्रिया', s: 'Booth Volunteer · वाकड वार्ड 47 · तुमच्या CRN सोबत बांधलेली · 0.4 km दूर · 92% SLA · सर्वात जलद · सहसा 4 तासांत', b: 'SELECTED', btone: 'ok', go: 'C.g.preview' }],
    ['sec', { t: 'तुमचे डायरेक्ट कनेक्शन · §1.21' }],
    ['card', { av: 'S', t: 'सुनीता जोशी', s: 'Block Lead हवेली · NCP · + ZP सदस्य · हवेली · दुसरी भूमिका · सहसा 1 दिवस', tone: 'purple', go: 'C.g.preview' }],
    ['btn', { t: 'सखी प्रियाला पाठवा · Continue', go: 'C.g.preview' }],
    ['small', { t: 'Leader on leave → “Acting [name]” shown. Anonymous mode → female Sakhis only, no designation suggestion.' }]
  ] });
  s('C.g.preview', { app: 'C', f: 'C1', title: 'अंतिम तपासणी', sub: 'पाठवण्यापूर्वी एकदा पहा', caps: ['C1.4'], body: [
    ['steps', { labels: ['श्रेणी', 'तपशील', 'रूट', 'पाठवा'], cur: 3 }],
    ['card', { t: '💧 पाणी · तुटलेली पाण्याची टाकी · वाकड लेन 7', s: '8 घरांना पाणी नाही · 2 दिवसांपासून', body: [['pills', { items: ['📷 PHOTO', '🎙 VOICE 8s', '📍 GPS ±4m', 'EN TRANSL'] }]] }],
    ['card', { av: 'P', t: 'कोणाकडे जाणार · सखी प्रिया', s: 'Booth Volunteer · वाकड वार्ड 47 · 92% SLA · 0.4 km · सहसा 4 तासांत · §3.5 ऑटो-रूटिंग · तिच्या क्यू मध्ये 8 सेकंदात', tone: 'ok', go: 'C.g.route' }],
    ['note', { t: '🔒 गोपनीयता · तुमचा फोन प्लॅटफॉर्म-मास्क केलेला · सखी फक्त NCP नंबर पाहेल', tone: 'info' }],
    ['note', { t: 'अंदाजे निकाल · SLA 48 तास · पाणी श्रेणी · वाकडमधल्या मागच्या 14 पाण्याच्या तक्रारी सरासरी 16h मध्ये निकाल', tone: 'ok' }],
    ['row', { items: [{ t: '‹ संपादन', kind: 'secondary', go: 'C.g.capture' }, { t: 'पाठवा · Submit ↑', go: 'C.g.done' }] }],
    ['small', { t: 'पाठवल्यावर रद्द करता येणार नाही (cancel within 30 min via §C2.4 if not acknowledged)' }]
  ] });
  s('C.g.done', { app: 'C', f: 'C1', title: 'तुमची तक्रार पाठवली', sub: 'Your grievance was sent', hdr: 'teal', caps: ['C1.5'], body: [
    ['h', { t: 'T-5103', s: 'तुमचा ट्रॅकिंग नंबर · long-press to copy' }],
    ['card', { av: 'P', t: 'सखी प्रिया', s: 'Booth Vol · वाकड वार्ड 47 · 8 सेकंदात तिच्या क्यू मध्ये पोहोचली', tone: 'ok', go: 'C.r.profile' }],
    ['note', { t: 'अंदाजे ETA · उद्या सकाळी 11 वा · within 18h', tone: 'gold' }],
    ['note', { t: '📩 SMS पाठवला · “T-5103 · सखी प्रिया हाताळत आहे · ETA उद्या 11 वा”', tone: 'info' }],
    ['row', { items: [{ t: '+ नवीन तक्रार', kind: 'secondary', go: 'C.g.cat' }, { t: 'ट्रॅक करा →', go: 'C.my.timeline' }] }]
  ] });
  s('C.g.anon', { app: 'C', f: 'C1', title: 'अनामिक तक्रार', sub: 'तुमचे नाव लपवले जाईल · §C1.6', hdr: 'purple', caps: ['C1.6', 'C1.8'], body: [
    ['note', { t: '🔒 ✓ तुमचे नाव सखीला दिसणार नाही · ✓ फक्त स्त्री सखीकडे जाईल · §C1.8 · ✓ महिला आघाडी प्राथमिकता · ✓ नंतर तुम्ही नाव उघड करू शकता · ऐच्छिक', tone: 'purple' }],
    ['sec', { t: 'अनामिक श्रेणी · §C1.8 wing-routable' }],
    ['grid', { cols: 2, items: [{ i: '⚠', t: 'महिला सुरक्षा', s: '→ Mahila Aghadi', sel: true, toast: 'Selected' }, { i: '📢', t: 'छळ · दबाव', s: '→ female Sakhi', toast: 'Selected' }, { i: '🎓', t: 'महाविद्यालय', s: '→ Yuva Aghadi', toast: 'Selected' }, { i: '🌾', t: 'शेती', s: '→ Farmers Cell', toast: 'Selected' }] }],
    ['card', { av: 'A', t: 'जाणाऱ्या सखी · सखी अनिता', s: 'Mahila Aghadi · वाकड वार्ड 48 · senior tag · तुमचे नाव तिला दिसणार नाही · फक्त वार्ड + तपशील', tone: 'purple', toast: 'Alternative female Sakhi picker' }],
    ['btn', { t: 'अनामिक तक्रार सुरू करा · §C1.2 →', go: 'C.g.capture' }],
    ['small', { t: 'No female Sakhi in ward → female Block Lead → Mahila convenor. “Reveal my name” available later from §C2.' }]
  ] });

  /* ---------- §C2 My Grievances ---------- */
  s('C.my.list', { app: 'C', f: 'C2', title: 'माझ्या तक्रारी', sub: '1 सुरू · 8 बंद · CRN NCP-PUN-WAK-08421', back: 'C.home', caps: ['C2.1', 'C2.6'], body: [
    ['kpi', { items: [{ v: '1', l: 'सुरू', tone: 'warn' }, { v: '8', l: 'बंद · 7 ★5' }, { v: '4.8', l: 'avg CSAT', tone: 'ok' }] }],
    ['chips', { opts: ['All', 'सुरू · 1', 'बंद · 8', 'श्रेणी ▾'], v: 0 }],
    ['card', { t: 'T-5103 · IN PROGRESS · 14h ago', s: '💧 पाण्याची टाकी फुटली · वाकड लेन 7 · 📋 सखी प्रिया · Booth Vol Wakad B-47 · §C2.6 · आज 11 वा भेट · ETA उद्या 1 PM', tone: 'warn', go: 'C.my.timeline' }],
    ['sec', { t: 'बंद · CLOSED · 8' }],
    ['list', { items: [{ t: 'T-4892 · कचरा साफसफाई · वाकड लेन 7', s: 'सखी प्रिया · Booth Vol · 18h मध्ये निकाल · 5d ago', b: '★★★★★', btone: 'gold', go: 'C.my.timeline' }, { t: 'T-4621 · पेन्शन अपडेट विलंब', s: 'अनिल पाटील · नगरसेवक भूमिकेत · §C2.6 · 2 mo ago', b: '★★★★★', btone: 'gold', go: 'C.my.timeline' }, { t: 'T-4203 · रस्त्याची दुरुस्ती · §C2.4 reopen', s: 'पहिल्यांदा बंद · 3★ · पुन्हा उघडले · आता बंद', b: 'RE-OPENED', btone: 'warn', go: 'C.my.reopen' }, { t: '+ 5 जुने पाहा · view 5 older', tone: 'muted' }] }],
    ['fab', { t: '+ नवीन तक्रार · §C1', go: 'C.g.cat' }]
  ] });
  s('C.my.timeline', { app: 'C', f: 'C2', title: 'T-5103', sub: 'IN PROGRESS · पाणी', right: { i: '⋯', sheet: { t: 'Ticket', body: [['list', { items: [{ t: 'Share T-ID with family', toast: 'Share sheet' }, { t: 'Cancel (within 30 min, pre-acknowledgement)', toast: 'Already acknowledged · needs Sakhi confirmation' }, { t: 'Reveal my identity (anonymous tickets)', toast: 'Not an anonymous ticket' }] }]] } }, caps: ['C2.2', 'C2.6', 'C3.3', '3.14'], body: [
    ['h', { t: 'पाण्याची टाकी फुटली', s: 'वाकड लेन 7 · घर 47 जवळ · 1 फोटो · ध्वनी' }],
    ['sec', { t: 'Status timeline · §C2.2' }],
    ['tl', { items: [{ t: 'तक्रार नोंदवली · 7:13 PM', s: 'तुम्ही · CRN NCP-PUN-WAK-08421 · श्रेणी पाणी · 5 taps', st: 'done' }, { t: 'रूट केले · 7:13:08 PM · 8s मध्ये', s: '→ सखी प्रिया · Booth Vol Wakad B-47 · §C2.6 “as Booth Vol” (तिची दुसरी भूमिका Mahila Aghadi नाही) · §3.5 + §C1.9', st: 'done' }, { t: 'स्वीकारले · 7:42 AM', s: 'सखी प्रिया · §3.7 · “11 वा भेट देणार PCMC वेंडरसह”', st: 'done' }, { t: 'सुरू · आता · 11:14 AM', s: '“वेंडर आला · पाण्याचा पाइप तपासत आहे” — 6 मिनिटांपूर्वी · 1 फोटो', st: 'cur' }, { t: 'निकाल · Resolved', st: 'todo', go: 'C.my.csat' }, { t: 'बंद · Closed (after CSAT)', st: 'todo' }] }],
    ['card', { av: 'P', t: 'सखी प्रिया', s: 'Booth Vol · वाकड वार्ड 47 · 📞 कॉल करा (NCP मास्क) · §C3 मधून प्रोफाइल', go: 'C.r.profile', body: [['row', { items: [{ t: '📞 कॉल', kind: 'secondary', toast: 'Platform-masked call' }, { t: '+ टिप्पणी / फोटो जोडा · §C2.3', go: 'C.my.comment' }] }]] }],
    ['small', { t: 'Acting handler → “Acting Anita for Priya on leave”. Escalation → red row “Auto-escalated to Sunita as Block Lead”.' }],
    ['link', { t: 'Simulate resolution → rate Sakhi', go: 'C.my.csat' }]
  ] });
  s('C.my.comment', { app: 'C', f: 'C2', title: 'टिप्पणी जोडा', sub: 'T-5103 · सखी प्रियाला नवीन माहिती द्या · §C2.3', caps: ['C2.3'], body: [
    ['chat', { msgs: [{ me: true, t: 'पाण्याची टाकी 2 दिवसांपासून तुटली आहे. 8 घरांना पाणी नाही.', time: 'तुम्ही · 7:13 PM' }, { who: 'सखी प्रिया · 7:42 AM', t: '11 वा भेट देणार PCMC वेंडरसह. पाण्याच्या जुळवणीची व्यवस्था सुरू.' }, { who: 'सखी प्रिया · 11:14 AM · 📷', t: 'वेंडर आला · पाइप तपासत आहे' }] }],
    ['ta', { label: 'नवीन टिप्पणी', v: 'मीटर डाव्या भिंतीवर आहे · वेंडरला सांगा. कुटुंब घरी आहे.', hint: '→ “Meter is on left wall · tell vendor. Family at home.”' }],
    ['grid', { cols: 3, items: [{ i: '📷', t: 'फोटो', toast: 'Camera' }, { i: '🎙', t: 'ध्वनी', toast: 'Recording' }, { i: '📍', t: 'स्थान', toast: 'GPS attached' }] }],
    ['small', { t: '🌐 स्वयंभाषांतर · सखी मराठीत वाचेल · ब्लॉक लीड इंग्रजीत · max 5 comments / hour' }],
    ['row', { items: [{ t: 'रद्द', kind: 'secondary', go: 'back' }, { t: 'पाठवा · Send ↑', go: 'C.my.timeline' }] }]
  ] });
  s('C.my.csat', { app: 'C', f: 'C2', title: 'तक्रार निकाली निघाली', sub: 'Resolved · 1:08 PM · 18h मध्ये', hdr: 'teal', caps: ['C2.5', 'C2.7'], body: [
    ['ph', { t: '📷 सखी प्रियाचा पुरावा फोटो · नवीन टाकी बसवली · 1:05 PM', h: 110, toast: 'Full-size proof photo' }],
    ['h', { t: 'सखीच्या कामाला रेटिंग द्या', s: 'तुमचे रेटिंग सखीच्या स्कोरकार्डात जाईल' }],
    ['stars', { v: 0 }],
    ['note', { t: '📋 §C2.7 · ATTRIBUTION HONEST · हे रेटिंग सखीच्या Booth Vol Wakad B-47 भूमिकेला जाईल — तिच्या Mahila Aghadi भूमिकेला नाही · §4.11 scorecard', tone: 'gold' }],
    ['ta', { label: 'अधिक प्रतिसाद · optional · 200 अक्षर', v: 'वेगवान आणि नम्र · आभार सखी प्रिया', hint: '§4.11 मध्ये दिसेल (तुमचे नाव नाही)' }],
    ['btn', { t: 'रेटिंग पाठवा · Submit rating', go: 'C.my.list', toast: 'Closed · CSAT to Booth Vol scorecard' }],
    ['link', { t: 'Rate later', go: 'C.my.list' }],
    ['small', { t: '1–2★ → “anything we can fix?” modal with reopen suggestion. Withdraw once within 24h.' }]
  ] });
  s('C.my.reopen', { app: 'C', f: 'C2', title: 'T-5103 · CLOSED 9d ago', sub: 'पाण्याची टाकी फुटली · पुन्हा', caps: ['C2.4', 'C2.8', '3.16'], body: [
    ['card', { t: 'मूळ निकाल · नवीन टाकी · सखी प्रिया · 5★', s: 'पुन्हा उघडण्याची मुदत: 21 दिवस उरले · §3.16 (30 days for water)' }],
    ['h', { t: 'तक्रार पुन्हा उघडा', s: 'मूळ context जतन केला जाईल · §C2.8' }],
    ['radio', { label: 'कारण · REASON', opts: ['नवीन टाकी पुन्हा गळते', 'वेगळी समस्या आली', 'पूर्ण निकाल मिळाला नव्हता', 'इतर (तपशील)'], v: 0 }],
    ['card', { t: '📋 मूळ HANDLER CONTEXT · §C2.8', s: 'सखी प्रिया · Booth Vol · Wakad B-47 · 22 May 7:13 PM ते 23 May 1:08 PM · §3.24 as-of-date · ती सध्या त्याच भूमिकेत आहे', tone: 'purple', go: 'C.my.timeline' }],
    ['radio', { label: 'कुठे पाठवायचे · ROUTE TO', opts: [{ t: 'त्याच सखी प्रियाला · same handler', s: 'तीच Booth Vol भूमिका · सक्रिय · context match' }, { t: 'सध्याच्या वार्ड सखीला नवीन', s: 're-route via §2.17 current routing rules' }], v: 0 }],
    ['ta', { label: 'अधिक तपशील', v: 'नवीन टाकी हलणारी · पाणी पुन्हा कमी' }],
    ['row', { items: [{ t: 'रद्द', kind: 'secondary', go: 'back' }, { t: 'पुन्हा उघडा · Reopen ↶', go: 'C.my.timeline' }] }],
    ['small', { t: 'Max 2 reopens per ticket · original 5★ preserved · reopen gets its own CSAT loop' }]
  ] });

  /* ---------- §C3 My Representatives ---------- */
  s('C.r.chain', { app: 'C', f: 'C3', title: 'माझे प्रतिनिधी', sub: 'तुमच्या वार्डासाठी जबाबदार · वाकड वार्ड 47', back: 'C.home', nav: 'Reps', caps: ['C3.1', 'C3.18', 'C3.3'], body: [
    ['seg', { opts: [{ t: 'माझी साखळी · §C3.1' }, { t: 'पूर्ण संघटना · §C3.5', go: 'C.r.explorer' }], v: 0 }],
    ['list', { items: [
      { av: 'P', t: 'सखी प्रिया', s: 'Booth Volunteer · वाकड वार्ड 47 · CSAT 4.7 (28 तक्रारी) · 0.4 km · 📞 कॉल', b: 'PRIMARY', btone: 'ok', go: 'C.r.profile' },
      { av: 'R', t: 'रवी कुमार', s: 'Booth President · वाकड वार्ड 47 · तुमचा वॉर्ड प्रमुख · 14 बूथ', go: 'C.r.profile' },
      { av: 'S', t: 'सुनीता जोशी', s: 'Block Lead · हवेली · 28 बूथ · 24,720 मतदार', b: '+ ZP MEMBER', btone: 'purple', go: 'C.r.profile' },
      { av: 'A', t: 'अनिल पाटील', s: 'District Lead · पुणे ग्रामीण', b: '+ NAGAR SEVAK W7', btone: 'gold', go: 'C.r.profile' },
      { av: 'K', t: 'किरण राव · MLA', s: 'पुणे छावणी विधानसभा · NCP · सध्या 0 डायरेक्ट कनेक्शन', b: 'MLA', btone: 'navy', go: 'C.r.request' }
    ] }],
    ['small', { t: 'Chip tap → “Nagar Sevak Ward 7 · 2022–27 · PMC” + gazette cross-link. Vacant slot → “VACANT · नवीन प्रतिनिधी लवकरच”.' }],
    ['list', { items: [{ i: '⊞', t: 'पूर्ण संघटना पाहा · §C3.5', go: 'C.r.explorer' }, { i: '⌕', t: 'पदनामाने शोधा · §C3.6', go: 'C.r.search' }, { i: '🔗', t: 'माझी कनेक्शन्स · §C3.10', go: 'C.r.connections' }] }]
  ] });
  s('C.r.profile', { app: 'C', f: 'C3', title: 'अनिल पाटील', sub: 'District President · NCP पुणे ग्रामीण', right: { i: '⋯', toast: 'Share profile' }, caps: ['C3.2', 'C3.18', 'C3.4', 'C3.20', 'C3.3'], body: [
    ['card', { av: 'A', t: 'अनिल पाटील', s: '52 वर्षे · पक्षात 2009 पासून · 5व्या वेळा अध्यक्ष · 📍 हवेली · 18 km दूर · ऑफिस तास 10-6', avTone: 'gold' }],
    ['sec', { t: 'सक्रिय भूमिका · §C3.18 ALL HATS' }],
    ['list', { items: [{ i: 'P', t: 'District President · NCP पुणे ग्रामीण', s: 'PARTY ROLE · 2024-27' }, { i: 'E', t: 'Nagar Sevak · Ward 7 · PMC · 2022-27', s: 'EXTERNAL · §2.13 · ↗ gazette', tone: 'gold', toast: 'PMC directory cross-link' }, { i: 'E', t: 'Director · पुणे जिल्हा सहकारी बँक · 2023-26', s: 'EXTERNAL · §2.13', tone: 'gold' }, { i: 'S', t: 'SCOPE · §C3.20', s: 'पुणे ग्रामीण primary + पुणे शहर additional', tone: 'purple' }] }],
    ['sec', { t: 'सार्वजनिक काम · §C3.4 RECENT · ★ CSAT 4.6 · 142 तक्रारी' }],
    ['list', { items: [{ t: 'पाणी टँकर सेवा · 38 घरांना मदत', s: 'वाकड Ward 7 · PMC bid मिळवला · 5 May 2026', toast: 'Expanded feed · last 50' }] }],
    ['sec', { t: 'संपर्क · §C3.3 PLATFORM-MASKED' }],
    ['grid', { cols: 3, items: [{ i: '📞', t: 'कॉल', toast: 'NCP-line · numbers private both sides' }, { i: '💬', t: 'WhatsApp', toast: 'Masked' }, { i: '🏛', t: 'भेट विनंती', toast: 'Visit request sent' }] }],
    ['btn', { t: '+ डायरेक्ट कनेक्शन विनंती · §C3.9', kind: 'gold', go: 'C.r.request' }],
    ['small', { t: 'throttle: 3 pending · 5/30d · 14d expire' }],
    ['link', { t: 'Sakhi profile → प्राथमिक सखी बदला · §C3.7', go: 'C.r.rebind' }]
  ] });
  s('C.r.rebind', { app: 'C', f: 'C3', title: 'प्राथमिक सखी बदला', sub: 'Rebind · §C3.7 · नवीन सखी निवडा', caps: ['C3.7', 'C3.8'], body: [
    ['card', { av: 'P', t: 'सध्याची बांधणी · सखी प्रिया · Booth Vol', s: 'Aug 2025 पासून · 28 तक्रारी · CSAT 4.7 · 9 महिने 14 दिवस · §C3.8' }],
    ['sec', { t: 'नवीन सखी निवडा · CHOOSE NEW' }],
    ['radio', { opts: [{ t: 'सखी अनिता · Mahila Aghadi', s: 'Wakad वार्ड 48 · CSAT 4.8 · 0.6 km · महिला विषयांत तज्ज्ञ · recommended' }, { t: 'सखी नीलम · Booth Vol', s: 'Wakad वार्ड 47 · CSAT 4.5 · 0.4 km · नवीन (3 महिने)' }, { t: 'सखी मीनल · Booth Vol', s: 'Wakad वार्ड 47 · CSAT 4.6 · 0.5 km · 2 वर्ष अनुभव' }], v: 0 }],
    ['link', { t: 'show more options (wider pool per org policy)', toast: 'Broader pool' }],
    ['ta', { label: 'बदलाचे कारण · optional', v: 'माझ्या समस्या समजून घेत नाही असे वाटले. सखी अनिता शेजारच्या वार्डात आहेत आणि महिला विषयांत मार्गदर्शन देऊ शकतील.' }],
    ['note', { t: '⚠ COOL-OFF + HISTORY · §C3.7 + §3.24 · पुढच्या 90 दिवसांत पुन्हा बदलता येणार नाही · 28 जुन्या तक्रारी सखी प्रियाकडेच राहतील · सखी प्रियाला सूचना जाईल', tone: 'warn' }],
    ['row', { items: [{ t: 'रद्द', kind: 'secondary', go: 'back' }, { t: 'बदला · Rebind ⇄', kind: 'gold', sheet: { t: 'Open grievances', body: [['radio', { opts: ['Keep with current Sakhi until close', 'Transfer with handover note'] }], ['btn', { t: 'Confirm · PIN re-auth', go: 'C.r.connections' }]] } }] }],
    ['small', { t: '§9.8 ऑडिटमध्ये नोंदवले जाते · “trust break” → soft coaching signal to Block Lead' }]
  ] });
  s('C.r.request', { app: 'C', f: 'C3', title: 'डायरेक्ट कनेक्शन विनंती', sub: 'अनिल पाटील यांना · §C3.9 → §1.21 inbox', caps: ['C3.9', 'C3.16'], body: [
    ['card', { av: 'A', t: 'अनिल पाटील', s: 'District Lead + Nagar Sevak Ward 7 PMC · सध्या 42 डायरेक्ट कनेक्शन (cap 75)', avTone: 'gold' }],
    ['sec', { t: 'हेतू · INTENT' }],
    ['grid', { cols: 4, items: [{ i: '💬', t: 'सामान्य', toast: 'general' }, { i: '📢', t: 'तक्रार मदत', sel: true, toast: 'grievance' }, { i: '📋', t: 'योजना मदत', toast: 'scheme help' }, { i: '🤝', t: 'परिचय', toast: 'introduction' }] }],
    ['ta', { label: 'संदेश · 200 char max · 142 / 200', v: 'नमस्कार सर. वाकड लेन 7 मध्ये पाण्याची मूलभूत समस्या आहे — पुन्हा पुन्हा होते. नगरसेवक भूमिकेत मार्गदर्शन हवे.' }],
    ['note', { t: '📋 §1.27 + §C3.9 THROTTLE · 1 of 3 max pending · 1 of 5/30d · 14 दिवस expire · accept · accept-and-delegate · reject — अनिल ठरवतील', tone: 'info' }],
    ['note', { t: '🔒 §C3.16 PRIVACY · तुमचे नाव + ward अनिलला दिसेल · फोन प्लॅटफॉर्म-मास्क · तुमच्या इतर कनेक्शन्स त्यांना दिसणार नाहीत (default)', tone: 'purple', go: 'C.r.privacy' }],
    ['btn', { t: 'विनंती पाठवा · Send request →', go: 'C.r.connections' }],
    ['small', { t: 'Leader at capacity → “suggest delegating-to”. Sensitive leader → designated assistant triages first.' }]
  ] });
  s('C.r.connections', { app: 'C', f: 'C3', title: 'माझी कनेक्शन्स', sub: '3 सक्रिय · 1 pending · 0 expired', caps: ['C3.10', 'C3.11', 'C3.14', 'C3.15', 'C3.13'], body: [
    ['kpi', { items: [{ v: '3', l: 'सक्रिय', tone: 'ok' }, { v: '1', l: 'pending', tone: 'warn' }, { v: '2 of 3', l: 'quota left' }] }],
    ['sec', { t: '📌 PRIMARY WORKER · always pinned' }],
    ['card', { av: 'P', t: 'सखी प्रिया · Booth Vol', s: 'since Aug 2025 · 28 grievances · CSAT 4.7', b: '⇄ बदला', go: 'C.r.rebind' }],
    ['sec', { t: 'डायरेक्ट कनेक्शन्स · §C3.10 · 2' }],
    ['card', { av: 'A', t: 'अनिल पाटील', s: 'District Lead + Nagar Sevak Ward 7 · accepted 22 May', b: 'DELEGATED TO: OSD सुनीता · §1.22', btone: 'purple', tone: 'gold', go: 'C.r.detail', body: [['row', { items: [{ t: '💬 DM', kind: 'secondary', go: 'C.r.detail' }, { t: '+ तक्रार · §C3.14', kind: 'secondary', go: 'C.g.route' }, { t: 'End', kind: 'danger', sheet: { t: 'End connection · §C3.15', body: [['radio', { opts: ['Issue resolved', 'Prefer my Sakhi', 'Other'] }], ['radio', { label: 'Open grievances via this connection', opts: ['Reassign to primary Sakhi', 'Keep with current handler'] }], ['small', { t: 'Leader notified · 30-day cool-off before re-request' }], ['btn', { t: 'End connection', kind: 'danger', go: 'C.r.connections' }]] } }] }]] }],
    ['card', { av: 'S', t: 'सुनीता जोशी', s: 'Block Lead हवेली · ZP Member खेड · accepted 12 Apr · सुनीता स्वतः handle', go: 'C.r.detail' }],
    ['sec', { t: 'PENDING · §C3.11' }],
    ['card', { av: 'K', t: 'किरण राव · MLA', s: 'pending · 9 दिवस उरले · intent: सामान्य · “रॅलीच्या आयोजनात मदत”', b: 'withdraw', btone: 'warn', sheet: { t: 'Withdraw request?', body: [['btn', { t: 'Withdraw · quota slot freed', kind: 'danger', go: 'C.r.connections' }]] } }],
    ['small', { t: '§C3.13 DM · §C3.15 end · §3.24 history preserved across all changes' }]
  ] });
  s('C.r.search', { app: 'C', f: 'C3', title: 'शोधा · Search', sub: 'नाव · भूमिका · पदनाम · वार्ड · §C3.6', caps: ['C3.6', 'C3.17'], body: [
    ['input', { v: 'Nagar Sevak Ward 7', ph: '⌕ search by designation' }],
    ['sec', { t: 'सर्वसामान्य शोध' }],
    ['pills', { items: [{ t: 'सर्व Nagar Sevak', toast: 'Search run' }, { t: 'सर्व ZP Members', toast: 'Search run' }, { t: 'Mahila Aghadi · §C3.17', toast: 'Search run' }, { t: 'हवेली Block · सर्व', toast: 'Search run' }] }],
    ['sec', { t: 'WING FILTER · §C3.17' }],
    ['chips', { opts: ['सर्व', 'Main', 'Mahila', 'Yuva', 'Cells'], v: 0 }],
    ['sec', { t: 'शोध परिणाम · 1 RESULT' }],
    ['list', { items: [{ av: 'A', t: 'अनिल पाटील', s: 'District Lead NCP पुणे ग्रामीण · ⚡ Nagar Sevak · Ward 7 · PMC · 2022-27 · + Director Pune Co-op Bank · ✓ तुमचा डायरेक्ट कनेक्शन', b: 'CIVIC', btone: 'gold', go: 'C.r.profile' }] }],
    ['sec', { t: 'PMC च्या इतर Nagar Sevak · non-party' }],
    ['list', { items: [{ av: 'V', t: 'वैभव कुलकर्णी · Ward 12', s: 'पक्षाबाहेर · independent · just designation match · read-only profile', toast: 'Read-only · no request-connection' }] }],
    ['link', { t: '⊞ पूर्ण संघटना डेस्कटॉपवर पाहा · §C3.5', go: 'C.r.explorer' }]
  ] });
  s('C.r.explorer', { app: 'C', f: 'C3', title: 'पूर्ण संघटना', sub: 'पुणे छावणी विधानसभा · 142 reps · 168 booths · §C3.5 · mobile accordion', caps: ['C3.5', 'C3.17', 'C3.19', 'C3.18', 'C3.16'], body: [
    ['input', { ph: '⌕ नाव · भूमिका · पदनाम · वार्ड' }],
    ['chips', { opts: ['Wing · सर्व', 'Main', 'Mahila', 'Yuva', 'Farmers'], v: 0 }],
    ['tree', { items: [{ d: 0, av: 'K', t: 'MLA · KIRAN RAO', s: 'पुणे छावणी VS', go: 'C.r.profile' }, { d: 1, av: 'A', t: 'DISTRICT · पुणे ग्रामीण · Anil Patil', s: 'Dist President · + NS', b: '+ NS', btone: 'gold', go: 'C.r.profile' }, { d: 2, av: 'V', t: 'Vikas Joshi · Reg Coord', s: 'addn scope · §C3.20', kids: false, b: 'addn', btone: 'purple' }, { d: 1, av: 'S', t: 'BLOCK LEADS · 6 · Sunita Joshi · Haveli', s: '+ ZP', b: '+ ZP', btone: 'gold', go: 'C.r.profile' }, { d: 2, av: '?', t: 'VACANT · Khed', s: 'fill the slot (informational)', kids: false, b: 'VACANT', btone: 'danger' }, { d: 1, av: 'N', t: 'WINGS · Mahila · Nita Patel · Dist', s: 'Yuva · Yogesh M · Farmers', tone: 'purple', open: false }, { d: 1, av: '⚖', t: 'AD-HOC · §C3.19 ELECTION', s: 'Screening Committee · 5 · Manifesto · (Disciplinary always hidden)', tone: 'gold', open: false, toast: 'Visible during MCC per §9.14 + §9.25' }, { d: 1, av: '⊟', t: 'COLLAPSED · 168 booth reps', s: '+ 134 more reps · tap level to expand', kids: false, toast: 'Expanded' }] }],
    ['card', { t: 'RELATED REPS · similar designations', s: 'Vaibhav · NS W12 (non-party) · Suresh · NS W3 (opposition)', toast: 'Cross-cut' }],
    ['note', { t: 'PRIVACY · §C3.16 · Anil sees: name · ward only · own connections hidden from Anil · default', tone: 'purple', go: 'C.r.privacy' }],
    ['btn', { t: '+ Request §C3.9 (selected rep)', kind: 'gold', go: 'C.r.request' }]
  ] });
  s('C.r.detail', { app: 'C', f: 'C3', title: 'Anil Patil · connection', sub: 'accepted 22 May · 18 days · delegated to OSD Sunita · §1.22', right: { i: '⋯', sheet: { t: 'Connection', body: [['list', { items: [{ t: '↗ Escalate back to Anil directly', toast: 'Pulled back from OSD · audit row' }, { t: '⚙ Adjust visibility · §C3.16', go: 'C.r.privacy' }, { t: 'End connection · §C3.15', go: 'C.r.connections' }] }]] } }, caps: ['C3.12', 'C3.13', 'C3.8', 'C3.16'], body: [
    ['sec', { t: 'Grievances via this connection · §C3.12' }],
    ['list', { items: [{ t: 'T-5224 · पाण्याची जुळवणी समस्या', s: 'routed via Anil · §C3.14 · 2d ago', b: 'IN PROGRESS', btone: 'warn', go: 'C.my.timeline' }, { t: 'T-5180 · मीटर रीडिंग दुरुस्ती', s: '8 दिवस back · OSD Sunita handled', b: '★4.8', btone: 'gold', go: 'C.my.timeline' }] }],
    ['note', { t: 'CONNECTION VALUE · 2 grievances solved faster · avg resolution 11h vs ward 18h · civic-authority advantage real', tone: 'ok' }],
    ['sec', { t: 'DM thread · §C3.13 · moderated per §5' }],
    ['chat', { msgs: [{ me: true, t: 'नमस्कार सर. वाकड लेन 7 मध्ये पाणी मूलभूत समस्या आहे. नगरसेवक भूमिकेत मार्गदर्शन हवे.', time: '22 May 6 PM' }, { who: 'OSD Sunita on behalf of Anil · §1.34', t: 'नमस्कार ताई. अनिल साहेबांच्या सूचनेने मी पुढे करत आहे. PMC water dept शी बोलणे झाले. T-5224 राहील.', time: '23 May 9 AM', tone: 'gold' }, { me: true, t: 'धन्यवाद. वेळेची काही माहिती?', time: '2d ago' }, { who: 'OSD Sunita on behalf of Anil', t: '3-4 दिवसांत. विशेष तक्रार file कराल का? §3 SLA tracking होईल → 1-tap convert', time: '2d ago', tone: 'gold' }] }],
    ['btn', { t: '→ §3 TICKET · convert this thread', kind: 'secondary', go: 'C.g.cat' }],
    ['composer', { ph: 'message Anil’s office …' }],
    ['sec', { t: 'Binding history · §C3.8' }],
    ['tl', { items: [{ t: 'Anil Patil · current', s: 'Dist Lead + Nagar Sevak · accepted 22 May 2026 · 18d · delegated to OSD Sunita', st: 'cur' }, { t: 'Sunita Joshi · active', s: 'Block Lead + ZP Member · accepted 12 Apr · 38d', st: 'done' }, { t: 'PRIMARY · Sakhi Priya · current', s: 'since Aug 2025 · 9 mo', st: 'done' }, { t: 'Sakhi Anita · history', s: 'Mar 2025 – Aug 2025 · 5 mo · 3 grievances · all preserved', st: 'todo' }, { t: 'Sakhi Manisha · first', s: 'CRN issuance · Aug 2024', st: 'todo' }] }],
    ['small', { t: '§3.24 + §9.8 · all bindings audit-preserved · past grievances stay with the handler who actually worked' }]
  ] });
  s('C.r.privacy', { app: 'C', f: 'C3', title: 'Privacy & visibility', sub: '§C3.16 · what reps can see about you', caps: ['C3.16'], body: [
    ['sec', { t: 'My visibility to reps' }],
    ['radio', { opts: [{ t: 'Name + ward only (default)', s: 'phone platform-masked' }, { t: 'Name + phone proactively' }, { t: 'Only via grievances' }], v: 0 }],
    ['sec', { t: 'Per-connection cross-visibility' }],
    ['toggle', { label: 'Anil Patil can see my other connections', on: false }], ['toggle', { label: 'Sunita Joshi can see my other connections', on: false }],
    ['sec', { t: 'Per-rep contact preferences' }],
    ['toggle', { label: 'Allow calls (platform-masked)', on: true }], ['toggle', { label: 'Allow WhatsApp', on: true }],
    ['small', { t: 'Every setting change writes a §9.8 audit row.' }],
    ['btn', { t: 'Save', go: 'back' }]
  ] });

  /* ---------- §C4 Schemes ---------- */
  s('C.s.list', { app: 'C', f: 'C4', title: 'योजना · Schemes', sub: 'तुम्ही पात्र असलेल्या · ranked by match · §C4.1', back: 'C.home', caps: ['C4.1', 'C4.6', 'C4.5'], body: [
    ['card', { t: 'तुमच्यासाठी संभाव्य लाभ · ₹1,500 + ₹1,200 दरमहा', s: '5 schemes · EPIC + profile auto-match · 0 search', tone: 'ok' }],
    ['chips', { opts: ['All 5', 'Women · 2', 'Senior · 1', 'Housing · 1'], v: 0 }],
    ['card', { t: 'मुख्यमंत्री लाडकी बहीण योजना', s: 'Ladki Bahin Yojana · Maharashtra women 21-65 · ✓ age 42 · ✓ Maharashtra · ✓ household < ₹2.5L · ✓ bank acct', b: '100% · ₹1500/mo', btone: 'ok', go: 'C.s.detail', body: [['pills', { items: [{ t: '§C4.5 · MAHILA', tone: 'purple' }] }], ['btn', { t: 'अर्ज करा · Apply', go: 'C.s.docs' }]] }],
    ['card', { t: 'अन्नपूर्णा सेवा · आईसाठी', s: 'senior pension · आई वय 65 · senior cert upload required', b: '92% · ₹1200/mo', btone: 'ok', go: 'C.s.detail' }],
    ['card', { t: 'PM आवास योजना (शहरी)', s: 'PMAY-U · housing subsidy · borderline income proof', b: '78%', btone: 'warn', go: 'C.s.detail', body: [['note', { t: '§C4.6 · Anil-Nagar Sevak boost · तुमचा connect Anil नगरसेवक handler · 14-day vs 45-day SLA', tone: 'gold' }]] }],
    ['card', { t: 'कन्या विद्याधन · scholarship', s: 'for daughter Anjali · Yuva-aged · §C4.5 Yuva Aghadi handler', b: '85% · ₹15,000', btone: 'ok', go: 'C.s.detail' }],
    ['card', { t: 'पाण्याचे कनेक्शन subsidy', s: 'PMC tap connection scheme · documentation gap', b: '68%', btone: 'warn', go: 'C.s.detail' }],
    ['link', { t: '📋 माझे 2 अर्ज पाहा · §C4.3', go: 'C.s.apps' }],
    ['small', { t: 'Long-press a card → “why this match?”. EPIC not verified → amber “verify EPIC to confirm”. MCC-restricted schemes grey out.' }]
  ] });
  s('C.s.detail', { app: 'C', f: 'C4', title: 'मुख्यमंत्री लाडकी बहीण योजना', sub: 'Maharashtra Government · monthly DBT', hdr: 'teal', caps: ['C4.2', 'C4.5'], body: [
    ['h', { t: '₹ 1,500 दरमहा', s: '= ₹18,000/yr · 100% तुमच्यासाठी' }],
    ['sec', { t: 'पात्रता · ELIGIBILITY CHECK' }],
    ['list', { items: [{ i: '✓', t: 'महिला · age 21-65 · तुम्ही 42', tone: 'ok' }, { i: '✓', t: 'Maharashtra निवासी · वाकड वार्ड 47', tone: 'ok' }, { i: '✓', t: 'कुटुंब उत्पन्न < ₹2.5L/yr · EPIC verified', tone: 'ok', toast: 'Source: EPIC data' }, { i: '✓', t: 'बँक खाते आधार-लिंक · DBT ready', tone: 'ok' }] }],
    ['sec', { t: 'कागदपत्रे लागतात · 4' }],
    ['grid', { cols: 4, items: [{ i: '📷', t: 'आधार', s: 'auto-OCR', go: 'C.s.docs' }, { i: '📄', t: 'पासबुक', s: 'first page', go: 'C.s.docs' }, { i: '💍', t: 'विवाह प्रमाण', go: 'C.s.docs' }, { i: '👤', t: 'फोटो', s: 'selfie OK', go: 'C.s.docs' }] }],
    ['card', { av: 'N', t: 'HANDLER · §C4.5 WING-BOUND · नीता पाटील', s: 'Mahila Aghadi District Coordinator · पुणे ग्रामीण · महिला योजना exclusively handles · §C4.8 privacy', tone: 'purple', go: 'C.r.profile' }],
    ['note', { t: 'अंदाजे वेळ · submit → 1 दिवस route → 3-5 दिवस verify → DBT begin', tone: 'info' }],
    ['btn', { t: 'अर्ज करा · 4 docs upload → §C4.4', go: 'C.s.docs' }],
    ['small', { t: 'Handler on leave → Acting from same wing. External portal step → deep-link after our handler verifies.' }]
  ] });
  s('C.s.docs', { app: 'C', f: 'C4', title: 'कागदपत्रे जोडा', sub: 'Step 2 of 3 · §C4.4 · 3 of 4 captured', caps: ['C4.4', 'C4.8'], body: [
    ['bar', { v: 75, l: 'Documents', r: '3 / 4' }],
    ['list', { items: [{ i: '📷', t: 'आधार कार्ड', s: 'XXXX-XXXX-4567 · name match ✓', b: '✓ OCR VALID', btone: 'ok', toast: 'Preview · re-capture' }, { i: '📄', t: 'बँक पासबुक', s: 'SBIN0001234 · holder: Lakshmi B.', b: '✓ IFSC', btone: 'ok', toast: 'Preview' }, { i: '💍', t: 'विवाह प्रमाणपत्र', s: 'issued 14 Feb 2008 · Pune district', b: '✓ DATE OCR', btone: 'ok', toast: 'Preview' }, { i: '📷', t: 'अलिकडचा फोटो', s: 'selfie OK · पिवळ्या/पांढऱ्या पार्श्वभूमी', b: 'PENDING', btone: 'warn', toast: 'Camera · selfie mode with guideline overlay' }] }],
    ['note', { t: '🔒 §C4.8 · WING-BOUND PRIVACY · सर्व कागदपत्रे फक्त Mahila Aghadi handler नीता पाहेल · पुरुष कार्यकर्ता कधीही पाहणार नाही', tone: 'purple', go: 'C.s.privacy' }],
    ['small', { t: 'total 4.2 MB · auto-compressed · OCR mismatch → red warning · multi-page PDF supported' }],
    ['row', { items: [{ t: 'रद्द', kind: 'secondary', go: 'back' }, { t: 'पुढे · submit when 4 docs ready', go: 'C.s.apps' }] }]
  ] });
  s('C.s.apps', { app: 'C', f: 'C4', title: 'माझे अर्ज', sub: '3 अर्ज · 1 active · 2 मंजूर · §C4.3', right: { i: '⋯', toast: 'Filter · All / Active / Approved / Rejected' }, caps: ['C4.3', 'C4.7', 'C4.6'], body: [
    ['kpi', { items: [{ v: '2', l: 'मंजूर', tone: 'ok' }, { v: '1', l: 'in progress', tone: 'warn' }, { v: '₹2.7L', l: 'annual benefit', tone: 'gold' }] }],
    ['card', { t: 'A-7501 · IN PROGRESS · DAY 2 / 5 · ₹1500/mo', s: 'मुख्यमंत्री लाडकी बहीण · submitted 22 May · 4 docs accepted · OCR clean · 📋 नीता पाटील · Mahila Aghadi District Coord · §C2.6 mirror · verifying Aadhaar against state DB · ETA 3 दिवस', tone: 'warn', sheet: { t: 'A-7501 · timeline · §C4.7', body: [['tl', { items: [{ t: 'Submitted · 22 May', st: 'done' }, { t: 'Routed → Nita Patel as Mahila Aghadi Dist Coord', st: 'done' }, { t: 'In Progress · state DB verify', st: 'cur' }, { t: 'Resolved · DBT begins', st: 'todo' }] }]] } }],
    ['sec', { t: 'मंजूर · APPROVED · 2' }],
    ['card', { t: 'A-7320 · APPROVED ★5 · ₹1200/mo', s: 'अन्नपूर्णा सेवा · आईसाठी · approved 8 May · DBT monthly · नीता पाटील handled · Mahila Aghadi', tone: 'ok', go: 'C.s.privacy' }],
    ['card', { t: 'A-7198 · APPROVED ★5 · ₹0 fee waiver', s: 'पाण्याचे कनेक्शन · approved 3 Apr · PMC bypass · meter installed · अनिल पाटील as Nagar Sevak Ward 7 · §C4.6 boost', tone: 'ok' }],
    ['sec', { t: 'DBT ledger · last 3 months' }],
    ['list', { items: [{ t: 'May · Annapurna · आईच्या बँकेत', right: '+₹1200', toast: 'Bank app deep-link' }, { t: 'Apr · Annapurna', right: '+₹1200' }, { t: 'Mar · Annapurna', right: '+₹1200' }] }],
    ['btn', { t: '+ नवीन योजना शोधा · §C4.1', kind: 'secondary', go: 'C.s.list' }],
    ['small', { t: 'Rejected → red border + reason + reapply path. DBT failure → alternative payout offered.' }]
  ] });
  s('C.s.privacy', { app: 'C', f: 'C4', title: 'तुमचे कागदपत्रे सुरक्षित', sub: 'privacy by structure · §C4.8 · Annapurna app', hdr: 'purple', caps: ['C4.8'], body: [
    ['sec', { t: 'कोण पाहू शकेल · WHO CAN SEE' }],
    ['list', { items: [{ i: '✓', t: 'नीता पाटील · Mahila Aghadi District Coord', s: '§C4.5 handler · Mahila wing only', tone: 'ok' }, { i: '✓', t: 'Mahila Aghadi Backup (in case नीता leave)', s: 'Acting Coord · §5.24 · same wing', tone: 'ok' }, { i: '✓', t: 'Compliance · only with audit reason', s: '§9.8 audit-bumped · you are notified', tone: 'ok' }] }],
    ['sec', { t: '⊘ कोण पाहू शकत नाही · WHO CANNOT SEE' }],
    ['list', { items: [{ i: '✗', t: 'कोणताही पुरुष कार्यकर्ता · NO male workers', s: 'Ravi (Booth Pres), Anil (Dist Lead), Kiran (MLA) — all blocked', tone: 'danger', toast: 'Blocked by §C4.8 wing-bound rule · not a permission setting' }, { i: '✗', t: 'Main party leaders (non-Mahila)', s: 'Block / District / State — all blocked · attempts audit-logged + visible to you', tone: 'danger' }] }],
    ['card', { t: '📋 ACCESS LOG · 3 events · सर्व Mahila Aghadi', s: 'view detail →', sheet: { t: 'Access log', body: [['tl', { items: [{ t: 'Nita Patel · viewed Aadhaar', s: '23 May 10:02 · verification', st: 'done' }, { t: 'Nita Patel · viewed passbook', s: '23 May 10:04', st: 'done' }, { t: 'Acting Coord Vandana · viewed summary', s: '24 May · Nita on leave', st: 'done' }] }]] } }],
    ['note', { t: 'structural privacy beats per-citizen permission settings because it doesn’t require trust · §C4.8 promise', tone: 'purple' }],
    ['btn', { t: 'Report misuse', kind: 'danger', toast: 'Compliance escalation' }],
    ['btn', { t: 'अर्जाकडे परत · Back to app', kind: 'secondary', go: 'C.s.apps' }]
  ] });

  /* ---------- §C5 Events ---------- */
  s('C.e.feed', { app: 'C', f: 'C5', title: 'कार्यक्रम आणि बातम्या', sub: 'तुमच्यासाठी निवडलेले · §C5.4 filter', back: 'C.home', caps: ['C5.1', 'C5.4', 'C5.7', 'C5.5'], body: [
    ['seg', { opts: ['कार्यक्रम · 3', { t: 'स्थानिक माहिती · 5', go: 'C.e.local' }], v: 0 }],
    ['chips', { opts: ['सर्व', 'महिला · 1', 'रॅली · 1', 'आरोग्य · 1'], v: 0 }],
    ['card', { t: '📢 अंदोह मैदान रॅली', s: 'MLA किरण राव · संध्या 5 वा · 📅 1 जून · 10 दिवस · पुणे ग्रामीण DistCmt · §C5.7 · 87 लोक “येणार” · 6 needed ride · §8.21 roster', tone: 'gold', go: 'C.e.detail', body: [['row', { items: [{ t: 'मी येणार · RSVP', go: 'C.e.detail', toast: 'RSVP’d · calendar entry added · §8.21 roster +1' }, { t: '🚗 राइड हवी', kind: 'secondary', go: 'C.e.ride' }] }]] }],
    ['card', { t: '🏥 महिला आरोग्य शिबिर', s: 'वाकड वार्ड कार्यालय · सकाळी 9 · 📅 28 मे · 6 दिवस · free check-ups · Mahila Aghadi वाकड Block · तुम्ही Mahila opted-in · priority surface', b: '✓ RSVP’d', btone: 'ok', tone: 'purple', go: 'C.e.detail' }],
    ['card', { t: 'वार्ड समिती बैठक · 4 जून', s: 'वाकड वार्ड कार्यालय · सायं 6 · 18 दिवस · Ravi Kumar (Booth Pres) यजमान · §C5.7', tone: 'teal', go: 'C.e.detail' }],
    ['sec', { t: 'मागील कार्यक्रम · COMPLETED · 1' }],
    ['list', { items: [{ t: 'पाण्याची स्वच्छता रॅली · 12 मे', s: '★ तुम्ही attended · media · summary पाहा', toast: 'Media gallery + ROI summary (citizen view)' }] }],
    ['small', { t: 'Yuva स्पोर्ट्स + Farmers Cell hidden by §C5.4 filter · 14 raw → 3 surfaced · long-press to share' }]
  ] });
  s('C.e.detail', { app: 'C', f: 'C5', title: 'अंदोह मैदान रॅली', sub: 'RALLY · 1 JUNE · 10 दिवस · MLA किरण राव · पुणे छावणी VS', hdr: 'navy', caps: ['C5.2', 'C5.5', 'C5.6', 'C5.7'], body: [
    ['note', { t: '📍 Aundh Stadium · 1.2 km · सायं 5-8 वा · 87 confirmed · target 200 · 43% full', tone: 'info' }],
    ['card', { t: 'आयोजक · §C5.7 ACCOUNTABILITY', s: 'पुणे ग्रामीण District Cmt · + Mahila Aghadi co-host · §2.4 wing collab · Team Leads: Sunita (Crowd) · Vikas (Sec) · Sunita is your Block Lead · trust signal', tone: 'gold', go: 'C.r.profile' }],
    ['sec', { t: 'कार्यक्रम पत्रिका · AGENDA' }],
    ['tl', { items: [{ t: '5:00 PM · द्वार उघडे · entry', st: 'todo' }, { t: '5:30 PM · सांस्कृतिक कार्यक्रम', st: 'todo' }, { t: '6:00 PM · MLA भाषण · keynote', st: 'todo' }, { t: '7:30 PM · सहभोजन · refreshments', st: 'todo' }] }],
    ['sec', { t: 'तुमचा प्रतिसाद · YOUR RSVP' }],
    ['row', { items: [{ t: '✓ मी येणार', kind: 'gold', toast: 'RSVP’d · §8.21 roster · calendar entry · withdraw within 24h' }, { t: '🚗 राइड हवी', kind: 'secondary', go: 'C.e.ride' }] }],
    ['grid', { cols: 4, items: [{ i: '📅', t: 'कॅलेंडर', toast: 'OS calendar pre-filled' }, { i: '📲', t: 'शेअर', toast: 'Share deep-link' }, { i: '📍', t: 'नकाशा', toast: 'Maps directions' }, { i: '⚠', t: 'तक्रार', s: 'event-related · §C1', go: 'C.g.cat' }] }],
    ['small', { t: 'RSVP’d · Sunita (Crowd Lead) ला तुमची उपस्थिती दिसेल · capacity full → waitlist · cancelled → auto-notify + rides cancelled' }]
  ] });
  s('C.e.ride', { app: 'C', f: 'C5', title: 'राइड हवी · Need a ride', sub: 'अंदोह रॅली · 1 जून · §C5.6 cell-routed', caps: ['C5.6'], body: [
    ['input', { label: 'Pickup from', v: 'घर 47 · लेन 7 · वाकड' }],
    ['input', { label: 'Pickup time', v: '4:30 PM' }],
    ['chips', { opts: ['1 person', '2', '3+', 'wheelchair'], v: 0 }],
    ['card', { t: 'Routes to · Mahila Aghadi cell', s: 'because you opted into Mahila during §C0 · Sakhi Anita receives · female driver constraint · §C5.6', tone: 'purple' }],
    ['small', { t: 'Senior + registered → Senior Welfare Cell · default → Booth Committee · configurable per org · §10.6 ride infra reused' }],
    ['btn', { t: 'राइड विनंती पाठवा', go: 'C.e.feed', toast: 'Ride request sent to Sakhi Anita' }]
  ] });
  s('C.e.local', { app: 'C', f: 'C5', title: 'स्थानिक माहिती', sub: 'वाकड वार्ड 47 · 5 अद्यतने · §C5.3', caps: ['C5.3'], body: [
    ['seg', { opts: [{ t: 'कार्यक्रम · 3', go: 'C.e.feed' }, 'स्थानिक · 5'], v: 1 }],
    ['card', { t: '💧 पाणी पुरवठा बंद · उद्या (28 मे) सकाळी 6 ते दुपारी 2', s: 'वाकड वार्ड 47 + 48 · maintenance पाइप दुरुस्ती · ⚠ टाक्या आज रात्री भरा · PMC source · 9 hours ago', b: 'URGENT', btone: 'danger', sheet: { t: 'PMC notice', body: [['p', { t: 'Official reference · PMC/WS/2026/0421 · escalation contact: PMC water dept' }], ['btn', { t: 'Report incorrect → §C1 (civic-water pre-filled)', kind: 'secondary', go: 'C.g.cat' }]] } }],
    ['card', { t: '🗑 कचरा गाडी वेळ बदलली', s: 'आता सकाळी 7 ऐवजी 6:30 · सोम-शुक्र · effective 1 June · PCMC source · 2 days ago', b: 'CHANGE', btone: 'warn' }],
    ['card', { t: '🎉 गणेशोत्सव रस्ता बंद', s: 'मुख्य रस्ता · 12-15 जून · diversion via Lane 4 · PMC + local mandal · 5 days ago', b: 'FESTIVAL', btone: 'gold' }],
    ['card', { t: '⚡ वीज खंडित · 30 मे संध्या 4-6', s: 'scheduled · MSEB · वाकड subdivision · 1 hr · 6 days ago', b: 'MSEB' }],
    ['card', { t: '🌧 जोरदार पाऊस · 29-30 मे', s: 'IMD ऑरेंज अलर्ट · Pune district · IMD official · 1 hour ago', b: 'IMD', btone: 'purple' }],
    ['note', { t: 'SOURCES · transparent attribution · PMC · PCMC · MSEB · IMD · party-curated · no anonymous broadcasts', tone: 'info' }],
    ['toggle', { label: 'Push for water cuts', on: true }], ['toggle', { label: 'Push for severe weather only', on: true }]
  ] });

  /* ---------- §C6 Get Help ---------- */
  s('C.h.home', { app: 'C', f: 'C6', title: 'मदत हवी आहे का?', sub: 'Need help? Hold the red button for 2 seconds', hdr: 'red', back: 'C.home', caps: ['C6.1', 'C6.2'], body: [
    ['small', { t: 'Press is private — only your trusted circle sees the alert.' }],
    ['btn', { t: 'SOS · HOLD 2 SEC', kind: 'sos', hold: 2000, go: 'C.h.active' }],
    ['sec', { t: 'तुमचे संरक्षक · YOUR PROTECTORS' }],
    ['list', { items: [{ av: 'SP', t: 'Sakhi Priya', s: 'Wakad Booth 47 · 8 min away', go: 'C.r.profile' }, { av: 'RK', t: 'Rohan (son)', s: '+91-98xxx · trusted', go: 'C.p.circle' }] }],
    ['grid', { cols: 2, items: [{ i: '🚑', t: '108 Ambulance', s: 'auto-dial parallel · GPS shared', toast: '108 dialled · GPS shared' }, { i: '👮', t: '100 Police', s: 'single-tap · no hold needed', toast: '100 dialled' }] }],
    ['sec', { t: '§C6.2 · within 5 km · verified by Sakhi network' }],
    ['grid', { cols: 4, items: [{ i: '🩸', t: 'रक्त', go: 'C.h.finder' }, { i: '⚕', t: 'रुग्णालय', go: 'C.h.finder' }, { i: '🚑', t: 'अॅम्बुलन्स', go: 'C.h.finder' }, { i: '💊', t: 'औषधे', go: 'C.h.finder' }] }],
    ['list', { items: [{ i: '🧮', t: 'Discreet panic (calculator) · §C6.5', go: 'C.h.calc' }, { i: '⛓', t: 'See the escalation chain · §C6.4', go: 'C.h.chain' }] }]
  ] });
  s('C.h.active', { app: 'C', f: 'C6', title: 'मदतीची विनंती सुरू आहे', sub: 'HELP REQUEST ACTIVE · T+12 seconds · 4 people contacted', hdr: 'red', back: false, caps: ['C6.3', 'C6.6', 'C6.5'], body: [
    ['card', { av: 'SP', t: 'Sakhi Priya is coming', s: 'Wakad Booth 47 · 8 minutes away · picked up at T+12s · on her bike now · ✓ Acknowledged · ETA 8 min · §C6.6', tone: 'ok' }],
    ['sec', { t: 'इतर मदतकर्ते · OTHER HELPERS' }],
    ['list', { items: [{ i: '🚑', t: '108 Ambulance · dispatched', s: 'ETA 15 min · operator confirmed at T+18s', b: 'EN ROUTE', btone: 'ok' }, { av: 'RK', t: 'Rohan (son) · ringing', s: 'First call at T+4s · re-dialling now', b: 'RINGING', btone: 'warn' }] }],
    ['card', { t: 'सर्व ठीक आहे का? · FALSE ALARM? · 18s LEFT', s: 'If you pressed by mistake, tap below within 30 seconds. After that, helpers continue regardless — safer that way.', tone: 'warn', body: [['btn', { t: 'मला बरे आहे · I AM OK · CANCEL ALERT', kind: 'secondary', go: 'C.h.home', toast: 'Helpers stood down · “false alarm” logged' }]] }],
    ['sec', { t: 'घटनाक्रम · LIVE THREAD' }],
    ['tl', { items: [{ t: 'T+45s · NOW · 🔔 Sakhi Priya at the door — opening', st: 'cur' }, { t: 'T+18s · 🚑 108 dispatched — 15 min ETA', st: 'done' }, { t: 'T+12s · ✓ Sakhi Priya acknowledged', st: 'done' }, { t: 'T+0 · 🆘 SOS pressed (held 2 seconds)', st: 'done' }] }],
    ['link', { t: 'What if Sakhi doesn’t answer? → escalation chain', go: 'C.h.chain' }]
  ] });
  s('C.h.calc', { app: 'C', f: 'C6', title: '🧮 कॅल्क्युलेटर · Calculator', sub: 'looks ordinary · hold “=” for 3 sec', hdr: 'none', caps: ['C6.5'], body: [
    ['calc', { go: 'C.h.silent' }],
    ['note', { t: '🔒 गुप्त पॅनिक · DISCREET PANIC · Hold “=” 3 seconds. No sound, no flash, no notification. Mahila Aghadi Sakhi gets your GPS + silent audio. For: stalker, harassment, unsafe ride, domestic threat.', tone: 'purple' }],
    ['small', { t: 'Routes to: Sakhi Anita (Mahila Aghadi, women-only) · 100 (silent SMS) · trusted sister · configure under Profile · Get Help' }],
    ['link', { t: '‹ back (wireframe only)', go: 'C.h.home' }]
  ] });
  s('C.h.silent', { app: 'C', f: 'C6', title: '🧮 कॅल्क्युलेटर', sub: 'screen looks normal · panic active silently', hdr: 'none', caps: ['C6.5', 'C6.6'], body: [
    ['calc', { go: 'C.h.silent' }],
    ['note', { t: '🎙 Recording · 0:12 · silent · GPS pin every 15s · Only Sakhi Anita (Mahila) + audit see this. Phone screen looks normal.', tone: 'purple' }],
    ['chat', { msgs: [{ who: 'Sakhi Anita · silent SMS', t: 'Are you safe to text? Reply Y or N', time: 'T+10s' }, { me: true, t: 'N', time: 'T+15s' }, { who: 'Sakhi Anita', t: 'Stay calm. 100 patrol alerted with your location + audio. Keep the phone in your lap.', time: 'T+16s' }] }],
    ['link', { t: '‹ back (wireframe only)', go: 'C.h.home' }]
  ] });
  s('C.h.chain', { app: 'C', f: 'C6', title: 'वाढीव मदत · ESCALATING', sub: 'First helper didn’t pick up · expanding circle · §C6.4', hdr: 'red', caps: ['C6.4', 'C6.7'], body: [
    ['tl', { items: [{ t: 'T+0s — Sakhi Priya (Wakad Booth 47)', s: 'Phone rang · no answer · voicemail full · ✕ no ack by T+30s · auto-escalated', st: 'red' }, { t: 'T+30s — Ravi Khairnar (Ward Lead, Wakad)', s: 'Phone is ringing now · ⏱ awaiting ack · T+22s into 30s window', st: 'cur' }, { t: 'T+60s — Sunita Joshi (Block Lead)', s: 'Will be pinged in 38 seconds if Ravi doesn’t pick up', st: 'todo' }, { t: 'T+90s — Senior Welfare Cell coordinator · Anil Patil', s: 'final tier in chain', st: 'todo' }] }],
    ['card', { t: '🚑 PARALLEL — 108 dispatched at T+18s', s: 'Not waiting for the chain · ambulance independent · EN ROUTE · ETA 12 min', tone: 'ok' }],
    ['note', { t: 'का साखळी? If one Sakhi can’t answer (sleeping, signal, phone dead), the next person tries. Configurable in §9.18 escalation policy · admin only.', tone: 'info' }],
    ['card', { t: 'Sympathiser amplification · §C6.7 · opt-in', s: 'For lost child / accident witness / missing person: fan the alert to nearby sympathisers within 1 km. Identity never revealed without consent.', tone: 'purple', body: [['toggle', { label: 'Amplify this alert to nearby sympathisers', on: false }]] }],
    ['btn', { t: 'मला बरे आहे · I AM OK · STOP CHAIN', kind: 'secondary', go: 'C.h.home' }],
    ['small', { t: 'Audit row written for every step · §9.8 hash-chained' }]
  ] });
  s('C.h.finder', { app: 'C', f: 'C6', title: 'Help finder · §C6.2', sub: 'Blood · Hospital · Ambulance · Medicine — within 5 km', caps: ['C6.2'], body: [
    ['chips', { opts: ['🩸 Blood', '⚕ Hospital', '🚑 Ambulance', '💊 Medicine'], v: 0 }],
    ['chips', { opts: ['B+', 'O+', 'A+', 'AB−', '24×7', 'takes insurance'], v: [0], multi: true }],
    ['list', { items: [{ i: '🩸', t: 'Jankalyan Blood Bank · 1.8 km', s: 'B+ available · 24×7 · verified by Sakhi 3 days ago', b: 'OPEN', btone: 'ok', toast: 'Platform-masked call · directions' }, { i: '⚕', t: 'Aundh Civil Hospital · 2.4 km', s: 'takes insurance · emergency · verified weekly', b: 'OPEN', btone: 'ok', toast: 'Call · directions' }, { i: '🚑', t: 'Sahyadri ambulance · 3.1 km', s: 'wheelchair-equipped · ETA 12 min', toast: 'Call' }, { i: '💊', t: 'Wakad 24h Medical · 0.9 km', s: 'night counter · verified', toast: 'Call' }] }],
    ['small', { t: 'Entries refreshed weekly by the responsible Sakhi or auto-flagged stale. No PII leaves the device until tap-to-call.' }]
  ] });

  /* ---------- §C7 Profile ---------- */
  s('C.p.home', { app: 'C', f: 'C7', title: 'माझे प्रोफाइल · My Profile', back: 'C.home', nav: 'Profile', caps: ['C7.1', 'C7.12', 'C7.13'], body: [
    ['card', { av: 'LK', t: 'लक्ष्मी कुलकर्णी · Lakshmi Kulkarni · 73', s: '📍 वाकड, पुणे-पश्चिम · बूथ 47 · NCP-PUN-WAK-08421 · member since Apr 2026 · updated 2 days ago', tone: 'navy', go: 'C.p.identity' }],
    ['pills', { items: [{ t: '👵 SENIOR', tone: 'gold' }, { t: '🩺 MEDICAL', tone: 'purple' }, { t: '💚 SYMPATHISER', tone: 'ok' }] }],
    ['kpi', { items: [{ v: '3', l: 'trusted circle · 2 family · 1 Sakhi', go: 'C.p.circle' }, { v: '7', l: 'linked schemes · §C4', go: 'C.s.list' }, { v: '12', l: 'my representatives', go: 'C.r.chain' }] }],
    ['banner', { t: 'Your SOS reaches only 108 if the trusted circle is empty — add at least one trusted person.', tone: 'warn', go: 'C.p.circle' }],
    ['sec', { t: 'सेटिंग्ज · SETTINGS' }],
    ['list', { items: [{ i: '👤', t: 'ओळख · Identity & address', s: 'name, photo, age, ward, polling booth', go: 'C.p.identity' }, { i: '🛡', t: 'विश्वासू मंडळ · Trusted circle (3)', s: 'Sakhi Priya · Rohan (son) · Sushma (daughter)', tone: 'danger', go: 'C.p.circle' }, { i: '🏷', t: 'टॅग्ज · Tags & cell memberships', s: 'Senior · Medical · OBC · Sympathiser opt-in', go: 'C.p.tags' }, { i: '🌐', t: 'भाषा · Language · Marathi (मराठी)', s: 'switch any time · per-screen override', go: 'C.p.language' }, { i: '🔒', t: 'गोपनीयता · Privacy & retention', s: 'data retention · audio · location · DPDP controls', go: 'C.p.privacy' }, { i: '📱', t: 'साधने · Devices & sign-out', s: '2 active devices · biometric on', go: 'C.p.devices' }, { i: '🆘', t: 'Help & support · §C7.12', s: 'feedback · FAQ · contact citizen-support · 24h SLA', sheet: { t: 'Help & support', body: [['list', { items: [{ t: 'FAQ', toast: 'FAQ' }, { t: 'Send feedback', toast: 'Feedback form' }, { t: 'Chat with citizen-support', toast: 'In-app chat fallback' }, { t: 'Report a bug', toast: 'Bug report' }] }]] } }, { i: 'ℹ', t: 'About · §C7.13', s: 'v2.1.0 · last sync 2 min ago · legal notices · open-source credits', toast: 'About · policy version registry' }] }]
  ] });
  s('C.p.identity', { app: 'C', f: 'C7', title: 'ओळख · Identity & address', sub: 'C7.1 + C7.2 · every save recomputes schemes, Sakhi, reps', right: { i: 'Save', go: 'C.p.home', toast: 'Saved · downstream caches recomputed in 3s' }, caps: ['C7.1', 'C7.2'], body: [
    ['ph', { t: 'LK · photo optional', h: 80, kind: 'round', toast: 'Photo picker' }],
    ['input', { label: 'नाव (मराठी) · required', v: 'लक्ष्मी कुलकर्णी' }], ['input', { label: 'Name (English)', v: 'Lakshmi Kulkarni' }],
    ['input', { label: 'Date of birth · age 73', v: '14 / 08 / 1952' }], ['chips', { opts: ['महिला', 'पुरुष', 'इतर'], v: 0 }],
    ['sec', { t: 'Address & booth · C7.2' }],
    ['input', { label: 'Constituency', v: 'पुणे छावणी विधानसभा' }], ['input', { label: 'Ward', v: 'वाकड वॉर्ड 47' }], ['input', { label: 'Polling booth', v: 'Booth 47' }],
    ['input', { label: 'Home pin', v: 'घर 52 · लेन 3 · वाकड', hint: 'drives nearest-Sakhi resolver · work pin optional' }],
    ['note', { t: 'Change address → CRN suffix may update, Sakhi re-binds, schemes & reps recompute. Open grievances stay with their current handler.', tone: 'warn' }]
  ] });
  s('C.p.circle', { app: 'C', f: 'C7', title: 'विश्वासू मंडळ · Trusted circle', sub: 'These people are notified instantly when you press SOS · C7.4', caps: ['C7.4'], body: [
    ['card', { av: 'SP', t: 'Sakhi Priya Bhonsle', s: 'Wakad Booth 47 · NCP Sakhi · 8 min away · ✓ accepted · since 2026-04-12 · auto-suggested', b: '⭐ PRIMARY · rings first', btone: 'gold', sheet: { t: 'Sakhi Priya', body: [['list', { items: [{ t: 'Demote from primary', toast: 'Reordered · audit row' }, { t: 'Remove', toast: 'Removed' }] }]] } }],
    ['card', { av: 'RK', t: 'Rohan Kulkarni · मुलगा', s: 'son · +91 98xxx · Bengaluru · ✓ accepted · since 2026-05-24 · today', sheet: { t: 'Rohan', body: [['btn', { t: 'Make primary protector', go: 'C.p.circle' }], ['btn', { t: 'Remove', kind: 'danger', go: 'C.p.circle' }]] } }],
    ['card', { av: 'SK', t: 'Sushma Kale · मुलगी', s: 'daughter · +91 99xxx · Mumbai · ⏱ pending · invited 2026-05-24 · 41h left to accept', b: 'PENDING', btone: 'warn', toast: 'Consent window · 48h · auto-decline if no response' }],
    ['btn', { t: '+ नवीन व्यक्ती जोडा · Add someone', kind: 'secondary', sheet: { t: 'Add to trusted circle', body: [['input', { label: 'Name', ph: 'family · friend · neighbour · Sakhi' }], ['input', { label: 'Phone', ph: '+91' }], ['chips', { opts: ['Family', 'Friend', 'Neighbour', 'Sakhi'], v: 0 }], ['small', { t: 'They get a consent prompt · 48-hour window · you are notified either way' }], ['btn', { t: 'Send consent request', go: 'C.p.circle' }]] } }],
    ['small', { t: '↕ drag to reorder · primary rings first · others ring in parallel from T+4s · max 7' }],
    ['card', { t: '🔇 गुप्त वगळणी · SILENT EXCLUDE', s: 'If anyone in your family is a threat, exclude them silently. They will not know. Excluded: 0 people · Mahila Aghadi can advise', tone: 'purple', sheet: { t: 'Silent exclude', body: [['p', { t: 'Pick a person. They see no notification, no list change, no audit-visible event from their side.' }], ['list', { items: [{ t: 'Rohan Kulkarni', toast: 'Excluded silently' }, { t: 'Sushma Kale', toast: 'Excluded silently' }] }]] } }],
    ['note', { t: '💡 An empty trusted circle means your SOS reaches only 108. §C6.1 + §C6.4 escalation chain depend on this list.', tone: 'danger' }]
  ] });
  s('C.p.tags', { app: 'C', f: 'C7', title: 'टॅग्ज आणि सेल्स · Tags & cells', sub: 'Each tag changes how features behave for you', caps: ['C7.5', 'C7.6', 'C7.7', 'C7.8', 'C7.9'], body: [
    ['toggle', { label: '👵 ज्येष्ठ नागरिक · Senior citizen · C7.5', s: 'Auto-on at age 60 · you are 73 · cannot be turned off here · routes SOS to Senior Welfare Cell · 12 schemes matched', on: true, locked: true }],
    ['card', { t: '🩺 वैद्यकीय संदर्भ · Medical context', s: 'Diabetes T2 · Hypertension · Penicillin allergy · shown to Sakhi + 108 operator on SOS · not to anyone else · §C6.6', tone: 'purple', sheet: { t: 'Medical conditions', body: [['check', { label: 'Diabetes T2', on: true }], ['check', { label: 'Hypertension', on: true }], ['check', { label: 'Penicillin allergy', on: true }], ['input', { ph: '+ add condition' }], ['btn', { t: 'Save', go: 'C.p.tags' }]] } }],
    ['toggle', { label: '👩 महिला सुरक्षा · Women’s safety routing · C7.6', s: 'Routes SOS to Mahila Aghadi (women-only) · enables calculator-discreet panic gesture · §C6.5 · Sakhi Anita auto-assigned', on: true }],
    ['sec', { t: 'सेल सदस्यत्व · CELL MEMBERSHIPS · C7.7 · per-cell consent' }],
    ['grid', { cols: 3, items: [{ i: '🌾', t: 'शेतकरी', s: 'Farmer cell', toast: 'Opted in' }, { i: '🤝', t: 'OBC', s: 'declared · 8 schemes', sel: true, toast: 'Declared · confirmation modal for political-affiliation cells' }, { i: '🎓', t: 'तरुण', s: 'Youth cell', toast: 'Opted in' }, { i: '⚖', t: 'अल्पसंख्याक', s: 'Minority', toast: 'Opted in' }, { i: '🏛', t: 'SC/ST', s: 'SC/ST cell', toast: 'Confirmation modal' }, { i: '+', t: 'अधिक', s: 'all 14', toast: 'All 14 cells' }] }],
    ['card', { t: '💚 समर्थक नेटवर्क · Sympathiser network · C7.8', s: 'Receive nearby alerts within 1 km · §C6.7 · lost child · accident witness · missing person · identity stays private', tone: 'ok', body: [['toggle', { label: 'Opt in', on: true }]] }],
    ['card', { t: '🪪 EPIC (Voter ID) · linked · C7.9', s: 'XXY1234567 · enables §10 voter list cross-link · §C3 rep voting record · ✓ verified once · no active polling', body: [['btn', { t: 'Re-verify / unlink', kind: 'secondary', toast: 'EPIC already claimed by another profile? → support' }]] }],
    ['note', { t: '💡 बदल लगेच लागू होतात · no save button · schemes & routing recompute within 3 sec', tone: 'info' }]
  ] });
  s('C.p.language', { app: 'C', f: 'C7', title: 'भाषा · Language', sub: 'C7.3 · all Citizen surfaces · push · §C6 audio playback', caps: ['C7.3'], body: [
    ['radio', { opts: [{ t: 'मराठी (Marathi) · default' }, { t: 'हिंदी (Hindi)' }, { t: 'English' }], v: 0 }],
    ['toggle', { label: 'Notification language separate from UI', s: 'per-screen override available', on: false }],
    ['btn', { t: 'Save', go: 'C.p.home' }]
  ] });
  s('C.p.privacy', { app: 'C', f: 'C7', title: 'गोपनीयता · Privacy & data', sub: 'You decide what is kept, for how long · C7.10', caps: ['C7.10', 'C7.14'], body: [
    ['sec', { t: 'डेटा ठेवण्याचा कालावधी · DATA RETENTION' }],
    ['card', { t: '📍 स्थान इतिहास · Location history', s: 'SOS pin, grievance location, scheme distance-match', body: [['seg', { opts: ['30 days', '90 days · current', '365 days'], v: 1 }]] }],
    ['card', { t: '🎙 SOS ऑडिओ · SOS audio recordings', s: 'From discreet panic only · §C6 women’s safety', body: [['seg', { opts: ['7 days · current', '30 days', 'forever'], v: 0 }]] }],
    ['card', { t: '📝 तक्रार मेटाडेटा · Grievance metadata', s: 'Closed grievance summaries · for personal record', body: [['seg', { opts: ['90 days', '365 days', 'forever · current'], v: 2 }]] }],
    ['sec', { t: 'डेटा सामायिकरण · DATA SHARING' }],
    ['toggle', { label: '📊 Aggregate analytics (anonymous)', s: 'Counts and trends, no PII · helps tune ward services', on: true }],
    ['toggle', { label: '🔬 Research with Mahila/SC-ST cells', s: 'De-identified case study contribution · opt-in', on: false }],
    ['list', { items: [{ i: '📋', t: 'तुमचा ऑडिट लॉग · YOUR AUDIT LOG', s: 'every spine event that touched your data · §9.8 hash-chained · CSV export', sheet: { t: 'Your audit log', body: [['tl', { items: [{ t: 'SOS pressed · 11:04 PM · 22 May', st: 'done' }, { t: 'Sakhi Priya viewed profile · 23 May', st: 'done' }, { t: 'Trusted circle · +Rohan · 24 May', st: 'done' }, { t: 'Scheme match recomputed · 24 May', st: 'done' }] }], ['btn', { t: 'Export CSV', kind: 'secondary', toast: 'CSV exported' }]] } }] }],
    ['card', { t: '🗑 खाते हटवा · Delete my account · C7.14', s: 'DPDP right-to-erasure · 14-day grace · everything erased except §9.8 hash digest · SOS protectors notified', tone: 'danger', body: [['btn', { t: 'Begin deletion', kind: 'danger', sheet: { t: 'Delete account?', body: [['p', { t: '(1) everything except a §9.8 hash-digest is erased · (2) SOS protectors notified · (3) 14-day grace to undo. CRN retired forever. Blocked while an SOS is active.' }], ['input', { label: 'Type DELETE', ph: 'DELETE' }], ['btn', { t: 'Start 14-day deletion', kind: 'danger', go: 'C.p.home' }]] } }]] }],
    ['small', { t: 'All changes audited · §9.8 row written · DPDP 2023 · IT Rules 2021' }]
  ] });
  s('C.p.devices', { app: 'C', f: 'C7', title: 'साधने · Devices & sign-out', sub: 'C7.11 · 2 active devices · biometric on', caps: ['C7.11'], body: [
    ['list', { items: [{ t: 'THIS DEVICE · Redmi 12 · Pune', s: 'now · biometric enrolled', tone: 'me' }, { t: 'Son’s phone · Samsung · Bengaluru', s: 'signed in 2 days ago · for remote sign-out help', right: 'Revoke', toast: 'Session revoked · relative notified' }] }],
    ['toggle', { label: 'Biometric unlock on this device', on: true }],
    ['input', { label: 'Session timeout', v: '30 days inactivity' }],
    ['btn', { t: 'Sign out of all other devices', kind: 'danger', toast: 'Other sessions revoked · re-enrol biometric on new device' }],
    ['small', { t: 'Lost phone? Sign out remotely from any other device. §9.8 distinguishes user-initiated from expired sessions.' }]
  ] });
})();
