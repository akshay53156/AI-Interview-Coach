function navigate(page) {
    if (page === 'resume-builder') {
        window.location.href = 'resume_builder.html';
    } else if (page === 'login') {
        window.location.href = 'login.html';
    } else if (page === 'signup') {
        window.location.href = 'signup.html';
    }
}

function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;

    const preview = document.getElementById('resume-preview');
    preview.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Skills: ${skills.replace(/\n/g, '<br>')}</p>
    `;
}

function downloadPDF() {
    const element = document.getElementById('resume-preview');
    const opt = {
        margin: 1,
        filename: 'resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
}

async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
        alert('Login successful');
        localStorage.setItem('token', data.token); // Save token for future requests
    } else {
        alert(`Error: ${data.error}`);
    }
}

async function signup() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    if (response.ok) {
        alert('Signup successful');
    } else {
        alert(`Error: ${data.error}`);
    }
}
