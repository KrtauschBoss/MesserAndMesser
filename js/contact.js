const form = document.getElementById('form');
    const submitBtn = form.querySelector('button[type="submit"]');
    const formBlock = document.querySelector('.contact-form');
    const successMsg = document.getElementById('success-msg');
    

    window.onload = function() {
        // Reset the form fields when the page loads
        form.reset();
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        

        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                formBlock.style.display = "none";
                successMsg.style.display = "block";
                successMsg.scrollIntoView({ behavior: 'smooth' });
                form.reset();
            }

        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });