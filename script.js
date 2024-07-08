document.addEventListener('DOMContentLoaded', function() {
    const gifts = document.querySelectorAll('.gift');

    gifts.forEach(gift => {
        gift.addEventListener('click', function() {
            const isActive = this.classList.toggle('active');
            if (isActive) {
                // Pix
                this.querySelector('.pix-container').style.display = 'block';
                this.querySelector('.gift-container').style.display = 'none';
            } else {
                // Gift
                this.querySelector('.gift-container').style.display = 'block';
                this.querySelector('.pix-container').style.display = 'none';
            }
        });
    });

});
