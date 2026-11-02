const NAV_LINKS = [
    { label: "Home", href: "index.html" },
    { label: "New list", href: "new-list.html" },
    { label: "View List", href: "view-list.html" },
    { label: "About", href: "about.html" },
];

const currentPage = location.pathname.split("/").pop() || "index.html";

const navHtml = NAV_LINKS.map(({ label, href }) => {
    const current = href === currentPage ? ' aria-current="page"' : "";
    return `<a class="navbar-btns" href="${href}"${current}>${label}</a>`;
}).join("");

const siteNav = document.getElementById("site-nav");
if (siteNav) {
    siteNav.innerHTML = `<div id="navbar">${navHtml}</div>`;
}