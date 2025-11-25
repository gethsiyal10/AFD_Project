document.addEventListener("DOMContentLoaded", function () {

    /* ------------------------------
        1. Sticky Navbar on Scroll
    ------------------------------ */
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 40) {
            navbar.classList.add("sticky-top");
        } else {
            navbar.classList.remove("sticky-top");
        }
    });


    /* ------------------------------
        2. Dropdown on Hover (only for desktop > 992px)
    ------------------------------ */
    function handleDropdownHover() {
        const dropdowns = document.querySelectorAll(".navbar .dropdown");

        if (window.innerWidth > 992) {
            dropdowns.forEach(drop => {
                drop.addEventListener("mouseover", () => {
                    drop.querySelector(".dropdown-toggle").click();
                });

                drop.addEventListener("mouseout", () => {
                    drop.querySelector(".dropdown-toggle").click();
                });
            });
        } else {
            dropdowns.forEach(drop => {
                drop.replaceWith(drop.cloneNode(true)); // Remove hover events
            });
        }
    }

    handleDropdownHover();
    window.addEventListener("resize", handleDropdownHover);



    

    /* ------------------------------
        3. Back to Top Button
    ------------------------------ */
    const backTop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            backTop.style.display = "block";
        } else {
            backTop.style.display = "none";
        }
    });

    backTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });




    /* ---------------------------------------------------
        4. Simple Carousel (Replaces OwlCarousel)
        — Works for: .product-carousel, .team-carousel,
                     .testimonial-carousel
    ---------------------------------------------------- */
    function simpleCarousel(className, itemsToShow) {
        const carousel = document.querySelector(className);
        if (!carousel) return;

        const items = carousel.children;
        let index = 0;

        function showSlide() {
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = "none";
            }
            items[index].style.display = "block";
        }

        showSlide();

        setInterval(() => {
            index = (index + 1) % items.length;
            showSlide();
        }, 3000);
    }

    simpleCarousel(".product-carousel", 1);
    simpleCarousel(".team-carousel", 1);
    simpleCarousel(".testimonial-carousel", 1);

});




  /* ------------------------------
        5. Product POP_UP
    ------------------------------ */

function showCartPopup() {
    let popup = document.getElementById("popupCart");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 1500);
}

function showWishPopup() {
    let popup = document.getElementById("popupWish");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 1500);
}



  /* ------------------------------
        6. Contact Form
    ------------------------------ */

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual form submission

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    // Simple validation
    if (!name || !email || !subject || !message) {
        formMessage.innerHTML = '<div class="alert alert-danger">Please fill in all fields!</div>';
        return;
    }

    // If all fields filled
    formMessage.innerHTML = '<div class="alert alert-success">Your message has been sent successfully!</div>';

    // Clear form fields
    document.getElementById("contactForm").reset();
});











