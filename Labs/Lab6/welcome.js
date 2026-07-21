var query = location.search.substring(1);

var data = query.split("&");

var user = {};

for (var i = 0; i < data.length; i++) {
    user[data[i].split("=")[0]] =
    data[i].split("=")[1];
}

var content = document.getElementById("content");

if (content) {

    var title;

    if (user.gender.toLowerCase() === "male") {
        title = "Mr.";
    } 
    else {
        title = "Ms.";
    }

    var chrome = "";

    if (!navigator.userAgent.includes("Chrome")) {
        chrome =
            "<h3 style='color:red'>We recommend using Google Chrome.</h3>";
    }

    var x = user.email.split("%40")[0]; 
    var y = user.email.split("%40")[1]; 
    
    content.innerHTML =
        "<h1>Welcome " + title + " " + user.name + "</h1>" +
        "<h2>Information</h2>" +
        "<p><b>Job Title:</b> " + user.job_title + "</p>" +
        "<p><b>Email:</b> " + x + "@" + y + "</p>" +
        "<p><b>Mobile:</b> " + user.mobile + "</p>" +
        "<p><b>Gender:</b> " + user.gender + "</p>" +
        "<p><b>Address:</b> " + user.address + "</p>" +
        chrome;
}