
const gallerySlider = document.querySelector('.gallery-slider');
if (gallerySlider) {
    let scrollAmount = 0;
    setInterval(() => {
        scrollAmount += 300;
        if (scrollAmount >= gallerySlider.scrollWidth) scrollAmount = 0;
        gallerySlider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 3000);
}


document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });

  
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            productCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

   
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const license = document.getElementById('license-verify').checked;
            if (!license) {
                alert('Please verify your weapon license to log in.');
                return;
            }
            alert('Logged in successfully!');
          
            window.location.href = 'index.html';
        });
    }

   
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const license = document.getElementById('signup-license-verify').checked;
            if (!license) {
                alert('Please verify your weapon license to sign up.');
                return;
            }
            alert('Signed up successfully!');
          
            window.location.href = 'login.html';
        });
    }
});