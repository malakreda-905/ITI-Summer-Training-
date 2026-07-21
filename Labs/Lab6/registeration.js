var form = document.getElementById("reg");

form.onsubmit = function () {
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var password = form.password.value;
    var mobile = form.mobile.value.trim();
    var jobTitle = form.job_title.value.trim();
    var address = form.address.value.trim();

    var nameReg = /^[A-Za-z\s]{3,}$/;
    var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mobileReg = /^01[0125][0-9]{8}$/;
    var passwordReg = /^.{8,}$/;

    if (!nameReg.test(name)) {
        alert("Please enter a valid name.");
        form.reset(); 
        return false;
    }

    if (!emailReg.test(email)) {
        alert("Please enter a valid email.");
        form.reset(); 
        return false;
    }

    if (!mobileReg.test(mobile)) {
        alert("Please enter a valid mobile number.");
        form.reset();
        return false;
    }

    if (!passwordReg.test(password)) {
        alert("Password must be at least 8 characters.");
        form.reset();
        return false;
    }

    if (jobTitle.length < 2) {
        alert("Please enter a valid job title.");
        form.reset();
        return false;
    }

    if (address.length < 5) {
        alert("Please enter a valid address.");
        form.reset();
        return false;
    }

    return true;
};