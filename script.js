// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Popup Functionality
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupImage = document.getElementById('popup-image');
const closePopup = document.getElementById('close-popup');

document.querySelectorAll('.certificate-link, .internship-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        popupTitle.textContent = link.dataset.name || link.dataset.title;
        popupDescription.textContent = link.dataset.description;
        popupImage.src = link.dataset.image || '';
        popup.classList.remove('hidden');
    });
});

closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Skill Bar Animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const value = bar.getAttribute('data-skill');
        if (bar.getBoundingClientRect().top < window.innerHeight) {
            bar.style.width = `${value}%`;
        }
    });
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
