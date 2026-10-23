# Changelog

## site-v1.0.0-preview.1 · 2026-10-16

Local review and GitHub preview branch; not yet deployed.

- Imported supplied `weup-clock-site.zip` into the app project’s existing `store/site/`.
- Documented private source / public deployment repository ownership and local preview.
- Clarified that group members match their assigned target poses, including mixed combinations.
- Updated support copy for build24’s retirement of the system default sound.

- Validation: JavaScript syntax and local resource/anchor checks passed; Chrome desktop confirmed EN/中文 switching, privacy page, legacy `/#zh` redirect and no console warnings/errors. Mobile layout has not been manually reviewed.
- New landing page (`index.html`): hero with animated pose-matching demo, how it works,
  9 built-in poses + custom poses, privacy, 10 languages, FAQ, App Store download buttons.
- English / 简体中文 toggle (auto-detects browser language, `?lang=zh`).
- App Store link centralised in `assets/config.js`.
- Previous support page moved to `support.html`; `/#support` and `/#zh` redirect there.
- `privacy.html`: navigation now links Home and Support.
- Added README.md, AGENTS.md, robots.txt.

## Before
- Support page (`index.html`) and privacy policy (`privacy.html`).
