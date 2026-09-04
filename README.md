# Armoury Wheels Category Pages

Interactive mockup of the proposed **Armoury Wheels** category page structure, built for Armoury Group review.

**Option A: with fitment sections**

## What this is

A clickable, self-contained prototype of the proposed URL and navigation restructure for
[armourygroup.com.au/wheels](https://armourygroup.com.au/wheels/). It replaces the current
Elementor filter query strings (`/wheels/?e-filter-23a817f-pa_wheel=drive`) with real,
indexable category pages.

Two versions exist so the team can compare one variable:

| Version | Repo | Difference |
|---|---|---|
| A: fitment sections | [armoury-wheels-categories](https://github.com/Lilmonstersam/armoury-wheels-categories) | Product grid split into Euro/Jap, US, Trailer and Volvo sections |
| B: tags on cards | [armoury-wheels-categories-v2](https://github.com/Lilmonstersam/armoury-wheels-categories-v2) | Single grid, fitment shown as tags on each card (current setting) |

**This repo is Option A.** Each category page groups its products under Euro/Jap, US, Trailer and Volvo headings, and every section links through to its fitment page.

## Pages included

Use the Wheel Type and Wheel Fitment bars to move between them. Both bars stay pinned as you scroll.

**Wheel type**

- `/wheels/` — All Wheels (parent, 25 products)
- `/wheels/drive-wheels/` — Drive Wheels (9)
- `/wheels/steer-wheels/` — Steers (6, parent of Offset + Bud)
- `/wheels/offset-wheels/` — Offset Steers (3), also known as 9 inch offsets
- `/wheels/bud-steers/` — Bud Steers (3), also known as 9 inch buds
- `/wheels/super-single-wheels/` — Super Single Wheels (6)

**Fitment**

- `/wheels/fitment/euro-jap/` (11)
- `/wheels/fitment/us/` (7)
- `/wheels/fitment/trailer/` (10)
- `/wheels/fitment/volvo/` (1)

Fitment is a secondary navigation layer only. It does not change product categorisation:
every product keeps its wheel type parent, tags and breadcrumb hierarchy.

Each page carries a collapsible **SEO spec** panel showing the proposed title tag,
meta description, H1, canonical and target keyword.

## Notes on the structure

- **Trailer** was removed as a wheel type because it overlapped with the Trailer fitment.
  Four products that were Trailer-type only (Wide Plant/Drop Deck Trailer, Narrow Plant/Drop
  Deck Trailer, Heavy Haulage Trailer 6.75", Heavy Haulage Narrow Trailer 6") therefore appear
  on All Wheels and the Trailer fitment page only, and render without a wheel type tag.
- **Volvo** is a fitment tag, not a separate SKU. It reflects the stepped nut hole option on
  Euro Super Single, a stud hole variation on the same 10/335 wheel.
- Product data, imagery, sizes and PCDs are pulled from the live site.

## Running locally

No build step and no dependencies. Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes the repo root to
GitHub Pages.

One-time setup: in the repo, go to **Settings → Pages → Build and deployment** and set
**Source** to **GitHub Actions**.

Live URL once deployed: https://lilmonstersam.github.io/armoury-wheels-categories/

## Technical

- Single self-contained `index.html`, roughly 2.5 MB
- Agency FB Black embedded as a base64 woff2; Montserrat loaded from Google Fonts
- All product imagery embedded as base64 WebP, so the prototype does not depend on
  the live site staying up or unchanged
- `.nojekyll` present so GitHub Pages serves the files as-is

---

Prepared by Digilari for Armoury Group.
