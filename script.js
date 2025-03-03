document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
    });
        const starIcons = document.querySelectorAll('.project-actions img[alt="Star"]');
    
    starIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.style.filter = 'none';
            } else {
                this.classList.add('active');
                this.style.filter = 'invert(69%) sepia(71%) saturate(1018%) hue-rotate(358deg) brightness(103%) contrast(104%)';  // Yellow color
            }
        });
    });
    const searchInput = document.querySelector('.search-bar input');
    
    searchInput.addEventListener('keyup', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const title = card.querySelector('h4').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    const bellIcon = document.querySelector('.user-actions img[alt="Notifications"]');
    
    bellIcon.addEventListener('click', function() {
        this.style.transform = 'rotate(15deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(-15deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0)';
            }, 150);
        }, 150);
    });
});