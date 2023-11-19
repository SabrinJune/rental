function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username.trim() === '') {
        alert('Username is required');
        return false;
    }

    if (email.trim() === '' || !validateEmail(email)) {
       alert('Please enter a valid email address');
        return false;
    }


    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
        
    } else {
       
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return false;
        }

    return true;
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
}