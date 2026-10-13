# NCPConnect clickable wireframe

A clickable mobile wireframe of both NCPConnect apps, built from the 19 feature walkthrough decks and the desk/NCP console mockups in `docs/NCPConnect-mockups-main/`.

## Open it

Open `index.html` in a browser. No build step, no server needed.

- **Screens** tab: every screen, grouped by app and feature.
- **Coverage** tab: every capability from the decks (§0.1 … §C7.14), ticked when a screen implements it. Tap a line to jump to that screen.
- Inside the phone, everything is tappable. The ← key goes back.

## What it covers

- Leader App §0–§10 and Citizen App §C0–§C7.
- 223 screens, 366 capabilities (every capability in the decks' catalogs is implemented by at least one screen).
- Desktop-primary consoles (org structure, master-data workbench, poll-day command centre) are included as compact mobile views so no feature is omitted.

## Files

| File | Contents |
|---|---|
| `index.html` | Shell, styles, screen index panel |
| `app.js` | Renderer, router (`#screenId`), bottom sheets, coverage panel |
| `caps.js` | Capability catalog (feature → id → name) |
| `leader-a.js` | Leader screens §0–§4 |
| `leader-b.js` | Leader screens §5–§10 |
| `citizen.js` | Citizen screens §C0–§C7 |

## Adding or changing a screen

Screens are declared with `W.screen(id, def)`. `def.body` is a list of nodes such as `['list', {items:[…]}]`, `['btn', {t, go}]`, `['tl', {items}]`, `['chips', {opts}]`. Any node with `go: '<screenId>'` navigates; `sheet: {t, body}` opens a bottom sheet; `toast: '…'` shows a toast. Tag each screen with `caps: ['3.7', …]` so the Coverage tab stays accurate.

## For the Flutter build

Each screen id (for example `L.g.ticket`) maps to one route. The component vocabulary (list, card, timeline, chips, segmented control, bottom sheet, keypad, hold-to-confirm) maps directly onto Material widgets.
