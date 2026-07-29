async function getData() {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await res.json();

        const tbody = document.querySelector("#table tbody");

        for (let i = 0; i < users.length; i++) {
            let r = document.createElement("tr");

            r.innerHTML = `
                <td>${users[i].id}</td>
                <td>${users[i].name}</td>
                <td>${users[i].username}</td>
                <td>${users[i].email}</td>
            `;
            tbody.appendChild(r);
        }
    } catch (err) {
        console.log(err);
    }
}

getData();