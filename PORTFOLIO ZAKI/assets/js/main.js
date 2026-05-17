// ===== PARTICLES SYSTEM =====
        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        const PARTICLE_COUNT = 60;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.color = ['#0ea5e9', '#0ea5e9', '#38bdf8', '#0284c7', '#10b981', '#f59e0b'][Math.floor(Math.random() * 6)];
                this.opacity = Math.random() * 0.5 + 0.2;
                this.shadowBlur = Math.random() * 15 + 5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.shadowBlur = this.shadowBlur;
                ctx.shadowColor = this.color;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }
        animateParticles();

        // ===== CURSOR GLOW =====
        const cursorGlow = document.querySelector('.cursor-glow');
        const cursorDot = document.querySelector('.cursor-dot');
        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        function animateCursor() {
            glowX += (mouseX - glowX) * 0.1;
            glowY += (mouseY - glowY) * 0.1;
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // ===== MAGNETIC BUTTONS =====
        const magneticElements = document.querySelectorAll('.magnetic-btn, .magnetic-target');
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0) scale(1)';
            });
        });

        // ===== THEME TOGGLE =====
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.setAttribute('data-theme', savedTheme);
        themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';

        themeToggle.addEventListener('click', () => {
            const current = document.body.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            themeIcon.className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        });

        // ===== LANGUAGE TOGGLE =====
        const langToggle = document.getElementById('langToggle');
        const langText = document.getElementById('langText');
        const savedLang = localStorage.getItem('lang') || 'fr';
        document.body.setAttribute('data-lang', savedLang);
        langText.textContent = savedLang.toUpperCase();
        updateLanguage(savedLang);

        langToggle.addEventListener('click', () => {
            const current = document.body.getAttribute('data-lang');
            const next = current === 'fr' ? 'en' : 'fr';
            document.body.setAttribute('data-lang', next);
            localStorage.setItem('lang', next);
            langText.textContent = next.toUpperCase();
            updateLanguage(next);
        });

        function updateLanguage(lang) {
            document.querySelectorAll('[data-fr][data-en]').forEach(el => {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = el.getAttribute('data-' + lang);
                } else {
                    el.textContent = el.getAttribute('data-' + lang);
                }
            });
        }

        // ===== GSAP SCROLL ANIMATIONS =====
        gsap.registerPlugin(ScrollTrigger);

        // Hero entrance
        gsap.from('.hero-content > *', {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.3
        });

        gsap.from('.photo-container', {
            scale: 0.5,
            opacity: 0,
            duration: 1.2,
            ease: 'back.out(1.7)',
            delay: 0.5
        });

        // Timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, i) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleClass: 'visible',
                    once: true
                }
            });
        });

        // Skill cards
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, i) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleClass: 'visible',
                    once: true
                },
                delay: i * 0.1
            });
        });

        // Item cards
        const itemCards = document.querySelectorAll('.item-card');
        itemCards.forEach((card, i) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleClass: 'visible',
                    once: true
                },
                delay: i * 0.05
            });
        });

        // Edu cards
        const eduCards = document.querySelectorAll('.edu-card');
        eduCards.forEach((card, i) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleClass: 'visible',
                    once: true
                },
                delay: i * 0.15
            });
        });

        // Section titles
        document.querySelectorAll('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 90%',
                    once: true
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        });

        // ===== PARALLAX PHOTO =====
        const parallaxPhoto = document.getElementById('parallaxPhoto');
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            if (parallaxPhoto && window.innerWidth > 900) {
                parallaxPhoto.style.transform = `translateY(${rate}px)`;
            }
        });

        // ===== SMOOTH SCROLL FOR NAV =====
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // ===== NAVBAR SCROLL EFFECT =====
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                navbar.style.padding = '0.8rem 2rem';
                navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
            } else {
                navbar.style.padding = '1rem 2rem';
                navbar.style.boxShadow = 'none';
            }
            lastScroll = currentScroll;
        });

