function getInfo()
{
    fetch("/clients")
    .then(response => response.json())
    .then(data => {
        let html = `
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
        `;
        data.forEach(client => {
            html += `
                <tr>
                    <td>${client.name}</td>
                    <td>${client.mobile}</td>
                    <td>${client.email}</td>
                    <td>${client.address}</td>
                </tr>
            `;
        });
        html += "</table>";
        document.getElementById("clients").innerHTML = html;
    });
}