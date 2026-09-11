# Armoury Wheels Category Pages

Clickable mockup of the proposed **Armoury Wheels** category page structure, built for Armoury Group review.

**Option A: with fitment sections**

## What this is

A prototype of the proposed URL and navigation restructure for
[armourygroup.com.au/wheels](https://armourygroup.com.au/wheels/). It replaces the current
Elementor filter query strings (`/wheels/?e-filter-23a817f-pa_wheel=drive`) with real,
indexable category pages.

These pages are built from a **duplicate of the live page's own source code and stylesheets**,
so the branding, typography and layout are the site's own rather than a reconstruction.

Two versions exist so the team compares one variable only:

| Version | Repo | Difference |
|---|---|---|
| A: fitment sections | [armoury-wheels-categories](https://github.com/Lilmonstersam/armoury-wheels-categories) | Grid split into Euro/Jap, US, Trailer and Volvo sections |
| B: tags on cards | [armoury-wheels-categories-v2](https://github.com/Lilmonstersam/armoury-wheels-categories-v2) | Single grid, fitment shown as a tag on each card |

**This repo is Option A.** Each category page groups its products under Euro/Jap, US, Trailer and Volvo headings, and every section links through to its fitment page.

## Pages

| Page | File | Products |
|---|---|---|
| All Wheels (parent) | `index.html` | 25 |
| Drive Wheels | `drive-wheels.html` | 9 |
| Steers | `steer-wheels.html` | 6 |
| Offset Steers | `offset-wheels.html` | 3 |
| Bud Steers | `bud-steers.html` | 3 |
| Super Single Wheels | `super-single-wheels.html` | 6 |
| Euro/Jap fitment | `fitment-euro-jap.html` | 11 |
| US fitment | `fitment-us.html` | 7 |
| Trailer fitment | `fitment-trailer.html` | 10 |
| Volvo fitment | `fitment-volvo.html` | 1 |
| Classic Super Single (product) | `classic-super-single.html` | - |

Use the **Wheel Type** and **Wheel Fitment** bars to move between pages. Both stay pinned
to the top as you scroll. Each page has a collapsible **SEO spec** panel showing the proposed
title tag, meta description, H1, canonical and target keyword.

## Product page

`classic-super-single.html` is the **Classic Super Single** product page, duplicated from the live
product source and dropped into the same structure. It is reachable from the Classic Super Single
card on All Wheels, Super Single Wheels and the US fitment page.

It carries the same navigation components as the category pages, plus two conversion changes:

- **Breadcrumbs, attribute tags and the SEO spec panel.** Home / Wheels / Super Single / Classic
  Super Single, with the wheel type and fitment tags linking back to their pages, so the product
  sits inside the taxonomy rather than hanging off it.
- **Persistent add bar.** The Specifications table is the only place on the page a buyer can act,
  and it leaves the viewport early. A bar appears once that table has scrolled past and stays
  anchored to the bottom of the window: finish picker (all three variants, selectable without
  scrolling back), size and PCD, order number, and Add to Cart. The button forwards the click to
  the matching table row rather than duplicating the cart logic. On mobile the finish takes its own
  line above the order number and the button.
- **Enquiry form replaced with a contact CTA.** The ten-field form at the foot of the page competed
  with the add-to-quote path above it. The section now closes with one ask: Contact us, Download
  Brochures, and the phone and email.

The page's own saved assets sit in the shared `assets/` folder. The handful whose bytes differ from
the copies the category pages already use (theme, reset, header CSS from another save date) are in
`assets/product/`, so the existing pages are untouched.

Rebuild with `python3 ../build-product-page.py` (one level up, outside both repos); it writes the
page into both and rewires the inbound links.

## Treat this as a wireframe

The structure is what is being approved here: the URLs, the categories, how products are
grouped and how someone navigates between them. When this is built it will sit inside the
existing Elementor theme and inherit the live site's styles exactly.

## Structural notes

- **Trailer** was removed as a wheel type because it duplicated the Trailer fitment. Four
  products were Trailer-type only (Wide Plant/Drop Deck Trailer, Narrow Plant/Drop Deck
  Trailer, Heavy Haulage Trailer 6.75", Heavy Haulage Narrow Trailer 6"). They appear on
  All Wheels and the Trailer fitment page only, and render without a wheel type tag.
- **Steers** is a parent of Offset Steers and Bud Steers. As tagged on the live site today the
  Steer filter returns the same three products as Offset Steer, so the client needs to add the
  Bud Steer products to the Steer tag for this to work as shown.
- **Volvo** is a fitment tag, not a separate SKU. It reflects the stepped nut hole option on
  Euro Super Single, a stud hole variation on the same 10/335 wheel.
- Fitment is a secondary navigation layer. It does not change categorisation: every product
  keeps its wheel type parent, tags and breadcrumb hierarchy.

## Running locally

No build step, no dependencies:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which publishes the repo root to
GitHub Pages.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Live URL: https://lilmonstersam.github.io/armoury-wheels-categories/

## Technical

- Eleven static HTML pages sharing one `assets/` folder (the live site's own CSS, images and fonts)
- Agency FB Black is served from `assets/` rather than the live domain, so it renders without
  a cross-origin font request
- `.nojekyll` is present so Pages serves the files as-is

---

Prepared by Digilari for Armoury Group.
