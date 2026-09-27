# mywant-guiex guide

A gentle guide (English / 日本語) to **mywant-guiex** — the extension that adds
the canvas, the robot, Web Wants and Kata to the MyWant dashboard.

📖 **https://onelittlenightmusic.github.io/mywant-guiex-guide/**

mywant-guiex's source is private; its builds are public and install with
Homebrew (`brew install mywant-guiex`, releases in
[mywant-gui-dist](https://github.com/onelittlenightmusic/mywant-gui-dist)).
This repository holds only the guide.

## The family of guides

- [MyWant guide](https://onelittlenightmusic.github.io/MyWant/) — installing MyWant, and how Wants work
- [mywant-gui guide](https://onelittlenightmusic.github.io/mywant-gui/) — the dashboard
- **mywant-guiex guide** — this one
- [Developer docs](https://onelittlenightmusic.github.io/mywant-gui-dev/) — building GUI extensions

## Layout

`site/` is static HTML published as it is by `.github/workflows/pages.yml` on
every push to `main` that touches it. `app.js` and `style.css` are shared,
unchanged, with the other two guides (`MyWant/site`, `mywant-gui/site`); copy
them across when one changes. `site.js` names this guide and lists the family;
`content.ja.js` / `content.en.js` hold the topics, with the same ids in both.
