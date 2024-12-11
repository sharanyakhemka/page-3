const form = document.getElementById('letterForm');
const letterContent = document.getElementById('letterContent');
const recipientEmail = document.getElementById('recipientEmail');
const preview = document.getElementById('preview');

// Update preview dynamically
letterContent.addEventListener('input', () => {
    const letterText = letterContent.value.trim();
    preview.innerHTML = `<p class="letter-text">${letterText || "Your letter will look like this..."}</p>`;
});

// Form submission handler
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const letter = letterContent.value.trim();
    const email = recipientEmail.value.trim();

    if (!letter || !email) {
        alert('Please fill out both the letter and recipient email.');
        return;
    }

    // Save the letter to localStorage
    const letters = JSON.parse(localStorage.getItem('letters')) || [];
    letters.push(letter);
    localStorage.setItem('letters', JSON.stringify(letters));

    // Display confirmation
    alert(`Your anonymous letter has been sent to ${email}!`);

    // Reset form
    letterContent.value = '';
    recipientEmail.value = '';
    preview.innerHTML = `<p class="letter-text">Your letter will look like this...</p>`;
});
