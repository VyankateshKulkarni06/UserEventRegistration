document.querySelector('form').addEventListener('submit', (e) => {
    const form = e.target;

    if (!form.checkValidity()) 
    {
        e.preventDefault();
        alert('Please fill details correctly!');
    } 
    else 
    {
        e.preventDefault();
        alert('User registered successfully!');
    }

    form.classList.add('was-validated');
});
