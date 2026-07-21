window.onload = function () {

    var form = document.getElementById("reg");

    form.onsubmit = function () {

        var name = form.name.value.trim();
        var email = form.email.value.trim();
        var password = form.password.value;
        var mobile = form.mobile.value.trim();
        var jobTitle = form.job_title.value.trim();
        var address = form.address.value.trim();

        // Name: letters and spaces only
        var nameRegex = /^[A-Za-z\s]{3,}$/;

        // Email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Egyptian mobile number
        var mobileRegex = /^01[0125][0-9]{8}$/;

        // Password: at least 8 chars
        var passwordRegex = /^.{8,}$/;

        if (!nameRegex.test(name)) {
            alert("Please enter a valid name.");
            return false;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email.");
            return false;
        }

        if (!mobileRegex.test(mobile)) {
            alert("Please enter a valid Egyptian mobile number.");
            return false;
        }

        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters.");
            return false;
        }

        if (jobTitle.length < 2) {
            alert("Please enter a valid job title.");
            return false;
        }

        if (address.length < 5) {
            alert("Please enter a valid address.");
            return false;
        }

        return true;
    };
};