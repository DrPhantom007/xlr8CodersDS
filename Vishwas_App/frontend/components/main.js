document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loanForm');
  const responseDiv = document.getElementById('response');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    try {
      const res = await fetch('http://localhost:3000/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, amount })
      });

      const data = await res.json();
      responseDiv.textContent = data.message || 'Application submitted successfully.';
      form.reset();
    } catch (error) {
      responseDiv.textContent = 'Error submitting application. Please try again.';
      console.error(error);
    }
  });
});
