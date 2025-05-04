// Utility function to handle load more behavior
function setupLoadMore(sectionClass, itemClass, buttonId) {
    const items = document.querySelectorAll(`.${sectionClass} .${itemClass}`);
    const button = document.getElementById(buttonId);
    let current = 4;

    // Hide items after the first 4
    items.forEach((item, index) => {
        if (index >= current) item.style.display = 'none';
    });

    if (button) {
        button.addEventListener('click', () => {
            for (let i = current; i < current + 4 && i < items.length; i++) {
                items[i].style.display = 'flex'; // For blog posts
            }
            current += 4;
            if (current >= items.length) button.style.display = 'none';
        });
    }
}

// Call the function for blog posts and survey results
document.addEventListener("DOMContentLoaded", () => {
    setupLoadMore('blog-posts', 'post', 'loadMorePosts');
    setupLoadMore('survey-results', 'result-item', 'loadMoreResults');
});
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');  // toggle visibility
    document.body.classList.toggle('nav-open');  // for hiding banner
  }
  