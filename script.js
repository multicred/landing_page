"use strict";

/* ==========================================================
   MULTICRED LANDING PAGE
   script.js
   ========================================================== */

/* ==========================================================
   ALTERAR LINK DO WHATSAPP
   (O link principal está no index.html)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       ELEMENTOS
    ========================================== */

    const header = document.querySelector(".header");
    const floatingButton = document.querySelector(".floating-whatsapp");
    const simulateButton = document.querySelector(".simulate-btn");

    const animatedElements = document.querySelectorAll(
        ".card, .hero-photo, .modalidades, .simulate-btn"
    );

    /* ==========================================
       ANIMAÇÃO DE ENTRADA
    ========================================== */

    animatedElements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(24px)";

        setTimeout(() => {

            element.style.transition =
                "opacity .6s ease, transform .6s ease";

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }, index * 120);

    });

    /* ==========================================
       HEADER AO ROLAR
    ========================================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 10) {

            header.classList.add("header-scroll");

        } else {

            header.classList.remove("header-scroll");

        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();

    /* ==========================================
       BOTÃO WHATSAPP
    ========================================== */

    if (floatingButton) {

        floatingButton.setAttribute(
            "aria-label",
            "Fale conosco pelo WhatsApp"
        );

    }

    if (simulateButton) {

        simulateButton.setAttribute(
            "aria-label",
            "Simule agora pelo WhatsApp"
        );

    }

    /* ==========================================
       EFEITO PULSE NO BOTÃO FLUTUANTE
    ========================================== */

    setInterval(() => {

        if (!floatingButton) return;

        floatingButton.classList.add("pulse");

        setTimeout(() => {

            floatingButton.classList.remove("pulse");

        }, 700);

    }, 4000);

    /* ==========================================
       HOVER MOBILE
    ========================================== */

    const buttons = document.querySelectorAll(
        ".simulate-btn, .floating-whatsapp"
    );

    buttons.forEach(button => {

        button.addEventListener("touchstart", () => {

            button.classList.add("touch");

        }, { passive: true });

        button.addEventListener("touchend", () => {

            setTimeout(() => {

                button.classList.remove("touch");

            }, 180);

        });

    });

    /* ==========================================
       REVEAL AO SCROLL
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".card, .photo-section"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });

});

/* ==========================================================
   CLASSES AUXILIARES
========================================================== */

document.documentElement.classList.add("js-enabled");
