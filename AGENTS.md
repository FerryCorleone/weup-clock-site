# Notes for AI agents

- Plain static site. Do **not** add a build step or framework unless asked.
- The App Store link lives only in `assets/config.js` (`APP_STORE_ID` or `APP_STORE_URL`).
  Never hard-code it into HTML; add `data-appstore` to any new download button instead.
- Text: English is written in `index.html`; every translatable element has `data-i18n="key"`.
  Add the Chinese string for the same key in the `ZH` object in `assets/site.js`.
- Product facts (keep copy accurate): 2–4 people, one iPhone, iOS 26.1+, 9 built-in poses
  (3 each for 2/3/4 people), custom poses via 5-second timer or photo import (upper/full body),
  hold the match together for 1.25 s, no account / server / cloud / ads, on-device Apple Vision,
  10 languages. iOS keeps its own lock-screen Stop button — never claim the alarm can't be dismissed.
- Brand: canvas `#F5F4F0`, ink `#20211F`, orange `#FF8A00`, success green `#3DDC84`.
  System font stack only; emphasis = orange colour, no italic/script fonts.
- `privacy.html` and `support.html` URLs are registered in App Store Connect — don't rename them.
- Source of truth: the app project’s `store/site/`; mirror only this directory to the public `FerryCorleone/weup-clock-site` repository root. Never publish the app repository root.
- Public `main` deploys automatically through GitHub Pages. Use a `codex/` preview branch and draft PR until the user approves going live. No build step.
- Website preview/release tags use `site-vX.Y.Z-preview.N` / `site-vX.Y.Z`, separate from iOS builds.
