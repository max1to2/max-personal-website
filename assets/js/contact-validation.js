// Basic client-side validation
(function () {
        function validateForm(event) {
                const form = event.target;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                // Validate email format
                const email = form.email.value.trim();
                if (!emailRegex.test(email)) {
                        alert("Please enter a valid email address.");
                        event.preventDefault();
                        return false;
                }

                // Validate other fields
                if (!form.name.value.trim()) {
                        alert("Name is required.");
                        event.preventDefault();
                        return false;
                }

                if (!form.message.value.trim()) {
                        alert("Message is required.");
                        event.preventDefault();
                        return false;
                }

                return true;
        }

        document.addEventListener("DOMContentLoaded", function () {
                const contactForm = document.querySelector('#contact form');
                if (contactForm) {
                        contactForm.addEventListener('submit', validateForm);
                }
        });
})();
