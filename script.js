const form = document.getElementById('regForm');
const fullName = document.getElementById('fullName');
const studentId = document.getElementById('studentId');
const programme = document.getElementById('programme');
const terms = document.getElementById('terms');
const message = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');

function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    message.className = 'message';
    message.textContent = '';
}

function validate() {
    clearErrors();
    let valid = true;

    // name
    if (fullName.value.trim().length < 2) {
        document.getElementById('nameError').textContent = 'Enter your full name (min 2 characters).';
        valid = false;
    }

    // student ID
    if (!/^\d{6,12}$/.test(studentId.value.trim())) {
        document.getElementById('idError').textContent = 'Student ID must be 6–12 digits.';
        valid = false;
    }

    // programme
    if (programme.value === '') {
        document.getElementById('programmeError').textContent = 'Please select a programme.';
        valid = false;
    }

    // course
    const course = document.querySelector('input[name="course"]:checked');
    if (!course) {
        document.getElementById('courseError').textContent = 'Please select a course.';
        valid = false;
    }

    // terms
    if (!terms.checked) {
        document.getElementById('termsError').textContent = 'You must agree to the terms.';
        valid = false;
    }

    return valid;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validate()) {
        message.className = 'message error';
        message.textContent = 'Please fix the errors above.';
        return;
    }

    const course = document.querySelector('input[name="course"]:checked').value;

    message.className = 'message success';
    message.textContent = `✅ Registered: ${fullName.value.trim()} (${studentId.value.trim()}) — ${programme.value} · ${course}`;
});

resetBtn.addEventListener('click', function () {
    form.reset();
    clearErrors();
    fullName.focus();
});