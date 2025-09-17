document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item h3");

    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            // Toggle the 'active' class on the parent .faq-item
            this.parentNode.classList.toggle("active");
        });
    });
});


