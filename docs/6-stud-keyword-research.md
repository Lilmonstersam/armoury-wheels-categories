# Light Truck Drive/Steer 6 stud copy and keyword research

20 November 2026. Ahrefs Keywords Explorer and SERP Overview, Australia.

## Research findings

| Keyword | Monthly searches | Keyword difficulty |
| --- | ---: | ---: |
| light truck rims | 30 | Unavailable |
| 16 inch truck rims | 10 | Unavailable |
| 6 stud wheels | 70 | 0 |
| 6 stud rims | 90 | 0 |
| isuzu truck rims | 10 | Unavailable |
| japanese truck wheels | 20 | Unavailable |
| alloy truck rims | 70 | 0 |
| truck rims | 90 | 0 |
| isuzu npr wheels | 10 | Unavailable |
| isuzu truck wheels | 10 | Unavailable |
| isuzu alloy wheels | 10 | Unavailable |
| truck alloy wheels | 80 | 0 |

Ahrefs did not return an overview estimate for `6 stud truck wheels` or `6/222 truck wheels`; this does not mean zero demand. The brief's broad six-stud seed volumes are 70 and 90 respectively, confirmed by the API snapshot.

The returned organic results for `6 stud wheels` include general wheel retailers, a LandCruiser-pattern 6/139.7 wheel, six-stud mag-wheel pages and Armoury's existing 6/222 truck product (position 8 in that snapshot). This supports qualifying the copy with truck and 6/222. The qualified `6 stud truck wheels` SERP query returned no records; no ranking or traffic prediction is inferred from that empty response.

## Copy decisions

- H1: **6 Stud Truck Wheels**. Title: **6 Stud Truck Wheels | 16-Inch 6/222 | Armoury Wheels**.
- State 16 × 5.5 inches, 6/222 PCD, light-truck drive/steer and Japanese truck fitment in the opening content.
- Use truck alloy wheels, alloy truck rims, light truck rims and 16 inch truck rims in relevant product/fitment copy. Avoid a list of keyword variants in the customer flow.
- Cover Isuzu truck wheels and Isuzu NPR search intent through a fitment FAQ. The product source lists small Isuzu, Hino and Fuso trucks with 6/222 PCD, but does not confirm individual models or years. Ask for a complete vehicle/axle check rather than claiming universal NPR compatibility.
- Explain that stud count alone does not determine fitment; do not equate six-stud 4WD and 6/222 truck wheels.

## Product facts and imagery

Sources: the supplied saved category source (`AG Wheels sourcecode.html`) and the [official product page](https://armourygroup.com.au/product/light-truck-drive-steer-6-stud/), checked 20 November 2026. The saved category source provided the local outside render and product classification; the official HTML provided full specifications, the inside render, project gallery and variation IDs.

Verified source data is in `light-truck-6-stud-source.json`. Orderable finishes are ARA217-32 (ArmourBrite, variation 4299) and ARP217-32 (Polished, variation 4306), parent product 4275. Legend Chrome and Machined are excluded: they appear in the general finish artwork, not this product's two variant rows. Weight 8.6 kg comes from the official variation attributes; the visible table omits weight.

The inside render and the two project images were downloaded from this product's own official gallery. No Classic Super Single project photographs or specifications are reused. Related fitments are shown with their separate dimensions and PCDs.

## Mockup behaviour

The layout comes from the current `classic-super-single.html`: breadcrumbs/tags, static wheel gallery, finish swatches, project strip, full-width specs, trust content and closing enquiry. Added a fitment FAQ after the specifications.

The new page has `noindex, nofollow`. Its production canonical remains the current product URL. Product/WebPage/Breadcrumb structured data matches the new copy and official facts; no prices or ratings are invented. The SEO-spec disclosure records the mapping for review.

The persistent finish selector and Add to quote controls store selections locally using the existing mockup quote-cart key, with a local review dialog. They do not submit live cart requests. Brochure and contact links retain their live destinations; implemented category/product links stay local. The new route is available from matching cards and menu links across all 13 Wheels pages.

Rebuild with the bundled Python runtime and lxml: `python3 ../build-light-truck-product-page.py`. Only Option A is changed. Run this after rebuilding Classic Super Single; the shared trust updater also recognises the new product route.


## Validation

Checked at 1440, 768, 390 and 320 px: both gallery views, finish selection, quote additions for both part numbers, quote dialog close/persistence, keyboard FAQ operation and section overflow. Confirmed navigation from the Drive Wheels card and direct file:// opening. Metadata, structured JSON, local assets, 45 inbound links and stable regeneration also passed.

With remote requests blocked during browser testing, the saved WordPress/Elementor shell logs missing remote plugin chunks and a feature-detection error. The new product interactions work independently of those requests.
