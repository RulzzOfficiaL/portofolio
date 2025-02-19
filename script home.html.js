
const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const sidebar = document.getElementById('sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-link');


function toggleSidebar() {
  sidebar.classList.toggle('open');
}
/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah

*/
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});
/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah

*/
menuButton.addEventListener('click', toggleSidebar);
closeButton.addEventListener('click', toggleSidebar);

document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !menuButton.contains(e.target) && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }
});
/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah

*/
const observerOptions = {
  threshold: 0.1
};
/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah

*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah

*/
document.querySelectorAll('.skill-card, .testimonial-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  observer.observe(el);
});
/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah

*/
function initializeSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
}
/*

Credate By: Fauzialifatah
Follow me: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z
Youtube: https://www.youtube.com/@Fauzialifatah

*/
document.addEventListener('DOMContentLoaded', () => {
  initializeSkillBars();
});