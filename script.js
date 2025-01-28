// Initialize Lucide icons
lucide.createIcons();

// Skills data
const skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'UI/UX Design', 'MS Office', 'Excel'];

// Populate skills grid
const skillsGrid = document.getElementById('skillsGrid');
skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.innerHTML = `<p>${skill}</p>`;
    skillsGrid.appendChild(skillCard);
});