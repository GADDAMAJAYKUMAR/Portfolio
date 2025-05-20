// JavaScript for Tab Switching in About Section
function opentab(tabname) {
    const tabLinks = document.getElementsByClassName("tab-links");
    const tabContents = document.getElementsByClassName("tab-content");

    for (let link of tabLinks) {
        link.classList.remove("active-link");
    }

    for (let content of tabContents) {
        content.classList.remove("active-tab");
    }

    document.getElementById(tabname).classList.add("active-tab");

    for (let link of tabLinks) {
        if (link.textContent.trim().toLowerCase() === tabname.toLowerCase()) {
            link.classList.add("active-link");
        }
    }
}
