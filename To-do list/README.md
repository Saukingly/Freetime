# Sauki To-do List

A cartoon-styled to-do list website built with plain HTML, CSS, and JavaScript. No frameworks and no build tools. It's a practice project and still a work in progress.

## Current features

- **Cartoon look:** bright colours, thick outlines, offset shadows, and a full-screen illustrated background. Every colour is a CSS variable, so the theme is easy to change.
- **Shared navigation bar:** the navbar is written once in `nav.js` and appears on every page. It stays at the top while you scroll, and the buttons bounce and tilt on hover.
- **Clickable task cards:** on the home page, each paragraph is a pastel card with a round checkmark badge. Click a card to remove its checkmark, and click again to bring it back.
- **Four pages:** Home, New list, View List, and About.

## Project status

| Page | File | Status |
| --- | --- | --- |
| Home | `index.html` | Done: landing page with intro text and clickable cards |
| New list | `new-list.html` | Placeholder (navbar only) |
| View List | `view-list.html` | Placeholder (navbar only) |
| About | `about.html` | Placeholder (navbar only) |

## Planned

- A form to create a new list and add tasks to it
- Storing the to-do list data in a file on the local machine, with read and write support (create, read, update, and delete tasks) so lists are still there after a refresh
- A View List page that shows saved lists
- About page content with a guide to every feature

## Project structure

```
To-do list/
├── pages/
│   ├── index.html          Home page
│   ├── new-list.html       New list page
│   ├── view-list.html      View list page
│   └── about.html          About page
├── styles/
│   └── styles.css          All styling for every page
├── js/
│   ├── nav.js              Shared navbar, loaded on every page
│   └── script.js           Checkmark toggle on the task cards
├── images/
│   └── background-cartoon.png   Page background image
└── README.md
```

All the HTML pages live in `pages/`, so they load the other folders with `../` (go up one folder), for example `../styles/styles.css`. The background image is referenced from `styles/styles.css` as `../images/background-cartoon.png`.

## Running it locally

1. Download or clone the project.
2. Open `pages/index.html` in your browser, or serve the folder with a tool like VS Code Live Server or `npx serve`.

No install step is needed.

## How it works

### Shared navbar

Every page has two things:

```html
<script src="../js/nav.js" defer></script>   <!-- in <head> -->
<nav id="site-nav"></nav>              <!-- in <body> -->
```

`js/nav.js` builds the four links from the `NAV_LINKS` list at the top of the file and puts them inside the empty `<nav>`. To add, rename, or remove a link, edit `NAV_LINKS` once and every page updates. The script also compares each link to the current page's filename and adds `aria-current="page"` to the matching link, which CSS can use for styling.

### Checkmark toggle

Each `<p>` inside `<main>` shows its checkmark badge using the CSS `::before` pseudo-element. When a card is clicked, `js/script.js` toggles the `unchecked` class on it, and the rule `main p.unchecked::before` empties the badge and turns it white.

### Changing the theme

The colour palette lives at the top of `styles/styles.css`:

```css
:root {
    --ink: #2d1e5a;
    --yellow: #ffe050;
    --pink: #ff96be;
    --green: #5adc96;
    --blue: #5ac8ff;
    --orange: #ff8264;
    --purple: #b99cff;
}
```

Change a value there and it updates everywhere it's used.

## Built with

- HTML5
- CSS3: custom properties, flexbox, pseudo-elements, transitions
- Vanilla JavaScript: DOM selection, `classList`, template literals