# SolarFunk Labs GitHub Pages update

This package replaces the current GitHub Pages site with a one-page SolarFunk Labs landing page while preserving the retro desktop aesthetic.

## Files

- `index.html` — complete SolarFunk Labs landing page with inline CSS.
- `clubs.html`, `events.html`, `join.html`, `tools.html`, `about.html` — lightweight redirects to `index.html` so old links do not show the previous Anti-Doom-Scroll content.

## Publish steps

Copy these files into the root of `cielomarte/cielomarte.github.io`, replacing the existing files, then commit and push to `main`.

```bash
git clone https://github.com/cielomarte/cielomarte.github.io.git
cd cielomarte.github.io
cp /path/to/solarfunk-site/*.html .
cp /path/to/solarfunk-site/README.md ./SOLARFUNK_UPDATE_README.md
git add index.html clubs.html events.html join.html tools.html about.html SOLARFUNK_UPDATE_README.md
git commit -m "Revise site for SolarFunk Labs"
git push origin main
```

## Remaining configuration

Replace temporary Luma links with your exact Luma calendar or event URLs once they exist. The Ghost newsletter links already point to `https://solarfunklabs.ghost.io/` and `https://solarfunklabs.ghost.io/#/portal/signup`.
