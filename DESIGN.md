# Ember Coffee Roasters: Landing Page Spec

Open `design-mockup.svg` for the visual. Desktop is on the left, mobile on the right. This file covers what the image can't show.

## Sections, top to bottom
1. **Header/nav:** logo, links, "Subscribe" button. Hamburger under 900px.
2. **Hero:** headline, subtext, primary CTA, text link, rating line, photo.
3. **Featured in:** a strip of press logos (placeholder pills are fine).
4. **Why Ember:** 6 feature cards.
5. **How it works:** 3 numbered steps joined by a dashed line (vertical on mobile).
6. **Our roasts:** 4 product cards with image, tasting notes, price and an "Add" button.
7. **Pick your plan:** 3 pricing cards. The middle one is highlighted with a "Most popular" badge.
8. **Testimonials:** 3 quote cards on a dark band.
9. **FAQ:** accordion rows, first one open.
10. **Sign-up band:** headline, email input and button.
11. **Footer:** logo, 3 link columns, copyright.

Use semantic tags: `<header>`, `<nav>`, `<main>` with a `<section>` per block (each with its own heading), `<footer>`.

## Behavior
- **Breakpoint:** 900px. Build mobile first, then add a `min-width: 900px` media query.
- **Grids:** Features and plans use 3 columns, roasts use 4 columns. All collapse to 1 column on mobile, and roasts can scroll sideways or become 2 columns. Use `repeat`, `minmax` and `gap`, with no fixed card widths.
- **Nav:** a hamburger button toggles the links on mobile.
- **FAQ:** clicking a row opens or closes its answer. Try the `<details>` and `<summary>` elements first, then see what JS would add.
- **Plans:** the highlighted card uses the dark palette. The badge sits half over the card's top edge (think `position`).
- **Buttons and cards:** hover states, and the same keyboard focus outline everywhere.
- **Sign-up form:** a real `<form>` with a labelled `<input type="email">`.

## Content
Write real copy, not lorem ipsum. Use Unsplash coffee photos for the hero and the 4 roast cards. Add `alt` text to every image.

## Palette
| Token | Value |
|---|---|
| --cream | #faf6f0 |
| --espresso | #2b1d14 |
| --ember | #d9531e |
| --tan | #e8dccb |
| --tan-light | #f3ebde |
| --muted | #6b5a4c |

Alternate section backgrounds (cream, tan, white, dark) to give the page rhythm.

## Checklist
- [ ] Semantic tags, one `<h1>`, headings in order
- [ ] Grid for the card sections, flexbox for the nav
- [ ] No horizontal scrolling at 320px
- [ ] Hamburger menu works, and its button has an `aria-label`
- [ ] FAQ works with the keyboard
- [ ] Looks right at 320px, 768px and 1440px
- [ ] Colors defined as custom properties
- [ ] Lighthouse accessibility score of 90 or higher

## Build order (tip for such a big page)
Nav and hero first, then one section at a time, mobile first. Commit to Git after each section, so your history shows how you work.

## Stretch
Sticky nav, smooth scrolling between sections, scroll-reveal animations, a cart count in the nav. When it's done, deploy it to GitHub Pages or Netlify and add it to your portfolio.
